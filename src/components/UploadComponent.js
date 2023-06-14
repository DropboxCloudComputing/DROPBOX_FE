import React from 'react';
import { useRecoilState } from 'recoil';
import { currFileListState } from "../recoil/atom";
import { uploadFile } from '../apis/File';

function UploadComponent({folderId}) {
    const [currFileList,setCurrFileList] = useRecoilState(currFileListState);

    const handleFileChange = (event) => {
        event.preventDefault();
        const file = event.target.files[0];
        const folder_Id = (folderId === null) ? 0 : folderId;
        const memo = "";
        //const newFile = { id: 20, file_name: 'file1.pdf', size: 123456, removed: false, memo: "This is file1 v1",url: 'C:/Users/MINSEOK/Downloads/folder.png',favorites: false,version: 1 }
        //setCurrFileList(currFileList => [...currFileList,newFile]);
       
        uploadFile(file,folder_Id,memo)
            .then(
                response => {
                    const newData = {file_name : file.name,removed: false, memo: "",favorites: false,version: 1,size: file.size}
                    setCurrFileList([...currFileList,newData]);
                }
            )
    };

    const changeCurrFileList = (data) => {
       
    }

    return (
        <form onSubmit={handleFileChange}>
            <div className="justify-center relative overflow-auto rounded-lg border-dotted bg-gray-200 border-gray-300 border-2 px-4 py-2 mx-5 w-48 h-56 shadow-sm my-3">
                <label htmlFor="file-input" className="absolute inset-0 cursor-pointer">
                    <input id="file-input" type="file" className="sr-only" onChange={handleFileChange} />
                    <span className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 15H16V20H8V15H3V10L12 3L21 10V15ZM9 17H15V22H9V17ZM5 12H19L12 6L5 12Z" fill="currentColor" />
                        </svg>
                        <span className="mt-2 text-sm font-medium">Click to upload a file</span>
                    </span>
                </label>
            </div>
        </form>
    );
}

//mx-44 my-3.5 relative w-9/12 h-48 bg-gray-200 border-4 border-dotted border-gray-300 rounded-xl overflow-hidden

export default UploadComponent;
