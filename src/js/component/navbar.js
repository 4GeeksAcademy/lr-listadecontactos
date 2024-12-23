import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Home</Link>
        <div className="ml-auto">
          <Link className="btn btn-primary me-2" to="/contacts">Contacts</Link>
          <Link className="btn btn-secondary" to="/add-contact">Add Contact</Link>
        </div>
      </div>
    </nav>
  );
};
