import React, { useContext, useState } from "react";
import axios from "axios";
import "../styles/event.css";
import { UidContext } from "../components/AppContext";

const EventCreationPage = () => {
  const uid = useContext(UidContext);

  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [date_debut, setdate_debut] = useState("");
  const [date_fin, setdate_fin] = useState("");
  const [heure_debut, setheure_debut] = useState("");
  const [heure_fin, setheure_fin] = useState("");
  const [lieu, setlieu] = useState("");
  const [prix, setprix] = useState("");

  const handleCreerEvent = async (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "http://localhost:5000/api/event/creerEvent",
      withCredentials: true,
      data: {
        posterId: uid,
        titre,
        description,
        date_debut,
        date_fin,
        heure_debut,
        heure_fin,
        lieu,
        prix,
      },
    })
      .then((res) => {
        if (res.data.errors) {
          console.log("l'erreur vient de la page de creer evenement");
        } else {
          window.location = "/Profil";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <header>
        <h1>Création d'événement</h1>
      </header>
      <main>
        <form action="" onSubmit={handleCreerEvent}>
          <div className="form-group">
            <label htmlFor="nomevenement">Nom de l'événement:</label>
            <input
              type="text"
              name="titre"
              id="titre"
              onChange={(e) => setTitre(e.target.value)}
              value={titre}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Prix">Prix</label>
            <input
              type="number"
              name="Prix"
              id="Prix"
              onChange={(e) => setprix(e.target.value)}
              value={prix}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="datedebut">Date de début:</label>
            <input
              type="date"
              name="DateDebut"
              id="DateDebut"
              onChange={(e) => setdate_debut(e.target.value)}
              value={date_debut}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="datefin">Date de fin:</label>
            <input
              type="date"
              name="DateFin"
              id="DateFin"
              onChange={(e) => setdate_fin(e.target.value)}
              value={date_fin}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="heuredebut">Heure de début:</label>
            <input
              type="time"
              name="HeureDebut"
              id="HeureDebut"
              onChange={(e) => setheure_debut(e.target.value)}
              value={heure_debut}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="heurefin">Heure de fin:</label>
            <input
              type="time"
              name="HeureFin"
              id="HeureFin"
              onChange={(e) => setheure_fin(e.target.value)}
              value={heure_fin}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lieu">Lieu de l'événement:</label>
            <input
              type="text"
              name="Lieu"
              id="Lieu"
              onChange={(e) => setlieu(e.target.value)}
              value={lieu}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description de l'événement:</label>
            <textarea
              name="description"
              rows="5"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            ></textarea>
          </div>
          <input type="submit" value="valider " />
        </form>
      </main>
      <footer>
        <p>Tous droits réservés &copy; 2023</p>
      </footer>
    </div>
  );
};

export default EventCreationPage;
