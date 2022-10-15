import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

export default function Header() {
  function clickon() {
    $("a.nav-link").click(function (e) {
      e.preventDefault();
      $("a.nav-link").addClass("active");
    });
  }
  clickon();

  return (
    <div className="bg-light">
      <nav className="navbar navbar-light container">
        <div className="container-fluid">
          <span className="navbar-brand mx-auto text-abril">
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
          <div className="container px-0">
            <span
              id="tools"
              className="navbar-brand fw-bold d-lg-none text-mono"
            >
              Tools
            </span>
            <button
              id="btn"
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
                transition: "all 3s ease-in-out;",
              }}
            >
              <span className="material-symbols-outlined text-dark">
                settings
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto text-dm">
                <li id="pill" className="nav-item me-2 shadow-sm rounded-pill">
                  <Link
                    className="nav-link"
                    aria-current="true"
                    to="/utilisauras/pdf2word"
                  >
                    PDF TO WORD
                  </Link>
                </li>
                <li id="pill" className="nav-item me-2 shadow-sm rounded-pill">
                  <Link className="nav-link" to="/utilisauras/word2pdf">
                    WORD TO PDF
                  </Link>
                </li>
                <li id="pill" className="nav-item me-2 shadow-sm rounded-pill">
                  <Link className="nav-link" to="/utilisauras/clouds">
                    WEATHER
                  </Link>
                </li>
                <li id="pill" className="nav-item me-2 shadow-sm rounded-pill">
                  <Link className="nav-link" to="/utilisauras/text">
                    TEXT UTILITY
                  </Link>
                </li>
                <li id="pill" className="nav-item me-2 shadow-sm rounded-pill">
                  <Link className="nav-link" to="/utilisauras/json">
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
