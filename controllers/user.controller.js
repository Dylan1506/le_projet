const UserModel = require('../models/user.model');
const ObjectID = require('mongoose').Types.ObjectId;

//fonction pour afficher tous les utilisateurs
module.exports.getAllUsers = async (req, res) => {
    // *usermodel* pour acceder au champ et *find* pour aller trouver la bd et *select* pour selectionner
    const users = await UserModel.find().select('-password');
    res.status(200).json(users); //on transite la data en json
};

//fonction pour donner les infos d'un user a partir de son id
/*
module.exports.userInfo = (req, res) => {
    if (
        !ObjectID.isValid(req.params.id) //verifie que l'id correspond a un id de la DB
    )
        return res.status(400).send('ID inconnu : ' + req.params.id);

    // findById (id) est presque* équivalent à findOne({ _id: id })
    // . Si vous souhaitez interroger par le _id d'un document,

    UserModel.findById(req.params.id, (err, docs) => {
        if (!err) res.send(docs);
        else console.log('ID inconnu est  : ' + err);
    }).select('-password');
}; */

module.exports.userInfo = async (req, res) => {
	try {
		if (!ObjectID.isValid(req.params.id)) {
			return res.status(400).send('ID inconnu : ' + req.params.id);
		}

		const user = await UserModel.findById(req.params.id).select('-password');
		if (user) {
			res.send(user);
		} else {
			res.status(404).send('Utilisateur non trouvé');
		}
	} catch (err) {
		console.log('Erreur lors de la recherche de l\'utilisateur : ' + err);
		res.status(500).send('Une erreur s\'est produite lors de la recherche de l\'utilisateur');
	}
};



//fonction pour la mise a jour
 
module.exports.updateUser = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)) return res.status(400).send('ID unknown : ' + req.params.id);

    try {
        await UserModel.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    nom: req.body.nom,
                    prenom: req.body.prenom,
                    contact: req.body.contact,
                    adresse: req.body.adresse,
                    ville: req.body.ville,
                    
                }
            },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        )
            .then((data) => res.send(data))
            .catch((err) => res.status(500).send({ message: err }));
    } catch (err) {
        return res.status(500).json({ message: err });
    }
}; 

//fonction pour supprimer un utilisateur

module.exports.deleteUser = async (req, res) => {
    try {
      if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send('ID inconnu : ' + req.params.id);
      }
  
      await UserModel.deleteOne({ _id: req.params.id }); // Utilisez la méthode deleteOne pour supprimer l'utilisateur
  
      res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
    } catch (err) {
      console.log('Erreur lors de la suppression de l\'utilisateur : ' + err);
      res.status(500).json({ message: 'Une erreur s\'est produite lors de la suppression de l\'utilisateur' });
    }
  };