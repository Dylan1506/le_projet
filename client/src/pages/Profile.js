import React from "react";
import EventCard from "../components/EventCard";
import ProfileCard from "../components/ProfileCard";

function Profile() {
  return (
    <section className="">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-8 px-4 sm:px-6 lg:px-8">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-gray-800 lg:text-4xl">
          User Profil
        </h1>

        <ProfileCard />

        <a
          class="inline-block rounded border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500"
          href="/event"
        >
          Create a new event
        </a>

        <div className="grid grid-cols-2 gap-4">
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </section>
  );
}

export default Profile;

// <div className="event-card">
//               <img src="client\public\image\3.jpg.jpg" alt="Événement 1" />
//               <div className="event-details">
//                 <h3>Événement 1</h3>
//                 <p>Date_debut: 30 mai 2023</p>
//                 <p>Date_fin: 30 mai 2023</p>
//                 <p>Heure_debut: 18:30</p>
//                 <p>Heure_fin: 20:23</p>
//                 <p>Lieu: Marseille</p>
//                 <p>
//                   Description: Lorem ipsum dolor sit amet, consectetur
//                   adipiscing elit.
//                 </p>
//                 <div className="button-container">
//                   <a href="/" className="button modify-button">
//                     Modifier
//                   </a>
//                   <a href="/" className="button delete-button">
//                     Supprimer
//                   </a>
//                 </div>
//               </div>
//             </div>
