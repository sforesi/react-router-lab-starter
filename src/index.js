import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Procedures from './components/Procedures'
import Contact from './components/Contact'
import './styles.css';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="/contact" element={<Contact />} />
      <Route path="/procedures" element={<Procedures />} />
    </Route>
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)