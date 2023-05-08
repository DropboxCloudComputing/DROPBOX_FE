// import React from "react";
// const UploadComponent = (props) => {
//     //flex items-center justify-center w-auto
//     const { open, close, } = props;

//     return (
//         <>
//             <div  class="z-40 static" className={open ? 'openModal' : 'modal'}>
//                 {open ? (
//                     <div class="flex items-center justify-center w-auto">
//                         <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
//                             <div class="flex flex-col items-center justify-center pt-5 pb-6">
//                                 <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
//                                 <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
//                                 <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
//                             </div>
//                             <input id="dropzone-file" type="file" class="hidden" />
//                         </label>
//                         <footer>
//                             <button className="close" onClick={close}>
//                                 close
//                             </button>
//                         </footer>
//                     </div>
//                 ) : null}
//             </div>
//         </>
//     );
// };

// export default UploadComponent; 

import React, { Fragment } from 'react';
import { useRecoilState } from 'recoil';
import { fileListState } from "../recoil/atom";


function UploadComponent() {
    const [fileList, setFileList] = useRecoilState(fileListState);

    const handleFileChange = (event) => {
        event.preventDefault();
        const filename = event.target.files[0].name;
        const extension = event.target.files[0].name.split(".")[1];

        const uploadFileStruct = {
            filename: filename,
            ext: extension
        }
        setFileList([...fileList, uploadFileStruct]);
    };

    return (
        <Fragment>
            <form onSubmit={handleFileChange}>
                <div className="mx-44 my-3.5 relative w-8/12 h-48 bg-gray-200 border-4 border-dotted border-gray-300 rounded-xl overflow-hidden">
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
