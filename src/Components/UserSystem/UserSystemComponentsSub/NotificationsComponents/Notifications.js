import React from 'react';
import '../Style/Notifications.css';
import '../Style/TopSectionMain.css';

function Notifications(){
    return(
        <section className='h-100 w-100'>
            <div className='notifications-container w-100'>
                <div className='row'>
                    <div className='col top-section-main py-3'>
                        <h1 className='top-section-main-title px-3'>Notifications</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col notification-wrapper'>
                        <div className=''>
                            <h1>This is Notifications</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Notifications;