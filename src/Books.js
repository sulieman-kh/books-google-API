import React, { Component } from 'react';
import SearchArea from './SearchArea';
import request from 'superagent';
import BooksList from './BooksList';
// import Select from 'react-select';


class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            sort: '',
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
            
                
            })
    }
    handleSearch = (event) => {
        this.setState({ searchField: event.target.value })
    }
    
    handleSort = (event) => {
        console.log(event.target.value);
        this.setState({ sort: event.target.value })
    }
    // handleCategories = (event) => {
        //     console.log(event.target.value);
        //     this.setState({ categories: event.target.value })
        // }
        handleDescription = (event) => {
            console.log(event.target.value);
            this.setState({ description: event.target.value })
        }
        cleanData = (data) => {
            const cleanedData = data.body.items.map((book) => {
                if(book.volumeInfo.hasOwnProperty('authors') === false) {
                    book.volumeInfo['publishedDate'] =  "";
                } else if (book.volumeInfo.hasOwnProperty('imageLinks') === false) {
                    book.volumeInfo['imageLinks'] = { thumbnail: 'https://st4.depositphotos.com/14953852/24787/v/380/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg' }
                }
                return book;
            })
            
            return cleanedData;
        }
        // async getOptions(){
        //     let selected = [];
        //     const res = this.cleanData
        //     const val = res.val
        
        //     const options = val.map((item) => ({
        //         "value" : item.book.volumeInfo,
        //         "arr" : item.categories.includes(val)
        //     }))
        //     selected.push(val);
        //         this.setState({selectOptions: options})
        //     }        
        //     componentDidMount(){
        //         this.getOptions()
        //     }
        //     handleChange(e){
        //     this.setState({books:e.value, categories:e.arr})
        //     }
    render() {
        const sortedBooks = this.state.books.sort((a, b) => {
            if (this.state.sort === 'Newest') {
                return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4))
            } else if (this.state.sort === 'Oldest') {
                return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4))
            } 
        })


        
        // const filter = (arr, val) => {
        //     this.setState({ categories: val })
        //     let selected = [];
        //     arr.map((item) => {
        //         if (item.categories.includes(val)) {
        //             selected.push(item);
                    
        //         }
        //     });
            
        //     return this.setState({ books: selected})
        // };
        return(
            <div>
                <SearchArea searchBook={this.searchBook}
                            handleSearch={this.handleSearch} 
                            handleSort={this.handleSort} 
                            // handleCategories={this.handleCategories}
                            handleDescription={this.handleDescription}  />
                <div className="bookList"><BooksList books={sortedBooks}/></div> 
                {/* <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)}/>
                <p>You have selected <strong>{this.state.name}</strong> whose id is <strong>{this.state.id}</strong></p> */}
            </div>
            );    
        }
}



export default Books;