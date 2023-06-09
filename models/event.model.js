const mongoose = require('mongoose');


// Définition du schéma d'événement
const eventSchema = new mongoose.Schema({
  posterId:{
    type:String,
    required:true
  },
  message:{
    type:String,
    trim:true,
    maxlength:500,

  },
  picture:{
    type:String,
  },
  video:{
    type:String,
  },
  comments:{
    type:[
      {
        commenterId:String,
        commenterPseudo:String,
        text:String,
        timestamp:Number,
      }
    ],
    required: true,
  },
  titre: { type: String, required: true },
  description: { type: String, required: true },
  date_debut: { type: Date, required: true },
  date_fin: { type: Date, required: true },
  heure_debut: { type: String, required: true },
  heure_fin: { type: String, required: true },
  lieu: { type: String, required: true },
  prix: { type: Number, required: true },
  tache:{
    type:[String],
    default:[]
  },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

// Création du modèle d'événement
const EventModel = mongoose.model('event', eventSchema);

module.exports = EventModel;
