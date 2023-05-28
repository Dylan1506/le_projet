import React, { useContext, useState } from "react";
import axios from "axios";
import { UidContext } from "../components/AppContext";
import { Link } from "react-router-dom";

const UpdateEvent = () => {
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
          window.location = "/profile";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">
                UPDATE EVENT
          </h1>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        <form
          action=""
          onSubmit={handleCreerEvent}
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <label for="title" class="block text-xs font-medium text-gray-700">
              Title
            </label>

            <input
              type="text"
              id="title"
              name="title"
              placeholder="Type here"
              onChange={(e) => setTitre(e.target.value)}
              value={titre}
              class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            />
          </div>

          <div>
            <label for="title" class="block text-xs font-medium text-gray-700">
              Price
            </label>

            <input
              type="number"
              id="prix"
              name="prix"
              onChange={(e) => setprix(e.target.value)}
              value={prix}
              placeholder="Type here"
              class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            />
          </div>

          <div>
            <label for="title" class="block text-xs font-medium text-gray-700">
              Date de debut
            </label>

            <input
              type="date"
              id="date_debut"
              name="date_debut"
              placeholder="Type here"
              class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              onChange={(e) => setdate_debut(e.target.value)}
              value={date_debut}
              required
            />
          </div>

          <div>
            <label for="title" class="block text-xs font-medium text-gray-700">
              Date de fin
            </label>

            <input
              type="date"
              id="date_fin"
              name="date_fin"
              placeholder="Type here"
              class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              onChange={(e) => setdate_fin(e.target.value)}
              value={date_fin}
              required
            />
          </div>

          <div>
            <label for="title" class="block text-xs font-medium text-gray-700">
              Heure de debut
            </label>

            <input
              type="time"
              id="heure_debut"
              name="heure_debut"
              placeholder="Type here"
              class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              onChange={(e) => setheure_debut(e.target.value)}
              value={heure_debut}
              required
            />
          </div>

          <div>
            <label for="title" class="block text-xs font-medium text-gray-700">
              Heure de fin
            </label>

            <input
              type="time"
              id="heure_fin"
              name="heure_fin"
              placeholder="Type here"
              class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              onChange={(e) => setheure_fin(e.target.value)}
              value={heure_fin}
              required
            />
          </div>

          <div>
            <label for="title" class="block text-xs font-medium text-gray-700">
              Lieu
            </label>

            <input
              type="text"
              id="lieu"
              name="lieu"
              placeholder="Type here"
              class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              onChange={(e) => setlieu(e.target.value)}
              value={lieu}
              required
            />
          </div>

          <div>
            <label for="title" class="block text-xs font-medium text-gray-700">
              Description
            </label>

            <textarea
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
              name="message"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    </section>
    
  );
};

export default UpdateEvent;
