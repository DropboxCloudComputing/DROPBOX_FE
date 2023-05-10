import {atom} from "recoil";

export const fileListState = atom({
    key : 'fileList',
    default : [{ id: 1, name: 'file1.pdf', size: 123456 },
        { id: 2, name: 'file2.jpg', size: 654321 },
        { id: 3, name: 'file3.docx', size: 987654 },
        { id: 4, name: 'file3.docx', size: 987654 },
        { id: 5, name: 'file3.docx', size: 987654 },
        { id: 6, name: 'file3.docx', size: 987654 },
        ]
});


export const sharedFolderState = atom({
    key : 'sharedList',
    default : [
        { id: 1, name: '클라우드 컴퓨팅'},
        { id: 2, name: '소프트웨어 공학'},
    ]
});