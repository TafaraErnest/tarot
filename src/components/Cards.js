export default function Cards({ cards, flipCard }) {
  return (
    <div className="cards">
      {cards.map((card) => {
        return (
          <div className="scene" key={card.id}>
            <div
              className="card"
              id={card.rotate ? "is-flipped" : ""}
              onClick={() => flipCard(card.id)}
            >
              <div className="face front">
                <img src="./images/back.png" alt="" />
              </div>
              <div className="face back">
                <img src={`./images/img${card.number}.png`} alt="..." />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
