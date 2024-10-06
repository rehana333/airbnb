import React from "react";
export default function Card(props) {
    return (
        <div className="card">
        {props.soldOut && <div className="card--badge">Sold Out</div>}
        <img
            src={props.img}
            alt="card"
            className="card--photo"
        />
        <h2 className="card--header">{props.header}</h2>
        <p className="card--text">
        {props.text1}
        </p>
        <p className="card--text">{props.text2}
        </p>
        </div>
    );
    }
