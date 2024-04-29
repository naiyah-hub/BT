import React from "react";
import "./LibraryBook.css";

function LibraryBook (){
  return (
    <div className='library-book'>
      <div className="book-cover" />
      <div className="overlap-group">
        <div className="text-wrapper-2">Title</div>
        <div className="text-wrapper-3">Author</div>
      </div>
      <div className="rectangle">This book is about...</div>
      <div className="text-wrapper-4">Description</div>
      <div className="text-wrapper-5">Tags:</div>
    </div>
  );
}

export default LibraryBook