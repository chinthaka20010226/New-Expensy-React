import React, { useState, useEffect } from 'react';
import '../../../../../Styles/UserStyle/MainComponentsStyle/Setting.css';
import '../../../../../Styles/UserStyle/MainComponentsStyle/TopSectionMain.css';

import { NavLink, Outlet } from 'react-router-dom';

const Setting = ({children}) => {
    const[isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        const handelResize = () => {
            if(window.innerWidth < 600){
                setIsOpen(false);
            }
            else{
                setIsOpen(true);
            }
        };

        window.addEventListener('resize', handelResize);

        return () => {
            window.removeEventListener('resize', handelResize);
        };

    }, []);

    const menuItems = [
        {
            path:"settingBank",
            name:"Bank"
        },
        {
            path:"settingNotification",
            name:"Notification"
        },
        {
            path:"settingEmail",
            name:"Email"
        },
        {
            path:"settingAPI",
            name:"API"
        },
        {
            path:"settingTeam",
            name:"Team"
        },
        {
            path:"settingPassword",
            name:"Password"
        }
    ]

    return(
        <section className='h-100 w-100'>
            <div className='px-0 container setting-container w-100'>
                <div className='row'>
                    <div className='col top-section-main py-3'>
                        <h1 className='top-section-main-title px-3'>Setting</h1>
                    </div>
                </div>
                <div className='row setting-top-bar'>
                    <div className='col d-flex flex-column w-100'>
                        {/* <h1 className='top-bar-title w-100'>Setting</h1> */}
                        <div style={{flexDirection: isOpen ? "row" : "column", alignItems: isOpen ? "center" : "center"}} className='top-bar-items col-12 w-100'>
                            {
                                menuItems.map((item,index) => (
                                    <NavLink to={item.path} key={index} style={{width: isOpen ? "100%" : "100%"}} className='setting-link col' activeclassName='active_'>
                                        <div className='link_-text'>{item.name}</div>                                                                                              
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <Outlet />
            </div>
        </section>
    );
}

export default Setting;