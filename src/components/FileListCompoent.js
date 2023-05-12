import React, { Fragment } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { fileListState, isFileOpenState,FileIdState } from '../recoil/atom';

const FileDescription = ({ _id, props }) => {
    const [isFileOpen, setIsFileOpen] = useRecoilState(isFileOpenState);
    const fileId = useRecoilValue(FileIdState);


    const handleDescriptionClose = () => {
        setIsFileOpen(false);
    };

    return (
        <>
            {fileId == _id &&
                <div className={"text-center bg-gray-100 absolute top-28 right-0 h-full z-10 duration-75"}>
                    <h2 className="text-lg font-bold mb-2">{props.name}</h2>
                    <p>This is the content of the popup.</p>
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
                        onClick={handleDescriptionClose}
                    >
                        Close
                    </button>
                </div>}
        </>
        //className={isOpen ? "bg-gray-100 absolute top-28 right-0 h-full z-10 duration-75 w-40" : "hidden"}

    )
}

const FileComponent = ({ id, description }) => {
    const [fileList, setFileList] = useRecoilState(fileListState);
    const [isFileOpen, setIsFileOpen] = useRecoilState(isFileOpenState);
    const [fileId,setFileId] = useRecoilState(FileIdState);

    const handleDelete = (fileId) => {
        setFileList(fileList.filter((file) => file.id !== fileId));
    };

    const handleFileOpen = (event) => {
        setFileId(event.target.value);
        setIsFileOpen(true);
        console.log(fileId);
        console.log(isFileOpen);
    }

    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    return (
        <>
            <Fragment>
                <div
                    className="justify-center relative overflow-auto rounded-lg border-gray-300 border-2 px-4 py-2 mx-5 bg-white w-48 h-48 shadow-sm my-3"
                >
                    <div className="flex-col">
                        <button type="button" onClick={handleFileOpen} value={description.id} className="text-sm font-medium text-gray-600">{description.name}</button>
                        <div className="text-xs text-gray-500">{formatBytes(description.size)}</div>
                    </div>
                    <div className='absolute bottom-2 inset-x-10'>
                        <button
                            type="button"
                            className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded"
                            onClick={() => handleDelete(id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
                {isFileOpen && <FileDescription _id={id} props={description} />}
            </Fragment>
        </>
    )
}

export default FileComponent;