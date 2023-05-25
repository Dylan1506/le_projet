import React from 'react';
import '../styles/profil.css';


function Profil() {
  return (
    <div className='test'>
      <header>
        <h1>Profil Utilisateur</h1>
      </header>
      <section className="profile">
        <div className="profile-info">
          <h2>Informations personnelles</h2>
          <img src="client\public\image\3.jpg" alt="Photo de profil" />
          <div className="profile-details">
            <h3>Nom d'utilisateur</h3>
            <p>Nom: John Doe</p>
            <p>Email: johndoe@example.com</p>
            <p>Pays: France</p>
            <p>Ville: Paris</p>
          </div>
          <h2>Informations supplémentaires</h2>
          <div className="profile-details">
            <p>Sexe: Homme</p>
            <p>Email: johndoe@example.com</p>
            <p>Pays: France</p>
            <p>Ville: Paris</p>
            <div className="button-container">
              <a href="#" className="button modify-button">Modifier le profil</a>
              <a href="#" className="button delete-button">Se déconnecter</a>
            </div>
          </div>
        </div>
        <div className="profile-events">
          <h2>Événements créés</h2>
          <div className="event-card">
            <img src="client\public\image\3.jpg.jpg" alt="Événement 1" />
            <div className="event-details">
              <h3>Événement 1</h3>
              <p>Date_debut: 30 mai 2023</p>
              <p>Date_fin: 30 mai 2023</p>
              <p>Heure_debut: 18:30</p>
              <p>Heure_fin: 20:23</p>
              <p>Lieu: Marseille</p>
              <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="button-container">
                <a href="#" className="button modify-button">Modifier</a>
                <a href="#" className="button delete-button">Supprimer</a>
              </div>
            </div>
          </div>
          <div className="event-card">
            <img src="client\public\image\3.jpg" alt="Événement 2" />
            <div className="event-details">
              <h3>Événement 2</h3>
              <p>Date_debut: 30 mai 2023</p>
              <p>Date_fin: 30 mai 2023</p>
              <p>Heure_debut: 18:30</p>
              <p>Heure_fin: 20:23</p>
              <p>Lieu: Marseille</p>
              <p>Description: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className="button-container">
                <a href="#" className="button modify-button">Modifier</a>
                <a href="#" className="button delete-button">Supprimer</a>
              </div>
            </div>
          </div>
          <a href="#" className="button"> Créer un nouvel événement</a>
        </div>
        <div className="profile-participating">
          <h2>Événements inscrits</h2>
          <div className="event-card">
            <img src="client\public\image\3.jpg" alt="Événement A" />
            <div className="event-details">
              <h3>Événement A</h3>
              <p>Date_debut: 30 mai 2023</p>
              <p>Date_fin: 30 mai 2023</p>
              <p>Heure_debut: 18:30</p>
              <p>Heure_fin: 20:23</p>
              <p>Lieu: Marseille</p>
              <p>Description: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            </div>
          </div>
          <div className="event-card">
            <img src="client\public\image\3.jpg" alt="Événement B" />
            <div className="event-details">
              <h3>Événement B</h3>
              <p>Date_debut: 30 mai 2023</p>
              <p>Date_fin: 30 mai 2023</p>
              <p>Heure_debut: 18:30</p>
              <p>Heure_fin: 20:23</p>
              <p>Lieu: Marseille</p>
              <p>Description: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="planning">
        <h2>Planification d'événements</h2>
        <div className="event-calendar">
          <h3>Calendrier</h3>
          {/* Calendrier interactif */}
        </div>
        <div className="event-tasks">
          <h3>Tâches</h3>
          {/* Liste des tâches à effectuer */}
        </div>
        <div className="event-reminders">
          <h3>Rappels</h3>
          {/* Liste des rappels pour les événements */}
        </div>
      </section>
      <footer>
        <p>© 2023 Planification d'événements. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default Profil;
