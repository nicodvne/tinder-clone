import React from 'react'
import { useState } from 'react'
import TinderCard  from 'react-tinder-card'
import "./TinderCards.css"

function TinderCards() {

  const [people, setPeople] = useState([
    {
        name: "steve jobs",
        url: 'https://hips.hearstapps.com/hmg-prod/images/apple-ceo-steve-jobs-speaks-during-an-apple-special-event-news-photo-1683661736.jpg?crop=0.800xw:0.563xh;0.0657xw,0.0147xh&resize=1200:*'
    },
    {
        name: 'mark zukerberg',
        url: 'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/3/6/0/36006517b2_50166642_mz.jpg'
    }
  ]);

  
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