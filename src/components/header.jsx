import React from "react";

export default function Header() {
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
          <div class="container-fluid">
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
                  <a class="nav-link active" aria-current="true" href="/">
                    PDF TO WORD
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="/">
                    WORD TO PDF
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="/">
                    TIME CONVERSIONS
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="/">
                    TEXT UTILITY
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="/">
                    JSON FORMATTERS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
