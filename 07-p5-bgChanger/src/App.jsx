import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <h1 className="text-white text-center text-lg">Project - BgChanger</h1>

        <div className="flex items-start space-x-4">
          <button onClick={()=>{setColor("black")}} className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 m-10 rounded border border-black">
            Defult
          </button>
          <button onClick={()=>{setColor("pink")}} className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 m-10 rounded border border-black">
            Pink
          </button>
          <button onClick={()=>{setColor("blue")}} className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 m-10 rounded border border-black">
            Blue
          </button>
          <button onClick={()=>{setColor("grey")}} className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 m-10 rounded border border-black">
            grey
          </button>
          <button onClick={()=>{setColor("red")}} className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 m-10 rounded border border-black">
            Red
          </button>
          <button onClick={()=>{setColor("yellow")}}className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 m-10 rounded border border-black">
            Yellow
          </button>
          <button onClick={()=>{setColor("teal")}}className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 m-10 rounded border border-black">
            Teal
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
