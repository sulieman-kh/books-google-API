import React from 'react';
import Books from './Books';



const Header = () =>  {
    return(
        <header>
            <i class="fas fa-book fa-2x"></i>
            <h1>Search for books</h1>
            <Books/>
        </header>

        )
    
}




export default Header;