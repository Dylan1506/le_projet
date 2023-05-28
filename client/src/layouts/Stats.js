import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import { useSelector } from "react-redux";

export default function Stats() {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);
  const eventsData = useSelector((state) => state.allEventReducer);
  const usersData = useSelector((state) => state.usersReducer);
  const eventsArray = Object.keys(eventsData).map((key) => eventsData[key]);
  const usersArray = Object.keys(usersData).map((key) => usersData[key]);

  const usersSort = usersArray.filter((user) => user._id !== uid);
  const eventSort = eventsArray.filter((event) => event.posterId !== uid);
  console.log("users");
  console.log(usersArray);
  console.log("test pour recuper sans celui qui est connecter");
  console.log(usersSort);
  console.log("test pour recuper les event du non connecter");
  console.log(eventSort);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {uid ? (
            //
            eventSort.map((event) => {
              return (
                <article
                  className="rounded-xl border-2 border-gray-100 bg-white"
                  key={event._id}
                >
                  <div className="flex flex-col items-start gap-4 p-4 lg:p-4">
                    <img
                      alt="Home"
                      src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                      className="h-56 w-full rounded-md object-cover"
                    />

                    <div>
                      <h3 className="font-medium sm:text-lg">
                        <a href="/" class="hover:underline">
                          {event.titre}
                        </a>
                      </h3>

                      <p className="line-clamp-2 text-sm text-gray-700">
                        {event.description}
                      </p>

                      <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                        <div className="flex items-center gap-1 text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="h-4 w-4"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                              clip-rule="evenodd"
                            />
                          </svg>

                          <p class="text-xs">{event.lieu}</p>
                        </div>

                        <span className="hidden sm:block" aria-hidden="true">
                          &middot;
                        </span>

                       

                        {usersSort.map((user) => {
                          if (user._id === event.posterId) {
                            return (
                              <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                                Posted by{" "}
                                <a
                                  href="/profile"
                                  className="font-medium underline hover:text-gray-700"
                                >
                                  {user.nom}
                                </a>
                              </p>
                            );
                          }
                        })}

                        <span className="hidden sm:block" aria-hidden="true">
                          &middot;
                        </span>

                        <div className="flex items-center gap-1 text-gray-500">
                          {event.date_debut}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <strong className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-teal-600 px-3 py-1.5 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>

                      <span className="text-[10px] font-medium sm:text-xs">
                       S'INSCRIRE
                      </span>
                    </strong>
                  </div>
                </article>
              );
            })
          ) : (
            eventsArray.map((event)=>{
              return(
                <article
                className="rounded-xl border-2 border-gray-100 bg-white"
                key={event._id}
              >
                <div className="flex flex-col items-start gap-4 p-4 lg:p-4">
                  <img
                    alt="Home"
                    src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                    className="h-56 w-full rounded-md object-cover"
                  />

                  <div>
                    <h3 className="font-medium sm:text-lg">
                      <a href="/" class="hover:underline">
                        {event.titre}
                      </a>
                    </h3>

                    <p className="line-clamp-2 text-sm text-gray-700">
                      {event.description}
                    </p>

                    <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                      <div className="flex items-center gap-1 text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="h-4 w-4"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                            clip-rule="evenodd"
                          />
                        </svg>

                        <p class="text-xs">{event.lieu}</p>
                      </div>

                      <span className="hidden sm:block" aria-hidden="true">
                        &middot;
                      </span>

                     

                      {usersArray.map((user) => {
                        if (user._id === event.posterId) {
                          return (
                            <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                              Posted by{" "}
                              <a
                                href="/profile"
                                className="font-medium underline hover:text-gray-700"
                              >
                                {user.nom}
                              </a>
                            </p>
                          );
                        }
                      })}

                      <span className="hidden sm:block" aria-hidden="true">
                        &middot;
                      </span>

                      <div className="flex items-center gap-1 text-gray-500">
                        {event.date_debut}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <strong className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-teal-600 px-3 py-1.5 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>

                    <span className="text-[10px] font-medium sm:text-xs">
                     S'INSCRIRE
                    </span>
                  </strong>
                </div>
              </article>
              )
            })
          )}
        </dl>
      </div>
    </div>
  );
}
