import { useState } from "react"

import "./Converter.css"

function Converter() {

  const [currentNumber, setCurrentNumber] = useState(2);
  const [currentSystem, setCurrentSystem] = useState('binary')

  return (
    <>
      <div className="container converter__container">
        <div className="converter__wrapper">
          <h1 className="converter__title">number system converter</h1>
          <div className="converter__inputs">
            <div className="input__container">
              <input className="input__field" placeholder="Number..." type="text" />
            </div>
            <div className="input__container">
              <input className="input__field" placeholder="Current System..." type="text" />
            </div>
          </div>
          <button className="converter__btn">convert</button>
          <div className="converter__results_container">
            <p className="converter__result_title">conversion results</p>
            <div className="converter__results">
              <p className="converter__result">Number <b>{currentNumber}</b> in {currentSystem} (default): {currentNumber} </p>
              <p className="converter__result">Number <b>{currentNumber}</b> in {currentSystem} (default): {currentNumber} </p>
              <p className="converter__result">Number <b>{currentNumber}</b> in {currentSystem} (default): {currentNumber} </p>
              <p className="converter__result">Number <b>{currentNumber}</b> in {currentSystem} (default): {currentNumber} </p>
              <p className="converter__result">Number <b>{currentNumber}</b> in {currentSystem} (default): {currentNumber} </p>
              <p className="converter__result">Number <b>{currentNumber}</b> in {currentSystem} (default): {currentNumber} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Converter