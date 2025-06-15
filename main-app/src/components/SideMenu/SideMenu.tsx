import React from 'react';
import { Link } from 'react-router-dom';
import './SideMenu.scss';

const SideMenu = () => {
  return (
    <nav className="side-menu">
      <ul>
        <li>
          <Link to="/">App 1</Link>
        </li>
        <li>
          <Link to="/app2">App 2</Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideMenu;

