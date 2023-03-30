import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Video from './pages/Video';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/videos/:videoId' element={<Video />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
