import React from 'react';
// import Card from './Card'
import './App.css';



const BookCard = (props) => {
    return (
        <div className="card-container">
            <img className="card-image" src={props.image} alt="" />
            <div className="desc">
                {props.title.length > 50 ?
                    <h2>{(props.title).substring(0, 50) + '...'}</h2>
                    : <h2>{props.title}</h2>}
                {props.author ?
                    <h3>Authour: {props.author}</h3>
                    : ''}
                {props.categories ?
                    <h5>Categories: {props.categories}</h5>
                    : ''}
                {/* {props.publishedDate ?
                    <h5>{props.publishedDate}</h5>
                    : ''} */}
                <span>{props.published}
                </span>            </div>
        </div>
    )
};




export default BookCard; 