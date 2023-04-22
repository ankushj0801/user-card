import React from 'react';

const Navbar = ({ handleGetUsers }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Brand Name</div>
      <button className="btn" onClick={handleGetUsers}>Get Users</button>
    </nav>
  );
};

export default Navbar;
