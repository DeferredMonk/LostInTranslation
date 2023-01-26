import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { postData } from "../../reducers/userListSlice.js";
import { fetchUser, patchData } from "../../reducers/userSlice.js";
import "../../../sass/inputForm.sass";
import { translate, clearTranslation } from "../../reducers/translationSlice"

const InputForm = () => {
  const {users} = useSelector(state => state.userList)
  const {username, translations, id} = useSelector(state => state.user)
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    resetField,
  } = useForm({ mode: "onChange" });
  const dispatch = useDispatch()

  const userExists = (existingUsers, newUser) =>
    existingUsers.find(
      (user) => user.toLowerCase() === newUser.username.toLowerCase()
    );

  const onLogIn = async (inputData) => {
    //Log in handler
    if (!userExists(users, inputData)) {
      const newwUser = { username: inputData.username, translations: [] };
      await dispatch(postData(newwUser))
    }
    await dispatch(fetchUser(inputData.username))
    resetField("username");
  };

  const onTranslate = (inputData) => {
    const newList = {id: id, translations: [...translations, inputData.translation.replace(/[^a-zA-Z ]/g, "")]};
    dispatch(patchData(newList));
    dispatch(translate(inputData.translation.replace(/[^a-zA-Z ]/g, "")))
  };

  //Error handlers
  //if (!isValid) console.log(errors.required);

  return (
    <div className="inputForm">
      {window.localStorage.getItem('user') ? (
        <form className="logged" onSubmit={handleSubmit(onTranslate)}>
          <div
            className={
              !errors.translation ? "inputContainer" : "inputContainer error"
            }
          >
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
          {errors.translation && (
            <div className="errorMsg">{errors.translation.message}</div>
          )}
        </form>
      ) : (
        <form onSubmit={handleSubmit(onLogIn)}>
          <div
            className={
              !errors.username ? "inputContainer" : "inputContainer error"
            }
          >
            <input
              className="inputElem"
              autoComplete="off"
              placeholder="Enter your name..."
              {...register("username", {
                required: "Please input your username!",
              })}
            />
            <button type="submit">Sign in</button>
          </div>
          {errors.username && (
            <div className="errorMsg">{errors.username.message}</div>
          )}
        </form>
      )}
    </div>
  );
};

export default InputForm;
