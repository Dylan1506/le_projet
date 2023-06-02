const router = require('express').Router();
const EventModel=require("../models/event.model");
const eventController=require("../controllers/event.controller");



//crud pour les evenements
router.post('/creerEvent',eventController.createEvent); //creer evenement
router.get('/',eventController.readEvent); //afficher tous les evenements
router.get('/:id',eventController.eventInfo); //afficher un evenement specifique
router.put('/:id',eventController.updateEvent); // mettre a jour les infos d'un evenement
router.delete('/:id',eventController.deleteEvent); //supprimer un evement
router.post('/inscrire/:eventId',eventController.inscrireEvent);


//les routes pour les commentaires
router.patch('/comment-post/:id',eventController.commentEvent);
router.patch('/edit-comment-post/:id',eventController.editEvent);
router.patch('/delete-comment-post/:id',eventController.deleteCommentEvent);



module.exports=router; 