import React from 'react';
import '../../../../Styles/UserStyle/SubComponentsStyle/ReportStyle/Report.css';
import '../../../../Styles/UserStyle/MainComponentsStyle/TopSectionMain.css';

function Report(){
    return(
        <section className='h-100 w-100'>
            <div className='report-container w-100'>
                <div className='row'>
                    <div className='col top-section-main py-3'>
                        <h1 className='top-section-main-title px-3'>Report</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col report-wrapper'>
                        <div className=''>
                            <h1>This is Report</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Report;