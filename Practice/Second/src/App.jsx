import { useState } from 'react'
import './App.css'
import Consumer from './ContextAPI/Consumer'
import Provider from './ContextAPI/Provider'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider>
      
      {/* <Consumer/> */}
    </Provider>
  )
}

export default App
