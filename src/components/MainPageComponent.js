import { React, useEffect } from "react";
import Header from "../pages/common/Header";
import Sidebar from "../pages/common/Sidebar";
import UploadComponent from "./UploadComponent";
import FileComponent from "./FileListCompoent";
import { useRecoilValue,useRecoilState,useResetRecoilState } from "recoil";
import { currFolderListState,currentStatusState,currFileListState,fileListState, folderListState, openFolderCreationState, openRelationCreationState } from "../recoil/atom";
import FolderListComponent from "./FolderListComponent";
import {FolderModals,RelationModals} from "./common/SidebarComponent";
import { getContents } from "../apis/Folder.js";
import "../static/index.css";
import { useLocation } from "react-router-dom";

const MainPageComponent = ({folderId}) => {
    const [fileList,setFileList] = useRecoilState(fileListState);
    const [currFolderList,setCurrFolderList] = useRecoilState(currFolderListState);
    //const folderList = useRecoilValue(folderListState);
    const openFolderCreation = useRecoilValue(openFolderCreationState);
    const openRelationCreation = useRecoilValue(openRelationCreationState);
    const [pId, setPId] = useRecoilState(currentStatusState);
    const resetPID = useResetRecoilState(currentStatusState);
    const [currFileList,setCurrFileList] = useRecoilState(currFileListState);
    const location = useLocation();
    
    useEffect(() => {
        console.log(location);
        const path = location.pathname.split("/");
        console.log(path);
        if (folderId === null){
            resetPID();
            //setCurrFileList(fileList.filter((file => (file.removed === false && file.version === 1))));
            getContents(0)
                .then(response => {
                    setCurrFileList(response["files"].filter((file => (file.removed === false && file.version === 1))));
                    setFileList(response["files"].filter((file => (file.removed === false && file.version === 1))));
                })

            getContents(null)
                .then(response => {
                    setCurrFolderList(response["folders"]);
                })
        }
        else{
            getContents(folderId)
                .then(response => {
                    console.log(response);
                    setCurrFileList(response["files"].filter((file => (file.removed === false && file.version === 1 && file.folder_id === folderId))));
                    setCurrFolderList(response["folders"].filter(folder => (folder.folder_id === folderId)));
                    setFileList(response["files"].filter((file => (file.removed === false && file.version === 1 && file.folder_id === folderId))));
                })
        }
        
    },[setCurrFolderList,setCurrFileList]);
    
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
                        {folderId !== null && <FolderListComponent key={0} id={0} description={{folder_name : "..."}}/>}
                        {currFolderList.filter((folder) => (folder.id !== folderId)).map((folder) => (
                            <FolderListComponent key={folder.id} id={folder.id} description={folder} />
                        ))}
                    </div>
                    <div className="ml-10 my-3">
                        <h1>Files</h1>
                    </div>
                    <div className='flex flex-wrap ml-5 text-center'>
                        <UploadComponent folderId={folderId}/>
                        {currFileList.map(file=>
                            (<FileComponent key={file.id} id={file.id} description={file}/>)
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainPageComponent;