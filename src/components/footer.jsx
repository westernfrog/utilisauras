import React from "react";
import { Link } from "react-router-dom";

let cdate = new Date();
cdate = cdate.getFullYear();

export default function Footer() {
  return (
    <div className="bg-light border-top">
      <div className="container">
        <footer className="row my-4">
          <div className="col-md-5">
            <p className="fs-1 mb-2 text-abril">Utilisauras</p>

            <p className="fs-3 mb-0 text-slab">
              <span className="fw-light">Utilisauras</span>
              <span className="fw-light"> is </span>
              <span className="fw-bold text-dancing">somewhat cute</span>
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
              <span className="fw-bolder text-dancing">digital</span>
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

          <div className="col-md-4 mt-3"></div>

          <div className="col-md-2 mt-auto ms-auto">
            <div className="col">
              <h5 className="mb-2 fw-bold text-mono">Tools</h5>
              <ul className="nav flex-column text-dm">
                <li className="nav-item mb-2">
                  <a
                    href="/utilisauras/"
                    className="nav-link p-0 fs-6 text-muted"
                  >
                    PDF to Word
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to="/utilisauras/word2pdf"
                    className="nav-link p-0 fs-6 text-muted"
                  >
                    Word to PDF
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to="/utilisauras/time"
                    className="nav-link p-0 fs-6 text-muted"
                  >
                    Weather
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to="/utilisauras/text"
                    className="nav-link p-0 fs-6 text-muted"
                  >
                    Text Utility
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to="/utilisauras/json"
                    className="nav-link p-0 fs-6 text-muted"
                  >
                    JSON Formatters
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-3 mb-1 border-top container-fluid ps-0">
          <p className="col-md-4 mb-0 text-slab">
            &copy; {cdate} Utilisauras, Inc
          </p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/817/817763.png"
            alt="Logo of Utilisauras"
            width="45"
            height="45"
          />
        </footer>
      </div>
    </div>
  );
}
