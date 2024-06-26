import React from "react";
import AddFeelingsTag from './components/AddFeelingsTag/AddFeelingsTag'
import AddTag  from './components/AddTag/AddTag'
import CompletedTag from './components/CompletedTag/CompletedTag'
import CurrentlyReading from './components/CurrentlyReading/CurrentlyReading'
//import NavBar from './components/TaskBar/TaskBar'
//import { SearchBar } from './components/SearchBar/SearchBar'
import Filter from './components/Filter/Filter'
import LibraryBook from './components/LibraryBook/LibraryBook'
import WantToReadTag from './components/WantToReadTag/WantToReadTag'
//import Search from './screens/Search'
import { Route, Routes } from 'react-router-dom'
import "./Library.css"


// function NavBar() {
//     return (
//       <nav className="rants-task-bar">
//           <img className="image" alt="Image" src= "https://img.icons8.com/clouds/100/books.png" />
          
//           {/* <div className="link-style"> */}
//           <a href="/" className="site-name">BT</a>
//           <ul>
//             <li>
//               <a href="/Library" className="lib-title">Library</a>
//             </li>
//           </ul>
            
//           <ul>
//             <li>
//               <a href="/Rant" className="rant-title">Rant</a>
//             </li>
//           </ul>
  
//           <ul>
//             <li>
//               <a href="/Search" className="search-title">Search</a>
//             </li>
//           </ul>
//           {/* </div> */}
//       </nav>
      
//     );
// }

export default function Library(){
    return(
        <>
            {/* <BrowserRouter> */}
      <div className='library'>
            
            <div className="div-2"> 
            {/* <NavBar className="NavBar" /> */}
             
              <div className='overlap'> 
              
                  <div className='book-current'>
                  <CurrentlyReading className = "currently-reading-instance"/>
                  </div>
                  <LibraryBook className="number-1"/>
                  <AddTag className="cur-add-tag-instance" tagCircleClassName="add-tag-2" />
                  
               </div>
               
               <div className='filter-pos'>
                <a href='' > <Filter /> </a>
               </div>
               
               <div className="overlap-2">
                    <div className='book-complete'>
                      <CompletedTag className="completed-tag-instance" />
                    </div>
                    <LibraryBook className="design-component-instance-node" />
                </div>

                <div className="overlap-3">
                  <div className='book-want'>
                    <WantToReadTag className="want-to-read-tag-instance" />
                    
                  </div>
                  <LibraryBook className="design-component-instance-node" />
                </div> 
                 
            </div>
 
          </div> 
          
           
          {/* <CurrentlyReading /> 
          <AddTag className="add-tag-instance" tagCircleClassName="add-tag-2" />
          <AddFeelingsTag />
          <AddFeelingsTag className="add-feelings-tag-2" />
          <AddTag className="add-tag-instance" tagCircleClassName="add-tag-2" /> 

         {/* // <SearchBar className="search-bar-instance" property1="default" /> */}
          {/* <AddFeelingsTag className="add-feelings-tag-3" />
          <CompletedTag />

          <Filter /> */} 
      {/* </BrowserRouter> */}
        </>
    )
}