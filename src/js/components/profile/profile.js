import AvatarCard from "./avatarCard.js";
import HistoryCards from "./historyCards.js";
import "../../../sass/profile.sass";

/**
 * This component combines AvatarCard and HistoryCards and renders profile page 
 * @returns {JSX.Element}
 */

const Profile = () => {

  return (
    <div className="profile">
      <AvatarCard />
      <HistoryCards />
    </div>
  );
};

export default Profile;