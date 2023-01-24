import "../../sass/frontPageHeader.sass";
import logo from "../../Assets/Logo-Hello.png";

const FrontPageHeader = ({ loggedUser }) => {
  return (
    <div className={!loggedUser ? "frontPageHeader" : "frontPageHeader hidden"}>
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
