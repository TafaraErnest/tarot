import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards";

export default function App() {
  const [cards, setCards] = useState([]);

  const generate = () => {
    const arr = [];
    for (let i = 0; i < 9; i++) {
      arr.push({
        id: nanoid(),
        number: Math.ceil(Math.random() * 78),
        rotate: false,
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
        if (card.id === id && !card.rotate) {
          return { ...card, rotate: true };
        } else if (card.id === id && card.rotate) {
          return { ...card, rotate: false };
        } else return card;
      })
    );
  };

  return (
    <main>
      <Cards cards={cards} flipCard={flipCard} />
    </main>
  );
}
