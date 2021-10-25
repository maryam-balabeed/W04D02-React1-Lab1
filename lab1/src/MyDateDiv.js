import React, { useState } from "react";
import "./App.css";

function MyDateDiv(props) {
  let time = new Date().toLocaleString();
  let [mytime, setTime] = useState();
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setInterval(updateTime, 1000);

  return <div className="container">{time}</div>;
}

export default MyDateDiv;
