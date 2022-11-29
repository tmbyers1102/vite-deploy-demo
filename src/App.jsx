import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Item from './Other/Item'
import HomeTitle from './Components/HomeTitle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <>
          <Item />
          <HomeTitle />
        </>
        
    </div>
  )
}

export default App
