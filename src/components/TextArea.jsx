import React, { useState } from "react";

export default function TextArea() {
  const [text, settext] = useState("");

  const handleOnChange = (event) => {
    settext(event.target.value);
  };

  return (
    <div className="container my-5">
      <section className="container-fluid">
        <h1 className="fw-bold text-poppins">Text Utility</h1>
        <p className="text-dm">
          Use this tool to display any text in an special, specified style.
          <br /> &rarr; &nbsp; Using this tool you can select your
          <mark> desired font </mark>
          and can
          <mark> decorate your text. </mark>
        </p>
        <div className="row">
          <div className="col-md-6 my-3">
            <h3 className="text-dm fw-bold">TextArea</h3>
            <div className="input-group shadow-sm">
              <textarea
                className="form-control text-dm"
                aria-label="With textarea"
                rows={10}
                style={{ resize: "none" }}
                onChange={handleOnChange}
                value={text}
              ></textarea>
            </div>
            <p className="my-3 text-mono fw-bold">{text.length} characters</p>
          </div>

          <div className="col-md-6 my-3">
            <h3 className="text-dm fw-bold">Preview</h3>
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
