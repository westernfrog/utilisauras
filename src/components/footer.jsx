import React from "react";
import { Link } from "react-router-dom";

let cdate = new Date();
cdate = cdate.getFullYear();

export default function Footer() {
  return (
    <div className="bg-light">
      <div className="container border-top">
        <footer className="row my-4">
          <div className="col-md-5">
            <p
              className="fs-1 mb-2"
              style={{ fontFamily: "'Abril Fatface', cursive" }}
            >
              Utilisauras
            </p>

            <p
              className="fs-3 mb-0"
              style={{ fontFamily: "'Roboto Slab', sans-serif" }}
            >
              <span className="fw-light">Utilisauras</span>
              <span className="fw-light"> is </span>
              <span
                className="fw-bold"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                somewhat cute
              </span>
              <span className="fw-light"> as</span>
              <span className="fw-bold"> well </span>
              <span className="fw-light"> as </span>
              <span className="fw-bold">useful. </span>
              <span className="fw-light">Anyone can</span>
              <span className="fw-bold"> use </span>
              <span className="fw-light">these </span>
              <span className="fw-bold">tools </span>
              <span className="fw-light">to solve</span>
              <span className="fw-bold"> their</span>
              <span className="fw-light"> problems.</span>
              <br />
              <span className="fw-bold">The </span>
              <span
                className="fw-bolder"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                digital
              </span>
              <span className="fw-bold"> way.</span>
              <img
                className="ms-3"
                src="https://cdn-icons-png.flaticon.com/512/817/817745.png"
                alt=""
                width="45"
                height="45"
              />
            </p>
          </div>

          <div className="col-md-4 mt-auto"></div>

          <div className="col-md-3 mt-3">
            <div className="col">
              <h5
                className="mb-3"
                style={{ fontFamily: "'Abril Fatface', cursive" }}
              >
                Tools
              </h5>
              <ul
                className="nav flex-column"
                style={{ fontFamily: "'Roboto Slab', sans-serif" }}
              >
                <li className="nav-item mb-2">
                  <a
                    href="/text-utility"
                    className="nav-link p-0 fs-6 text-muted"
                  >
                    PDF to Word
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/word2pdf" className="nav-link p-0 fs-6 text-muted">
                    Word to PDF
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/time" className="nav-link p-0 fs-6 text-muted">
                    Time Conversions
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/text" className="nav-link p-0 fs-6 text-muted">
                    Text Utility
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/json" className="nav-link p-0 fs-6 text-muted">
                    JSON Formatters
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-3 mb-1 border-top container-fluid ps-0">
          <p
            className="col-md-4 mb-0"
            style={{ fontFamily: "'Roboto Slab', sans-serif" }}
          >
            &copy; {cdate} Utilisauras, Inc
          </p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/817/817763.png"
            alt="Logo of Utilisauras"
            width="50"
            height="50"
          />
        </footer>
      </div>
    </div>
  );
}
