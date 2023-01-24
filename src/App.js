import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards";

export default function App() {
  const [cards, setCards] = useState([]);
  const [spinCard, setSpinCard] = useState(false);

  const generate = () => {
    const arr = [];
    for (let i = 0; i < 9; i++) {
      arr.push({
        id: nanoid(),
        number: Math.ceil(Math.random() * 78),
        rotate: Math.random() > 0.5 ? true : false,
        flipped: false,
      });
    }
    return arr;
  };

  useEffect(() => {
    setCards(generate());
  }, []);

  const flipCard = (id) => {
    setCards(
      cards.map((card) => {
        if (card.id === id && !card.flipped) {
          return { ...card, flipped: true };
        } else if (card.id === id && card.flipped) {
          return { ...card, flipped: false };
        } else return card;
      })
    );
  };

  return (
    <main className="page">
      {/* <h2 className="title">Yuan Tarot</h2> */}
      <Cards cards={cards} flipCard={flipCard} spinCard={spinCard} />
      <button
        onClick={() => {
          setCards(generate());
          setSpinCard(true);
        }}
      >
        Shuffle Cards
      </button>
    </main>
  );
}
