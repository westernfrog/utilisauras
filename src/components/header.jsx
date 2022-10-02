import React from "react";

export default function Header() {
  return (
    <div className="bg-dark">
      <nav className="navbar navbar-expand-lg navbar-dark container">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Text Utility
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Features
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark ">
                    <li>
                      <a className="dropdown-item" href="/">
                        JSON Formatters
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>

                    <li>
                      <a className="dropdown-item" href="/">
                        Time Conversions
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Online Text tools
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>

                    <li>
                      <a className="dropdown-item" href="/">
                        Online Hex and Binary tools
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>

                    <li>
                      <a className="dropdown-item disabled" href="/l">
                        <h5>
                          <span class="badge bg-secondary">
                            More content coming soon!
                          </span>
                        </h5>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
