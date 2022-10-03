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
    <div className="container">
      <button className="btn">
        <h1>{time}</h1>
      </button>
    </div>
  );
}

export default Time;
