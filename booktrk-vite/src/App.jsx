import React from 'react';
import Library from './Library'
import Box from './Rants';
import NavBar from './TaskBar';
//import { Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


import './App.css'
import Search from './Search';

export default function App() {
  return (
    <>
         <NavBar></NavBar>
         {/* <Search></Search> */}
        <Library></Library>
        {/* <Box></Box> */}
         <Outlet></Outlet>
    </>
  );
}

