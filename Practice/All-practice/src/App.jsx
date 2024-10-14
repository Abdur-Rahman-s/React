import { useState } from 'react'
import Counter from './Counter/count'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isHidden , setHidden] = useState(false);

  function selected(event) {
      setHidden(event.target.checked);
  }

  return (
      <>
      <div className="CardItem">
          <Counter/>
          {!isHidden && <Counter id="second-card" />}
      </div>
      <input type="checkbox" onChange={selected} id='has-selected'/><label htmlFor="has-selected">select and hide second counter</label>
    </>
  )
}

export default App
