import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [color, setColor] = useState('grey');

  return (
    <>
<Navbar />
      <div
        className=" h-screen duration-200 rounded-3xl p-4 m-4"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>setColor('red')} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'red'}}>Red</button>
          <button onClick={()=>setColor('green')} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'green'}}>Green</button>
          <button onClick={()=>setColor('blue')} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'blue'}}>Blue</button>
          <button onClick={()=>setColor('black')} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'black'}}>Black</button>

          <button onClick={()=>setColor('pink')} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'pink'}}>Pink</button>
          <button onClick={()=>setColor('skyblue')} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'skyblue'}}>Skyblue</button>
          <button onClick={()=>setColor('orange')} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'orange'}}>Orange</button>
          <button onClick={()=>setColor('yellow')} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:'yellow'}}>Yellow</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


