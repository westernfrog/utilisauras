import React, { useState } from "react";

function Time() {
  setInterval(updateTime, 1000);
  const now = new Date().toLocaleTimeString();

  const [time, settime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    settime(newTime);
  }

  return (
    <div className="container my-5">
      <section className="container-fluid">
        <h1 className="fw-bold text-poppins">Time Conversions</h1>
        <h2 className="text-dm">{time}</h2>
        <p className="text-dm"></p>
      </section>
    </div>
  );
}

export default Time;
