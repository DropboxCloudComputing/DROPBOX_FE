import React from "react";
import { folderListState } from "../recoil/atom";
import { useRecoilState } from "recoil";
import {Link} from "react-router-dom";
import folder_img from '../static/folder.png';

const FolderListComponent = ({id,description}) => {
    const [folders, setFolders] = useRecoilState(folderListState);
    const handleDelete = (folderId) => {
        setFolders(folders.filter((folder) => folder.id !== folderId));
    };

    return (
        <div className="justify-center relative overflow-auto rounded-lg border-gray-300 border-2 px-4 py-2 mx-5 bg-white w-48 h-12 shadow-sm my-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={folder_img} className="w-6 h-6 object-contain mr-2" alt="" />
            <Link to={description.link} type="button" value={description.id} className="text-sm font-medium text-gray-600">
              {description.name}
            </Link>
          </div>
          <button
            type="button"
            className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded"
            onClick={() => handleDelete(id)}
          >
            X
          </button>
        </div>
      </div>
    );
}

export default FolderListComponent;