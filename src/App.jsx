import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <div >
        <form name="calculadora" onSubmit={handleSubmit} className='bg-blue-950 border-e-8 border-b-8 border-black  p-2 rounded-xl max-w-xs m-auto  '>
          <div>
            <input className='bg-gray-900 rounded-xl col-span-full text-right text-white text-xl py-5 pr-5 overflow-hidden border-s-4 border-t-4 border-gray-950' type="text" value={count} onChange={(e) => { setCount(e.target.value) }} />
          </div>
          <div className='grid grid-cols-4 gap-y-8 gap-x-2 my-4'>
            <button id="c" className="btn  border-e-4 border-b-4 border-black text-white " onClick={(e) => { setCount("") }}>
              C
            </button>
            <button id="borrar" className="btn  border-e-4 border-b-4 border-black text-white " onClick={(e) => { setCount(count.slice(0, -1)) }} >
              ←
            </button>
            <button className="btn  border-e-4 border-b-4 border-black text-white " onClick={(e) => { setCount(count + "/") }} >/</button>
            <button className="btn  border-e-4 border-b-4 border-black  text-white " onClick={(e) => { setCount(count + "*") }}>*</button>

            <button className="btn  border-e-4 border-b-4 border-black text-white " onClick={(e) => { setCount(count + "7") }}>7</button>
            <button className="btn  border-e-4 border-b-4 border-black text-white " onClick={(e) => { setCount(count + "8") }}>8</button>
            <button className="btn  border-e-4 border-b-4 border-black text-white " onClick={(e) => { setCount(count + "9") }}>9</button>
            <button className="btn  border-e-4 border-b-4 border-black text-white" onClick={(e) => { setCount(count + "-") }}>-</button>

            <button className="btn  border-e-4 border-b-4 border-black text-white " onClick={(e) => { setCount(count + "4") }}>4</button>
            <button className="btn  border-e-4 border-b-4 border-black text-white " onClick={(e) => { setCount(count + "5") }}>5</button>
            <button className="btn  border-e-4 border-b-4 border-black text-white " onClick={(e) => { setCount(count + "6") }}>6</button>
            <button className="btn  border-e-4 border-b-4 border-black text-white " onClick={(e) => { setCount(count + "+") }}>+</button>

            <button className="btn  border-e-4 border-b-4 border-black text-white " onClick={(e) => { setCount(count + "1") }}>1</button>
            <button className="btn  border-e-4 border-b-4 border-black text-white " onClick={(e) => { setCount(count + "2") }}>2</button>
            <button className="btn  border-e-4 border-b-4 border-black text-white " onClick={(e) => { setCount(count + "3") }}>3</button>
            <button
              id="igual"
              className="btn row-span-2 bg-green-800 hover:bg-green-700 me-1 border-e-4 border-b-4 border-gray-950  text-white"
              onClick={(e) => setCount(eval(count))}
            >
              =
            </button>

            <button id="cero" className="btn  border-e-4 border-b-4 border-black text-white " onClick={(e) => { setCount(count + "0") }}>
              0
            </button>
            <button className="btn  border-e-4 border-b-4 border-black text-white " onClick={(e) => { setCount(count + ".") }}>.</button>
            <button className="btn  border-e-4 border-b-4 border-black text-white " onClick={(e) => { setCount(count + "00") }}>00</button>
          </div>
        </form >
      </div >
    </>
  )
}

export default App
