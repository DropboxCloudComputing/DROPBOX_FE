import React from "react";
import { Link } from "react-router-dom";
import garbage from "../../static/garbage.png"
import { useRecoilValue } from 'recoil';
import { sharedFolderState } from "../../recoil/atom";

const SidebarComponent = () => {
    const sharedFolder = useRecoilValue(sharedFolderState);

    return (
        <>
            <div className="w-60 p-5 bg-gray-100 overflow-auto h-screen">
                <div>
                    <Link to={'/trashbin'}>
                        <div className="flex items-center text-base text-center w-full p-3 ml-1 border-2 rounded-lg">
                            <img src={garbage} alt="garbage" className="w-4 h-4 mr-2" />
                            <p>휴지통</p>
                        </div>
                    </Link>
                </div>
                <div>
                    <div className="ml-8 text-gray-400 text-base sm:text-base rounded-lg block p-2.5 mt-2">
                        <p>공유된 폴더</p>
                    </div>
                </div>
                {sharedFolder.map((menu, index) => {
                    return (
                        <Link to={menu.path} key={index}>
                            <div className="my-2 text-gray-900 text-base sm:text-base rounded-lg block w-full p-2.5">
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