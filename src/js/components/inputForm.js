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

  const onSubmit = (inputData) => {
    const userNameInUse = data.filter(
      (user) => user.username.toLowerCase() === inputData.username.toLowerCase()
    );
    if (userNameInUse.length === 0) {
      //postData(inputData);
      console.log("post");
    }
    setLoggedUser(inputData.username);
  };
  console.log(loggedUser);
  //Error handlers
  //if (errors.message !== "") console.log("test");

  return (
    <div className="inputForm">
      {loggedUser ? (
        <form className="logged" onSubmit={handleSubmit(onSubmit)}>
          <div className="inputContainer">
            <input
              autoComplete="off"
              className="inputElem"
              {...register("translation", {
                required: "What would you like to translate?",
              })}
            />
            <button type="submit" className="translateButton">Translate</button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputContainer">
            <input
              autoComplete="off"
              className="inputElem"
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
