import { useState } from "react";

/* */
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}
function Steps() {
  /* STATE
     1. Add a new state var
     2. Use it in code (usu JSXJ)
     3. Update the state in an event handler
  */

  /*
     useState is a HOOK. HOOKS start with use
     can only use HOOKS this within the top level of a function i.e component level
     const [test, setTest] = useState({ name: "Zayra" });
     setTest({ name: "GBM" });
     really bad practice >> test.name = "Fred"
  */

  //deconstruction
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  /* start with handle as convenction for event handlers */
  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      //INCORRECT: setStep(step + 1);
      setStep((s) => s + 1); //this is considered a safe way to update state
    }
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((open) => !open)}>
        &times; {/* HTML entity to write an X*/}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {/*<div className={`$step >= 1 ? "active" : ""}>1</div>*/}
            <div className={step >= 1 && "active"}>1</div>
            <div className={step >= 2 && "active"}>2</div>
            <div className={step >= 3 && "active"}>3</div>
          </div>
          <p className="message">
            Step {step} : {messages[step - 1]}
            {/*{test.name}*/}
          </p>
          <div className="buttons">
            {/*EVENT LISTENER FN on element using the onClick PROP
           We just pass in function value don't CALL it*/}
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
