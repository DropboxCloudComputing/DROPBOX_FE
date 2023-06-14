import React, { Fragment, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { fileListState, isFileOpenState, FileIdState, currFileListState, fileVersionState } from '../recoil/atom';
import docs from '../static/docs.png';
import png from '../static/png.png';
import jpeg from '../static/jpg.png';
import pdf from '../static/pdf.png';
import zip from '../static/zip.png';
import folder from "../static/folder.png"
import xls from '../static/exel.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faStar, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { deleteFile, putMemo,getFileDescription, downloadFile,putFavoriteFile, recoverFile } from '../apis/File.js';

function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}


const FileDescription = ({_id, props} ) => {
    const setIsFileOpen = useSetRecoilState(isFileOpenState);
    const [currFile,setCurrFile] = useRecoilState(currFileListState);
    const fileId = useRecoilValue(FileIdState);
    const [options,setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [realDescription, setRealDescription] = useState([]);
    const [currProps,setCurretProps] = useState({}); 

    useEffect(() => {
        getFileDescription(_id)
            .then(response => {
                console.log(response);
                setRealDescription(response);
                setCurretProps(response[0]);
                let temp = [];
                for(let i = 1;i <= response.length;i++){
                    temp.push("version " + i);
                }
                setOptions(temp);
            })
    },[])


    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
        const ver = (event.target.value).split(" ");
        setCurretProps(realDescription[ver[1] - 1]);
    };

    const handleDescriptionClose = () => {
        setIsFileOpen(false);
    };

    const handleDownload = (id) => {
        downloadFile(id)
            .then((response) => {
                console.log(response);
                const link = document.createElement('a');
                link.href = response;
                link.download = response.substring(response.lastIndexOf('/') + 1);
                link.click();
            })
    };

    const handleDelete = (id) => {
        deleteFile(id)
            .then(response => {
                console.log(response);
            })

        const updatedFiles = currFile.filter(file => file.id !== id);
        setCurrFile(updatedFiles);
    }

    const handleEditMemo = (event) => {
        event.preventDefault();
        console.log(event.target[0].value);
        putMemo(_id, event.target[0].value)
            .then(response => {
                console.log(response);
            })
        setCurrFile(currFile => {
            return currFile.map(file => {
                if (file.id === _id) {
                    return {
                        ...file,
                        memo: event.target[0].value
                    };
                }
                return file;
            });
        });
    }

    const filename = props.file_name;
    const fileExtension = filename.split('.').pop();

    let imageSrc;

    if (fileExtension === 'png') {
        imageSrc = png;
    } else if (fileExtension === 'jpeg' || fileExtension === 'jpg') {
        imageSrc = jpeg;
    } else if (fileExtension === 'pdf') {
        imageSrc = pdf;
    } else if (fileExtension === 'doc' || fileExtension === 'docx') {
        imageSrc = docs;
    } else if (fileExtension === 'xls' || fileExtension === 'xlsx') {
        imageSrc = xls;
    } else if (fileExtension === 'zip') {
        imageSrc = zip;
    } else {
        imageSrc = folder; // Use a default image if the extension is unknown
    }

    return (
        <>
            {fileId == _id &&
                <div className={"text-center bg-white absolute top-[108px] bottom-28 right-0 h-screen w-[350px] z-10 duration-75 border-4 border-gray-200 w-52"}>
                    <div className='flex flex-col items-start'>
                        <button
                            className="border-2 font-bold py-2 ml-4 px-4 rounded mt-4  text-black  hover:bg-red-500 hover:text-white"
                            onClick={handleDescriptionClose}
                        >
                            X
                        </button>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={imageSrc} className="h-28 w-28 pt-4" alt="" />
                        <h2 className="py-3.5 text-lg font-bold mb-2">{props.file_name}</h2>
                        <p className='pb-1.5'>{formatBytes(props.size)}</p>
                        <select
                            className="px-4 py-2 border border-gray-300 rounded-md"
                            value={selectedOption}
                            onChange={handleSelectChange}>
                            {options.map((option) => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                        <form onSubmit={handleEditMemo}>
                        <div className="flex flex-col items-start pt-4 w-[300px]">
                            <p className='font-bold pb-2'>Memo</p>
                            <textarea
                                name=""
                                id=""
                                defaultValue={props.memo}
                                className="w-full bg-gray-100 resize-none rounded-lg p-2"
                                rows={8}
                                cols={20}
                            ></textarea>
                            <button className="border-2 font-bold py-2 px-4 rounded mt-4 text-black hover:text-white hover:bg-blue-800">
                                <FontAwesomeIcon icon={faPen} className="mr-2  hover:text-white hover:bg-blue-800" />
                                Edit
                            </button>
                        </div>
                        </form>
                        <div className='flex items-start'>
                            <div className='p-2'>
                                <button
                                    className="mt-5 border-2 bg-gray-200 font-bold py-2 px-4 rounded text-black hover:text-white hover:bg-red-500"
                                    onClick={() => handleDelete(props.id)}
                                > <FontAwesomeIcon icon={faTrashCan} className="mr-2  hover:text-white hover:bg-red-500" />
                                    Delete
                                </button>
                            </div>

                            <div className='p-2'>
                                <button
                                    className="mt-5 border-2 bg-gray-200 font-bold py-2 px-4 rounded text-black hover:text-white hover:bg-blue-800"
                                    onClick={() => handleDownload(currProps.id)}
                                > <FontAwesomeIcon icon={faDownload} className="mr-2  hover:text-white hover:bg-blue-800" />
                                    Download
                                </button>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )
}

const FileComponent = ({ id, description,is_removed}) => {
    const [fileList,setFileList] = useRecoilState(fileListState);
    const [currFile,setCurrFile] = useRecoilState(currFileListState);
    const [isFileOpen, setIsFileOpen] = useRecoilState(isFileOpenState);
    const [fileId,setFileId] = useRecoilState(FileIdState);
    const [fileExtension,setfileExtension] = useState("");
    const [isFavorite,setIsFavorite] = useState(description.favorites);
    // const handleDelete = (fileId) => {
    //     setFileList(fileList => {
    //         return fileList.map(file => {
    //             if (file.id === fileId) {
    //                 return {
    //                     ...file,
    //                     removed: true
    //                 };
    //             }
    //             return file;
    //         });
    //     });
    // };

    useEffect(() => {
        const fileExt = filename ? filename.split('.').pop() : "doc";
        setfileExtension(fileExt);
    },[])

    const handleDownload = () => {
        downloadFile(id)
            .then((response) => {
                console.log(response);
                const link = document.createElement('a');
                link.href = response;
                link.download = response.substring(response.lastIndexOf('/') + 1);
                link.click();
            })
    };


    const handleFileOpen = (event) => {
        setFileId(event.target.value);
        setIsFileOpen(true);
    }

    const filename = description.file_name;
    const handleFileFavorite = () => {
        setIsFavorite(!isFavorite);
        const updatedFileList = currFile.map(file => {
            if (file.id === id) {
                return { ...file, favorite: !file.favorite };
            }
            return file;
        });
        setCurrFile(updatedFileList);
        putFavoriteFile(id)
            .then(response => console.log(response))
        // Optionally make an API call here to update the favorite status in your backend.
    };

    const handleFilerecover = () => {
        recoverFile(id)
            .then(response => console.log(response))
    }

    const handleFileDelete = () => {

    }

    

    let imageSrc;

    if (fileExtension === 'png') {
        imageSrc = png;
    } else if (fileExtension === 'jpeg' || fileExtension === 'jpg') {
        imageSrc = jpeg;
    } else if (fileExtension === 'pdf') {
        imageSrc = pdf;
    } else if (fileExtension === 'doc' || fileExtension === 'docx') {
        imageSrc = docs;
    } else if (fileExtension === 'xls' || fileExtension === 'xlsx') {
        imageSrc = xls;
    } else if (fileExtension === 'zip') {
        imageSrc = zip;
    } else {
        imageSrc = folder; // Use a default image if the extension is unknown
    }

    return (
        <>
            <Fragment>
                <div className="justify-center flex items-center relative overflow-auto rounded-lg border-gray-300 border-2 px-2 py-2 mx-2 bg-white w-48 h-56 shadow-sm my-3">
                    <div className="flex flex-col items-center">

                        <img src={imageSrc} className="h-20 w-20" alt="" />
                        <div className="flex items-center mt-2 pt-4">
                            {is_removed === true ? (
                                <Fragment>
                                    <button type="button" onClick={handleFilerecover} className="mr-2 text-gray-500 hover:text-blue-800 border-2 ">
                                        복구
                                    </button>
                                    <button type="button" onClick={handleFileOpen} className="mr-2 text-gray-500 hover:text-blue-800 border-2 ">
                                        삭제
                                    </button>
                                </Fragment>
                            ) :
                                <Fragment>
                                    <button type="button" onClick={handleDownload} className="mr-2 text-gray-500 hover:text-blue-800">
                                        <FontAwesomeIcon icon={faDownload} size="lg" />
                                    </button>
                                    <button type="button" onClick={handleFileFavorite} className={`mr-2 ${isFavorite ? 'text-blue-800' : 'text-gray-500'} hover:text-blue-800`}>
                                        <FontAwesomeIcon icon={faStar} size="lg" />
                                    </button>
                                </Fragment>
                            }
                        </div>
                        <div className='pt-2'>
                            <button type="button" onClick={handleFileOpen} value={description.id} className="text-sm font-medium text-gray-600">
                                {description.file_name}
                            </button>
                            <div className="text-xs text-gray-500">{formatBytes(description.size)}</div>
                        </div>

                    </div>
                </div>
                {isFileOpen && <FileDescription _id={id} props={description} />}
            </Fragment>
        </>
    )
}

export default FileComponent;