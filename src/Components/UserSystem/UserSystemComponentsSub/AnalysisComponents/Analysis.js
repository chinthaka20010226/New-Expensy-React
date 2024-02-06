import React from 'react';
import '../Style/Analysis.css';
import '../Style/TopSectionMain.css';

function Analysis(){
    return(
        <section className='h-100 w-100'>
            <div className='analysis-container w-100'>
                <div className='row'>
                    <div className='col top-section-main py-3'>
                        <h1 className='top-section-main-title px-3'>Analysis</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col analysis-wrapper'>
                        <div className=''>
                            <h1>This is Analysis</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Analysis;