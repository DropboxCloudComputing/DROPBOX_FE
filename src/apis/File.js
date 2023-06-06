import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000";
axios.defaults.headers.common["Authorization"] = localStorage["JWT"];

const getFileList = async () => {
    return await axios.get('/api/v1/files/files/')
    .then(response => {
        return response.data;
    })
    .catch(error => {console.log(error);})
}

const getSpecificFileList = async (sortBy,orderBy) => {
    return await axios.get(`/api/v1/files/files/?sort_by=${sortBy}&sort_order=${orderBy}`)
    .then(response => {
        return response.data;
    })
    .catch(error => {console.log(error);})
}

const getFileDescription = async (fileId) => {
    return await axios.get(`/api/v1/files/files/${fileId}`)
    .then(response => {
        return response.data;
    })
    .catch(error => {console.log(error);})
}

const putFavoriteFile = async (fileId) => {
    return await axios.put(`/api/v1/files/files/${fileId}/favorite/`)
    .then(response => {
        return response.statsus;
    })
    .catch(error => {console.log(error);})
}

const putMemo = async (fileId) => {
    return await axios.put(`/api/v1/files/memos/${fileId}`)
    .then(response => {
        return response.status;
    })
    .catch(error => {console.log(error);})
}

const uploadFile = async (file,folderId,memo) =>{
    let formData = new FormData();
    formData.append("file",file);
    formData.append("folder_id",folderId);
    formData.append("memo",memo);
    return await axios.post(`/api/v1/files/upload/`,formData)
    .then((response) => {
        return response.status;
      })
      .catch((response) => { console.log('Error!') });
}



export {getFileList,getSpecificFileList,getFileDescription,putFavoriteFile,putMemo,uploadFile};