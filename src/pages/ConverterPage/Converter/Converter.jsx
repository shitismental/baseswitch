import { useEffect, useState } from "react";
import "./Converter.css";

function Converter() {
  const [selectVisible, setSelectVisible] = useState(false);
  const [numberInput, setNumberInput] = useState("");
  const [systemSelect, setSystemSelect] = useState("");
  const [convertedValues, setConvertedValues] = useState({});
  const [defaultSystem, setDefaultSystem] = useState("");

  useEffect(() => {
    const handleHideSystemSelect = () => {
      setSelectVisible(false);
    };

    if (selectVisible) {
      window.addEventListener("click", handleHideSystemSelect);
    } else {
      window.removeEventListener("click", handleHideSystemSelect);
    }

    return () => {
      window.removeEventListener("click", handleHideSystemSelect);
    };
  }, [selectVisible]);

  const DIGITS = "0123456789ABCDEF";
  const BASES = { binary: 2, octal: 8, decimal: 10, hexadecimal: 16 };

  const isValidNumber = (num, base) => {
    return [...num.toUpperCase()].every(char => DIGITS.slice(0, base).includes(char));
  };

  const toDecimal = (num, base) => {
    let result = 0n;
    for (let char of num.toUpperCase()) {
      result = result * BigInt(base) + BigInt(DIGITS.indexOf(char));
    }
    return result;
  };

  const fromDecimal = (num, base) => {
    let result = "";
    while (num > 0n) {
      result = DIGITS[Number(num % BigInt(base))] + result;
      num /= BigInt(base);
    }
    return result || "0";
  };

  const convertNumber = (num, fromBase, toBase) => {
    if (!isValidNumber(num, fromBase)) return null;
    return fromDecimal(toDecimal(num, fromBase), toBase);
  };

  const handleNumberInput = (e) => {
    setNumberInput(e.target.value);
  };

  const handleConvertButton = () => {
    if (!numberInput || !systemSelect) {
      alert("Введите число и выберите систему счисления");
      return;
    }
    const fromBase = BASES[systemSelect];
    if (!isValidNumber(numberInput, fromBase)) {
      alert("Неверный ввод числа для выбранной системы");
      return;
    }
    
    setDefaultSystem(systemSelect);
    const result = {};
    for (let [key, base] of Object.entries(BASES)) {
      result[key] = convertNumber(numberInput, fromBase, base);
    }
    setConvertedValues(result);

    setNumberInput("");
    setSystemSelect("");
  };

  const handleSystemSelect = (e) => {
    setSystemSelect(e.currentTarget.dataset.value);
  };

  const selectPlaceholderStyle = {
    color: systemSelect ? "#000" : "rgba(0, 0, 0, 0.4)",
  };

  return (
    <>
      <div className="container converter__container">
        <div className="converter__wrapper">
          <h1 className="converter__title">number system converter</h1>
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
              <div className="select__field" onClick={(e) => {
                e.stopPropagation();
                setSelectVisible(prevSelectVisible => !prevSelectVisible);
              }}>
                <p className="select__placeholder" style={selectPlaceholderStyle}>{systemSelect ? systemSelect : "current number system"}</p>
              </div>
              {selectVisible &&
                <div className="select__options">
                  {["binary", "octal", "decimal", "hexadecimal"].map((sys) => (
                    <div
                      key={sys}
                      className="select__option"
                      data-value={sys}
                      onClick={handleSystemSelect}
                    >
                      <p className="select__option_title">{sys}</p>
                    </div>
                  ))}
                </div>
              }
            </div>
          </div>
          <button
            className="converter__btn"
            onClick={handleConvertButton}
          >convert</button>
          <div className="converter__results_container">
            <p className="converter__result_title">conversion results</p>
            <div className="converter__results">
              {Object.entries(convertedValues).map(([system, value]) => (
                <p key={system} className="converter__result">
                  {system === defaultSystem ? `${system} (default)` : system}: <b>{value}</b>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Converter;
