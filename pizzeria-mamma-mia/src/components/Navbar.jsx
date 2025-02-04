import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container d-flex justify-content-between align-items-center">
      <Link className="navbar-brand" to="/">🍕 Pizzería Mamma Mia</Link>
      <div>
        <Link className="btn btn-warning mx-1" to="/login">🔐 Login</Link>
        <Link className="btn btn-warning mx-1" to="/register">📝 Register</Link>
        <Link className="btn btn-warning mx-1" to="/cart">🛒 Carrito</Link>
        <Link className="btn btn-warning mx-1" to="/profile">Profile</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
