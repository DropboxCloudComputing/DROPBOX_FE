import {atom} from "recoil";

export const fileListState = atom({
    key : 'fileList',
    default : [{ id: 1, name: 'file1.pdf', size: 123456 },
        { id: 2, name: 'file2.jpg', size: 654321 },
        { id: 3, name: 'file3.docx', size: 987654 },
        { id: 4, name: 'file3.docx', size: 987654 },
        { id: 5, name: 'file3.docx', size: 987654 },
        { id: 6, name: 'file3.docx', size: 987654 },]
});