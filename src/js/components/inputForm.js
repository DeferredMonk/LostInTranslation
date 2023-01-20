import { useState } from "react";
import { useForm } from "react-hook-form";
import { postData } from "../api/data";
import "../../sass/inputForm.sass";

const InputForm = ({ setLoggedUser, data, loggedUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const localStorageUser = window.localStorage.getItem("username");

  const onSubmit = (inputData) => {
    const userNameAlreadyInUse = data.filter(
      (user) => user.username.toLowerCase() === inputData.username.toLowerCase()
    );
    if (userNameAlreadyInUse.length === 0) {
      //postData(inputData);
      console.log("post");
    }
    setLoggedUser(inputData.username);
    localStorage.setItem("username", inputData.username);
  };
  console.log(localStorageUser, "toimii");

  //Error handlers
  //if (errors.message !== "") console.log("test");

  return (
    <div className="inputForm">
      {loggedUser || localStorageUser ? (
        <form className="logged" onSubmit={handleSubmit(onSubmit)}>
          <div className="inputContainer">
            <input
              autoComplete="off"
              className="inputElem"
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputContainer">
            <input
              autoComplete="off"
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
