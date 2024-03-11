import React from 'react'
import './App.css';
import { Auth } from "./components/auth";
import Navbar from './components/navbar/Navbar';
import Hero  from './components/hero/Hero';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App