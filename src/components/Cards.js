// flipCard
export default function Cards({ cards, flipCard, spinCard }) {
  return (
    <div className="cards">
      {cards.map((card) => {
        return (
          <div
            className="scene"
            key={card.id}
            id={spinCard && card.rotate ? "spinCard" : "spinAnti"}
          >
            <div
              className="card"
              id={card.flipped ? "is-flipped" : ""}
              onClick={() => flipCard(card.id)}
            >
              <div className="face front">
                <img src="./images/back.png" alt="" />
              </div>
              <div className="face back" id={card.rotate ? "rotate" : ""}>
                <img src={`./images/img${card.number}.png`} alt="..." />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
