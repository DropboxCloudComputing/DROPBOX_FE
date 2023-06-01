import { React } from "react";
import Header from "../pages/common/Header";
import Sidebar from "../pages/common/Sidebar";
import UploadComponent from "./UploadComponent";
import FileComponent from "./FileListCompoent";
import { useRecoilValue } from "recoil";
import { fileListState, folderListState } from "../recoil/atom";
import FolderListComponent from "./FolderListComponent";

const MainPageComponent = () => {
    const fileList = useRecoilValue(fileListState);
    const folderList = useRecoilValue(folderListState);

    return (
        <>
            <Header />
            <div className="flex flex-row">
                <Sidebar />
                <div className="relative ml-56 flex-col justify-center items-center z-0">
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

        </>
    );
};

export default MainPageComponent;