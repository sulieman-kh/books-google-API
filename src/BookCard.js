import React from 'react';
// import Card from './Card'



const BookCard =  (props) => {
    return(
        <div className="card-container">
            <img className="card-image" src={props.image} alt=""/>
            <div className="desc">
                <h2>Book: {props.title}</h2>
                <h3>Authour: {props.author}</h3>
                <h5>Categories: {props.categories}</h5>
            
            </div>
        </div>
    ) 
}




export default BookCard; 