import React from "react";
import { Link } from "react-router-dom";
import '../../styles/Sidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
    const menus = [     //추후 바꿀 예정
        { name: "Home", path: "/" },
        { name: "기타 등등", path: "/" },
    ];
    
    return (
        <div className="sidebar-background">
            {menus.map((menu, index) => {
                return (
                    <Link to={menu.path} key={index}>
                        <div className="sidebar-item">
                            <p className="sidebar-name">{menu.name}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
  };
  
  export default Sidebar;