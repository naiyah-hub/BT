import React from "react";
import RantBox from "../RantBox/RantBox";
import "./DivWrapper.css";

const DivWrapper = ({ className }) => {
  return (
    <div className={`div-wrapper ${className}`}>
      <RantBox text="Rant #4" />
    </div>
  );
};

export default DivWrapper