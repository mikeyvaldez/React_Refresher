import Hello from "./components/Hello";

export default function App() {
  // const seatNumbers = [1, 4, 7];
  const person = {
    name: "Rob",
    message: "Hi there!",
    seatNumbers: [1, 4, 7]
  }

  return (
    <div className="App">
      {/* <Hello name="Rob" message="Hi there!" seatNumbers={seatNumbers} /> */}
      <Hello person={person} />
    </div>
  );
}
