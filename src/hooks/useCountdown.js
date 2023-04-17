import { useState, useEffect } from "react";

function useCountdown(callback, time, defaultTime) {
  const [remainingTime, setRemainingTime] = useState(defaultTime);

  useEffect(() => {
    let timer;
    if (remainingTime > 0) {
      timer = setTimeout(() => {
        setRemainingTime(remainingTime - 1000);
      }, 1000);
    } else {
      callback();
    }
    return () => clearTimeout(timer);
  }, [remainingTime, callback]);

  const startCountdown = () => {
    setRemainingTime(time);
  };

  return startCountdown;
}

export default useCountdown;
