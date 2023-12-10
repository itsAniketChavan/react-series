import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(1);

  const addValue = () => {
    if (count >= 0) {
       
    //   setCount(count + 1);
    //   setCount(count + 1);
    //   setCount(count + 1);

    // Here suppose we do like this then values donot increament direclty by 4, it remains work as it is.


    setCount((counter) => counter+1);
    setCount((counter) => counter+1);
    setCount((counter) => counter+1);
    setCount((counter) => counter+1);
    

    }
  };

  const removeValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const setToZero = () => {
    setCount(0);
  };

  return (
    <>
      <h3>Project no -1 </h3>
      <h3>Counter Values </h3>
      <h2>The Value = {count}</h2>

      <button onClick={addValue}>Add Value </button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <br />
      <br />
      <button onClick={setToZero}>Set to Zero</button>
    </>
  );
}

export default App;
