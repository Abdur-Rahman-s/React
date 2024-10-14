import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './Component/Second/Home';
import Contract from './Component/Second/Contract';
import Product from './Component/Second/Product';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}  />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
