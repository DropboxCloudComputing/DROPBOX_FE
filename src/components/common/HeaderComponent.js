import React,{Fragment,useEffect,useState} from "react";
import {Link} from "react-router-dom";
import Logo from "../../static/logo-ball.webp";
import { useRecoilState, useRecoilValue } from "recoil";
import { currFileListState, fileListState } from "../../recoil/atom";

const SearchCompoenent = () => {
    const [currFileList,setCurrFileList] = useRecoilState(currFileListState);
    const fileList = useRecoilValue(fileListState);
    const [targetValue,SetTargetValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        SetTargetValue(event.target.value);
        if(event.target.value === ""){
            setCurrFileList(fileList);
        }
        else{
            setCurrFileList(currFileList.filter((file) => (file.file_name).includes(event.target.value)));  
        }
    };

    return (
        <>
            <Fragment>
                <div className="w-2/5">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input onChange={handleSubmit} value={targetValue} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="파일 이름을 적으세요."/>
                            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-stone-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                    </div>
                </div>       
            </Fragment>
        </>
    );
};


const HeaderComponent = () => {
    const handleLogout = () => {
        localStorage.removeItem("JWT");
    }

    return(
        <>
            <header className='bg-white border-b-4'>
                <nav className="header-nav" aria-label="Global">
                    <div className="flex lg:flex-none">
                        <Link to="/" className="-m-1.5 p-1.5 space-x-4 flex">
                            <img className="h-8 w-auto" src={Logo} alt="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" />
                            <h1 className="sr-only sm:not-sr-only">KKHU_GIT</h1>
                        </Link>
                    </div>
                    <SearchCompoenent/>
                    <div className="header-component mr-5">
                        <Link to="/login" onClick={handleLogout} className="header-login">Log Out
                            <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default HeaderComponent;