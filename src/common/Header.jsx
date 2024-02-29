import React from "react";
import { logo } from "../assets";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LoginIcon from "@mui/icons-material/Login";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

function Header() {
  return (
    <div className="max-width header">
      <img src={logo} alt="logo" srcset="" className="logo" />
      <div className="searchBar">
        <div className="location-selector">
          <LocationOnIcon />
        </div>
        <div className="location-search">
          <input
            type="text"
            name="location"
            placeholder="Search restaurant , cusins or a dish"
          />
        </div>
      </div>
      <div className="userLogin">
        <div className="signUp">
          <h2>Sign</h2>
        </div>
        <div className="login">
        <h2>login</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
