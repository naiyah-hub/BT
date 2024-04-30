import React from "react";
import BookCards from "./BookCards";
import { Col, Row } from "antd";
import "./BookList.css"

const BookList = (props) =>{
    return(
        <div className="List">
            {
                <Row gutter={32}>{
                props.books.map((book, i) =>{
                    return (
                        <Col lg={6} key={i}>
                        <BookCards 
                                key={i}
                                image={book.volumeInfo.imageLinks.thumbnail}
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.authors}
                                // published={book.volumeInfo.publishedDate}
                           
                        />
                        </Col>
                    )
                })

             }</Row>
            }

        </div>
    )

}

export default BookList