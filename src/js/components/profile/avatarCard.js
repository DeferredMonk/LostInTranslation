import "../../../sass/avatar.sass";
import { patchData } from "../../api/data.js";

const AvatarCard = ({ loggedUser }) => {
  const clearHistory = () => {
    patchData(loggedUser.id, []);
  };

  return (
    <div className="avatarCard">
      <div className="circleBase circle">
        <span className="firstLetter">
          {loggedUser && loggedUser.username[0]}
        </span>
      </div>
      <div className="userInfoContainer">
        <span className="infoText">Username:</span>
        <span className="userProfileName">
          {loggedUser && loggedUser.username}
        </span>
        <span className="infoText">
          Translations count:{" "}
          {loggedUser && loggedUser.translations.length}
        </span>
      </div>
      <div className="buttonContainer" onClick={clearHistory}>
        <button>Clear Translations</button>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default AvatarCard;
