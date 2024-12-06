"use client"

import { useState } from "react"

const State = () => {
    const [count ,setCount ] = useState(0) 
  return (
    <div>
      <p className="text-center p-40">MY COUNT IS: {count}</p> 
      <div className="text-center">
      <button onClick={() => setCount(count + 1 ) } className="bg-black text-white py-2 px-10 rounded-md " >INCREMENT</button> <br /><br /><br />
      <button onClick={() => setCount(0)} >RESET</button>
      </div>
    </div>
  )
}

export default State
