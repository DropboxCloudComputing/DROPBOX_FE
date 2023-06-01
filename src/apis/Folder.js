import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000";
axios.defaults.headers.common["Authorization"] = localStorage["JWT"];

const shareFolder = async (nameList, pFolder) => {
    return await axios.post('/api/v1/folders/share/',
        {
            "receiver": nameList,
            "folderId" : pFolder
        },
        {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        }
    )
    .then((response) =>{
        return response.status;
    })
    .catch((error) => {console.log(error)});
}

const createFolder = async (folderName,pFolder) => {
    return await axios.post('/api/v1/folders/create/',
        {
            folder_name : folderName,
            pfolder : pFolder
        },
        {
            headers: {
              'Content-type': 'application/json',
              'Accept': 'application/json'
            }
        }
    )
    .then((response) =>{
        return response.data;
    })
    .catch((error) => { console.log(error) });
}

const deleteFolder = async (folderId) =>{
    return await axios.post(`/api/v1/folders/delete/?current_folder_id=${folderId}`)
        .then((response) => {
            return response.status;
        })
        .catch((error) => { console.log(error) });
}

const changeFolderName = async (folderId,modifiedName) =>{
    return await axios.post(`/api/v1/folders/verify/?current_folder_id=${folderId}`,
        {
            folder_name : modifiedName,
        },
        {
            headers: {
              'Content-type': 'application/json',
              'Accept': 'application/json'
            }
        }
    )
    .then((response) => {
        return response.data;
    })
    .catch((error) => { console.log(error) });
}

export {shareFolder,createFolder,deleteFolder,changeFolderName};