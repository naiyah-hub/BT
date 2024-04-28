import React from "react";
import { Link } from "react-router-dom";
//import imgUrl from "./image-4.png"
import "./RantsTaskBar.css";


const NavBar = () =>{
  return (
    <nav className="rants-task-bar">
        <img className="image" alt="Image" src= "https://img.icons8.com/clouds/100/books.png" />
        <a href="/" className="site-name">BT</a>
        <ul>
          <li>
            <a href="/Library" className="lib-title">Library</a>
            </li>
            <li>
            <a href="/Rant" className="rant-title">Rant</a>
          </li>
        </ul>
    </nav>
    
  );
}

export default NavBar

{/* <div className='rants-task-bar'>
        
        <div className="text-wrapper-13">Home</div>
        {/* <Link className={`text-wrapper-14 ${divClassName}`} to={to}>
          Library
        </Link> */}
        {/* <div className="text-wrapper-14">Library</div>
        <div className='text-wrapper-15'>Rants</div> */}
      {/* </div> */} 