const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');

module.exports.checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.TOKEN_SECRET, async (err, decocedToken) => {
            if (err) {
                res.locals.user = null;
                //le res.cookie permet de supprimer si le cookie de la personne
                res.cookies('jwt', '', { maxAge: 1 });
                next();
            } else {
                let user = await UserModel.findById(decocedToken.id);
                res.locals.user = user;
                console.log(res.locals.user);
                next();
            }

        })
    } else {
        res.locals.user = null;
        next();
    }
};


//middleware pour la premiere connexion
//pour voir si sa correspond a quelau'un qui est deja dans la db

module.exports.requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.TOKEN_SECRET, async (err, decocedToken) => {
            if (err) {
                console.log(err);
            } else {
                console.log(decocedToken.id);
                next();
            }
        });
    } else {
        console.log('No token');
    }
};