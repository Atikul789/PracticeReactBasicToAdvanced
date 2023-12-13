import React from 'react'
import { useState } from 'react'
export const LearnState = () => {
  const [num, setNum] = useState(5)
  console.log("number:", num);
  const handleNum = () => {
     {num = num + 1}
    setNum({num})
  }
  const [position, setPosition] = useState({x:1, y:2});
  console.log("posiiton", position);
  const handlePosition = () =>
  {
    setPosition({x:2, y:3 })
  }
  return (
    <>
    <h1> Number {num} </h1>
    <button onClick={handleNum}> Change Number</button>
    <h1> positon: {position.x} , {position.y} </h1>
    <button onClick={handlePosition}> Change Position</button>
    </>
  )
}
