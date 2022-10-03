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
    <div className="bg-dark">
      <nav class="navbar navbar-dark pt-3 rounded container">
        <div class="container-fluid">
          <figure className="mb-0 pb-0 text-light">
            <blockquote class="blockquote">
              <h1>Online Utility</h1>
            </blockquote>
          </figure>
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
