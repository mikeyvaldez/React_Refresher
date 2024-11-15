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