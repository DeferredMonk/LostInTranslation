import AvatarCard from "./avatarCard.js";
import HistoryCards from "./historyCards.js";
import "../../../sass/profile.sass";

const Profile = () => {

  return (
    <div className="profile">
      <AvatarCard />
      <HistoryCards />
    </div>
  );
};

export default Profile;
