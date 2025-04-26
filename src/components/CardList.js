import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/cards')
      .then((res) => setCards(res.data))
      .catch(() => alert('Failed to fetch cards'));
  }, []);

  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <img src={card.photo} alt={card.name} width="100" />
          <h3>{card.name}</h3>
          <p>{card.place} - {card.genre}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;
