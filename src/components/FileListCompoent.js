import React, { Component, Fragment,useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { fileListState, isFileOpenState, FileIdState } from '../recoil/atom';


function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}


const FileDescription = ({ _id, props }) => {
    const setIsFileOpen = useSetRecoilState(isFileOpenState);
    const fileId = useRecoilValue(FileIdState);
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };

    const handleDescriptionClose = () => {
        setIsFileOpen(false);
    };

    const handleDownload = (url) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = url.substring(url.lastIndexOf('/') + 1);
        link.click();
      };

    return (
        <>
            {fileId == _id &&
                <div className="text-center bg-gray-100 absolute top-0 right-0 h-screen z-40 duration-75 border-2 border-gray-200">
                    <button
                        className="border-2 font-bold py-2 px-4 rounded mt-4"
                        onClick={handleDescriptionClose}
                    >
                        X
                    </button>
                    <div>
                    <textarea className="2-full h-14 resize-none text-center py-3.5 text-lg font-bold mb-2 outline-none bg-gray-100 border-none">{props.name}</textarea>
                    </div>
                    <p className='pb-1.5'>{formatBytes(props.size)}</p>
                    <select
                        className="px-4 py-2 border border-gray-300 rounded-md"
                        value={selectedOption}
                        onChange={handleSelectChange}>
                        <option value="">Version</option>
                        {options.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                    <div>
                    <p className='py-2'>Memo</p>
                    <textarea rows={4} value={props.memo} type="text-area" className='resize-none'></textarea>
                    </div>
                    <button
                        className="mt-5 border-2 bg-gray-200 hover:bg-gray-500 font-bold py-2 px-4 rounded"
                        onClick={() => handleDownload(props.url)}
                    >
                        Download
                    </button>
                </div>}
        </>
    )
}

const FileComponent = ({ id, description }) => {
    const [fileList, setFileList] = useRecoilState(fileListState);
    const [isFileOpen, setIsFileOpen] = useRecoilState(isFileOpenState);
    const setFileId = useSetRecoilState(FileIdState);


    const handleDelete = (fileId) => {
        setFileList(fileList => {
            return fileList.map(file =>{
                if(file.id === fileId){
                    return{
                        ...file,
                        is_delete : 1
                    };
                }
                return file;
            });
        });
    };

    const handleFileOpen = (event) => {
        setFileId(event.target.value);
        setIsFileOpen(true);
    }

    return (
        <>
            <Fragment>
                <div
                    className="z-10 justify-center relative overflow-auto rounded-lg border-gray-300 border-2 px-4 py-2 mx-5 bg-white w-48 h-48 shadow-sm my-3"
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