import { useState } from "react";

const Counter = () => {
  const [counterVal, setCounterVal] = useState(1);
  const [initVal, setInitVal] = useState(1);
  const [maxVal, setMaxVal] = useState(1000);
  const [initStep, setInitStep] = useState(true);

  const onChangeInitVal = (e) => {
    const val = parseInt(e.target.value) || 0;
    setInitVal(val);
    setCounterVal(val);
  };

  const onChangeMaxVal = (e) => {
    const val = parseInt(e.target.value) || 1000;
    setMaxVal(val);
  };

  const decrement = () => {
    if (counterVal === 0) {
      return false;
    } else setCounterVal(counterVal - 1);
  };

  const increment = () => {
    if (counterVal === maxVal) {
      return false;
    } else setCounterVal(counterVal + 1);
  };

  const onChangeVal = (e) => {
    const val = parseInt(e.target.value) || 0;
    if (val > maxVal) {
      return false;
    } else setCounterVal(val);
  };

  return (
    <div className="container">
      {initStep ? (
        <div className="initialization">
          <div className="init-value flex">
            <p>Set Initial Value</p>
            <input
              type="number"
              className="init-input"
              value={initVal}
              onChange={(e) => onChangeInitVal(e)}
            />
          </div>
          <div className="max-value flex">
            <p>Set Max Value</p>
            <input
              type="number"
              className="init-input"
              value={maxVal}
              onChange={(e) => onChangeMaxVal(e)}
            />
          </div>
          {maxVal < initVal ? (
            <p>Maximum Value cannot be less than initial value</p>
          ) : (
            <button className="init-button" onClick={() => setInitStep(false)}>
              Continue
            </button>
          )}
        </div>
      ) : (
        <div className="main-counter flex">
          <div
            className="child-flex flex-center button color-dark"
            onClick={() => decrement()}
          >
            -
          </div>
          <div className="child-flex bg-light border-middle flex-center">
            <input
              type="number"
              value={counterVal}
              className="counter-value input-reset"
              onChange={(e) => onChangeVal(e)}
            />
          </div>
          <div
            className="child-flex bg-dark flex-center button color-white"
            onClick={() => increment()}
          >
            +
          </div>
        </div>
      )}
    </div>
  );
};

export default Counter;
