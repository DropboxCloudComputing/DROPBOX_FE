import React from "react";
import { Link } from "react-router-dom";
import garbage from "../../static/garbage.png"
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { sharedFolderState, isFileOpenState, openFolderCreationState, folderListState } from "../../recoil/atom";

const FolderModals = () => {
    const resetState = useResetRecoilState(openFolderCreationState);
    const [folders, setFolders] = useRecoilState(folderListState);

    const createNewFolder = (event) => {
        event.preventDefault();
        const targetName = event.target.name.value;
        const newFolder = {
            id: 2,
            name: targetName,
        };
        setFolders([...folders, newFolder]);
        resetState();
    }

    return (
        <div className="relative" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="static inset-0 z-50 overflow-y-auto">
                <div className="z-50 flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="border-4 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <form onSubmit={createNewFolder}>
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="text-center">
                                    <h2>Create Folder</h2>
                                </div>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="" 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button type="submit" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Create</button>
                                <button type="button" onClick={resetState} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}


const SidebarComponent = () => {
    const sharedFolder = useRecoilValue(sharedFolderState);
    const resetDescription = useResetRecoilState(isFileOpenState);

    const [openFolderCreation, setOpenFolderCreation] = useRecoilState(openFolderCreationState);

    const handleNewFolderSubmit = (event) => {
        event.preventDefault();
        setOpenFolderCreation(true);
    };


    return (
        <>
            <div className="fixed p-5 w-60 bg-gray-100 overflow-auto h-screen">
                <div>
                    <Link to={'/trashbin'} onClick={resetDescription}>
                        <div className="relative flex items-center text-base text-center w-full p-3 ml-1 border-2 rounded-lg hover:bg-gray-300">
                            <img src={garbage} alt="garbage" className="w-4 h-4 mr-2" />
                            <p>Trashbin</p>
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
                {openFolderCreation && <FolderModals />}
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