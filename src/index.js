import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Procedures from './components/Procedures'
import Contact from './components/Contact'
import './styles.css';
import Home from './components/Home'


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route 
          index
          element={
            <Home />
          }
        />
        <Route path="Procedures" element={<Procedures />}/>
        <Route path="Contact" element={<Contact />}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
  )