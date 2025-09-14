import { useEffect, useState } from "react";
import "./Converter.css";

function Converter() {
  const [selectVisible, setSelectVisible] = useState(false);
  const [systemSelect, setSystemSelect] = useState("");
  const [numberInput, setNumberInput] = useState("");
  const [convertedValue, setConvertedValue] = useState(null);

  const [numberA, setNumberA] = useState("");
  const [numberB, setNumberB] = useState("");
  const [operationResult, setOperationResult] = useState(null);

  useEffect(() => {
    const handleHideSystemSelect = () => setSelectVisible(false);
    if (selectVisible) {
      window.addEventListener("click", handleHideSystemSelect);
    } else {
      window.removeEventListener("click", handleHideSystemSelect);
    }
    return () => {
      window.removeEventListener("click", handleHideSystemSelect);
    };
  }, [selectVisible]);

  const isValidBase3 = (num) => [...num].every(char => "012".includes(char));

  const toDecimal = (num) => {
    let result = 0n;
    for (let char of num) {
      result = result * 3n + BigInt(char);
    }
    return result;
  };

  const fromDecimal = (num) => {
    if (num < 0n) return "-" + fromDecimal(-num);
    if (num === 0n) return "0";
    let res = "";
    while (num > 0n) {
      res = (num % 3n).toString() + res;
      num /= 3n;
    }
    return res;
  };

  // CONVERT
  const handleNumberInput = (e) => setNumberInput(e.target.value);

  const handleConvertButton = () => {
    if (!numberInput || !systemSelect) {
      alert("Введіть число і виберіть систему!");
      return;
    }
    if (systemSelect !== "base-3") {
      alert("Тут дозволено тільки base-3");
      return;
    }
    if (!isValidBase3(numberInput)) {
      alert("Невірне число — тільки 0,1,2");
      return;
    }
    setConvertedValue(toDecimal(numberInput).toString());
    setNumberInput("");
    setSystemSelect("");
  };

  // ADD / SUBTRACT
  const handleOperation = (type) => {
    if (!isValidBase3(numberA) || !isValidBase3(numberB)) {
      alert("У обох числах допускаються тільки 0,1,2");
      return;
    }
    const decA = toDecimal(numberA);
    const decB = toDecimal(numberB);
    const res = type === "add" ? decA + decB : decA - decB;
    setOperationResult(fromDecimal(res));
  };

  const handleSystemSelect = (e) =>
    setSystemSelect(e.currentTarget.dataset.value);

  const selectPlaceholderStyle = {
    color: systemSelect ? "#000" : "rgba(0, 0, 0, 0.4)",
  };

  return (
    <div className="container converter__container">
      <div className="converter__wrapper">
        <h1 className="converter__title">base switch converter</h1>

        {/* CONVERT */}
        <div className="converter__inputs">
          <div className="input__container">
            <input
              className="input__field"
              placeholder="Number..."
              type="text"
              value={numberInput}
              onChange={handleNumberInput}
            />
          </div>
          <div className="input__container select__relative">
            <div
              className="select__field"
              onClick={(e) => {
                e.stopPropagation();
                setSelectVisible(prev => !prev);
              }}
            >
              <p className="select__placeholder" style={selectPlaceholderStyle}>
                {systemSelect || "current number system"}
              </p>
            </div>
            {selectVisible && (
              <div className="select__options">
                <div
                  className="select__option"
                  data-value="base-3"
                  onClick={handleSystemSelect}
                >
                  <p className="select__option_title">base-3</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <button className="converter__btn" onClick={handleConvertButton}>
          convert
        </button>

        <div className="converter__results_container">
          <p className="converter__result_title">conversion result</p>
          <div className="converter__results">
            {convertedValue !== null && (
              <p className="converter__result">
                decimal: <b>{convertedValue}</b>
              </p>
            )}
          </div>
        </div>

        {/* OPERATIONS */}
        <h2 className="converter__title" style={{marginTop:"20px"}}>base-3 operations</h2>

        <div className="converter__inputs">
          <input
            className="input__field"
            placeholder="First number..."
            type="text"
            value={numberA}
            onChange={(e) => setNumberA(e.target.value)}
          />
          <input
            className="input__field"
            placeholder="Second number..."
            type="text"
            value={numberB}
            onChange={(e) => setNumberB(e.target.value)}
          />
        </div>

        <div className="converter__buttons">
          <button className="converter__btn" onClick={() => handleOperation("add")}>
            Add
          </button>
          <button className="converter__btn" onClick={() => handleOperation("sub")}>
            Subtract
          </button>
        </div>

        <div className="converter__results_container">
          <p className="converter__result_title">operation result</p>
          <div className="converter__results">
            {operationResult !== null && (
              <p className="converter__result">
                base-3: <b>{operationResult}</b>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Converter;