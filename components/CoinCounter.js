import { useState, useEffect } from "react";

export default function CoinCounter() {
  
  const [coins, setCoins] = useState(150);
  const [newCoins, setNewCoins] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const earned = Math.floor(Math.random() * 10) + 1;
      setNewCoins(earned);
      setCoins((prev) => prev + earned);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    if (newCoins > 0) {
      console.log(`You just earned ${newCoins} coins!`);
    }
  }, [newCoins]);

  return (
    <section>
      <h3>💰 Coin Balance: {coins}</h3>
      <p>Earned +{newCoins} coins just now</p>
    </section>
  );
}

