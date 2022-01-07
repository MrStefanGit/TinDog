import React, { useState, useEffect } from 'react';
import TinderCard from "react-tinder-card";
import database from "./firebase";
import './Cards.css';




function Cards() {
    // console.log("cards.js")
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        database.collection('dogs').onSnapshot(snapshot => (setDogs(snapshot.docs.map(doc => doc.data()))));
    }, []);
    

    

    return (
        <div className="Cards">
            <div className="cards_cardContainer">
                {dogs.map((dog) => (
                    <TinderCard
                        className="swipe"
                        key={dog.name}
                        preventSwipe={['up', 'down']}
                    >
                        <div 
                            className="card" 
                            style={{ backgroundImage: `url(${dog.url})` }}
                        >
                            <h3>{dog.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default Cards
