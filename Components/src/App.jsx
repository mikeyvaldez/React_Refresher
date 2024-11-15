
// we use capital letters for components to distinguish the difference 
// between an html tag and a component
// components give reusability in react which reduces the amount of code needed.

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
