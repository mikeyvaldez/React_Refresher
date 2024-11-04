import { useState } from "react";
import "./App.css";
// import MemoHook from './components/MemoHook'
// import Parent from "./components/Memo/Parent";
// import SignUpToNewsLetter from './components/SignUpToNewsLetter'
// import MagicNumber from './components/MagicNumber'
import List from "./components/Zoo/List";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <MagicNumber />       */}
      {/* <SignUpToNewsLetter /> */}
      {/* <MemoHook /> */}
      {/* <Parent /> */}
      <List />
    </>
  );
}

export default App;
