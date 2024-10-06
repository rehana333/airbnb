import React from 'react';
import Card from './Card';
import star1 from '../images/star1.png';
import star2 from '../images/star2.png';
import star3 from '../images/star3.png';
export default function Main(){
    return (
        <main className="cards">
            <Card 
            img={star1}
            header="5.0 (6) USA"
            text1="Life lessons with Katie Zaferes"
            text2="From $136 / person"
            soldOut={true}
            />
            <Card 
            img={star2}
            header="5.0 (30) USA"
            text1="Learn wedding photography"
            text2="From $125 / person"
            soldOut={false}
            />
            <Card 
            img={star3}
            header="4.8 (2) USA"
            text1="Group Mountain Biking"
            text2="From $50 / person"
            soldOut={false}
            />
        </main>

    )
}
