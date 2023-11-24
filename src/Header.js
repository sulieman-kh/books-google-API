import React from 'react';
import Books from './Books';
import './App.css';


const Header = () => {
    return (
        <header>
            <i className="fas fa-book fa-2x"></i>
            <h1>Google Books API</h1>
            <Books />
        </header>
    );
};




export default Header;