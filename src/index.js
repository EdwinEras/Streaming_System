/*
- Help create single page web apps
- Make it simple to manage and define routes in the application
- Abstract the repetitive logic of creating endpoints
*/

import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router";
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Register from './pages/Register';
import Login from './pages/Login';
import Movie from './pages/Movies';
import Tv from './pages/Tv';
import MediaDetails from './pages/MediaDetails';
import Dashboard from './pages/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="movies" element={<Movie />} />
        <Route path="tvshows" element={<Tv />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="/:type/:id" element={<MediaDetails />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
