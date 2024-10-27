import Header from "../components/Header"
import CardList from "../components/CardList"


export default function HomePage() {
  return (
    <div className="App">
      <main className="main_container">
        <Header />
        <CardList />
      </main>
    </div>
  );
}
