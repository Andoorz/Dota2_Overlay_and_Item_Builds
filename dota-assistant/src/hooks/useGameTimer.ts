import { useEffect, useState } from "react";

export function useGameTimer() {
  const [gameTime, setGameTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGameTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return gameTime;
}