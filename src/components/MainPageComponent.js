import { React } from "react";
import Header from "../pages/common/Header";
import Sidebar from "../pages/common/Sidebar";
import UploadComponent from "./UploadComponent";
import FileComponent from "./FileListCompoent";
import { useRecoilValue } from "recoil";
import { fileListState, folderListState, openFolderCreationState, openRelationCreationState } from "../recoil/atom";
import FolderListComponent from "./FolderListComponent";
import {FolderModals,RelationModals} from "./common/SidebarComponent";
import "../static/index.css";

const MainPageComponent = () => {
    const fileList = useRecoilValue(fileListState);
    const folderList = useRecoilValue(folderListState);
    const openFolderCreation = useRecoilValue(openFolderCreationState);
    const openRelationCreation = useRecoilValue(openRelationCreationState);

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
                        {fileList.filter((file) => file.is_delete === 0).map((file) => (
                            <FileComponent key={file.id} id={file.id} description={file} />
                        ))}
                    </div>
                </div>
            </div>
            <footer className="bottom-0">
                    <div className="waves">
                        <div className="wave" id="wave1"></div>
                        <div className="wave" id="wave2"></div>
                        <div className="wave" id="wave3"></div>
                        <div className="wave" id="wave4"></div>
                    </div>
            </footer>
        </>
    );
};

export default MainPageComponent;