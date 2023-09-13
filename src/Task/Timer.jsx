import React, { useEffect, useState } from "react";

const Timer = () => {
  const [timerRunning, setTimerRunning] = useState(false);
  const [time, setTime] = useState(0);
  useEffect(() => {
    let interval;
    if (timerRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  const startTimer = () => {
    setTimerRunning(true);
  };

  const stopTimer = () => {
    setTimerRunning(false);
  };
  const resetTimer = () => {
    setTime(0);
    setTimerRunning(false);
  };
  const formattingOfTiming = () => {
    const second = Math.floor((time / 1000) % 60)
      .toString()
      .padStart(3, 0);
    const minutes = Math.floor((time / (1000 * 60)) % 60)
      .toString()
      .padStart(2, 0);
    const hours = Math.floor(time / (1000 * 60 * 60))
      .toString()
      .padStart(2, 0);
    return `${hours}:${minutes}:${second}`;
  };
  return (
    <div className="timer">
      <div className="subtimer">
        <h1>Stop Watch</h1>
        <div>
          <div className="timer">
            <h2>{formattingOfTiming()}</h2>
          </div>
          <div className="buttons">
            <button onClick={startTimer} disabled={timerRunning}>
              Start
            </button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
