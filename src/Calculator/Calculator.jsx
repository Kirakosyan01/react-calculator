import { useState, useEffect } from "react";
import { View } from "./Components/View.jsx";
import { Tools } from "./Components/Tools.jsx";
import "./Css/Calculator.css";
import {NightMode} from './Components/NightMode.jsx';

export function Calculator() {
  const [currentValue, setCurrentValue] = useState("");
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [nightMode, setNightMode] = useState(false);

  const handleNumberClick = (value) => {
    if (currentValue === "0" && value !== ".") {
      setCurrentValue(value);
      return;
    }
    if (currentValue === "0" && value === "0") {
      return;
    }
    if (value === "." && currentValue.includes(".")) {
      return;
    }
    const num = parseFloat(currentValue);
    if (num > 999_999_999_999_999) {
      return;
    }
    setCurrentValue(currentValue + value);
  };

  const handleOperatorClick = (value) => {
    setOperator(value);
    setPrevValue(currentValue);
    setCurrentValue("");
  };

  const handleBackspace = () => { 
    setCurrentValue(currentValue.slice(0, -1));
};

const handleNightMode = () => {
  setNightMode(!nightMode)
}

  const handleCalculate = () => {
    if (prevValue !== null && operator && currentValue) {
      const num1 = prevValue;
      const num2 = currentValue;
      let result = 0;

      switch (operator) {
        case "+":
          result = +num1 + +num2;
          break;
        case "-":
          result = +num1 - +num2;
          break;
        case "*":
          result = +num1 * +num2;
          break;
        case "/":
          result = +num1 / +num2;
          break;
        case "%":
          result = (+num2 / 100) * +num1;
        default:
          break;
      }

      setCurrentValue(result.toString());
      setPrevValue(null);
      setOperator(null);
    }
  };

  const handleClear = () => {
    setCurrentValue("");
    setPrevValue(null);
    setOperator(null);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      const { key } = e;

      if (!isNaN(key) || key === ".") {
        handleNumberClick(key);
      } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        handleOperatorClick(key);
      } else if (key === "Enter") {
        handleCalculate();
      } else if (key === "Backspace") {
        handleBackspace();
      } else if (key === "Escape") {
        handleClear();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentValue, operator, prevValue]);

  return (
    <div className={nightMode ? 'calculator_main_nightMode' : 'calculator_main'}>
      < NightMode handleNightMode={handleNightMode}/>
      <div className="view_parent__div">
        <View
          currentValue={currentValue}
          prevValue={prevValue}
          operator={operator}
          nightMode={nightMode}
        />
      </div>
      <div className="tools_parent__div">
        <Tools
          onNumberClick={handleNumberClick}
          onOperatorClick={handleOperatorClick}
          onClear={handleClear}
          onCalculate={handleCalculate}
          handleBackspace={handleBackspace}
          nightMode={nightMode}
        />
      </div>
    </div>
  );
}
