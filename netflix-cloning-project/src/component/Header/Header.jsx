import React from "react";
import "./Header.css";
import Netflixlogo from "../../assets/images/pngegg.png"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Person3Icon from "@mui/icons-material/Person3";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


function Header() {
  return (
    <div className="all-header">
      <div className="header-container">
        <div className="header-left">
          <ul>
            <li><img src={Netflixlogo} alt="Nextflix logo" width="100"/></li>
            <ul className="header-note">
            <li>Netflix </li>
            <li> Home</li>
            <li>Tvshows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My list</li>
            <li>Browse By Language</li>
            </ul>
          </ul>
        </div>
        {/* header left */}
        <div className="header-right">
<ul>
  <li><SearchIcon /></li>
  <li><NotificationsNoneIcon /></li>
  <li>< Person3Icon /></li>
<li>< ArrowDropDownIcon/></li>
</ul>
        </div>
        {/* header right */}
      </div>
      {/* header container */}
    </div>
    //  all
  );
}

export default Header;
