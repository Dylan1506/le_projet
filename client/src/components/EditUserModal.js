import React, { useContext, useState } from "react";
import { UidContext } from "../components/AppContext";
import axios from "axios";
import { Link } from "react-router-dom";

const EditUserModal = ({ toggleUpdateUser  }) => {

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
    <div
      className="fixed bottom-0 left-0 right-0 top-0 z-20 flex flex-col items-center justify-center bg-black bg-opacity-80"
      onClick={toggleUpdateUser}
    >
      <div
        className="w-full min-w-[300px] max-w-lg rounded-md bg-white p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div class="mx-auto max-w-lg text-center">
          <h1 class="text-2xl font-bold sm:text-3xl">Update a user</h1>

          <p class="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>
        <form action="" onSubmit={handleUpdate} class="mx-auto mb-0 mt-8 max-w-md space-y-4">
          

          <div>
            <label class="sr-only">Firstname</label>

            <div class="relative">
              <input
                type="text"
                name="first-name"
                      id="first-name"
                      onChange={(e) => setNom(e.target.value)}
                      value={nom}
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter firstname"
              />

              <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label class="sr-only">Lastname</label>

            <div class="relative">
              <input
                type="text"
                name="last-name"
                      id="last-name"
                      onChange={(e) => setPrenom(e.target.value)}
                      value={prenom}
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter lastname"
              />

              <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label class="sr-only">Adresse</label>

            <div class="relative">
              <input
                type="text"
                name="street-address"
                      id="street-address"
                      onChange={(e) => setAdresse(e.target.value)}
                      value={adresse}
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Adresse"
              />

              <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label class="sr-only">Ville</label>

            <div class="relative">
              <input
                type="text"
                name="city"
                id="city"
                onChange={(e) => setVille(e.target.value)}
                value={ville}
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Ville"
              />

              <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label class="sr-only">Contact</label>

            <div class="relative">
              <input
                type="text"
                name="region"
                id="region"
                onChange={(e) => setContact(e.target.value)}
                value={contact}
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Contact"
              />

              <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <button
            type="submit"
            class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Update Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;
