import React from 'react';
import '../Style/BankCard.css';
import '../Style/BankAccount.css';
import '../Style/TopSectionMain.css';

function BankCard(){
    return(
        <section class="p-2 p-md-2 h-100 w-100">
            <div className='bank-card-container'>
                <div className='row'>
                    <div className='col top-section-main py-3'>
                        <h1 className='top-section-main-title px-3'>BankCard</h1>
                    </div>
                </div>
                <div class="row d-flex justify-content-center w-100">
                    <div class="col-sm-11 bank-card-wrapper">
                        <form action="" className='bank-card-body-section-form w-100'>
                            <p class="fw-bold mb-4 pb-2">Saved cards:</p>

                            <div className='card d-flex flex-column justify-content-center h-100 p-3 bank-card-card w-100'>
                                <div class="d-flex flex-row align-items-center mb-4 pb-1 bank-card-body-section-save-item">
                                    <div class="flex-fill mx-3">                                                                           
                                        <div class="form-outline">
                                            <input type="text" id="formControlLgXc" class="form-control form-control-lg"
                                                value="**** **** **** 3193" />
                                            <label class="form-label" for="formControlLgXc">Card Number</label>
                                        </div>                                        </div>
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

                                <p class="fw-bold mb-4 pb-2">Add new card:</p>

                                <div className='card d-flex flex-column justify-content-center px-4 bank-card-card'>
                                    <div class="form-outline mb-4 bank-card-body-section-add-item">
                                        <input type="text" id="formControlLgXsd" class="form-control form-control-lg"
                                            value="Anna Doe" />
                                        <label class="form-label" for="formControlLgXsd">Cardholder's Name</label>
                                    </div>

                                    <div class="row mb-4">
                                        <div class="col-7">
                                            <div class="form-outline bank-card-body-section-add-item">
                                                <input type="text" id="formControlLgXM" class="form-control form-control-lg"
                                                    value="1234 5678 1234 5678" />
                                                <label class="form-label" for="formControlLgXM">Card Number</label>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="form-outline bank-card-body-section-add-item">
                                                <input type="password" id="formControlLgExpk" class="form-control form-control-lg"
                                                    placeholder="MM/YYYY" />
                                                <label class="form-label" for="formControlLgExpk">Expire</label>
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="form-outline bank-card-body-section-add-item">
                                                <input type="password" id="formControlLgcvv" class="form-control form-control-lg"
                                                    placeholder="Cvv" />
                                                <label class="form-label" for="formControlLgcvv">Cvv</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='bank-submit d-flex justify-content-center w-100'>
                                        <button type="submit" className="btn bank-submit-btn d-flex justify-content-center btn-lg mb-1">Submit</button>
                                    </div>
                                
                                </div>

                            </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BankCard;