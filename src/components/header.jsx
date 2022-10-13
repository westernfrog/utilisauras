import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

export default function Header() {
  function click() {
    $("a.nav-link").click(function (e) {
      e.preventDefault();
      $("a.nav-link").addClass("active");
    });
  }

  click();

  return (
    <div className="bg-light">
      <nav className="navbar navbar-light container">
        <div className="container-fluid">
          <span
            className="navbar-brand mx-auto"
            style={{ fontFamily: "'Abril Fatface', cursive" }}
          >
            <h1>
              <img
                className="me-3"
                src="https://cdn-icons-png.flaticon.com/512/817/817776.png"
                alt=""
                width="45"
                height="45"
              />
              Utilisauras
              <img
                className="ms-3"
                src="https://cdn-icons-png.flaticon.com/512/817/817754.png"
                alt=""
                width="45"
                height="45"
              />
            </h1>
          </span>
        </div>
      </nav>
      <div className="bg-light shadow-sm">
        <nav className="navbar navbar-expand-lg navbar-light container">
          <div className="container-fluid pe-0">
            <span className="navbar-brand">Tools</span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{
                boxShadow: "none",
                border: "none",
              }}
            >
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="true"
                    href="/text-utility"
                  >
                    PDF TO WORD
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/word2pdf">
                    WORD TO PDF
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/time">
                    TIME CONVERSIONS
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/text">
                    TEXT UTILITY
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/json">
                    JSON FORMATTERS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
