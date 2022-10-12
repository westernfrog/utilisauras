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
      <nav class="navbar navbar-light container">
        <div class="container-fluid">
          <span
            class="navbar-brand mx-auto"
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
              Utilitisaurs
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
        <nav class="navbar navbar-expand-lg navbar-light container">
          <div class="container-fluid pe-0">
            <span class="navbar-brand">Utilities</span>
            <button
              class="navbar-toggler"
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
              <span class="material-symbols-outlined">settings</span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" aria-current="true" href="/text-utility">
                    PDF TO WORD
                  </a>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/word2pdf">
                    WORD TO PDF
                  </Link>
                </li>
                <li class="nav-item ">
                  <Link class="nav-link" to="/time">
                    TIME CONVERSIONS
                  </Link>
                </li>
                <li class="nav-item ">
                  <Link class="nav-link" to="/textutility">
                    TEXT UTILITY
                  </Link>
                </li>
                <li class="nav-item ">
                  <Link class="nav-link" to="/jsonf">
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
