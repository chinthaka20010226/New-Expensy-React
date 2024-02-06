import React from 'react';
import '../Style/SettingBank.css';

import { RiUserSettingsFill } from "react-icons/ri";
import { IoIosArrowDropright } from "react-icons/io";
import { NavLink } from 'react-router-dom';

function SettingBank(){
    const menuItems = [
        {
            path:"",
            name:"Payments Notification",
            icon:<IoIosArrowDropright />
        },
        {
            path:"",
            name:"Payments Help Center",
            icon:<IoIosArrowDropright />
        },
        {
            path:"",
            name:"Payment Two Factor Verification",
            icon:<IoIosArrowDropright />
        },
        {
            path:"",
            name:"Advance Bank Setting",
            icon:<IoIosArrowDropright />
        },
    ]

    return(
        <div className='setting-bank-container w-100'>
            <div className='row'>
                <div className='col setting-bank-top-bar w-100'>
                    <h1 className='setting-bank-top-bar-title'>Bank</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col card rounded-3 setting-bank-body w-100'>
                    <div className='row'>
                        <div className='col setting-bank-body-icon w-100'>
                            <RiUserSettingsFill />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col setting-bank-body-items w-100 col-12'>
                            {
                                menuItems.map((item,index) => (                                                                     
                                    <div className='setting-bank-body-item col-12'>
                                        <div className='setting-bank-body-item-text col-11'>{item.name}</div>
                                        <NavLink to={item.path} key={index} className='col-1 setting-bank-body-item-icon'>
                                            {item.icon}                                                                                                                                                                                      
                                        </NavLink>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SettingBank;