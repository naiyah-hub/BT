import React from "react";
import "./CompletedTag.css";

 const CompletedTag = ({ className }) => {
  return (
    <div className={`completed-tag ${className}`}>
      <div className="text-wrapper-7">Completed</div>
    </div>
  );
}
export default CompletedTag