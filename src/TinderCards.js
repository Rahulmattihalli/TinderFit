import React from 'react';
import {useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css'
import database from './firsbase'

const TinderCards = ()=>{

    const [people, setPeople] = useState([{
        name:"Karthik M B",
        url:"https://i.ibb.co/VLCQc53/IMG-20180307-1839353.jpg"
    },
    {
        name:"Darshan DT",
        url:"https://i.ibb.co/85197JX/IMG-20180414-2035247.jpg"
    },
    {
        name:"Harshith Baba",
        url:"https://i.ibb.co/p007THX/IMG-20181101-1733399.jpg"
    }
    
])

      

    return(
        <div>
          

        <div className="CardContainer">
          {people.map(people=>{

              return <TinderCard className="tinder" key={people.name} preventSwipe={['up','down']}>
                  <div  style={{backgroundImage : `url(${people.url})`}} className="card">

          <h3>{people.name}</h3>

                  </div>
              </TinderCard>
          })}
          </div>
        </div>
    )
}
export default TinderCards;