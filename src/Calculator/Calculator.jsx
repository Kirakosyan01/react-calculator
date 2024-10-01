import { useState } from "react";
import { View } from "./Components/View.jsx";
import { Tools } from "./Components/Tools.jsx";
import "./Css/Calculator.css";

export function Calculator() {
  const [currentValue, setCurrentValue] = useState("");
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (value) => {
    if (value === "." && currentValue.includes(".")) {
      return;
    }
    const num = parseFloat(currentValue);
    if (num > 999_999_999_999_999) {
      return alert("Sorry! Your number is too big");
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

  return (
    <div className="calculator_main">
      <div className="view_parent__div">
        <View
          currentValue={currentValue}
          prevValue={prevValue}
          operator={operator}
        />
      </div>
      <div className="tools_parent__div">
        <Tools
          onNumberClick={handleNumberClick}
          onOperatorClick={handleOperatorClick}
          onClear={handleClear}
          onCalculate={handleCalculate}
          handleBackspace={handleBackspace}
        />
      </div>
    </div>
  );
}
