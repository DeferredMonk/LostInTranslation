import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { patchData, postData } from "../api/data";
import "../../sass/inputForm.sass";

const InputForm = ({ setLoggedUser, data, loggedUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();

  const localStorageUser = window.localStorage.getItem("username");
  const [translations, setTranslations] = useState([]);

  const userExists = (existingUsers, newUser) =>
    existingUsers.filter(
      (user) => user.username.toLowerCase() === newUser.username.toLowerCase()
    );

  const onLogIn = (inputData) => {
    //Log in handler

    if (userExists(data, inputData).length === 0) {
      //postData(inputData);
      console.log("post");
    }
    setLoggedUser(inputData.username);
    localStorage.setItem("username", inputData.username);
    resetField("username");
  };

  const onTranslate = (inputData) => {
    //inputData.username = localStorageUser;
    
    patchData(1, inputData.translation);
  };

  //Error handlers
  //if (errors.message !== "") console.log("test");

  return (
    <div className="inputForm">
      {loggedUser || localStorageUser ? (
        <form className="logged" onSubmit={handleSubmit(onTranslate)}>
          <div className="inputContainer">
            <input
              className="inputElem"
              placeholder="Translate..."
              {...register("translation", {
                required: "What would you like to translate?",
              })}
            />
            <button type="submit" className="translateButton">
              Translate
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit(onLogIn)}>
          <div className="inputContainer">
            <input
              className="inputElem"
              placeholder="Enter your name..."
              {...register("username", {
                required: "Please input your username!",
              })}
            />
            <button type="submit">Sign in</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default InputForm;
