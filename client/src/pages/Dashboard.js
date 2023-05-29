import React, { useState } from "react";
import { HiUser } from "react-icons/hi2";
import EditUserModal from "../components/EditUserModal";
import NewUserModal from "../components/NewUserModal";
import ProfileCard from "../components/ProfileCard";
import UserCard from "../components/UserCard";

const Dashboard = () => {
  const [newUser, setNewUser] = useState(false);
  const [updateUser, setUpdateUser] = useState(false);

  const toggleNewUser = () => setNewUser((prev) => !prev);
  const toggleUpdateUser = () => setUpdateUser((prev) => !prev);

  return (
    <>
      <main className="bg-gray-50">
        <div className="mx-auto flex max-w-7xl gap-4 p-6">
          <div className="flex min-w-[400px] flex-shrink-0 flex-col gap-4">
            <button
              class="inline-block rounded border border-teal-600 px-12 py-3 text-sm font-medium text-teal-600 hover:bg-teal-600 hover:text-white focus:outline-none focus:ring active:bg-teal-500"
              onClick={toggleNewUser}
            >
              Creer un compte
            </button>

            <div>
              <input
                type="text"
                placeholder="Trouver un utilisateur..."
                class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <UserCard toggleUpdateUser={toggleUpdateUser} />
              <UserCard toggleUpdateUser={toggleUpdateUser} />
              <UserCard toggleUpdateUser={toggleUpdateUser} />
              <UserCard toggleUpdateUser={toggleUpdateUser} />
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className="flex flex-1 items-center gap-4 rounded-md border bg-white p-6">
                <HiUser className="text-4xl text-gray-700" />
                <div>
                  <h3 className="text-sm font-semibold text-gray-700">
                    Total Users
                  </h3>
                  <p className="text-2xl font-bold">150,500,620</p>
                </div>
              </div>

              <div className="flex flex-1 items-center gap-4 rounded-md border bg-white p-6">
                <HiUser className="text-4xl text-gray-700" />
                <div>
                  <h3 className="text-sm font-semibold text-gray-700">
                    Total Events Created
                  </h3>
                  <p className="text-2xl font-bold">150,500,620</p>
                </div>
              </div>

              <div className="flex flex-1 items-center gap-4 rounded-md border bg-white p-6">
                <HiUser className="text-4xl text-gray-700" />
                <div>
                  <h3 className="text-sm font-semibold text-gray-700">
                    Total Users
                  </h3>
                  <p className="text-2xl font-bold">150,500,620</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start gap-4">
              <h4 className="w-full border-b pb-2 text-xl font-bold">
                User profile
              </h4>

              <ProfileCard />
            </div>
          </div>
        </div>
      </main>

      {newUser && <NewUserModal toggleNewUser={toggleNewUser} />}
      {updateUser && <EditUserModal toggleUpdateUser={toggleUpdateUser} />}
    </>
  );
};

export default Dashboard;