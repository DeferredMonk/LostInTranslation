import "../../sass/frontPageHeader.sass";
import logo from "../../Assets/Logo-Hello.png";
import { useSelector } from "react-redux";

/**
 * Renders front page background
 * if user not logged
 * @returns {JSX.Element}
 */
const FrontPageHeader = () => {
  const { username } = useSelector((state) => state.user);
  const localStorage = !window.localStorage.getItem("user");

  return (
    <div
      className={localStorage ? "frontPageHeader" : "frontPageHeader hidden"}
    >
      <img src={logo} alt="hello logo" className="imgLogo" />
      <div className="titleAndDescContainer">
        <h1 className="title">
          Lost <span className="smallIn">in</span> translation
        </h1>
        <p>Sign in and start translating!</p>
      </div>
    </div>
  );
};

export default FrontPageHeader;
