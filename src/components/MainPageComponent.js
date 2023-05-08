import React from "react";
import Header from "../pages/common/Header";
import Sidebar from "../pages/common/Sidebar";
import UploadComponent from "./UploadComponent";
import { useRecoilValue } from "recoil";
import { fileListState } from "../recoil/atom";

const FileListComponent = () => {
    const files = useRecoilValue(fileListState);

    return (
        <>
            <div>
                {files.map((file, index) => {
                        return (
                            <div key={index}>
                                <div className="text-center text-gray-900 text-base sm:text-base rounded-lg block w-full p-2.5">
                                    <p>{file.name}</p>
                                </div>
                            </div>

                        )
                    })}
            </div>
        </>
    )
}


const MainPageComponent = () => {

    return (
        <>
            <Header />
            <div className="flex">
                <Sidebar />
                <UploadComponent />
                <FileListComponent />
            </div>
        </>
    );
};

export default MainPageComponent;