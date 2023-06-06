//import logo from './logo.svg';
//import './App.css';
import React from "react";
import {Routes,Route} from "react-router-dom";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";
import TrashbinPage from "./pages/TrashbinPage";
import DetailFileList from "./pages/DetailFileListPage";


function App() {
  return (
    <>
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<DetailFileList />} path="/folder/:id" />
        <Route element={<TrashbinPage />} path="/favorites" />
        <Route element={<TrashbinPage />} path="/trashbin"/>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
      </Routes>
    </>
  );
}

export default App;
//<Route element={<Login />} path="/login" />