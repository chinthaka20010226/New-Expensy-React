import React from 'react';
import '../Style/BankAccount.css';
import '../Style/TopSectionMain.css';

import { FaIdCard } from "react-icons/fa";

function BankAccount(){
    return(
        <section className="h-100 w-100">
            <div class="bank-acc-container">
                <div className='row'>
                    <div className='col top-section-main py-3'>
                        <h1 className='top-section-main-title px-3'>BankAccount</h1>
                    </div>
                </div>

                <div className='row'>
                    <div className='col container py-1 px-md-5 h-100'>
                        <form>
                            <p class="fw-bold mb-4 pb-2">Saved Accounts:</p>

                            <div className='card d-flex flex-column justify-content-center h-100 p-3 bank-acc-card w-100'>
                                <div className='card-body'>
                                    <div class="d-flex flex-row align-items-center mb-4 pb-1 bank-card-body-section-save-item">
                                        <div class="flex-fill mx-3">                                                                           
                                            <div class="form-outline">
                                                <input type="text" id="formControlLgXc" class="form-control form-control-lg"
                                                    value="**** **** **** 3193" />
                                                <label class="form-label" for="formControlLgXc">Card Number</label>
                                            </div>
                                        </div>
                                        <a href="#!">Remove card</a>
                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-4 pb-1 bank-card-body-section-save-item">
                                        <div class="flex-fill mx-3">
                                            <div class="form-outline">
                                                <input type="text" id="formControlLgXs" class="form-control form-control-lg"
                                                    value="**** **** **** 4296" />
                                                <label class="form-label" for="formControlLgXs">Card Number</label> 
                                            </div>
                                        </div>
                                        <a href="#!">Remove card</a>
                                    </div> 
                                </div> 
                            </div>

                            <p class="fw-bold mb-4 pb-2">Add new Account:</p>

                            <div class="row d-flex justify-content-center align-items-center h-100">
                                <div class="col bank-acc-container-body-section">
                                    <div class="card bank-acc-card rounded-3 p-3">
                                        <div className='w-100 d-flex justify-content-center align-items-center bank-acc-container-body-section-image'>
                                            <FaIdCard />
                                        </div>
                                    <div class="card-body px-md-5">
                                        <h3 class="mb-2 pb-2 pb-md-0 mb-md-4 px-md-2">Bank Info</h3>

                                        <div class="form-outline mb-2 bank-acc-container-body-section-input">
                                            <input type="text" id="form3Example1q" class="form-control" />                                         
                                            <label class="form-label" for="form3Example1q">Card Holder's Name(it appears on card)</label>
                                        </div>

                                        <div class="form-outline mb-2 bank-acc-container-body-section-input">
                                            <input type="text" class="form-control" id="exampleDatepicker1" />
                                            <label for="exampleDatepicker1" class="form-label">Card Number</label>
                                        </div>

                                        <div class="form-outline mb-2 bank-acc-container-body-section-input">
                                            <input type="text" class="form-control" id="exampleDatepicker1" />
                                            <label for="exampleDatepicker1" class="form-label">Security Code</label>
                                        </div>

                                        <div class="form-outline mb-2 bank-acc-container-body-section-input">
                                            <input type="text" class="form-control" id="exampleDatepicker1" />
                                            <label for="exampleDatepicker1" class="form-label">Expire Date</label>
                                        </div>

                                        <div className='bank-submit d-flex justify-content-center w-100'>
                                            <button type="submit" className="btn bank-submit-btn d-flex justify-content-center btn-lg mb-1">Submit</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                </div>

            </div>
        </section>
    );
}

export default BankAccount;