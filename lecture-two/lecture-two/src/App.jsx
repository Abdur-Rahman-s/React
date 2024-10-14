import { useState } from 'react'
import Counteritem from './Component/counter'
import StateLifting from './StateLifting/state'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counteritem/>
      <StateLifting/>
    </>
  )
}

export default App
