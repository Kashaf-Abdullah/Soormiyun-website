import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuList } from "./MenuList";
import './Navbaaar.css'




import logo from '../../img/logo.png'

const Navbars = () => {
  const [clicked, setClicked] = useState(false);

  const closeMenu = () => {
    setClicked(false);
  };

  const menuList = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink
          exact
          to={url}
          activeClassName="active"
          onClick={closeMenu}
        >
          {title}
        </NavLink>
      </li>
    );
  });

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
      <ul className={clicked ? "menu-list" : "menu-list close"}>{menuList}</ul>
    </nav>
  );
};

export default Navbars;