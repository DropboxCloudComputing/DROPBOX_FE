import { React } from "react";
import Header from "../pages/common/Header";
import Sidebar from "../pages/common/Sidebar";
import UploadComponent from "./UploadComponent";
import FileListComponent from "./FileListCompoent";
//import { useRecoilValue } from "recoil";
//import { fileListState } from "../recoil/atom";

const MainPageComponent = () => {

    return (
        <>
            <Header />
            <div className="flex flex-row">
                <Sidebar />
                <div className="flex-col">
                    <UploadComponent />
                    <FileListComponent />
                </div>
            </div>
            
        </>
    );
};

export default MainPageComponent;