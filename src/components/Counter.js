import { useState } from "react";

const Counter = (props) => {
  const maxVal = props.maxVal;
  const [counterVal, setCounterVal] = useState(props.initVal);

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
  );
};

export default Counter;
