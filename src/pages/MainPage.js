import React from "react";
import Sidebar from "./common/Sidebar";
import "../styles/MainPage.css";

const MainPage = () => {
  //const [uploadOpen, setUploadOpen] = useState(false);

  return(
    <>
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