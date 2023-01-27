import "../../../sass/avatar.sass";
import { clearData } from "../../reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/userSlice";

/**
 * This component render user info to profile component
 * @returns {JSX.Element}
 */

const AvatarCard = () => {
  const dispatch = useDispatch();
  const { username, translations, id } = useSelector((state) => state.user);

  /**
   * This function sends clear command to user reducer
   */
  const clearHistory = () => {
    const data = {username: username, id: id}
    dispatch(clearData(data));
  };

  return (
    <div className="avatarCard">
      <div className="profileContainer">
        <div className="circleBase circle">
          <span className="firstLetter">{username && username[0]}</span>
        </div>
        <div className="userInfoContainer">
          <span className="infoText">Username:</span>
          <span className="userProfileName">{username && username}</span>
          <span className="infoText">
            Translations count: {username && translations.length}
          </span>
        </div>
      </div>
      <div className="buttonContainer">
        <button
          className="clearTranslationsButton"
          onClick={() => clearHistory()}
        >
          Clear Translations
        </button>
        <button className="logoutButton" onClick={() => dispatch(logout())}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default AvatarCard;
