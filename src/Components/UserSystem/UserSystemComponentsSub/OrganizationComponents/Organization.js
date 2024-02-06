import React from 'react';
import '../Style/Organization.css';
import '../Style/TopSectionMain.css';

function Organization(){
    return(
        <section className='h-100 w-100'>
            <div className='organization-container w-100'>
                <div className='row'>
                    <div className='col top-section-main py-3'>
                        <h1 className='top-section-main-title px-3'>Organization</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col organization-wrapper'>
                        <div className=''>
                            <h1>This is Organization</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Organization;