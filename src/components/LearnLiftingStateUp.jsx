import React from 'react'

export const LearnLiftingStateUp = (props) => {
const handleClick = () => {
   let dt="I am a child data";
   props.getdata(dt)
}
  return (
    <>
    <button onClick={handleClick}> Click me </button>
    </>
  )
}
