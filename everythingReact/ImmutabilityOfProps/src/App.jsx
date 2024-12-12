import Hello from "./components/Hello";

// props are properties in a react component which is some data
// that can be passed to a component so that the component can be
// made dynamic

function App() {
  return (
    <div className="App">
      <Hello name="Mike" message="Hello there" />      
      
    </div>
  );
    
}

export default App;