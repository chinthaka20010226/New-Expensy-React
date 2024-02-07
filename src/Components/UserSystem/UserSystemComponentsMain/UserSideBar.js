import React, { useState, useEffect } from 'react';
// import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import '../../../Styles/UserStyle/MainComponentsStyle/SideBar.css';

import { 
    MdOutlineDashboardCustomize,
    MdNotificationsNone,
    MdOutlineSettings
} from "react-icons/md";

import { 
    RiBankLine,
    RiBankCardLine,
    RiOrganizationChart
} from "react-icons/ri";

import { 
    TbReportSearch,
    TbFileAnalytics 
} from "react-icons/tb";

import { AiOutlineTransaction } from "react-icons/ai";

const SideBar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true); // Sidebar is initially open

    // Function to toggle sidebar
    // const toggle = () => setIsOpen(!isOpen);

    // Effect to listen for window width changes and close sidebar if width is less than a threshold
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 900) { // You can adjust the threshold as per your requirement
                setIsOpen(false);
            }
            else{
                setIsOpen(true);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const menuItems = [
        {
            path:"/",
            name:"Home",
            icon:<MdOutlineDashboardCustomize />
        },
        {
            path:"/analysis",
            name:"Analysis",
            icon:<TbFileAnalytics />
        },
        {
            path:"/bankAccount",
            name:"BankAccount",
            icon:<RiBankLine />
        },
        {
            path:"/bankCard",
            name:"BankCard",
            icon:<RiBankCardLine />
        },
        {
            path:"/notifications",
            name:"Notifications",
            icon:<MdNotificationsNone />
        },
        {
            path:"/organization",
            name:"Organization",
            icon:<RiOrganizationChart />
        },
        {
            path:"/report",
            name:"Report",
            icon:<TbReportSearch />
        },
        {
            path:"/setting",
            name:"Setting",
            icon:<MdOutlineSettings />
        },
        {
            path:"/transactions",
            name:"Transactions",
            icon:<AiOutlineTransaction />
        }
    ];

    return (
        <div className='container_ h-100 w-100'>
            <div className='row '>
                <div className='col w-100 m-0 p-0 d-flex flex-column sidebar-main-container'>
                    <nav style={{padding: isOpen ? "8px" : "15px"}} className={isOpen ? "navbar navbar-expand-sm vw-100 p-0 m-0" : "navbar vw-100 p-0 m-0"}>
                        <div class="container-fluid navbar-container">
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">

                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                            <a class="nav-link" href="#">Dashboard</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Team</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Projects</a>
                                    </li>
                                </ul>
                                    
                            </div>
                                    
                            <div class="d-flex align-items-center">
                                {/* <!-- Notifications --> */}
                                <div class="dropdown">
                                    <a
                                        data-mdb-dropdown-init
                                        className="link-secondary me-3 dropdown-toggle hidden-arrow"
                                        href="#"
                                        id="navbarDropdownMenuLink"
                                        role="button"
                                        aria-expanded="false"
                                        >
                                        <i className="fas fa-bell"></i>
                                        <span className="badge rounded-pill badge-notification bg-danger">1</span>
                                    </a>
                                    {/* <ul
                                    class="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="navbarDropdownMenuLink"
                                    >
                                    <li>
                                    <a className="dropdown-item" href="#">Some news</a>
                                    </li>
                                    <li>
                                    <a className="dropdown-item" href="#">Another news</a>
                                    </li>
                                    <li>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                    </li>
                                    </ul> */}
                                </div>
                                {/* <!-- Avatar --> */}
                                <div className="dropdown">
                                    <a
                                        data-mdb-dropdown-init
                                        className="dropdown-toggle d-flex align-items-center hidden-arrow"
                                        href="#"
                                        id="navbarDropdownMenuAvatar"
                                        role="button"
                                        aria-expanded="false"
                                    >
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                        className="rounded-circle"
                                        height="25"
                                        alt="Black and White Portrait of a Man"
                                        loading="lazy"
                                    />
                                    </a>
                                    {/* <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="navbarDropdownMenuAvatar"
                                    >
                                    <li>
                                    <a className="dropdown-item" href="#">My profile</a>
                                    </li>
                                    <li>
                                    <a className="dropdown-item" href="#">Settings</a>
                                    </li>
                                    <li>
                                    <a className="dropdown-item" href="#">Logout</a>
                                    </li>
                                    </ul> */}
                                </div>
                            </div>
                            {/* <!-- Right elements --> */}
                        </div>
                        {/* <!-- Container wrapper --> */}
                    </nav>
                    {/* <!-- Navbar --> */}

                    <div className='row w-100'>
                        <div className='col d-flex flex-row w-100'>
                            <div style={{ width: isOpen ? "240px" : "50px", transition: isOpen ? "0.1s" : "0.1s"}} className='side-bar'>
                                <div style={{ marginTop: isOpen ? "0px" : "60px" }} className='top-section'>
                                    <h1 style={{ display: isOpen ? "block" : "none" }} className='logo'>Logo</h1>
                                </div>
                                <div style={{ paddingTop: isOpen ? "0px" : "10px" }} className='body-section'>
                                {
                                    menuItems.map((item, index) => (
                                        <NavLink to={item.path} key={index} style={{ paddingTop: isOpen ? "12px" : "16px", paddingBottom: isOpen ? "12px" : "16px" }} className='link' activeclassName='active'>
                                            <div className='link-icon'>{item.icon}</div>
                                            <div style={{ display: isOpen ? "block" : "none" }} className='link-text'>{item.name}</div>
                                        </NavLink>
                                    ))
                                }
                                </div>
                            </div>
                            <main className='col container p-3 w-100' style={{marginLeft: isOpen ? "216px" : "26px"}}>{children}</main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;