import React from 'react';
import BookCard from './BookCard';

const BooksList = (props) => {
    return(
        <div className="list">
            {
                props.books.map((book, i) => {
                    return <BookCard
                            key={i}
                            image={book.volumeInfo.imageLinks.thumbnail}
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors}
                            // published={book.volumeInfo.publishedDate}
                            categories={book.volumeInfo.categories}
                            description={book.volumeInfo.description}
                        />
                })
            }
        </div>
    ) 
}




export default BooksList;