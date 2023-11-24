import React, { Component } from 'react';
import SearchArea from './SearchArea';
import request from 'superagent';
import BooksList from './BooksList';
// import Select from 'react-select';


class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            sort: '',
            All: '',
            selectOptions: [],
            categories: [],
        }
    }


    searchBook = (event) => {
        event.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.state.searchField })
            .then((data) => {
                console.log(data);
                const cleanData = this.cleanData(data)
                this.setState({ books: cleanData })
                // console.log(cleanData)


            })
    }
    handleSearch = (event) => {
        this.setState({ searchField: event.target.value })
    }

    handleSort = (event) => {
        console.log(event.target.value);
        this.setState({ sort: event.target.value })
    }

    handleDescription = (event) => {
        console.log(event.target.value);
        this.setState({ description: event.target.value })
    }
    handleFilter = (event) => {
        this.setState({ categories: event.target.value })
    }
    cleanData = (data) => {
        const cleanedData = data.body.items.map((book) => {
            if (book.volumeInfo.hasOwnProperty('authors') === false) {
                book.volumeInfo['publishedDate'] = "";
            } else if (book.volumeInfo.hasOwnProperty('imageLinks') === false) {
                book.volumeInfo['imageLinks'] = { thumbnail: 'https://st4.depositphotos.com/14953852/24787/v/380/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg' }
            }
            return book;
        })

        // console.log(cleanedData);
        return cleanedData;
    }
    render() {
        const sortedBooks = this.state.books.sort((a, b) => {
            // console.log(b.volumeInfo.publishedDate)

            if (a.volumeInfo.publishedDate && b.volumeInfo.publishedDate) {
                if (this.state.sort === 'Newest') {
                    return parseInt(b.volumeInfo.publishedDate?.substring(0, 4)) - parseInt(a.volumeInfo.publishedDate.substring(0, 4))
                } else if (this.state.sort === 'Oldest') {
                    return parseInt(a.volumeInfo.publishedDate?.substring(0, 4)) - parseInt(b.volumeInfo.publishedDate.substring(0, 4))
                }
            }
        })
        const filterBooks = this.state.books.filter((b) => {
            if (b.volumeInfo.categories) {
                b.volumeInfo.categories.map((cat) => {
                    console.log(cat)
                    console.log(this.state.All)
                    if (this.state.All === 'Computers') {
                        return cat === 'Computers'
                    }
                    if (this.state.All === 'Music') {
                        return cat === 'Music'
                    }
                    if (this.state.All === 'Education') {
                        return cat === 'Education'
                    }
                    if (this.state.All === 'History') {
                        return cat === 'History'
                    }
                })
            }
        });

        console.log(filterBooks)


        return (
            <div>
                <SearchArea searchBook={this.searchBook}
                    handleSearch={this.handleSearch}
                    handleSort={this.handleSort}
                    handleDescription={this.handleDescription}
                    handleFilter={this.handleFilter}
                />
                <div className="book-list" > <BooksList books={sortedBooks}
                /></div>
                <div> <BooksList books={filterBooks}
                /></div>
            </div>
        );
    }
}
// let filterBook = categories.filter(function(e){
//     return e.startswith("C");
// })
// console.log(filterBook);



export default Books;