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
                rows={10}
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
                style={{ height: "16em", overflow: "auto" }}
              >
                <p className="fw-bold">{text}</p>
                <p className="fw-light">{text}</p>
                <p className="fst-italic">{text}</p>
                <p className="text-muted">{text}</p>
                <p className="text-decoration-underline">{text}</p>
                <p className="text-decoration-line-through">{text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
