import React, { useState } from "react";
import Title from "./Title";

function Weather() {
  setInterval(updateTime, 1000);
  const now = new Date().toLocaleTimeString();

  const [time, settime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    settime(newTime);
  }

  return (
    <Title
      title="Weather"
      desc="Providng you the local weather of your area."
    />
  );
}

export default Weather;
