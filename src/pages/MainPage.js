import React from "react";
import Header from "./common/Header";
import Sidebar from "./common/Sidebar";
import "../styles/MainPage.css";

const MainPage = () => {
  //const [uploadOpen, setUploadOpen] = useState(false);

  return(
    <>
      <Header/>
      <div className="main-layout">
        <Sidebar/>
        <div class="main-block">
          <h1>Main Page</h1>
        </div>
      </div>
    </>
  );
};

export default MainPage;