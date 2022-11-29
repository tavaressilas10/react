import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './paginas/home/Home';
import { Grid } from '@material-ui/core';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Login from './paginas/login/Login'

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/Home' element={<Home />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
