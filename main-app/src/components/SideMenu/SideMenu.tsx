import React from 'react';
import { Link } from 'react-router-dom';
import './SideMenu.scss';

const SideMenu = () => {
  return (
    <nav className="side-menu">
      <ul>
        <li>
          <Link to="/">Photo Gallery</Link>
        </li>
        <li>
          <Link to="/placeholder">Placeholder App</Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideMenu;

