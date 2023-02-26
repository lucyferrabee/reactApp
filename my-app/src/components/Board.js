import Card from "./Card";

function Board(props) {
    const { cards, backImage, onClick } = props;

    return (
        <div className="board">
            {cards.map((card, index) => (
                <Card key={index} image={card.image} backImage={backImage} onClick={onClick} />
            ))}
        </div>
    );
}



export default Board;
