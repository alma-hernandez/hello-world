import React, { useState, useEffect } from 'react';

const Timer1 = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds +1)
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
    }, [isActive]);

    const handleStartStopClick = () => {
      setIsActive(!isActive);
    };

    const handleResetClick = () => {
      setIsActive(false);
      setSeconds(0);
    };

    return (
      <div>
        <h1>Timer: {seconds}s</h1>
        <button onClick={handleStartStopClick}>
          {isActive ? 'Pause' : 'Start'}
        </button>

        <button onClick={handleResetClick}>Reset</button>
      </div>
    );
  };

  export default Timer1;