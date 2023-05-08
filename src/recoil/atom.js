import {atom} from "recoil";

export const fileListState = atom({
    key : 'fileList',
    default : [],
});