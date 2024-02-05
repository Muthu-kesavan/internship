import React, {useState} from 'react';
import {Link} from "react-router-dom";
import '../Navbar/Navbar.css';
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  //Here the task 7- show or hide the component depending on the state is done....
  // As we use this navbar to appear only if the toggle buttton is mouseOvered....
  //Task 6 - to change arrow direction in a drop down window when toggle happens
  // it is performed on the file Navbar.css
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
            <li><a href='https://www.linkedin.com/in/muthu-kesavan-s-95425821b/'
                   target="_blank"
                   rel="noopener noreferrer"> 
                   Profile</a></li>
            <li><a href='https://github.com/Muthu-kesavan/internship'  
                  target="_blank"
                  rel="noopener noreferrer">
                  Source Code</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar