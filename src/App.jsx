import { LearnComponent } from "./components/LearnComponent"
import { LearnEvent } from "./components/LearnEvent"
import { LearnJSX } from "./components/LearnJSX"
import { LearnProps } from "./components/LearnProps"
import { LearnLiftingStateUp } from "./components/LearnLiftingStateUp"
import { LearnState } from "./components/LearnState"
import { CounterApp } from "./components/CounterApp"

function App() {
  let roll = "101"
  const getData = (data) =>
  {
     console.log(data);
  }
  return (
    <>
     <LearnComponent/>
     <LearnJSX/>
     <LearnProps name="Atikul Islam" roll={roll} />
     <LearnEvent/>
     <LearnLiftingStateUp getdata={getData}/>
     <LearnState/>
     <CounterApp/>
    </>
  )
}

export default App
