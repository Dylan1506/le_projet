import React from "react";
import { useSelector } from "react-redux";

const ProfileCard = () => {
  const userData = useSelector((state) => state.userReducer);

  return (
    <div className="flex w-full items-center justify-center gap-8 text-gray-700">
      <div className="relative flex aspect-square h-full flex-col items-center justify-center gap-4 rounded-lg border bg-white px-16 py-8 text-center">
        <a
          class="absolute right-2 top-2 inline-block rounded-xl border border-teal-600 bg-teal-600 p-3 text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500"
          href="/edit-profile"
        >
          <span class="sr-only"> Edit </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-4 w-4"
          >
            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
          </svg>
        </a>

        <img
          alt=""
          src="https://static.wikia.nocookie.net/jigokuraku/images/5/59/Gabimaru_Anime_Infobox.png"
          className="h-20 w-20 rounded-full object-cover object-center ring-4 ring-teal-600 ring-offset-2 ring-offset-white"
        />

        <div className="flex flex-col gap-1">
          <p className="font-bold text-teal-700">{`${
            userData?.nom || "Lamine"
          } ${userData?.prenom || "Diamoutene"}`}</p>
        </div>
      </div>

      <div class="w-full max-w-md overflow-x-auto rounded-lg border border-gray-200">
        <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Nom
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                {userData.nom}
              </td>
            </tr>

            <tr>
              <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Prenom
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                {userData.prenom}
              </td>
            </tr>

            <tr>
              <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Email
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                {userData.email}
              </td>
            </tr>

            <tr>
              <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Adresse
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                {`${userData.ville} ${userData.adresse}`}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfileCard;
