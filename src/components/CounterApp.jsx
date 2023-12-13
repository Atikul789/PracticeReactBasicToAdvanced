import React from 'react'
import { useState } from 'react'
export const CounterApp = () => {
 const [count, setCount] = useState(0)
 const handleCounter = () => {
 setCount(count+1)
 }
 const resetCounter = () => {
   setCount(0)
 }
  return (
    <>
    <h1> CounterApp </h1>
    <h1> Count: {count} </h1>
    <button onClick={handleCounter}> Increase Count</button>
    <button onClick={resetCounter}> Reset Count </button>
    </>
  )
}
