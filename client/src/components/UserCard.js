import React, { useContext } from "react";
import { UidContext } from "./AppContext";
import { useSelector } from "react-redux";

const UserCard = ({ toggleUpdateUser }) => {
  const uid = useContext(UidContext);
  const usersData = useSelector((state) => state.usersReducer);
  const userArray = Object.keys(usersData).map((key) => usersData[key]);

  const userAffichier = userArray.filter((user) => user.status !== "admin");
  console.log("userAffichier");
  console.log(userAffichier);

  return (
    <div>
      {userAffichier.map((user) => {
        return (
          <article class="flex max-w-[500px] items-center gap-2 rounded-xl border-2 border-gray-100 bg-white p-2" userid={user._id} >
            <div class="aspect-square w-16">
              <img
                alt="Speaker"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                class="h-full w-full rounded-lg object-cover"
              />
            </div>

            <div>
              <h3>{user.nom}</h3>
              <p className="text-sm text-gray-600">{user.email}</p>
           
            </div>

            <div className="ml-auto"  > 
              <span class="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
                <button
                  class="inline-block border-e p-3 text-gray-700 hover:bg-gray-50 focus:relative"
                  title="Edit Product"
                  onClick={toggleUpdateUser}
                  
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </button>

                <button
                  class="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative"
                  title="Delete Product"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>

                
              </span>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default UserCard;
