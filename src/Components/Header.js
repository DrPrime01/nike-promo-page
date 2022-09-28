import "./Header.css";
import NikeLogoIcon from "../Assets/Icons/NikeLogoIcon.svg";
import profileIcon from "../Assets/Icons/profileIcon.svg";
import cartIcon from "../Assets/Icons/cartIcon.svg";
import React from "react";

function Header() {
  const navList = [
    {
      id: 1,
      navItem: "new releases",
    },
    {
      id: 2,
      navItem: "men",
    },
    {
      id: 3,
      navItem: "women",
    },
    {
      id: 4,
      navItem: "kids",
    },
    {
      id: 5,
      navItem: "customize",
    },
  ];
  const navListItems = navList.map((navListItem) => {
    return (
      <li className="nav-list-item" key={navListItem.id}>
        {navListItem.navItem}
      </li>
    );
  });
  return (
    <nav className="header">
      <span className="logo">
        <img src={NikeLogoIcon} alt="Nike-logo-icon" />
      </span>
      <ul className="nav-list">{navListItems}</ul>
      <span className="icons">
        <span className="profile-icon">
          <img src={profileIcon} alt="profile-icon" />
        </span>
        <span className="cart-icon">
          <img src={cartIcon} alt="cart-icon" />
        </span>
      </span>
    </nav>
  );
}

export default Header;
