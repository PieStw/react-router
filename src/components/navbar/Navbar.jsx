import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <NavLink to="/" className={"nav-link active"}>
              Home
            </NavLink>
            <NavLink to="/aboutus" className="nav-link">
              About us
            </NavLink>
            <NavLink to="/postpage" className="nav-link">
              Post List{" "}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
