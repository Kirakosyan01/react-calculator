import "../Css/Calculator.css";

export function Tools({
  onNumberClick,
  onOperatorClick,
  onClear,
  onCalculate,
  handleBackspace,
  nightMode
}) {
  return (
    <div className="tools_main">
      <div className="div__1">
        <button className={nightMode ? 'tools_number_nightMode gold_font' : 'tools_number'} onClick={onClear}>AC</button>
        <button className={nightMode ? 'tools_number_nightMode gold_font' : 'tools_number'} onClick={handleBackspace}>←</button>
        <button className={nightMode ? 'tools_number_nightMode gold_font' : 'tools_number'} onClick={() => onOperatorClick("/")}>&#247;</button>
        <button className={nightMode ? 'tools_number_nightMode gold_font' : 'tools_number'} onClick={() => onOperatorClick("%")}>%</button>
      </div>
      <div className="div__2">
        <button className={nightMode ? 'tools_number_nightMode' : 'tools_number'} onClick={() => onNumberClick("7")}>
          7
        </button>
        <button className={nightMode ? 'tools_number_nightMode' : 'tools_number'} onClick={() => onNumberClick("8")}>
          8
        </button>
        <button className={nightMode ? 'tools_number_nightMode' : 'tools_number'} onClick={() => onNumberClick("9")}>
          9
        </button>
        <button className={nightMode ? 'tools_number_nightMode gold_font' : 'tools_number'} onClick={() => onOperatorClick("*")}>
          &#215;
        </button>
      </div>
      <div className="div__3">
        <button className={nightMode ? 'tools_number_nightMode' : 'tools_number'} onClick={() => onNumberClick("4")}>
          4
        </button>
        <button className={nightMode ? 'tools_number_nightMode' : 'tools_number'} onClick={() => onNumberClick("5")}>
          5
        </button>
        <button className={nightMode ? 'tools_number_nightMode' : 'tools_number'} onClick={() => onNumberClick("6")}>
          6
        </button>
        <button className={nightMode ? 'tools_number_nightMode gold_font' : 'tools_number'} onClick={() => onOperatorClick("-")}>
          -
        </button>
      </div>
      <div className="div__4">
        <button className={nightMode ? 'tools_number_nightMode' : 'tools_number'} onClick={() => onNumberClick("1")}>
          1
        </button>
        <button className={nightMode ? 'tools_number_nightMode' : 'tools_number'} onClick={() => onNumberClick("2")}>
          2
        </button>
        <button className={nightMode ? 'tools_number_nightMode' : 'tools_number'} onClick={() => onNumberClick("3")}>
          3
        </button>
        <button className={nightMode ? 'tools_number_nightMode gold_font' : 'tools_number'} onClick={() => onOperatorClick("+")}>
          +
        </button>
      </div>
      <div className="div_5">
        <button className={nightMode ? 'tools_number_nightMode' : 'tools_number'} onClick={() => onNumberClick("0")}>0</button>
        <button className={nightMode ? 'tools_number_nightMode' : 'tools_number'} onClick={() => onNumberClick(".")}>.</button>
        <button className="tools_number1" onClick={onCalculate}>=</button>
      </div>
    </div>
  );
}
