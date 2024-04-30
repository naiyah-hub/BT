import React from 'react';
import Library from './Library'
import Book from './Books';
import NavBar from './TaskBar';
//import { Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import './App.css'

export default function App() {
  return (
    <>
         <NavBar></NavBar>
         {/* <Book></Book> */}
        <Library></Library>
        
         <Outlet></Outlet>
    </>
  );
}

