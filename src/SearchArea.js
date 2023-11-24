import React from 'react';
import './App.css';




const SearchArea = (props) => {
    return (
        <div className="search-area">
            <form onSubmit={props.searchBook} action="">
                <input onChange={props.handleSearch} type="text" />
                <button className="sub" type="submit">Search</button>
                <select defaultValue="Sort" onChange={props.handleSort}>
                    <option disabled value="Sort">Sort</option>
                    <option value="Newest">Newest</option>
                    <option value="Oldest">Oldest</option>
                </select>

                {/* <select defaultValue="Categories" onChange={props.handleFilter}>
                    <option disabled value="All">All</option>
                    <option value="Art">Art</option>
                    <option value="Biography">Biography</option>
                    <option value="Computers">Computers</option>
                    <option value="History">History</option>
                    <option value="Medical">Medical</option>
                    <option value="Poetry">Poetry</option>
                    <option value="Education">Education</option>
                    <option value="Music">Music</option>
                </select> */}
            </form>
            {/*<div className="load-more">
                <button onClick={()=>this.props.loadMore( )}>Load More</button>
    </div>*/}
        </div>
    )
}




export default SearchArea;