import { useState } from 'react'
import './App.css'
import NavBar from './components/nav';
import Footer from "./components/footer";
import MainComponent from './components/mainComponent';

function App() {
 

  return (
    <>
     <NavBar/>

     <MainComponent/>

     <Footer/>
     
    </>
  )
}

export default App
