import React from "react";
import { RantBox } from "./RantBox";
import "./RantBoxWrapper.css";

const RantBoxWrapper = ({ className }) => {
  return (
    <div className={`rant-box-wrapper ${className}`}>
      <RantBox text="Rant #2" />
    </div>
  );
}

export default RantBoxWrapper