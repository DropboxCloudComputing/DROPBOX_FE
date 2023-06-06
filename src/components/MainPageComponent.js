import { React, useEffect,useState } from "react";
import Header from "../pages/common/Header";
import Sidebar from "../pages/common/Sidebar";
import UploadComponent from "./UploadComponent";
import FileComponent from "./FileListCompoent";
import { useRecoilValue,useRecoilState } from "recoil";
import { fileListState, folderListState, openFolderCreationState, openRelationCreationState } from "../recoil/atom";
import FolderListComponent from "./FolderListComponent";
import {FolderModals,RelationModals} from "./common/SidebarComponent";
import {getFileList} from "../apis/File.js";
import "../static/index.css";

const MainPageComponent = () => {
    const [fileList,setFileList] = useRecoilState(fileListState);
    const folderList = useRecoilValue(folderListState);
    const openFolderCreation = useRecoilValue(openFolderCreationState);
    const openRelationCreation = useRecoilValue(openRelationCreationState);

    const [currFileList,setCurrFileList] = useState([]);

    useEffect(() => {
        getFileList()
            .then(response => {
                console.log(response);
                setFileList(fileList);
            })
        
        setCurrFileList(fileList.filter((file) => (file.removed === false)));
    },[]);

    return (
        <>
            <Header />
            <div className="flex flex-row">
                <Sidebar />
                <div className="ml-56 flex-col justify-center items-center z-20">
                    {openFolderCreation && <FolderModals />}
                    {openRelationCreation && <RelationModals />}
                    <div className="ml-10 my-3">
                        <h1>Folders</h1>
                    </div>
                    <div className="flex flex-wrap ml-5 text-center">
                        {folderList.map((folder) => (
                            <FolderListComponent key={folder.id} id={folder.id} description={folder} />
                        ))}
                    </div>
                    <div className="ml-10 my-3">
                        <h1>Files</h1>
                    </div>
                    <div className='flex flex-wrap ml-5 text-center'>
                        <UploadComponent />
                        {currFileList.map(file=>{
                            return <FileComponent key={file.id} id={file.id} description={file}/>;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};
// {fileList.filter((file)).map((file) => (
//     <FileComponent key={file.id} id={file.id} description={file} />
// ))}
export default MainPageComponent;