import React, { useState } from "react";
import { Link } from "react-router-dom";
import garbage from "../../static/garbage.png"
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { sharedFolderState,isFileOpenState } from "../../recoil/atom";

const SidebarComponent = () => {
    const sharedFolder = useRecoilValue(sharedFolderState);
    const resetDescription = useResetRecoilState(isFileOpenState);
    const [folders, setFolders] = useState([]);
    

    const handleNewFolderSubmit = (event) => {
        event.preventDefault();
        setFolders([...folders,]);
    };

    return (
        <>
            <div className="p-5 w-60 bg-gray-100 overflow-auto h-screen">
                <div>
                    <Link to={'/trashbin'} onClick={resetDescription}>
                        <div className="flex items-center text-base text-center w-full p-3 ml-1 border-2 rounded-lg hover:bg-gray-300">
                            <img src={garbage} alt="garbage" className="w-4 h-4 mr-2" />
                            <p>휴지통</p>
                        </div>
                    </Link>
                </div>
                <div className="container mx-auto my-1 end-0 relative pt-5 items-center text-center">
                    <form onSubmit={handleNewFolderSubmit}>
                        <button
                            type="submit"
                            className=" text-base py-2 px-4 rounded-lg border-2 hover:bg-gray-300 p-3 ml-1 w-full"
                        >
                            <span className="text-lg">+ </span>Create Folder
                        </button>
                    </form>
                </div>
                <div className="ml-5 text-gray-400 text-base sm:text-base rounded-lg block p-2.5 mt-5"  >
                    <p>공유된 폴더</p>
                </div>
                <div className="border-b-2 border-gray-300 "></div>
                {sharedFolder.map((menu, index) => {
                    return (
                        <Link to={menu.path} key={index}>
                            <div className="text-center my-2 text-gray-900 text-base sm:text-base rounded-lg block w-full p-2.5">
                                <p>{menu.name}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>

        </>
    );
};

export default SidebarComponent;