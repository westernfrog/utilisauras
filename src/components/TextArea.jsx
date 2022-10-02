import React from "react";

export default function TextArea(props) {
  function copy() {}
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
              ></textarea>
            </div>
          </div>

          <div className="col-md-6 my-3">
            <h1>{props.preview}</h1>
            <div className="input-group shadow-sm">
              <textarea
                className="form-control"
                aria-label="With textarea"
                rows={8}
                style={{ resize: "none" }}
              ></textarea>
            </div>
            <div className="my-2">
              <p>
                Copy to Clipboard!
                <button
                  className="btn"
                  style={{ boxShadow: "none" }}
                  onClick={copy()}
                >
                  <span className="material-symbols-outlined">copy_all</span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
