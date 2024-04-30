import React from "react";

const BookCards = (props) =>{
    return(
        <div className="cards">
            <img src={props.image} alt="{props.title}" />
            <div className="book-descr">
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
                <p>{props.publishedDate}</p>
            </div>
        </div>
    )
}

export default BookCards