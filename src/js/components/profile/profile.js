import AvatarCard from "./avatarCard.js";
import HistoryCards from "./historyCards.js";
import "../../../sass/profile.sass";

const Profile = ({ setLoggedUSer, loggedUser }) => {
  // const clearHistory = () => {
  //   patchData(loggedUser.id, []);
  // };

  return (
    <div className="profile">
      <AvatarCard loggedUser={loggedUser} />
      <HistoryCards loggedUser={loggedUser} />
    </div>
  );
};

export default Profile;