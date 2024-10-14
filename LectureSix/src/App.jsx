import { memo, useState } from 'react'
import './App.css'
import Construntor from "./Components/constructor"
import { Counter } from './Components/Memo';
import Useref from './Components/Useref';



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Counter/> */}
      {/* <Construntor/> */}
      <Counter/>
      {/* <Useref/> */}
    </>
  )
}

export default App
