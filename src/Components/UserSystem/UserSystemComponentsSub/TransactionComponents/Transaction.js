import React from 'react';
import '../Style/Transactions.css';
import '../Style/TopSectionMain.css';

function Transactions(){
    return(
        <section className='h-100 w-100'>
            <div className='transactions-container w-100'>
                <div className='row'>
                    <div className='col top-section-main py-3'>
                        <h1 className='top-section-main-title px-3'>Transactions</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col transactions-wrapper'>
                        <div className=''>
                            <h1>This is Transactions</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Transactions;