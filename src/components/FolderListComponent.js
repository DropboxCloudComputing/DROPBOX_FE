import React, { useEffect } from "react";
import { folderListState,currentStatusState } from "../recoil/atom";
import { useRecoilState } from "recoil";
import {Link, useNavigate , useLocation} from "react-router-dom";
import folder_img from '../static/folder.png';

const FolderListComponent = ({id,description}) => {
    const [folders, setFolders] = useRecoilState(folderListState);
    const [currentStatue,setCurrentStatus] = useRecoilState(currentStatusState);

    const location = useLocation();
    const parentPath = location.pathname.split('/').slice(0, -1).join('/');
    
    let navigate = useNavigate();
    const handleDelete = (folderId) => {
        setFolders(folders.filter((folder) => folder.id !== folderId));
    };

    const handleClicked = (descript) => {
      setCurrentStatus([descript.folder_name,id]);
      if(id === 0){
        return navigate("/");
      }
    }

    return (
        <div className="justify-center relative overflow-auto rounded-lg border-gray-300 border-2 px-4 py-2 mx-5 bg-white w-48 h-12 shadow-sm my-3">
        <div className="flex items-center justify-between">
          <div onClick={() => handleClicked(description)} className="flex items-center">
            <img src={folder_img} className="w-6 h-6 object-contain mr-2" alt="" />
            <Link to={id === 0 ? "parentPath" : "folder/" + description.folder_name} type="button" id={description.id} className="text-sm font-medium text-gray-600">
              {description.folder_name.length > 5 ? description.folder_name.slice(0, 10) + "..." : description.folder_name}
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