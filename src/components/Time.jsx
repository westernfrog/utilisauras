import React, { useState } from "react";

function Time() {
  setInterval(updateTime, 1000);
  const now = new Date().toLocaleTimeString();
  const date = new Date();
  const [day, setday] = useState(" ");

  const [time, settime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    settime(newTime);
  }

  return (
    <div className="container my-3">
      <button className="btn">
        <h1>{time}</h1>
        <h1>{day}</h1>
      </button>
    </div>
  );
}

export default Time;
