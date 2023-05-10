import { React } from "react";
import Header from "../pages/common/Header";
import Sidebar from "../pages/common/Sidebar";
import FileListComponent from "../components/FileListCompoent";

const TrashbinContainer = () => {
    return (
        <>
            <Header />
            <div className="flex flex-row">
                <Sidebar />
                <div className="flex-col justify-center items-center">
                    <FileListComponent is_trash={true}/>
                </div>
            </div>
            
        </>
    );
};

export default TrashbinContainer;