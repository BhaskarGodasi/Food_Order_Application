import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signIn, signOut } from './actions/authActions'; // Assuming you have these actions defined
import { FaUser, FaSignOutAlt, FaEdit } from 'react-icons/fa';

const Navbar = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(signIn());
  };

  const handleSignOut = () => {
    dispatch(signOut());
  };

  const renderAuthButtons = () => {
    if (isAuthenticated) {
      return (
        <div className="profile-dropdown">
          <button className="profile-icon">
            <FaUser />
          </button>
          <div className="dropdown-content">
            <button onClick={handleSignOut}><FaSignOutAlt /> Log Out</button>
            <button><FaEdit /> Edit User Details</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="auth-buttons">
          <button onClick={handleSignIn}>Sign In</button>
          <button>Sign Up</button>
        </div>
      );
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">Your Logo</div>
      {renderAuthButtons()}
    </nav>
  );
};

export default Navbar;
