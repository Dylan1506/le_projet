import React, { useState } from "react";
import "../../styles/SignIn_Up.css";
import axios from "axios";

const SignUpForm = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const terms = document.getElementById("terms");
    const nomError = document.querySelector(".nom.error");
    const prenomError = document.querySelector(".prenom.error");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const contactError = document.querySelector(".contact.error");
    const termsError = document.querySelector(".terms.error");

    await axios({
      method: "post",
      url: "http://localhost:5000/api/user/register",
      data: {
        nom,
        prenom,
        email,
        password,
        contact,
      },
    })
      .then((res) => {
        if (res.data.errors) {
          console.log("l'erreur vient d'ici");
        } else {
          window.location = "/connexion";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form action="" on onSubmit={handleRegister}>
        <h1>Create Account</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <span>or use your email for registration</span>
        <input
          type="text"
          name="name"
          placeholder="Nom"
          onChange={(e) => setNom(e.target.value)}
          value={nom}
        />
        <input
          type="text"
          name="name"
          placeholder="Prenom"
          onChange={(e) => setPrenom(e.target.value)}
          value={prenom}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          type="number"
          name="name"
          placeholder="Contact"
          onChange={(e) => setContact(e.target.value)}
          value={contact}
        />
        <input type="submit" value="s'inscrire" />
      </form>
    </div>
  );
};

export default SignUpForm;
