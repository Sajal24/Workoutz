import { Link } from "react-router-dom";
import React from "react";

export const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workoutz</h1>
        </Link>
      </div>
    </header>
  );
};
