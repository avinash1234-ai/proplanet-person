
import { useState, useEffect } from "react";

export default function CoinCounter() {
  const [coins, setCoins] = useState(150);
  const [newCoins, setNewCoins] = useState(0);

  
  useEffect(() => {
    let interval;

    if (typeof window !== "undefined") {
      interval = setInterval(() => {
        const earned = Math.floor(window.crypto.getRandomValues(new Uint32Array(1))[0] % 10) + 1;
        setNewCoins(earned);
        setCoins((prev) => prev + earned);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, []);

  
  useEffect(() => {
    if (newCoins > 0) {
      console.log(`You earned ${newCoins} coins!`);
    }
  }, [newCoins]);

  return (
    <section>
      <h3>💰 Coin Balance: {coins}</h3>
      <p>Earned +{newCoins} coins just now</p>
    </section>
  );
}
