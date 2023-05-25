const EventModel= require("../models/event.model");
const UserModel=require("../models/user.model")
const ObjectID=require('mongoose').Types.ObjectId;

//pour creer un evenement
module.exports.createEvent=async(req, res)=>{
    
    const newEvent=new EventModel({
        posterId:req.body.posterId,
        message:req.body.message,
        video:req.body.video,
        comments:[],
        titre:req.body.titre,
        description:req.body.description,
        date_debut:req.body.date_debut,
        date_fin:req.body.date_fin,
        heure_debut:req.body.heure_debut,
        heure_fin:req.body.heure_fin,
        lieu:req.body.lieu,
        prix:req.body.prix

    });
    try{
        const event=await newEvent.save();
        return res.status(201).json(event);
    }catch(err){
        return res.status(400).send(err);
    }
};


//pour afficher tous les evenements
module.exports.readEvent= async (req, res) => {
    try {
      const events = await EventModel.find().sort({ createdAt: -1 }).exec();
      res.status(200).json(events);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Erreur serveur');
    }
  }

//pour afficher un evenement specifique
module.exports.eventInfo = async(req, res )=>{
    try {
		if (!ObjectID.isValid(req.params.id)) {
			return res.status(400).send('ID inconnu : ' + req.params.id);
		}

		const event = await EventModel.findById(req.params.id);
		if (event) {
			res.send(event);
		} else {
			res.status(404).send('evenement non trouvé');
		}
	} catch (err) {
		console.log('Erreur lors de la recherche de l\'utilisateur : ' + err);
		res.status(500).send('Une erreur s\'est produite lors de la recherche de l\'evenement');
	}
}

//pour faire la mise a jour des element dans un evenement
module.exports.updateEvent = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)) return res.status(400).send('ID unknown : ' + req.params.id);

    try {
        await EventModel.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    titre: req.body.titre,
                    description: req.body.description,
                    date_debut: req.body.date_debut,
                    date_fin: req.body.date_fin,
                    heure_debut: req.body.heure,
                    heure_fin: req.body.heure,
                    lieu: req.body.lieu,
                    prix: req.body.prix
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


//permet de supprimer un evenement
module.exports.deleteEvent = async (req, res) => {
    try {
      if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send('ID inconnu : ' + req.params.id);
      }
  
      await EventModel.deleteOne({ _id: req.params.id }); // Utilisez la méthode deleteOne pour supprimer l'evement
  
      res.status(200).json({ message: 'evenement supprimé avec succès' });
    } catch (err) {
      console.log('Erreur lors de la suppression de l\'evenement : ' + err);
      res.status(500).json({ message: 'Une erreur s\'est produite lors de la suppression de l\'evenement' });
    }
  };


module.exports.commentEvent = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
    try {
      return EventModel.findByIdAndUpdate(
        req.params.id,
        {
          $push: {
            comments: {
              commenterId: req.body.commenterId,
              commenterPseudo: req.body.commenterPseudo,
              text: req.body.text,
              timestamp: new Date().getTime(),
            },
          },
        },
        { new: true })
              .then((data) => res.send(data))
              .catch((err) => res.status(500).send({ message: err }));
      } catch (err) {
          return res.status(400).send(err);
      }
  };
  



module.exports.editEvent = (req, res) => {
    /*
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
    try {
      return EventModel.findById(req.params.id, (err, docs) => {
        const theComment = docs.comments.find((comment) =>
          comment._id.equals(req.body.commentId)
        );
  
        if (!theComment) return res.status(404).send("Comment not found");
        theComment.text = req.body.text;
  
        return docs.save((err) => {
          if (!err) return res.status(200).send(docs);
          return res.status(500).send(err);
        });
      });
    } catch (err) {
      return res.status(400).send(err);
    }*/
  };


module.exports.deleteCommentEvent = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
    try {
      return EventModel.findByIdAndUpdate(
        req.params.id,
        {
          $pull: {
            comments: {
              _id: req.body.commentId,
            },
          },
        },
        { new: true })
              .then((data) => res.send(data))
              .catch((err) => res.status(500).send({ message: err }));
      } catch (err) {
          return res.status(400).send(err);
      }
  };