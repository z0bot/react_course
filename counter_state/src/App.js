import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [rangeValue, setRangeValue] = useState(1); //controlled element
  const [showReset, setShowReset] = useState(false);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleAdd() {
    setShowReset(true);
    setCount((c) => c + rangeValue);
  }

  function handleSubtract() {
    setShowReset(true);
    setCount((c) => c - rangeValue);
  }

  function handleReset() {
    setCount(0);
    setRangeValue(1);
    setShowReset(false);
  }

  function handleAddStep() {
    setStep((s) => s + 1);
  }
  function handleSubStep() {
    setStep((s) => s - 1);
  }

  return (
    <div>
      <div>
        {/*<span>
          <button onClick={handleSubStep}> - </button>
          &nbsp; Step: {step} &nbsp;
          <button onClick={handleAddStep}> + </button>
        </span>*/}
        <input
          type="range"
          min={1}
          max={10}
          value={rangeValue}
          onChange={(e) => {
            setShowReset(true);
            setRangeValue(Number(e.target.value));
          }}
        />
        {rangeValue}
      </div>
      <div>
        <span>
          {/*
          <button onClick={handleSubtract}> - </button>
          &nbsp; Count: {count} &nbsp;
          <button onClick={handleAdd}> + </button>
            */}
          <button onClick={handleSubtract}> - </button>
          <input
            type="text"
            value={count}
            onChange={(e) => {
              setShowReset(true);
              setCount(Number(e.target.value));
            }}
          ></input>
          <button onClick={handleAdd}> + </button>
        </span>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {showReset && <button onClick={handleReset}>Reset</button>}
    </div>
  );
}
