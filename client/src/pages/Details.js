import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams(); //id extrait du lien

  console.log("id");
  console.log(id);

  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);
  const eventsData = useSelector((state) => state.allEventReducer);
  const usersData = useSelector((state) => state.usersReducer);
  const eventsArray = Object.keys(eventsData).map((key) => eventsData[key]);
  const usersArray = Object.keys(usersData).map((key) => usersData[key]);

  const usersSort = usersArray.filter((user) => user._id !== uid);
  const eventSort = eventsArray.filter((event) => event._id === id);
  console.log(eventSort);

  return (
    <main className="bg-gray-50">
      <div className="mx-auto flex max-w-7xl gap-4 p-6">
        <section>
          <div class="relative mx-auto max-w-screen-xl px-4 py-8">
            <div>
              <h1 class="text-2xl font-bold lg:text-3xl">{eventSort[0].titre}</h1>

              <p class="mt-1 text-sm text-gray-500">{eventSort[0].lieu}</p>
            </div>

            <div class="grid gap-8 lg:grid-cols-4 lg:items-start">
              <div class="lg:col-span-3">
                <div class="relative mt-4">
                  <img
                    alt="Tee"
                    src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80"
                    class="h-72 w-full rounded-xl object-cover lg:h-[540px]"
                  />

                  <div class="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-black/75 px-3 py-1.5 text-white">
                    <svg
                      class="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>

                    <span class="ms-1.5 text-xs"> {eventSort[0].date_debut} </span>
                  </div>
                </div>

                <ul class="mt-1 flex gap-1">
                  <li>
                    <img
                      alt="Tee"
                      src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80"
                      class="h-16 w-16 rounded-md object-cover"
                    />
                  </li>

                  <li>
                    <img
                      alt="Tee"
                      src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80"
                      class="h-16 w-16 rounded-md object-cover"
                    />
                  </li>

                  <li>
                    <img
                      alt="Tee"
                      src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80"
                      class="h-16 w-16 rounded-md object-cover"
                    />
                  </li>

                  <li>
                    <img
                      alt="Tee"
                      src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80"
                      class="h-16 w-16 rounded-md object-cover"
                    />
                  </li>
                </ul>
              </div>

              <div class="lg:sticky lg:top-0">
                <form class="space-y-4 lg:pt-8">
                  {/* <fieldset>
                    <legend class="text-lg font-bold">Color</legend>

                    <div class="mt-2 flex flex-wrap gap-1">
                      <label for="color_green" class="cursor-pointer">
                        <input
                          type="radio"
                          id="color_green"
                          name="color"
                          class="peer sr-only"
                          checked
                        />

                        <span class="block h-6 w-6 rounded-full border border-gray-200 bg-green-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"></span>
                      </label>

                      <label for="color_blue" class="cursor-pointer">
                        <input
                          type="radio"
                          id="color_blue"
                          name="color"
                          class="peer sr-only"
                        />

                        <span class="block h-6 w-6 rounded-full border border-gray-200 bg-blue-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"></span>
                      </label>

                      <label for="color_pink" class="cursor-pointer">
                        <input
                          type="radio"
                          id="color_pink"
                          name="color"
                          class="peer sr-only"
                        />

                        <span class="block h-6 w-6 rounded-full border border-gray-200 bg-pink-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"></span>
                      </label>

                      <label for="color_red" class="cursor-pointer">
                        <input
                          type="radio"
                          id="color_red"
                          name="color"
                          class="peer sr-only"
                        />

                        <span class="block h-6 w-6 rounded-full border border-gray-200 bg-red-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"></span>
                      </label>

                      <label for="color_indigo" class="cursor-pointer">
                        <input
                          type="radio"
                          id="color_indigo"
                          name="color"
                          class="peer sr-only"
                        />

                        <span class="block h-6 w-6 rounded-full border border-gray-200 bg-indigo-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"></span>
                      </label>
                    </div>
                  </fieldset>

                  <fieldset>
                    <legend class="text-lg font-bold">Material</legend>

                    <div class="mt-2 flex flex-wrap gap-1">
                      <label for="material_cotton" class="cursor-pointer">
                        <input
                          type="radio"
                          id="material_cotton"
                          name="material"
                          class="peer sr-only"
                          checked
                        />

                        <span class="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100">
                          Cotton
                        </span>
                      </label>

                      <label for="material_wool" class="cursor-pointer">
                        <input
                          type="radio"
                          id="material_wool"
                          name="material"
                          class="peer sr-only"
                          checked
                        />

                        <span class="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100">
                          Wool
                        </span>
                      </label>
                    </div>
                  </fieldset> */}

                  {/* <div class="rounded border bg-gray-100 p-4">
                    <p class="text-sm">
                      <span class="block">
                        {" "}
                        Pay as low as $3/mo with 0% APR.{" "}
                      </span>

                      <a href="" class="mt-1 inline-block underline">
                        {" "}
                        Find out more{" "}
                      </a>
                    </p>
                  </div> */}

                  {/* <div>
                    <p class="text-xl font-bold">$19.99</p>
                  </div> */}

                  {/* <button
                    type="button"
                    class="w-full rounded border border-gray-300 bg-gray-100 px-6 py-3 text-sm font-bold uppercase tracking-wide"
                  >
                    Notify when on sale
                  </button> */}
                </form>
              </div>

              <div class="lg:col-span-3">
                <div class="prose max-w-none">
                  <p>
                    {eventSort[0].description}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                class="rounded bg-teal-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
              >
                Inscrivez vous
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Details;
