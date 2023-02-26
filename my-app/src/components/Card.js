import React, { useState } from 'react';
import './Card.css';

function Card(props) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
        props.onClick();
    };

    return (
        <div className="card-container" onClick={handleCardClick}>
            <div className={`card ${isFlipped ? 'flipped' : ''}`}>
                <div className="card-front">
                    <img src={props.frontImage} alt="card-front" />
                </div>
                <div className="card-back">
                    <img src={props.backImage} alt="card-back" />
                </div>
            </div>
        </div>
    );
}

export default Card;
