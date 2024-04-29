import React from "react";
import "./BookCoverRant.css";

const BookCoverRant = ({ className }) => {
  return (
    <div className={`book-cover-rant ${className}`}>
      <div className="div" />
      <div className="text-wrapper">Title</div>
      <div className="text-wrapper-2">Author</div>
    </div>
  );
}

export default BookCoverRant