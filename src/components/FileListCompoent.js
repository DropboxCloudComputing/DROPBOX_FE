import React, { Fragment, useState } from 'react';

const FileListComponent = () => {
    //const files = useRecoilValue(fileListState);
    const [fileList, setFileList] = useState([
        { id: 1, name: 'file1.pdf', size: 123456 },
        { id: 2, name: 'file2.jpg', size: 654321 },
        { id: 3, name: 'file3.docx', size: 987654 },
        { id: 4, name: 'file3.docx', size: 987654 },
        { id: 5, name: 'file3.docx', size: 987654 },
        { id: 6, name: 'file3.docx', size: 987654 },
    ]);

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
            <div className='flex flex-wrap'>
                {fileList.map((file) => (
                        <div key={file.id} className="justify-center overflow-auto rounded-lg border-gray-300 border-2 px-4 py-2 mx-2 bg-white w-48 h-48 shadow-sm mt-2">
                            <div className="flex-grow-0">
                                <span className="text-sm font-medium text-gray-600">{file.name}</span>
                                <span className="text-xs text-gray-500">{formatBytes(file.size)}</span>
                            </div>
                            <button
                                type="button"
                                className="ml-4 px-2 py-1 bg-red-500 text-white text-xs font-medium rounded"
                                onClick={() => handleDelete(file.id)}
                            >
                                Delete
                            </button>
                        </div>
                ))}
            </div>
        </>
    )
}

export default FileListComponent;