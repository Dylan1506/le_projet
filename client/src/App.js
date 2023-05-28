import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UidContext } from "./components/AppContext";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import NewEvent from "./pages/Event";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import EditProfile from "./pages/EditProfile";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.actions";
import UpdateEvent from "./components/UpdateEvent";



const App = () => {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();
  

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `http://localhost:5000/jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data);
        })
        .catch((err) => console.log("pas de Token"));
    };
    fetchToken();

    if (uid) dispatch(getUser(uid));
   
  }, [uid,dispatch]);

  return (
    <UidContext.Provider value={uid}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/updateEvent" element={<UpdateEvent />} />
          <Route path="/event" element={<NewEvent />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </UidContext.Provider>
  );
};

export default App;
