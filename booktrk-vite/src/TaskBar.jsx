import React, { Children } from "react";

//import Search from "../../pages/Search";
import { Link, Outlet, useMatch, useResolvedPath } from "react-router-dom";
//import App from "./App";
import "./TaskBar.css";
import styled from "styled-components";

function CustomLink({to, Children, ...props}){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end:true})
  return(
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {Children}
      </Link>
    </li>
  )
}

export default function NavBar() {
    return (
      <>
      <nav className="rants-task-bar">
          <img className="image" alt="Image" src= "https://img.icons8.com/clouds/100/books.png" />
          
          <div className="site-name">BT</div>
          <div className="site-name">Library</div>
          <div className="site-name">Rants</div>
          <div className="site-name">Search</div>
          {/* </div> */}
      </nav>
      <Outlet></Outlet>
      </>
    );
}


// function CustomLink({href}) {
//   const path = window.location.pathname
//   return(
//     <li className={path === href ? "active" : ""}>
//       <a href={href}>{Children}</a>
//     </li>
    
//   )
  
// }