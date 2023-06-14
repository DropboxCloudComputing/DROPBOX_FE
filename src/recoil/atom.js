import {atom} from "recoil";

export const currFileListState = atom({
    key : 'currFileList',
    default: []
});

export const currFolderListState = atom({
    key : 'currFolderList',
    default: []
});

export const fileListState = atom({
    key : 'fileList',
    default : [
        { id: 1, file_name: 'file1.pdf', size: 123456, removed: false, memo: "This is file1",url: 'C:/Users/MINSEOK/Downloads/folder.png',favorites: false,version: 1 },
        { id: 2, file_name: 'file2.jpg', size: 654321, removed: false, memo: "This is file1", url: 'http://example.com/file1.pdf',favorites: false,version: 1},
        { id: 3, file_name: 'file3.docx', size: 987654, removed: false,memo: "This is file1", url: 'http://example.com/file1.pdf',favorites: false,version: 1},
        { id: 4, file_name: 'file3.docx', size: 987654, removed: false,memo: "This is file1", url: 'http://example.com/file1.pdf', favorites: false,version: 2},
        { id: 5, file_name: 'fileABC.docx', size: 987654, removed: true, memo: "This is file1",url: 'http://example.com/file1.pdf', favorites: false,version: 1},
        { id: 6, file_name: 'fileDEF.docx', size: 987654, removed: true, memo: "This is file1",url: 'http://example.com/file1.pdf', favorites: false,version: 1},
        { id: 7, file_name: 'file1.pdf', size: 123456, removed: false, memo: "This is file1 v2",url: 'C:/Users/MINSEOK/Downloads/folder.png',favorites: false,version: 2 },
        ]
});

export const folderListState = atom({
    key : 'folderList',
    default : [
        { id: 1, name: 'ㅎㅇ', link: 'folder/1'},
    ]
})

export const sharedFolderState = atom({
    key : 'sharedList',
    default : [
        { id: 1, name: '클라우드 컴퓨팅', path: '/cloud-computing'},
        { id: 2, name: '소프트웨어 공학', path: ''},
    ]
});

export const isFileOpenState = atom({
    key : 'isFileOpen',
    default : false
});

export const FileIdState = atom({
    key : 'FileId',
    default : 0
});

export const openFolderCreationState = atom({
    key : 'FolderCreation',
    default : false
});

export const openRelationCreationState = atom({
    key : 'RealationCreation',
    default : false
});

export const isLogInState = atom({
    key : 'isLogIn',
    default : false 
});

export const currentStatusState = atom({
    key : 'currentStatus',
    default : ["Home", 0]
})


export const isFavoriteState = atom({
    key: 'isFavorite',
    default: false,
});;

export const fileVersionState = atom({
    key : 'fileVersion',
    deafult : []
});