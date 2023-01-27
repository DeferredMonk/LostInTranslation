import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./sass/app.sass";
import FrontPageHeader from "./js/components/frontPageHeader.js";
import Profile from "./js/components/profile/profile.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchData } from "./js/reducers/userListSlice.js";
import { fetchUser } from "./js/reducers/userSlice";
import FrontPage from "./js/components/translations/frontPage";
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
        <Routes>
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/" element={<FrontPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
