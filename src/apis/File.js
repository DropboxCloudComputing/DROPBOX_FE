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

export {getFileList,getSpecificFileList};