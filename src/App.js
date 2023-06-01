//import logo from './logo.svg';
//import './App.css';
import React from "react";
import {Routes,Route,Redirect} from "react-router-dom";
import Login from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import TrashbinPage from "./pages/TrashbinPage";
import DetailFileList from "./pages/DetailFileListPage";
import { isLogInState } from "./recoil/atom";
import { useRecoilValue } from "recoil";


function App() {
  const isLoggedIn = useRecoilValue(isLogInState);

  return (
    <>
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<DetailFileList />} path="/:id" />
        <Route element={<TrashbinPage />} path="/trashbin"/>
        <Route element={<Login />} path="/login" />
      </Routes>
    </>
  );
}

export default App;
//<Route element={<Login />} path="/login" />