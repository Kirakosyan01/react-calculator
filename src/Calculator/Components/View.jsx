import "../Css/Calculator.css";

export function View({ currentValue, prevValue, operator }) {
  const operatorPretier = () => {
    switch (operator) {
      case "/":
        return "÷";
      case "*":
        return "×";
      case "+":
        return "+";
      case "-":
        return "-";
      default:
        return operator;
    }
  };

  return (
    <div className="view_main">
      <h2 className="view_current">{currentValue || "0"}</h2>
      <div className="view_prev">
        {prevValue && `${prevValue} ${operatorPretier()} ${currentValue}`}
      </div>
    </div>
  );
}
