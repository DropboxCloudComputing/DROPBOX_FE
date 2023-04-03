import React from 'react';
import {Routes,Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from './pages/LoginPage';
import './App.css';


function App() {
  return (
    <>
      <Routes>
        <Route element={<MainPage />} path="/"/>
        <Route element={<LoginPage />} path="/login"/>
      </Routes>
    </>
  );
}

export default App;
