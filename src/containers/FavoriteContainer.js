import { React, useState,useEffect } from "react";
import Header from "../pages/common/Header";
import Sidebar from "../pages/common/Sidebar";
import FileComponent from "../components/FileListCompoent";
import { useRecoilValue } from "recoil";
import { fileListState } from "../recoil/atom";
import { getFileList } from "../apis/File";
import "../static/index.css";


const FavoriteContainer = () => {
    const [favoriteFile, setFavoriteFile] = useState([]);

    useEffect(() => {
        getFileList()
            .then(response => {
                setFavoriteFile(response.filter((file) => (file.favorites === true)));
            })
    }, []);

    return (
        <>
            <Header />
            <div className="flex flex-row">
                <Sidebar />
                <div className="flex-col ml-56 justify-center items-center">
                    <div className='flex flex-wrap ml-5 text-center'>
                        {favoriteFile.map((file) => (
                            <FileComponent key={file.id} id={file.id} description={file} is_removed={false} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
};

export default FavoriteContainer;