import { useState, useEffect } from "react";

export default function WeeklyChallengeTimer() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [resetDate, setResetDate] = useState(null);

  useEffect(() => {
    const storedDate = localStorage.getItem("weeklyResetDate");

    let reset;
    if (storedDate) {
      reset = new Date(storedDate);
    } else {
      reset = new Date();
      reset.setDate(reset.getDate() + 7);
      localStorage.setItem("weeklyResetDate", reset.toISOString());
    }

    setResetDate(reset);
  }, []);

  
  useEffect(() => {
    if (!resetDate) return;

    const interval = setInterval(() => {
      const now = new Date();
      const diff = resetDate - now;

      if (diff <= 0) {
        
        const newReset = new Date();
        newReset.setDate(newReset.getDate() + 7);
        setResetDate(newReset);
        localStorage.setItem("weeklyResetDate", newReset.toISOString());
        setTimeLeft(7 * 24 * 60 * 60); 
      } else {
        setTimeLeft(Math.floor(diff / 1000));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [resetDate]);

  const formatTime = (seconds) => {
    const d = Math.floor(seconds / (60 * 60 * 24));
    const h = Math.floor((seconds % (60 * 60 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${d}d ${h}h ${m}m ${s}s`;
  };

  return (
    <section>
      <h3>⏳ Time left for next challenge:</h3>
      <p>{formatTime(timeLeft)}</p>
    </section>
  );
}
