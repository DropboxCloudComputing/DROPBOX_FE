//import logo from './logo.svg';
//import './App.css';
import React from "react";
import {Routes,Route} from "react-router-dom";
import Login from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import FileListComponent from "./components/MainPageComponent";
function App() {
  return (
    <>
      <Routes>
        <Route element={<FileListComponent />} path="/test" />
        <Route element={<MainPage />} path="/" />
        <Route element={<Login />} path="/login" />
        
      </Routes>
    </>
  );
}

export default App;
