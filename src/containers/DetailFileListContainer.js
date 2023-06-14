import React from "react";
import MainPageComponent from "../components/MainPageComponent";
import { useRecoilValue } from "recoil";
import { currentStatusState } from "../recoil/atom";

const MainPageContainer = () => {
    const currentState = useRecoilValue(currentStatusState);

    return(
        <>
            <MainPageComponent folderId={currentState[1]}/>
        </> 
    );
};

export default MainPageContainer;