import { useEffect, useState } from "react";
import "./sass/app.sass";
import { fetchData } from "./js/api/data.js";
import NavBar from "./js/components/navBar.js";
import FrontPageHeader from "./js/components/frontPageHeader.js";
import TranslatedSign from "./js/components/translatedSign.js";
import InputForm from "./js/components/inputForm.js";
import Profile from "./js/components/profile/profile.js";
import { BrowserRouter, Router, Route } from "react-router-dom";

const App = () => {
  const [data, setData] = useState("");
  const user = window.localStorage.getItem("user");
  const [loggedUser, setLoggedUser] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await fetchData();
      setData(response);
    };
    getData();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <InputForm
          data={data}
          setLoggedUser={setLoggedUser}
          loggedUser={loggedUser}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
