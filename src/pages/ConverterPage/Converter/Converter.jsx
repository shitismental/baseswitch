import { useEffect, useState } from "react"

import "./Converter.css"

function Converter() {

  // DISPLAY 
  const [selectVisible, setSelectVisible] = useState(false);

  // INPUTS
  const [numberInput, setNumberInput] = useState('');
  const [systemSelect, setSystemSelect] = useState('');

  // DATA
  const [defaultNumber, setDefaultNumber] = useState('');
  const [defaultSystem, setDefaultSystem] = useState('');

  useEffect(() => {
    const handleHideSystemSelect = () => {
      setSelectVisible(false);
      console.log("Set to false")
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

  const handleNumberInput = e => {
    setNumberInput(e.target.value)
  }

  const handleConvertButton = () => {
    if (numberInput != defaultNumber && systemSelect != defaultSystem) {
      setDefaultSystem(systemSelect);
      setDefaultNumber(numberInput);
    } else if (numberInput == defaultNumber || systemSelect == defaultSystem) {
      if (numberInput == defaultNumber && systemSelect != defaultSystem) {
        setDefaultSystem(systemSelect)
      } else if (numberInput != defaultNumber && systemSelect == defaultSystem) {
        setDefaultNumber(numberInput)
      } else {
        alert("The number and the system are the same.")
      }
    }
  }

  const handleSystemSelect = e => {
    setSystemSelect(e.currentTarget.dataset.value)
  }

  const selectPlaceholderStyle = {
    color: systemSelect ? "#000" : "#ccc",
  }

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
                setSelectVisible(prevSelectVisible => !prevSelectVisible)
              }}>
                <p className="select__placeholder" style={selectPlaceholderStyle}>{systemSelect ? systemSelect : "current number system"}</p>
              </div>
              {selectVisible &&
                <div className="select__options">
                  <div
                    className="select__option"
                    data-value="binary"
                    onClick={handleSystemSelect}
                  >
                    <p className="select__option_title" >binary</p>
                  </div>
                  <div
                    className="select__option"
                    data-value="octal"
                    onClick={handleSystemSelect}
                  >
                    <p className="select__option_title">octal</p>
                  </div>
                  <div
                    className="select__option"
                    data-value="decimal"
                    onClick={handleSystemSelect}
                  >
                    <p className="select__option_title">decimal</p>
                  </div>
                  <div
                    className="select__option"
                    data-value="hexadecimal"
                    onClick={handleSystemSelect}
                  >
                    <p className="select__option_title" >hexadecimal</p>
                  </div>
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
              <p className="converter__result">Number <b>{defaultNumber || 0}</b> in {defaultSystem || "undefined"} system (default): {defaultNumber || 0} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Converter