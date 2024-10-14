import 'bootstrap/dist/css/bootstrap.min.css';
import { DataFetcher } from './Components/Fetching/Fetch';
import { ChildA } from './Components/Contexts/ChildA';
import './App.css'
import { createContext, useContext, useState } from 'react';

// step one ----> create context
const userContext = createContext()
// step two ---> wrap all the child inside a provider
// step three ---> pass value
// setp four ----> consume korte hobe ! 

function App() {
  const [user , setUser] = useState
  ({Name : 'Abdur Rahman'})

  return (
    <>

      <userContext.Provider  value={user} >
        <ChildA/>
      </userContext.Provider>

      {/* <DataFetcher/> */}
      {/* <CountDouwnTimer/> */}
    </>
  )
}

export default App
export {userContext}
