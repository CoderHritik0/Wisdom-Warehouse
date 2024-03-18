import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar bg-dark bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid justify-content-center">
          <Link className="navbar-brand fs-3 fw-bold text-uppercase" to="/">
            Wisdom Warehouse
          </Link>
        </div>
      </nav>
    </div>
  );
}
