import { useEffect, useState } from "react";
import "./App.css";

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
}

function App() {
  const [gameTime, setGameTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/game-time"
        );

        const data = await response.json();

        setGameTime(data.gameTime);
      } catch (error) {
        console.error(error);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const powerRune = 120 - (gameTime % 120);

  const bountyRune = 180 - (gameTime % 180);

  const wisdomRune =
    gameTime < 420
      ? 420 - gameTime
      : 420 - ((gameTime - 420) % 420);

  const tormentor =
    gameTime < 1200
      ? 1200 - gameTime
      : 0;
  
  const isPowerSoon = powerRune <= 15;

return (
  <div className="top-bar">
    <div className="objective">
      <img src="/icons/power-rune.webp" />
      <span style={{color: isPowerSoon ? "#00FF66" : "white"}}>{formatTime(powerRune)}</span>
    </div>

    <div className="objective">
      <img src="/icons/bounty-rune.webp" />
      <span style={{color: isPowerSoon ? "#00FF66" : "white"}}>{formatTime(bountyRune)}</span>
    </div>

    <div className="objective">
      <img src="/icons/wisdom.webp" />
      <span style={{color: isPowerSoon ? "#00FF66" : "white"}}>{formatTime(wisdomRune)}</span>
    </div>

    <div className="objective">
      <img src="/icons/tormentor.png" />
      <span style={{color: isPowerSoon ? "#00FF66" : "white"}}>{formatTime(tormentor)}</span>
    </div>
  </div>
);
}

export default App;