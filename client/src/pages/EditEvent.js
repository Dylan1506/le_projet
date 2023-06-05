import React, { useContext, useState } from "react";
import { UidContext } from "../components/AppContext";
import axios from "axios";
import { Link } from "react-router-dom";

const EditEvent = () => {
  const uid = useContext(UidContext);

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [ville, setVille] = useState("");
  const [contact, setContact] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    axios({
      method: "put",
      url: `http://localhost:5000/api/user/${uid}`,
      withCredentials: true,
      data: {
        nom,
        prenom,
        adresse,
        ville,
        contact,
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
    <section>
      <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-8 px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleUpdate}>
          <div class="border-b border-gray-900/10 pb-12">
            <h2 class="text-base font-semibold leading-7 text-gray-900">
              Event Informations
            </h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">
              You can change any of the infos below
            </p>

            <div class="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
              <div>
                <label
                  for="first-name"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Title
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    onChange={(e) => setNom(e.target.value)}
                    value={nom}
                    autocomplete="given-name"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  for="last-name"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Price
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    onChange={(e) => setPrenom(e.target.value)}
                    value={prenom}
                    autocomplete="family-name"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  for="title"
                  class="block text-xs font-medium text-gray-700"
                >
                  Date de debut
                </label>

                <input
                  type="date"
                  id="date_debut"
                  name="date_debut"
                  placeholder="Type here"
                  class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  required
                />
              </div>

              <div>
                <label
                  for="title"
                  class="block text-xs font-medium text-gray-700"
                >
                  Date de fin
                </label>

                <input
                  type="date"
                  id="date_fin"
                  name="date_fin"
                  placeholder="Type here"
                  class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  required
                />
              </div>

              <div>
                <label
                  for="title"
                  class="block text-xs font-medium text-gray-700"
                >
                  Heure de debut
                </label>

                <input
                  type="time"
                  id="heure_debut"
                  name="heure_debut"
                  placeholder="Type here"
                  class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  required
                />
              </div>

              <div>
                <label
                  for="title"
                  class="block text-xs font-medium text-gray-700"
                >
                  Heure de fin
                </label>

                <input
                  type="time"
                  id="heure_fin"
                  name="heure_fin"
                  placeholder="Type here"
                  class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  required
                />
              </div>

              <div className="col-span-2">
                <label
                  for="title"
                  class=" block text-xs font-medium text-gray-700"
                >
                  Lieu
                </label>

                <input
                  type="text"
                  id="lieu"
                  name="lieu"
                  placeholder="Type here"
                  class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  required
                />
              </div>

              <div className="col-span-2">
                <label
                  for="title"
                  class="block text-xs font-medium text-gray-700"
                >
                  Description
                </label>

                <textarea
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                  name="message"
                ></textarea>
              </div>
            </div>
          </div>

          <div class="mt-6 flex items-center justify-end gap-x-2">
            <Link
              className="text-gray-500 transition hover:text-gray-500/75"
              to="/profile"
            >
              <button
                type="button"
                class="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
            </Link>

            <button
              type="submit"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>

            <button
              type="submit"
              class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditEvent;
