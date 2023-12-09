import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";

function App() {
  

  return (
    <>
      <h1 className="bg-green-400 text-black p-5 rounded-xl mb-10">
        Tailwind Test
      </h1>

      <div className="flex items-center">
        <div className="px-10">
          <Card name ="Aniket chavan" education = "BTEch"/>
        </div>
        <div>
          <Card name = "Raj parit" education = "BTEch"/>
        </div>

        <div className="px-10">
          <Card name="sahil"/>
        </div>
      </div>
    </>
  );
}

export default App;
