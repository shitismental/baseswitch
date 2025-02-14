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

  const handleNumberInput = (e) => {
    setNumberInput(e.target.value);
  };

  const isValidNumber = (num, system) => {
    const allowedSymbols = {
      binary: "01",
      octal: "01234567",
      decimal: "0123456789",
      hexadecimal: "0123456789ABCDEF",
    };
    return num.split('').every(char => allowedSymbols[system].includes(char) || char === '.');
  };

  const getBase = (system) => {
    switch (system) {
      case "binary": return 2;
      case "octal": return 8;
      case "decimal": return 10;
      case "hexadecimal": return 16;
      default: return 10;
    }
  };

  const convertNumber = (num, system) => {
    if (!isValidNumber(num, system)) return null;
    const parsedNum = parseInt(num, getBase(system));
    if (isNaN(parsedNum)) return null;

    return {
      binary: parsedNum.toString(2),
      octal: parsedNum.toString(8),
      decimal: parsedNum.toString(10),
      hexadecimal: parsedNum.toString(16).toUpperCase(),
    };
  };

  const handleConvertButton = () => {
    if (!numberInput || !systemSelect) {
      alert("Введите число и выберите систему счисления");
      return;
    }
    if (!isValidNumber(numberInput, systemSelect)) {
      alert("Неверный ввод числа для выбранной системы");
      return;
    }
    
    setDefaultSystem(systemSelect);
    const result = convertNumber(numberInput, systemSelect);
    if (result) {
      setConvertedValues(result);
    }

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
