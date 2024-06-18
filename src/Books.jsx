import React, {Component} from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import BookList from "./BookList";
import request from "superagent";

class Book extends Component{
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    }

    searchBook = (e) =>{
        e.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({q: this.state.searchField })
            .then((data)=>{
                // console.log(data);
                this.setState({books: [...data.body.items]})
            })
    }

    handleSearch = (e) =>{
        console.log(e.target.value);
        this.setState({searchField: e.target.value})
    }


    render(){
        return(
            <div>
                {/* <SearchBar searchBook={this.searchBook} handleSearch={this.handleSearch}></SearchBar> */}
                <SearchBar searchBook={this.searchBook} handleSearch={this.handleSearch}/>
                <BookList books={this.state.books}/>
            </div>
        );
    }
}

export default Book;
