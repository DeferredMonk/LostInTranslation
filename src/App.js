import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./sass/app.sass";
import FrontPageHeader from "./js/components/frontPageHeader.js";
import TranslatedSign from "./js/components/translations/translatedSign.js";
import InputForm from "./js/components/translations/inputForm.js";
import Profile from "./js/components/profile/profile.js";
import { BrowserRouter, Router, Route } from "react-router-dom";
import { fetchData } from "./js/reducers/userListSlice.js";
import { fetchUser } from "./js/reducers/userSlice";
import NavBar from "./js/components/NavBar";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    if (window.localStorage.getItem("user"))
      dispatch(fetchUser(window.localStorage.getItem("user")));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <FrontPageHeader />
        <InputForm />
        <Profile />
      </div>
    </BrowserRouter>
  );
};

export default App;
