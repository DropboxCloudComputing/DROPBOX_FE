import {atom} from "recoil";

export const fileListState = atom({
    key : 'fileList',
    default : [{ id: 1, name: 'file1.pdf', size: 123456, user_id : 1, is_delete: 0 },
        { id: 2, name: 'file2.jpg', size: 654321, user_id : 2, is_delete: 0 },
        { id: 3, name: 'file3.docx', size: 987654, user_id : 3, is_delete: 0},
        { id: 4, name: 'file3.docx', size: 987654, user_id : 1, is_delete: 0 },
        { id: 5, name: 'fileABC.docx', size: 987654, user_id : 1, is_delete: 1 },
        { id: 6, name: 'fileDEF.docx', size: 987654, user_id : 1, is_delete: 1 },
        ]
});

export const folderState = atom({
    key : 'folderList',
    default : [

    ]
});



export const sharedFolderState = atom({
    key : 'sharedList',
    default : [
        { id: 1, name: '클라우드 컴퓨팅'},
        { id: 2, name: '소프트웨어 공학'},
    ]
});