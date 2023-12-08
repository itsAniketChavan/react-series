import { useState } from "react";
import "./App.css";

function App() {

  let [stateName, setStateName] = useState("Not Selected")

  const setValues = (event) =>{

    setStateName(event.target.value)
  }

  return (
    <>
      <h3>project - 4</h3>
      <h2>Display the dropdown selected values to the statement</h2>

      <br />
      <h2>The State Selected = {stateName}</h2>

      <select onChange={setValues}>

        <option value="None">--Not selected --</option>
        <option value="Maharastra">Mahastra</option>
        <option value="Goa">Goa</option>
        <option value="Karnataka">Karnataka</option>
      </select>
    </>
  );
}

export default App;
