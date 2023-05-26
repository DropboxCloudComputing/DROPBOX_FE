import {atom} from "recoil";

export const fileListState = atom({
    key : 'fileList',
    default : [
        { id: 1, name: 'file1.pdf', size: 123456, is_delete: 0, url: 'http://example.com/file1.pdf'},
        { id: 2, name: 'file2.jpg', size: 654321, is_delete: 0, url: 'http://example.com/file1.pdf' },
        { id: 3, name: 'file3.docx', size: 987654, is_delete: 0, url: 'http://example.com/file1.pdf'},
        { id: 4, name: 'file3.docx', size: 987654, is_delete: 0, url: 'http://example.com/file1.pdf'},
        { id: 5, name: 'fileABC.docx', size: 987654, is_delete: 1, url: 'http://example.com/file1.pdf'},
        { id: 6, name: 'fileDEF.docx', size: 987654, is_delete: 1, url: 'http://example.com/file1.pdf'},
        ]
});

export const folderListState = atom({
    key : 'folderList',
    default : [
        { id: 1, name: 'ㅎㅇ'},
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