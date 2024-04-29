import React from "react";
//import ConcreteComponentNode from "./components/ConcreteComponentNode/ConcreteComponentNode";
import DivWrapper  from "./components/DivWrapper/DivWrapper";
import RantBox  from "./components/RantBox/RantBox";

import "./Rants.css";

const Box = () => {
  return (
    <div className="box">
      <div className="group">
        <div className="overlap-group">
          <RantBox className="rant-box-instance" />
          <RantBoxWrapper className="design-component-instance-node" />
          <DivWrapper className="rant-box-2" />
          {/* <ConcreteComponentNode className="rant-box-3" /> */}
          {/* <BookCoverRant className="book-cover-rant-group" /> */}
          <div className="rectangle-2" />
          <div className="rectangle-2" />
        </div>
      </div>
    </div>
  );
};

export default Box