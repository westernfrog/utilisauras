import React, { useState } from "react";

export default function TextArea(props) {
  const [text, settext] = useState("");

  const handleOnChange = (event) => {
    settext(event.target.value);
  };

  return (
    <div className="container my-5">
      <section className="container-fluid">
        <div className="row">
          <div className="col-md-6 my-3">
            <h1>{props.title}</h1>
            <div className="input-group shadow-sm">
              <textarea
                className="form-control"
                aria-label="With textarea"
                rows={8}
                style={{ resize: "none" }}
                onChange={handleOnChange}
                value={text}
              ></textarea>
            </div>
          </div>

          <div className="col-md-6 my-3">
            <h1>{props.preview}</h1>
            <div className="shadow-sm">
              <div
                className="form-control"
                aria-label="With textarea"
                rows={8}
                style={{ height: "13em" }}
              >
                <p>
                  <b>{text}</b>
                </p>
                <p>
                  <i>{text}</i>
                </p>
                <p>
                  <i>
                    <b>{text}</b>
                  </i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
