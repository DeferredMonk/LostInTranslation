import AvatarCard from "./avatarCard.js";
import HistoryCards from "./historyCards.js";
import "../../../sass/profile.sass";
import { patchData } from "../../api/data.js";

const Profile = ({ setLoggedUSer, loggedUser }) => {
  const clearHistory = () => {
    patchData(loggedUser.id, []);
  };

  return (
    <div className="profile">
      <AvatarCard loggedUser={loggedUser} />
      <HistoryCards loggedUser={loggedUser} />
      <button onClick={clearHistory} className="individualButton">
        Clear translations
      </button>
      <button className="individualButton">Logout</button>
    </div>
  );
};

export default Profile;
