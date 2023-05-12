import { React } from "react";
import Header from "../pages/common/Header";
import Sidebar from "../pages/common/Sidebar";
import FileComponent from "../components/FileListCompoent";
import { useRecoilValue } from "recoil";
import { fileListState } from "../recoil/atom";

const TrashbinContainer = () => {
    const fileList = useRecoilValue(fileListState);
    return (
        <>
            <Header />
            <div className="flex flex-row">
                <Sidebar />
                <div className="flex-col justify-center items-center">
                    <div className='flex flex-wrap ml-5 text-center'>
                        {fileList.map((file) => (
                            <FileComponent key={file.id} id={file.id} description={file} />
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
};

export default TrashbinContainer;