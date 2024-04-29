import React, {Component} from "react";
import SearchBar from "./components/SearchBar/SearchBar";
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
            .query({q: this.searchField})
            .then((data)=>{
                this.section({books: [...data.body.items]})
            })
    }

    handleSearch = (e) =>{
        this.setState({searchField: e.target.value})
    }

    render(){
        return(
            <div>
                <SearchBar searchBook={this.searchBook} handleSearch={this.handleSearch}></SearchBar>
            </div>
        )
    }
}

export default Book;
