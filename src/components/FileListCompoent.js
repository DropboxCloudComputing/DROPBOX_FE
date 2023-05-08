import React from 'react';
import { useRecoilState } from 'recoil';
import { fileListState } from '../recoil/atom';

const FileListComponent = () => {
    const [fileList,setFileList] = useRecoilState(fileListState);

    const handleDelete = (fileId) => {
        setFileList(fileList.filter((file) => file.id !== fileId));
    };

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
            <div className='flex flex-wrap ml-5 text-center'>
                {fileList.map((file) => (
                        <div key={file.id} className="justify-center relative overflow-auto rounded-lg border-gray-300 border-2 px-4 py-2 mx-5 bg-white w-48 h-48 shadow-sm my-3">
                            <div className="flex-col">
                                <div className="text-sm font-medium text-gray-600">{file.name}</div>
                                <div className="text-xs text-gray-500">{formatBytes(file.size)}</div>
                            </div>
                            <div className='absolute bottom-2 inset-x-10'>
                                <button
                                    type="button"
                                    className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded"
                                    onClick={() => handleDelete(file.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                ))}
            </div>
        </>
    )
}

export default FileListComponent;