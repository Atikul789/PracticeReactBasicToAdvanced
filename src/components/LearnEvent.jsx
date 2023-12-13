import React from 'react'

export const LearnEvent = () => {
    const handleClick1 = (e) => {

    console.log("button clicked 1");
    }
    const handleClick2 = (myid) => {

        console.log("button clicked 2", myid);
        }
  return (
    <>
     <h1> LearnEvent </h1>
     <button onClick={handleClick1}> Click 1</button>
     <button onClick={(e) => handleClick2("myID")}> Click 2</button>
    </>
  )
}
