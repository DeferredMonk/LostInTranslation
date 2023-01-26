import React, { useState } from "react";
import "../../sass/_NavBar.sass";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/Logo.png";

const NavBar = () => {
  const [logoAnimation, setLogoAnimation] = useState("smallProfileLogo");

  return (
    <div className="navBarContainer flex">
      <h4 className="logoTitle">Lost in translation</h4>
      <NavLink to="profile" className="flex centerItems">
        <img src={logo} alt="profile logo" className={logoAnimation} />
        <button
          onMouseEnter={() => setLogoAnimation("smallProfileLogo hovering")}
          onMouseLeave={() => setLogoAnimation("smallProfileLogo")}
          className="individualButton"
        >
          Profile
        </button>
      </NavLink>
    </div>
  );
};

export default NavBar;
