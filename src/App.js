import { useEffect, useState, useCallback } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(0);

  const incrementCounter = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  const pauseCounter = () => {
    clearTimeout(timer);
  };

  const startCounter = () => {
    startInterval();
  };

  const resetCounter = () => {
    setCounter(0);
    clearTimeout(timer);
  };

  const startInterval = useCallback(() => {
    let timer = setTimeout(function () {
      incrementCounter();
    }, 1000);
    console.log("created", timer);
    setTimer(timer);
  }, [incrementCounter]);

  useEffect(() => {
    if (counter > 0) startInterval();
    return () => {
      console.log("cleared", timer || "Nothing");
      timer && clearTimeout(timer);
    };
  }, [counter, startInterval]);

  return (
    <div className="App">
      <div>{counter}</div>
      <br />
      <button onClick={startCounter}>Start</button>
      <br />
      <br />
      <br />
      <button onClick={pauseCounter}>Pause</button>
      <br />
      <br />
      <br />
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}
