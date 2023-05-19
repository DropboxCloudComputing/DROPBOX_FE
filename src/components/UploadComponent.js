import React, { Fragment } from 'react';
import { useRecoilState } from 'recoil';
import { fileListState } from "../recoil/atom";


function UploadComponent() {
    const [fileList, setFileList] = useRecoilState(fileListState);

    const handleFileChange = (event) => {
        event.preventDefault();
        const file = event.target.files[0];
        const newFile = {
            id: file.id ? file.id : 10,
            name: file.name,
            size: file.size,
            is_delete: 0
        };

        setFileList([...fileList, newFile]);
    };

    return (
        <Fragment>
            <form onSubmit={handleFileChange}>
                <div className="mx-44 my-3.5 relative w-9/12 h-48 bg-gray-200 border-4 border-dotted border-gray-300 rounded-xl overflow-hidden">
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
        </Fragment>
    );
}

export default UploadComponent;
