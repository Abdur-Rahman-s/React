import { useState } from 'react'
import './App.css'
import Memo from './Components/Memo'

function App() {
  const data = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape'];
  return (
    <>
      <Memo deta={data} />
    </>
  )
}

export default App
