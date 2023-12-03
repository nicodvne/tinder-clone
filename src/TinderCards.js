import React from 'react'
import { useState, useEffect } from 'react'
import TinderCard  from 'react-tinder-card'
import "./TinderCards.css"
import database from './Firebase'
import { onSnapshot, collection, query } from "firebase/firestore"

function TinderCards() {

  const [people, setPeople] = useState([]);

  // Piece of code which runs based on a condition
  useEffect(() => {
    const q = query(collection(database, 'people'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        setPeople(querySnapshot.docs.map(doc => doc.data()))
    })

    return () => {
        // this is the cleanup
        unsubscribe();
    }
  }, [])
  
  return (
    <div>
        <div className='tinderCards__cardContainer'>
            {people.map((person) => (
                <TinderCard className='swipe'
                    key={person.name}
                    preventSwipe={['up', 'down']}
                >
                    <div className='card' 
                        style={{ backgroundImage: `url(${person.url})` }}
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    </div>
  )
}

export default TinderCards;