import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="grid h-screen place-content-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-800">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-gray-500">We can't find that page.</p>

        <Link
          to="/"
          className="mt-6 inline-block rounded bg-teal-600 px-5 py-3 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;