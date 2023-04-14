import React,{Fragment} from "react";
import {Link} from "react-router-dom";
//import '../styles/Header.css';

const HeaderCompnent = () => {
    return(
        <>
            <header className='bg-white border-b-4'>
                <nav class="header-nav" aria-label="Global">
                    <div class="flex lg:flex-1">
                        <Link to="https://clownhacker.tistory.com/159" class="-m-1.5 p-1.5 space-x-4 flex">
                            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                            <h1 class="sr-only sm:not-sr-only">KKHU_GIT</h1>
                        </Link>
                    </div>

                    <div class="header-component mr-5">
                        <Link to="https://clownhacker.tistory.com/159" class="header-login">Log Out
                            <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default HeaderCompnent;