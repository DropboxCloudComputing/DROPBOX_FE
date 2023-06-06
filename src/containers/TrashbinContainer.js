import { React, useState,useEffect } from "react";
import Header from "../pages/common/Header";
import Sidebar from "../pages/common/Sidebar";
import FileComponent from "../components/FileListCompoent";
import { useRecoilValue } from "recoil";
import { fileListState } from "../recoil/atom";
import "../static/index.css";

const TrashbinContainer = () => {
    const fileList = useRecoilValue(fileListState);
    const [deletedFile,setDeletedFile] =  useState([]);

    useEffect(() => {
        setDeletedFile(fileList.filter((file) => (file.removed === true)));
    },[]);

    return (
        <>
            <Header />
            <div className="flex flex-row">
                <Sidebar />
                <div className="flex-col ml-56 justify-center items-center">
                    <div className='flex flex-wrap ml-5 text-center'>
                        {deletedFile.map((file) => (
                            <FileComponent key={file.id} id={file.id} description={file} is_removed={true} />
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

export default TrashbinContainer;