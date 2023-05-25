import React from "react";

const EventCard = () => {
  return (
    <article class="rounded-xl border-2 border-gray-100 bg-white">
      <div class="flex flex-col items-start gap-4 p-4 lg:p-4">
        <img
          alt="Home"
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          className="h-56 w-full rounded-md object-cover"
        />

        <div>
          <h3 class="font-medium sm:text-lg">
            <a href="/" class="hover:underline">
              Question about Livewire Rendering and Alpine JS
            </a>
          </h3>

          <p class="line-clamp-2 text-sm text-gray-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
            accusantium temporibus iure delectus ut totam natus nesciunt ex?
            Ducimus, enim.
          </p>

          <div class="mt-2 sm:flex sm:items-center sm:gap-2">
            <div class="flex items-center gap-1 text-gray-500">
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

              <p class="text-xs">Bamako, Sirakoro</p>
            </div>

            <span class="hidden sm:block" aria-hidden="true">
              &middot;
            </span>

            <p class="hidden sm:block sm:text-xs sm:text-gray-500">
              Posted by{" "}
              <a href="/" class="font-medium underline hover:text-gray-700">
                John
              </a>
            </p>

            <span class="hidden sm:block" aria-hidden="true">
              &middot;
            </span>

            <div class="flex items-center gap-1 text-gray-500">
              <p class="text-xs">Start 05/25/2023 at 16h45</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-end">
        <strong class="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-teal-600 px-3 py-1.5 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
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

          <span class="text-[10px] font-medium sm:text-xs">Inscrits</span>
        </strong>
      </div>
    </article>
  );
};

export default EventCard;
