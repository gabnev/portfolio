import React, { useState } from "react";
import { Link } from "react-router-dom";


const Menu = () => {

  const [active, setActive] = useState(false)

  const handleClick = () => {
    console.log(active);
    if (!active) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  return (
    <div className={active ? "navbar change" : "navbar"}>

      <div onClick={handleClick} className="nav-menu">
        <div className={active ? "line line-1 change" : "line line-1"}></div>
        <div className={active ? "line line-2 change" : "line line-2"}></div>
        <div className={active ? "line line-3 change" : "line line-3"}></div>
      </div>

      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link" href="#" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link" >Projects</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" >About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contacts" className="nav-link">Contacts</Link>
        </li>
      </ul>

    </div>
  )
}

export default Menu;