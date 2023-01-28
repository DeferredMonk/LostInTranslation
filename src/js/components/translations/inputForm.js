import { useDispatch, useSelector } from "react-redux";
import { postData } from "../../reducers/userListSlice.js";
import { fetchUser, patchData } from "../../reducers/userSlice.js";
import "../../../sass/inputForm.sass";
import { translate } from "../../reducers/translationSlice";

/**
 * Renders log in & translate input
 * @returns {JSX.Element}
 */
const InputForm = ({useForm}) => {
  const { users } = useSelector((state) => state.userList);
  const { translations, id } = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm
  const dispatch = useDispatch();

  /** 
   * userExists verifies the existanse of a user
   * @param {Array<String>} existingUsers list of existing users
   * @param {Object<String>} newUser user to find
   * @returns {String|null}
   */
  const userExists = (existingUsers, newUser) =>
    existingUsers.find(
      (user) => user.toLowerCase() === newUser.username.toLowerCase()
    );
  /**
   * onLogIn logs user in &
   * creates new user if needed
   * @param {Object} inputData
   */
  const onLogIn = async (inputData) => {
    if (!userExists(users, inputData)) {
      const newwUser = { username: inputData.username, translations: [] };
      await dispatch(postData(newwUser));
    }
    await dispatch(fetchUser(inputData.username));
    resetField("username");
  };
  /**
   * onTranslate handles user translation input
   * @param {Object} inputData
   */
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
                maxLength: {value:40, message:"Your translation exceeds the limit of characters (40)"}
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
