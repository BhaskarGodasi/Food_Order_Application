import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assests/Images/download.jpg';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt='logo' width='100px'/>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/Home" style={{ marginRight: '10px' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/offers" style={{ marginRight: '10px' }}>Offers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/restrauants" style={{ marginRight: '10px' }}>Restaurants</Link>
            </li>
            <li className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`}>
              <a className="nav-link dropdown-toggle" href="#" role="button" onClick={toggleDropdown}>
                Profile
              </a>
              <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                <Link className="dropdown-item" to="/">Login</Link>
                <Link className="dropdown-item" to="/signup">Signup</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/logout">Logout</Link>
                <Link className="dropdown-item" to="/account">Account</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
