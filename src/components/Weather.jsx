import React, { useState } from "react";
import Title from "./Title";

function Weather() {
  setInterval(updateTime, 1000);
  const now = new Date().toLocaleTimeString();

  const [time, settime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    settime(newTime);
  }

  return (
    <div>
      <Title title="Weather" />
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-8 text-dm">
            <h5>
              Currently viewing the weather for
              <mark>Kharar, Chandigarh.</mark>
              <img
                className="ms-3"
                src="https://cdn-icons-png.flaticon.com/512/817/817774.png"
                alt=""
                width="45"
                height="45"
              />
            </h5>
          </div>
          <div className="col-md-4 ms-auto">
            <form className="row g-3">
              <div className="col-auto">
                <label for="inputPassword2" className="visually-hidden">
                  Location
                </label>
                <input
                  type="text"
                  className="form-control text-dm shadow-sm"
                  id="inputPassword2"
                  placeholder="Search Location"
                />
              </div>
              <div className="col-auto text-slab">
                <button
                  type="submit"
                  className="btn btn-outline-success mb-3 shadow-sm"
                >
                  Go!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
