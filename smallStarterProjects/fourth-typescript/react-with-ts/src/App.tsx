import "./App.css";
import { useState } from "react";
import Modal from "./components/Modal";

export interface Gift {
  id: string;
  image: string;
  name: string;
  value: number;
}

function App() {
  const [showModal, setShowModal] = useState(false);
  const [gifts, setGifts] = useState<Gift[]>([]);

  const handleOpen = () => setShowModal(true)
  const handleClose = () => setShowModal(false)
  const handleSave = (gift: Gift) => {
    setGifts([...gifts, gift])
  }

  return (
    <div className="App">
      <h1>My Birthday Gifts</h1>
      { showModal && <Modal onClose={handleClose} onSave={handleSave} /> }
      <div className="cards">
        <button onClick={handleOpen} >Add a Gift</button>
      </div>
      <div className="cards-gift">
        {gifts.map((gift) => (
          <div className="card-gift" key={gift.id}>
            <img src={gift.image} alt="" />
            <h1>{gift.name}</h1>
            <p>${gift.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;