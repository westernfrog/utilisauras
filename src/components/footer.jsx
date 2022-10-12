import React from "react";

let cdate = new Date();
cdate = cdate.getFullYear();

export default function Footer() {
  return (
    <div className="container">
      <footer className="row my-4">
        <div className="col-md-5">
          <p
            className="fs-1 mb-2"
            style={{ fontFamily: "'Abril Fatface', cursive" }}
          >
            Ulitisaurs
          </p>

          <p
            className="fs-2 mb-0"
            style={{ fontFamily: "'Roboto Slab', sans-serif" }}
          >
            <span className="fw-light">Utilisaurs</span>
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

        <div className="col-md-4 mt-5 lh-lg"></div>

        <div
          className="col-md-3 lh-lg mt-auto"
          style={{ fontFamily: "'Roboto Slab', sans-serif" }}
        >
          <div class="col">
            <h4 className="mb-2">Utilities</h4>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="/" class="nav-link p-0 fs-6">
                  PDF to Word &rarr;
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="/" class="nav-link p-0 fs-6">
                  Word to PDF
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="/" class="nav-link p-0 fs-6">
                  Time Conversions
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="/" class="nav-link p-0 fs-6">
                  Text Utility
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="/" class="nav-link p-0 fs-6">
                  JSON Formatters
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top container-fluid">
        <p
          className="col-md-4 mb-0"
          style={{ fontFamily: "'Roboto Slab', sans-serif" }}
        >
          &copy; {cdate} Utilisaurs, Inc
        </p>

        <img
          src="https://cdn-icons-png.flaticon.com/512/817/817763.png"
          alt="Logo of Text Utility"
          width="50"
          height="50"
        />
      </footer>
    </div>
  );
}
