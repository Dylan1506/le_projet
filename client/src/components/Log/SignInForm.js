import React, { useState } from "react";
import axios from "axios";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    axios({
      method: "post",
      url: "http://localhost:5000/api/user/login",
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        if (res.data.errors) {
          console.log("l'erreur vient d'ici");
        } else {
          window.location = "/Profil";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form action="" onSubmit={handleLogin}>
      <h1>Sign In</h1>
      <div className="social-container">
        <a href="/" className="social">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="/" className="social">
          <i className="fab fa-google"></i>
        </a>
        <a href="/" className="social">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <span>or use your account</span>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <div className="email error"></div>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <div className="password error"></div>
      <a href="/">Forgot Your Password</a>
      <input type="submit" value="se connecter" />
    </form>
  );
};

export default SignInForm;
