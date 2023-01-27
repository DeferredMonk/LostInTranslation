import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { postData } from "../../reducers/userListSlice.js";
import { fetchUser, patchData } from "../../reducers/userSlice.js";
import "../../../sass/inputForm.sass";
import { translate, clearTranslation } from "../../reducers/translationSlice";

/**
 * InputForm is a component that renders logIn and translate input
 * @returns {JSX.Element}
 */
const InputForm = () => {
  const { users } = useSelector((state) => state.userList);
  const { username, translations, id } = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    resetField,
  } = useForm({ mode: "onChange" });
  const dispatch = useDispatch();

  /**
   * userExists verifies the existanse of a user
   * @param {Array<String>} existingUsers list of existing users
   * @param {Object} newUser user to find
   * @returns {String|null}
   */
  const userExists = (existingUsers, newUser) =>
    existingUsers.find(
      (user) => user.toLowerCase() === newUser.username.toLowerCase()
    );

  /**
   * onLogIn handles the log in.
   * Creates new user if needed and resets username field
   * @param {Object} inputData Contains user inputs
   */
  const onLogIn = async (inputData) => {
    if (!userExists(users, inputData)) {
      const newwUser = { username: inputData.username, translations: [] };
      await dispatch(postData(newwUser));
    }
    await dispatch(fetchUser(inputData.username));
    resetField("username");
  };
  
  const onTranslate = (inputData) => {
    const newList = {
      id: id,
      translations: [
        ...translations,
        inputData.translation.replace(/[^a-zA-Z ]/g, ""),
      ],
    };
    dispatch(patchData(newList));
    dispatch(translate(inputData.translation.replace(/[^a-zA-Z ]/g, "")));
  };

  return (
    <div className="inputForm">
      {window.localStorage.getItem("user") ? (
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
