import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { patchData, postData, fetchUser } from "../api/data";
import "../../sass/inputForm.sass";

const InputForm = ({ data, setLoggedUser, loggedUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();

  const userExists = (existingUsers, newUser) =>
    existingUsers.find(
      (user) => user.username.toLowerCase() === newUser.username.toLowerCase()
    );

  const onLogIn = async (inputData) => {
    //Log in handler
    if (!userExists(data, inputData)) {
      const newwUser = {username: inputData.username, translations:[]}
      postData(newwUser);
    }
    setLoggedUser(await fetchUser(inputData.username));
    resetField("username");
  }

  const onTranslate = (inputData) => {
    const newList = loggedUser.translations
    patchData(loggedUser.id, [...newList, inputData.translation]);
  }

  //Error handlers
  //if (errors.message !== "") console.log("test");

  return (
    <div className="inputForm">
      {loggedUser ? (
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
