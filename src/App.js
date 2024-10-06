import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './styles.css'
import Hero from './components/Hero';
export default function App(){
    return (
        <div>
            <Navbar />
            <Hero />
            <Main />
        </div>
    )
}
