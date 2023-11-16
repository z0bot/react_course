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

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleAdd() {
    setCount((c) => c + step);
  }

  function handleSubtract() {
    setCount((c) => c - step);
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
        <span>
          <button onClick={handleSubStep}> - </button>
          &nbsp; Step: {step} &nbsp;
          <button onClick={handleAddStep}> + </button>
        </span>
      </div>
      <div>
        <span>
          <button onClick={handleSubtract}> - </button>
          &nbsp; Count: {count} &nbsp;
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
    </div>
  );
}
