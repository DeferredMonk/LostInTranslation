import React, { useState } from "react";
import "../../sass/_NavBar.sass";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/Logo.png";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { id } = useSelector((state) => state.user);
  const [logoAnimation, setLogoAnimation] = useState("smallProfileLogo");
  const localStorage = !window.localStorage.getItem("user");

  return (
    <div className={localStorage ? "navBarContainer flex" : "navBarContainer flex visible"}>
      <h4 className="logoTitle">Lost in translation</h4>
      <NavLink to={"profile/"+id} className="flex centerItems">
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
