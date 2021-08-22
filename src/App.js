import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";
import Init from "./components/Init";
function App() {
  const [initVal, setInitVal] = useState(1);
  const [maxVal, setMaxVal] = useState(1000);
  const [initStep, setInitStep] = useState(true);
  
  const handleInitStep = () => {
    setInitStep(false);
  };
  const getInitVal = (val) => {
    setInitVal(val);
  };

  const getMaxVal = (val) => {
    setMaxVal(val);
  };

  return (
    <div className="App">
      <div className="container">
        {initStep ? (
          <Init
            getInitVal={getInitVal}
            getMaxVal={getMaxVal}
            handleInitStep={handleInitStep}
          />
        ) : (
          <Counter initVal={initVal} maxVal={maxVal} />
        )}
      </div>
    </div>
  );
}

export default App;
