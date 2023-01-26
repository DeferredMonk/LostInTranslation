import "../../sass/frontPageHeader.sass";
import logo from "../../Assets/Logo-Hello.png";
import { useSelector } from "react-redux";

const FrontPageHeader = () => {

  return (
    <div
      className={
        window.localStorage.getItem("user")
          ? "frontPageHeader hidden"
          : "frontPageHeader"
      }
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
