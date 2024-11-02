import { useState } from 'react'
import './App.css'
import MagicNumber from './components/MagicNumber'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MagicNumber />      
    </>
  )
}

export default App
