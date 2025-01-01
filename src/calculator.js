import React, { useState } from "react";
import "./calculator.css";

function Calculator() {
  let [input, setInput] = useState("");

  function handleClick(value) {
    setInput(input + value);
  }

  function calculate() {
    try {
      // Using Function constructor instead of eval for safer evaluation
      let result = new Function("return " + input)();
      setInput(result.toString());
    } catch (error) {
      alert("Invalid input");
      setInput(""); // Clear input on error
    }
  }

  function handleClear() {
    setInput("");
  }

  function handleDel() {
    setInput((prev) => (prev.length > 1 ? prev.slice(0, -1) : ""));
  }

  return (
    <div className="calculator">
      <input
        type="text"
        className="display"
        value={input}
        readOnly
        placeholder="With React"
      />
      <div className="keypad">
        <button className="key action ac" onClick={handleClear}>
          AC
        </button>
        <button className="key action delete" onClick={handleDel}>
          DEL
        </button>
        <button className="key operator" onClick={() => handleClick("/")}>
          ÷
        </button>
        <button className="key" onClick={() => handleClick("7")}>
          7
        </button>
        <button className="key" onClick={() => handleClick("8")}>
          8
        </button>
        <button className="key" onClick={() => handleClick("9")}>
          9
        </button>
        <button className="key operator" onClick={() => handleClick("*")}>
          ×
        </button>
        <button className="key" onClick={() => handleClick("4")}>
          4
        </button>
        <button className="key" onClick={() => handleClick("5")}>
          5
        </button>
        <button className="key" onClick={() => handleClick("6")}>
          6
        </button>
        <button className="key operator" onClick={() => handleClick("-")}>
          −
        </button>
        <button className="key" onClick={() => handleClick("1")}>
          1
        </button>
        <button className="key" onClick={() => handleClick("2")}>
          2
        </button>
        <button className="key" onClick={() => handleClick("3")}>
          3
        </button>
        <button className="key operator" onClick={() => handleClick("+")}>
          +
        </button>
        <button className="key zero" onClick={() => handleClick("0")}>
          0
        </button>
        <button className="key" onClick={() => handleClick(".")}>
          .
        </button>
        <button className="key action equals" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
