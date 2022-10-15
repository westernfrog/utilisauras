import React from "react";

export default function Title(props) {
  return (
    <div className="container mt-5">
      <section>
        <h1 className="fw-bold text-poppins">{props.title}</h1>
        <p className="text-dm">{props.desc}</p>
      </section>
    </div>
  );
}
