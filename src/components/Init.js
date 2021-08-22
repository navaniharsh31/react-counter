import { useState } from "react";

const Init = (props) => {
  const [initVal, setInitVal] = useState(1);
  const [maxVal, setMaxVal] = useState(1000);
  
  const onChangeInitVal = (e) => {
    const val = parseInt(e.target.value) || 0;
    setInitVal(val);
    props.getInitVal(val);
  };

  const onChangeMaxVal = (e) => {
    const val = parseInt(e.target.value) || 1000;
    setMaxVal(val);
    props.getMaxVal(val);
  };
  return (
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
        <button
          className="init-button"
          onClick={() => props.handleInitStep(false)}
        >
          Continue
        </button>
      )}
    </div>
  );
};

export default Init;
