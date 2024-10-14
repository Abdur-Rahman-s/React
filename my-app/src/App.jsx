import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyCard from './component/card.jsx'
import ImageOne from './assets/ImageOne.jpg'
import Imagetwo from './assets/Imagetwo.jpg'
import Imagethre from './assets/Imagethre.jpg'

import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='container'>
        <MyCard name="Shakil" iamge={ImageOne} />
        <MyCard name="Shanto" iamge={Imagetwo} />
        <MyCard name="Abdur rahman" iamge={Imagethre} />
      </div>
    </>
  )
}

export default App;
