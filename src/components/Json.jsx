import React, { useState } from "react";
import Title from "./Title";

function JSON() {
  const [text, settext] = useState("");

  const handleOnChange = (event) => {
    settext(event.target.value);
  };
  return (
    <div>
      <Title title="JSON Formatters" desc="Prettify JSON data." />
      <div className="container">
        <section className="container-fluid">
          <div className="row">
            <div className="col-md-6 my-3">
              <h3 className="text-dm fw-bold">Raw JSON format</h3>
              <div className="input-group shadow-sm">
                <textarea
                  className="form-control font-monospace"
                  aria-label="With textarea"
                  rows={10}
                  style={{ resize: "none" }}
                  onChange={handleOnChange}
                  value={text}
                ></textarea>
              </div>
            </div>

            <div className="col-md-6 my-3">
              <h3 className="text-dm fw-bold">Prettified JSON format</h3>
              <div className="shadow-sm">
                <div
                  className="form-control"
                  aria-label="With textarea"
                  rows={8}
                  style={{ height: "16em", overflow: "auto" }}
                >
                  a
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default JSON;
