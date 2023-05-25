import { React } from "react";
import Header from "../pages/common/Header";
import Sidebar from "../pages/common/Sidebar";
import UploadComponent from "./UploadComponent";
import FileComponent from "./FileListCompoent";
import { useRecoilState } from "recoil";
import { fileListState } from "../recoil/atom";

const MainPageComponent = (is_trash) => {
    const [fileList, setFileList] = useRecoilState(fileListState);


    return (
        <>
            <Header />
            <div className="flex flex-row">
                <Sidebar />
                <div className="flex-col justify-center items-center">
                    
                    <div className='flex flex-wrap ml-5 text-center'>
                        <UploadComponent/>
                        {fileList.filter((file) => file.is_delete === 0).map((file) => (
                            <FileComponent key={file.id} id={file.id} description={file}/>
                        ))}
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default MainPageComponent;