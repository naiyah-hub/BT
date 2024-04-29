import React from "react";
import "./RantBox.css";

const RantBox = ({ className }) => {
  return (
    <div className={`rant-box ${className}`}>
      <div className="rectangle" />
      <div className="text-wrapper">Rant #1</div>
    </div>
  );
}

export default RantBox