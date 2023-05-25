import React from 'react';
import { NavLink } from 'react-router-dom';
// import Image from "next/image";
// import Link from "next/link";
import '../styles/globals.css';

import {
  HiCake,
  HiEnvelope,
  HiFilm,
  HiMapPin,
  HiMusicalNote,
  HiShoppingCart,
} from "react-icons/hi2";
import Navbar from '../components/navbarETfooter/Navbar';
import Footer from '../components/navbarETfooter/Footer';


const services = [
  {
    icon: <HiMapPin className="text-3xl" />,
    name: "Venue Selection",
    desc: "Je mange bien et vous",
  },
  {
    icon: <HiEnvelope className="text-3xl" />,
    name: "Invitation Card",
    desc: "Je mange bien et vous",
  },
  {
    icon: <HiMusicalNote className="text-3xl" />,
    name: "Entertainement",
    desc: "Je mange bien et vous",
  },
  {
    icon: <HiCake className="text-3xl" />,
    name: "Food And Drinks",
    desc: "Je mange bien et vous",
  },
  {
    icon: <HiFilm className="text-3xl" />,
    name: "Picture And Videos",
    desc: "Je mange bien et vous",
  },
  {
    icon: <HiShoppingCart className="text-3xl" />,
    name: "Custom Food",
    desc: "Je mange bien et vous",
  },
];



const Home = () => {
  const images = [
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  ];

  return (
    <>
    <Navbar/>
    <div>
      <section className="bg-gray-900 text-white" id="home">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Understand User Flow.
              <span className="sm:block"> Increase Conversion. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <NavLink
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/get-started"
              >
                Get Started
              </NavLink>

              <NavLink
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="/about"
              >
                Learn More
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      <main className="flex flex-grow p-8" id="service">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-8 text-center">
          <h2 className="text-4xl font-bold">
            Our <span className="text-green-500">Services</span>
          </h2>

          <div className="grid w-full grid-cols-3 gap-4">
            {services.map((service) => (
              <div
                className="flex flex-col items-center justify-center gap-3 rounded-md bg-dark px-4 py-6 text-white shadow-sm"
                key={service.name}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold">{service.name}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <main className="flex flex-grow p-8" id="about">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-14">
          <h2 className="text-4xl font-bold">
            About <span className="text-green-500">Us</span>
          </h2>

          <div className="flex items-center justify-center gap-8">
            <div className="aspect-video flex-1 items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt=""
                width={500}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="prose flex-1">
              <h2>We will give a very special celebration for you</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                alias, eligendi eius iure odit repudiandae excepturi voluptate
                quis, eveniet est vitae veniam autem nihil, minus harum? Harum
                nobis facere et.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores aspernatur exercitationem magni aut eius debitis ex
                iusto repellat id sed eveniet, obcaecati dignissimos omnis porro
                laboriosam! Qui doloribus eius repellat.
              </p>
              <NavLink
                href="/contact"
                className="rounded-md bg-dark px-8 py-4 text-white no-underline"
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </main>

      <main className="flex flex-grow p-8" id="gallery">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-8">
          <h2 className="text-4xl font-bold">
            Our <span className="text-green-500">Gallery</span>
          </h2>

          <div className="grid w-full grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div
                className="overflow-hidden rounded-md border-4 border-dark"
                key={index}
              >
                <img
                  alt=""
                  src={image}
                  className="h-full w-full object-cover"
                  height={500}
                  width={500}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <main className="flex flex-grow p-8" id="contact">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-8">
          <h2 className="text-4xl font-bold">
            Contact <span className="text-green-500">Us</span>
          </h2>

          <div className="grid w-full max-w-xl grid-cols-2 items-center justify-center gap-4">
            <input
              type="text"
              placeholder="Name"
              className="rounded-md bg-dark px-4 py-2 text-white"
            />
            <input
              type="text"
              placeholder="Email"
              className="rounded-md bg-dark px-4 py-2 text-white"
            />
            <input
              type="text"
              placeholder="Number"
              className="rounded-md bg-dark px-4 py-2 text-white"
            />
            <input
              type="text"
              placeholder="Subject"
              className="rounded-md bg-dark px-4 py-2 text-white"
            />
            <textarea
              placeholder="Type here..."
              className="col-span-2 rounded-md bg-dark px-4 py-2 text-white"
            ></textarea>
            <button className="rounded-md bg-dark px-8 py-4 text-white">
              Contact Us
            </button>
          </div>
        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
};

export default Home;