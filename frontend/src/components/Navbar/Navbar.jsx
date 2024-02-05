import React, {useState} from 'react';
import {Link} from "react-router-dom";
import '../Navbar/Navbar.css';
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav>
      <ul>
        <li className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
          <a href="#" onMouseOver={handleToggleDropdown}>
            CHARTS <span className="arrow"></span>
          </a>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/bar-chart">Bar-Chart</Link></li>
            <li><Link to="/pie-chart">Pie-Chart</Link></li>
            <li><Link to="/bubble-chart">Bubble-Chart</Link></li>
            <li><Link to="/scatter-plot">Scatter-Plot</Link></li>
            <li><a href='https://www.linkedin.com/in/muthu-kesavan-s-95425821b/'> Profile</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar