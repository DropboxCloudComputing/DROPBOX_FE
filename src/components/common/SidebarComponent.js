import React from "react";
import { Link } from "react-router-dom";

const SidebarComponent = () => {
    const menus = [     //추후 바꿀 예정
        { name: "Home", path: "/" },
        { name: "기타 등등", path: "/" },
    ];

    return (
        <>
            <div className="w-60 h-screen p-5 bg-gray-100">
                {menus.map((menu, index) => {
                    return (
                        <Link to={menu.path} key={index}>
                            <div className="text-center text-gray-900 text-base sm:text-base rounded-lg block w-full p-2.5">
                                <p>{menu.name}</p>
                            </div>
                        </Link>

                    )
                })}
            </div>
        </>
    );
};

export default SidebarComponent;