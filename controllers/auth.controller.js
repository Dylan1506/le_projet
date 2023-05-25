const UserModel = require('../models/user.model'); 
const jwt = require('jsonwebtoken');
const {signUpErrors,signInErrors}=require('../utils/errors.utils');

const maxAge = 3 * 24 * 60 * 60 * 1000;


const createToken = (id) => {
    return jwt.sign({ id }, process.env.TOKEN_SECRET, {
        expiresIn: maxAge
    });
};


//signup utilisateur simple
module.exports.signUp = async (req, res) => {
    console.log(req.body);
    const {
        nom,
        prenom,
        email,
        password,
        contact   
    } = req.body;
    try {
        //L'opérateur await permet d'attendre la résolution d'une promesse ( Promise ). Il ne peut être utilisé qu'au sein d'une fonction asynchrone
        const user = await UserModel.create({
            nom,
            prenom,
            email,
            password,
            contact         
            
        });
        res.status(201).json({ user: user._id });
    } catch (err) {
        const errors=signUpErrors(err);
        res.status(200).send({errors});
    }
};


//permet de signup un administrateur

module.exports.signUpAdmin = async (req, res) => {
    console.log(req.body);
    const {
        nom,
        prenom,
        email,
        password,
        contact   
    } = req.body;


    try {
        //L'opérateur await permet d'attendre la résolution d'une promesse ( Promise ). Il ne peut être utilisé qu'au sein d'une fonction asynchrone
        const user = await UserModel.create({
            nom,
            prenom,
            email,
            password,
            contact  
        });
        res.status(201).json({ user: user._id });
    } catch (err) {
      res.status(200).send({err});
    }
};



module.exports.signIn = async (req, res) => {
    const { email, password } = req.body;


    try {
        const user = await UserModel.login(email, password); //on va regarder dans la db si les deux champs existent
        const token = createToken(user._id); //et ici on va recuperer
        res.cookie('jwt', token, { httpOnly: true, maxAge });
        res.status(200).json({ user: user._id });
    } catch (err) {
        const errors=signInErrors(err);
        res.status(200).json({errors});
    }
};


//fonction pour se deconnecter

module.exports.logout = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
};


