import React from "react";
import "./AddTag.css";

const AddTag = ({ className, tagCircleClassName }) => {
  return (
    <div className={`add-tag ${className}`}>
      <div className={`tag-circle ${tagCircleClassName}`} />
      <div className="text-wrapper-19">Add Themes</div>
    </div>

    
  );
}

export default AddTag

