import React from "react";

export default function Title(props) {
  return (
    <div className="container my-5">
      <section className="container-fluid">
        <h1 className="fw-bold text-poppins">{props.title}</h1>
        <p className="text-dm">{props.desc}</p>
      </section>
    </div>
  );
}
