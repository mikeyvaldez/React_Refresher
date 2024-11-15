
// we use capital letters for components to distinguish the difference 
// between an html tag and a component

import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Hello />         {/*components can be self closing or have a separate closing tag */}
      <Hello></Hello>
    </div>
  );
    
}

export default App
