import { useState } from 'react'
import './App.css'
import MemoHook from './components/MemoHook'
// import SignUpToNewsLetter from './components/SignUpToNewsLetter'
// import MagicNumber from './components/MagicNumber'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <MagicNumber />       */}
      {/* <SignUpToNewsLetter /> */}
      <MemoHook />
    </>
  )
}

export default App
