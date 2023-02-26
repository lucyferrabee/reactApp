import React, { useState } from 'react';
import Board from './components/Board';
import './App.css';

function App() {
    const [cards, setCards] = useState([
        { image: './image1.jpg', isMatched: false },
        { image: 'image2.jpg', isMatched: false },
        { image: 'image3.jpg', isMatched: false },
        { image: 'image4.jpg', isMatched: false },
    ]);

    let flippedCards = [];

    function handleCardClick(event) {
        const target = event.currentTarget;

        if (target.classList.contains('matched')) {
            return;
        }

        flipCard(target);

        if (flippedCards.length === 0) {
            flippedCards.push(target);
        } else {
            const currentCard = target;
            const previousCard = flippedCards[0];

            if (currentCard.dataset.framework === previousCard.dataset.framework) {
                currentCard.classList.add('matched');
                previousCard.classList.add('matched');
                flippedCards = [];
            } else {
                setTimeout(() => {
                    currentCard.classList.toggle('card-flipped');
                    previousCard.classList.toggle('card-flipped');
                    flippedCards = [];
                }, 1000);
            }
        }
    }

    function flipCard(card) {
        card.classList.add('flipped');
    }

    return (
        <div className="App">
            <Board cards={cards} backImage="./card-back.jpg" onClick={handleCardClick} />
        </div>
    );
}

export default App;
