import React from 'react'
import PaymentSection from './PaymentSection'

function index() {
  return (
    <>
       <div>
        <span className="main-checkoutloader" style={{display: 'none'}}><span className="checkoutsubloader" /></span>
        <div className="mainLayout">
          <div className="topHeader">
            <a id="back">
              <svg xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="31.906" height="17.91" viewBox="0 0 31.906 17.91">
                <path d="M30.907,9.937 L3.401,9.937 L9.675,16.199 C10.065,16.587 10.065,17.217 9.675,17.606 C9.480,17.800 9.225,17.897 8.970,17.897 C8.715,17.897 8.460,17.800 8.265,17.606 L0.289,9.646 C0.197,9.554 0.123,9.444 0.073,9.322 C0.022,9.200 -0.004,9.071 -0.004,8.941 C-0.004,8.941 -0.004,8.941 -0.004,8.941 C-0.004,8.940 -0.004,8.939 -0.004,8.938 C-0.003,8.809 0.023,8.682 0.073,8.561 C0.123,8.439 0.197,8.329 0.289,8.237 L8.265,0.277 C8.655,-0.112 9.286,-0.112 9.675,0.277 C10.065,0.665 10.065,1.295 9.675,1.684 L3.400,7.946 L30.907,7.946 C31.458,7.946 31.904,8.392 31.904,8.941 C31.904,9.491 31.458,9.937 30.907,9.937 Z" />
              </svg>
            </a>
            <h2 className="headingcheckout">Checkout</h2>
          </div>
          <div className="layoutBottom">
            <div className="layoutLeft">
              <span className="sub-checkoutloader" style={{display: 'none'}}><span className="checkoutsubloader" /></span>
              <div className="topHeaderBottom" style={{display: 'none'}}>
                <p className="headLogin">Already have an account?<a href="/login.php" className="headloginname"> LOGIN</a></p>
                <p className="headlogintext">Get 5% cashback on every order. Login Now!</p>
              </div>
              {/* same billing */}
              <div className="samebilling">
                <div className="contactBlock" style={{display: 'none'}}>
                  <h3 className="subHead">Contact Details</h3>
                  <form className="formcontact">
                    <div className="form-field  contact">
                      <label htmlFor="phone" id="phone-label" className="form-label"> </label>
                      <input id="phone" type="tel" className="form-input checkout " inputMode="text" name="phone" maxLength={10} placeholder="Phone No."  />
                      <div className="input-error" style={{display: 'none'}}>
                        <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                          <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                        </svg>
                        <div className="tooltip">The entered phone number is wrong</div>
                      </div>
                    </div>
                    <div className="form-field  email">
                      <label htmlFor="email" id="email-label" className="form-label" />
                      <input id="email" type="email" className="form-input checkout " name="email" placeholder="Email Address"  />
                      <div className="input-error" style={{display: 'none'}}>
                        <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                          <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                        </svg>
                        <div className="tooltip">The entered phone number is wrong</div>
                      </div>
                    </div>
                    <div className="form-field fullName ">
                      <label htmlFor="text" id="text-label" className="form-label" />
                      <input id="text" type="text" className="form-input checkout " name="text" placeholder="Full Name"  />
                      <div className="input-error" style={{display: 'none'}}>
                        <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                          <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                        </svg>
                        <div className="tooltip">The entered phone number is wrong</div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="shippingBlock" style={{display: 'none'}}>
                  <h3 className="subHead">Shipping Details</h3>
                  <form className="formcontact">
                    <div className="form-field fullName">
                      <label htmlFor="address1" id="address-label" className="form-label" />
                      <input id="address1" type="text" className="form-input checkout" name="text" placeholder="Address (House No., Building, Street, Area)"  />
                      <div className="input-error" style={{display: 'none'}}>
                        <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                          <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                        </svg>
                        <div className="tooltip">The entered phone number is wrong</div>
                      </div>
                    </div>
                    <div className="form-field ship empty">
                      <label htmlFor="postalCode" id="pincode-label" className="form-label"> </label>
                      <input id="postalCode" type="tel" className="form-input checkout" name="postalCode" placeholder="Pincode" pattern="^\d{6}$" maxLength={6}  />
                      <div className="input-error" style={{display: 'none'}}>
                        <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                          <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                        </svg>
                        <div className="tooltip">The entered phone number is wrong</div>
                      </div>
                    </div>
                    <div className="form-field ship empty">
                      <label htmlFor="city" id="city-label" className="form-label" />
                      <input id="city" type="text" className="form-input checkout" name="city" placeholder="City"  />
                      <div className="input-error" style={{display: 'none'}}>
                        <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                          <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                        </svg>
                        <div className="tooltip">The entered phone number is wrong</div>
                      </div>
                    </div>
                    <div className="form-field ship mobile">
                      <div className="dropdownSvg">
                        <svg xmlns="https://www.w3.org/2000/svg" width={23} height={10} viewBox="0 0 25.76 14.035">
                          <g id="Dropdown" transform="translate(1.028 1.092)">
                            <path id="Path_64" data-name="Path 64" d="M371.1,4535.156l-12.149,10.437-11.605-10.926" transform="translate(-347.349 -4534.667)" fill="none" stroke="#80a03c" strokeWidth={3} />
                          </g>
                        </svg>
                      </div>
                      <label htmlFor="state" />
                      <select id="state"  name="state"  className="form-input checkout form-area">
                        <option disabled selected>State</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                      </select>
                    </div>
                  </form>
                </div>
                <div className="loginDetails">
                  <div className="contactBlock" style={{display: 'none'}}>
                    <p className="loginNameHead">Hi <span className="customerName">Rashmita</span>, welcome to Kapiva!</p>
                    <h3 className="subHead">Shipping Details</h3>
                    <div className="loginDataMain">
                      <div className="loginForm">
                        <div className="loginDataLeft">
                          <p className="loginName" id="sipp_fullname">Rashmita Sancheti</p>
                        </div>
                        <div className="loginDataRight">
                          <a href="javascript:void(0)" className="edit">
                            <svg xmlns="https://www.w3.org/2000/svg" width="26.189" height="26.189" viewBox="0 0 26.189 26.189">
                              <g id="Icon_feather-edit" data-name="Icon feather-edit" transform="translate(-2 -1.629)">
                                <path id="Path_326" data-name="Path 326" d="M13.946,6H5.432A2.432,2.432,0,0,0,3,8.432V25.459a2.432,2.432,0,0,0,2.432,2.432H22.459a2.432,2.432,0,0,0,2.432-2.432V16.946" transform="translate(0 -1.073)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                                <path id="Path_327" data-name="Path 327" d="M22.437,3.436a2.109,2.109,0,0,1,2.982,2.982L15.976,15.86,12,16.854l.994-3.976Z" transform="translate(0.964 0)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                              </g>
                            </svg>
                          </a>
                          <a href="javascript:void(0)" className="delete">
                            <svg xmlns="https://www.w3.org/2000/svg" width="20.053" height={25} viewBox="0 0 20.053 25">
                              <g id="_0e6cf822d3a8fd70fcceb9f95ebf5c76" data-name="0e6cf822d3a8fd70fcceb9f95ebf5c76" transform="translate(-9.8 -5.5)">
                                <path id="Path_516" data-name="Path 516" d="M14.159,30H25.542a2.31,2.31,0,0,0,2.315-2.3V12.1H28.87a.455.455,0,0,0,.482-.48v-1.1a1.776,1.776,0,0,0-1.785-1.776h-4.1V7.488A1.5,1.5,0,0,0,21.973,6H17.68a1.5,1.5,0,0,0-1.5,1.488V8.736h-4.1A1.776,1.776,0,0,0,10.3,10.512v1.1a.455.455,0,0,0,.482.48H11.8V27.7A2.352,2.352,0,0,0,14.159,30Zm12.734-2.3a1.345,1.345,0,0,1-1.351,1.344H14.159A1.345,1.345,0,0,1,12.808,27.7V12.1H26.941V27.7ZM17.149,7.488a.534.534,0,0,1,.531-.528h4.293a.534.534,0,0,1,.531.528V8.736H17.2V7.488Zm-5.885,3.024a.811.811,0,0,1,.82-.816H27.52a.811.811,0,0,1,.82.816v.624H11.265Z" fill="none" stroke="#000" strokeWidth={1} />
                                <g id="Path_517" data-name="Path 517" transform="translate(-6.4 -9.9)" fill="none">
                                  <path d="M29.815,37.1a.537.537,0,0,0,.6-.531V23.931a.6.6,0,0,0-1.2,0v12.64A.571.571,0,0,0,29.815,37.1Zm-3.478,0a.537.537,0,0,0,.6-.531V23.931a.6.6,0,0,0-1.2,0v12.64A.537.537,0,0,0,26.337,37.1Zm-3.538,0a.537.537,0,0,0,.6-.531V23.931a.6.6,0,0,0-1.2,0v12.64A.537.537,0,0,0,22.8,37.1Z" stroke="none" />
                                  <path d="M 29.81495475769043 37.10239410400391 C 29.5151538848877 37.10239410400391 29.21535301208496 36.88995361328125 29.21535301208496 36.57129287719727 L 29.21535301208496 23.93110466003418 C 29.21535301208496 23.6124439239502 29.4551944732666 23.40000343322754 29.81495475769043 23.40000343322754 C 30.17470359802246 23.40000343322754 30.41455459594727 23.6124439239502 30.41455459594727 23.93110466003418 L 30.41455459594727 36.57129287719727 C 30.41455459594727 36.88995361328125 30.17470359802246 37.10239410400391 29.81495475769043 37.10239410400391 Z M 26.33725357055664 37.10239410400391 C 25.97749328613281 37.10239410400391 25.7376537322998 36.88995361328125 25.7376537322998 36.57129287719727 L 25.7376537322998 23.93110466003418 C 25.7376537322998 23.6124439239502 25.97749328613281 23.40000343322754 26.33725357055664 23.40000343322754 C 26.69701385498047 23.40000343322754 26.93685340881348 23.6124439239502 26.93685340881348 23.93110466003418 L 26.93685340881348 36.57129287719727 C 26.93685340881348 36.88995361328125 26.69701385498047 37.10239410400391 26.33725357055664 37.10239410400391 Z M 22.79959297180176 37.10239410400391 C 22.43983459472656 37.10239410400391 22.20000457763672 36.88995361328125 22.20000457763672 36.57129287719727 L 22.20000457763672 23.93110466003418 C 22.20000457763672 23.6124439239502 22.43983459472656 23.40000343322754 22.79959297180176 23.40000343322754 C 23.15935325622559 23.40000343322754 23.39919471740723 23.6124439239502 23.39919471740723 23.93110466003418 L 23.39919471740723 36.57129287719727 C 23.39919471740723 36.88995361328125 23.15935325622559 37.10239410400391 22.79959297180176 37.10239410400391 Z" stroke="none" fill="#000" />
                                </g>
                              </g>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="loginAdd">
                        <p className="address" id="sipp_full_address">Villa No.111, RBD Stillwaters, Silver County Road Bangalore, Karnataka, 560102,India.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="extra_block">
                  </div>
                  <div className="editbill-details">
                    {/* edite details */}
                    <div className="editDetails" style={{display: 'none'}}>
                      <div className="headEdite">
                        <h3>
                          <button id="o_edit_modal">
                            <svg className="minus-svg" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                              <g id="Icon_ionic-ios-add-circle-outline" data-name="Icon ionic-ios-add-circle-outline" transform="translate(-3.375 -3.375)">
                                <path id="Path_324" data-name="Path 324" d="M21.61,15.61h-10.2a.863.863,0,0,0-.9.9.873.873,0,0,0,.9.9h10.2a.9.9,0,1,0,0-1.8Z" transform="translate(-3.137 -3.137)" />
                                <path id="Path_325" data-name="Path 325" d="M13.375,4.721a8.65,8.65,0,1,1-6.12,2.534,8.6,8.6,0,0,1,6.12-2.534m0-1.346a10,10,0,1,0,10,10,10,10,0,0,0-10-10Z" />
                              </g>
                            </svg>
                          </button>
                          EDIT DETAILS
                        </h3>
                      </div>
                      <div className="editeForm">
                        <div className="contactBlock">
                          <h3 className="subHead">Contact Details</h3>
                          <form className="formcontact">
                            <div className="form-field empty contact">
                              <label htmlFor="phone3" id="phone-label" className="form-label"> </label>
                              <input id="phone3" type="tel" className="form-input checkout invalid" inputMode="text" name="phone" maxLength={10} placeholder="Phone No."  />
                              <div className="input-error" style={{display: 'none'}}>
                                <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                  <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                                </svg>
                                <div className="tooltip">The entered phone number is wrong</div>
                              </div>
                            </div>
                            <div className="form-field empty email">
                              <label htmlFor="email3" id="email-label" className="form-label" />
                              <input id="email3" type="email" className="form-input checkout invalid" name="email" placeholder="Email Address"  />
                              <div className="input-error" style={{display: 'none'}}>
                                <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                  <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                                </svg>
                                <div className="tooltip">The entered phone number is wrong</div>
                              </div>
                            </div>
                            <div className="form-field fullName empty">
                              <label htmlFor="text3" id="text-label" className="form-label" />
                              <input id="text3" type="text" className="form-input checkout invalid" name="text" placeholder="Full Name"  />
                              <div className="input-error" style={{display: 'none'}}>
                                <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                  <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                                </svg>
                                <div className="tooltip">The entered phone number is wrong</div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="shippingBlock">
                          <h3 className="subHead">Shipping Address</h3>
                          <form className="formcontact">
                            <div className="form-field fullName empty">
                              <label htmlFor="address4" id="address-label" className="form-label" />
                              <input id="address4" type="text" className="form-input checkout" name="text" placeholder="Address (House No., Building, Street, Area)"  />
                              <div className="input-error" style={{display: 'none'}}>
                                <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                  <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                                </svg>
                                <div className="tooltip">The entered phone number is wrong</div>
                              </div>
                            </div>
                            <div className="form-field ship empty">
                              <label htmlFor="postalCode4" id="pincode-label" className="form-label"> </label>
                              <input id="postalCode4" type="tel" className="form-input checkout" name="postalCode" placeholder="Pincode" pattern="^\d{6}$" maxLength={6}  />
                              <div className="input-error" style={{display: 'none'}}>
                                <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                  <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                                </svg>
                                <div className="tooltip">The entered phone number is wrong</div>
                              </div>
                            </div>
                            <div className="form-field ship empty">
                              <label htmlFor="city4" id="city-label" className="form-label" />
                              <input id="city4" type="text" className="form-input checkout" name="city" placeholder="City"  />
                              <div className="input-error" style={{display: 'none'}}>
                                <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                  <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                                </svg>
                                <div className="tooltip">The entered phone number is wrong</div>
                              </div>
                            </div>
                            <div className="form-field ship mobile">
                              <div className="dropdownSvg">
                                <svg xmlns="https://www.w3.org/2000/svg" width={23} height={10} viewBox="0 0 25.76 14.035">
                                  <g id="Dropdown" transform="translate(1.028 1.092)">
                                    <path id="Path_64" data-name="Path 64" d="M371.1,4535.156l-12.149,10.437-11.605-10.926" transform="translate(-347.349 -4534.667)" fill="none" stroke="#80a03c" strokeWidth={3} />
                                  </g>
                                </svg>
                              </div>
                              <label htmlFor="state4" />
                              <select id="state4" name="state"  className="form-input checkout form-area">
                              </select>
                            </div>
                          </form>
                        </div>
                        <div className="totalOffer">
                          <p className="offerText hide" id="edit_fielderror">Please provide a valid <span>contact number</span> to proceed</p>
                        </div>
                        <div className="editeMessageError editedetail-error  addressActive">
                          <button id="edit_error_btn" className="errrorText show">Please fill your details to proceed</button>
                          <button className="errrorText hide contact">Please check your <span> "invalid field name" </span> details</button>
                          <button id="edit_btn" className="errrorText active hide">UPDATE ADDRESS</button>
                        </div>
                      </div>
                    </div>
                    {/* choose address ctc */}
                    <div className="editeAddresBottom" style={{display: 'none'}}>
                      <div className="loginDiffrentAdd">
                        <div className="loginBottomBorder">
                          <span />
                        </div>
                        <div className="chooseAddress">
                          <a href="javascript:void(0)">
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                              <g id="Icon_ionic-ios-add-circle-outline" data-name="Icon ionic-ios-add-circle-outline" transform="translate(-3.375 -3.375)">
                                <path id="Path_324" data-name="Path 324" d="M21.61,15.61h-4.2v-4.2a.9.9,0,0,0-1.8,0v4.2h-4.2a.863.863,0,0,0-.9.9.873.873,0,0,0,.9.9h4.2v4.2a.873.873,0,0,0,.9.9.9.9,0,0,0,.9-.9v-4.2h4.2a.9.9,0,1,0,0-1.8Z" transform="translate(-3.137 -3.137)" />
                                <path id="Path_325" data-name="Path 325" d="M13.375,4.721a8.65,8.65,0,1,1-6.12,2.534,8.6,8.6,0,0,1,6.12-2.534m0-1.346a10,10,0,1,0,10,10,10,10,0,0,0-10-10Z" />
                              </g>
                            </svg>
                            CHOOSE ANOTHER ADDRESS
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* add address as a edit address */}
                    <div className="addressPopup " style={{display: 'none'}}>
                      <div className="editDetails">
                        <div className="addressHeadMain">
                          <div className="headEdite">
                            <h3>
                              <button id="o_add_modal" style={{display: 'none'}}>
                                <svg className="minus-svg" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                  <g id="Icon_ionic-ios-add-circle-outline" data-name="Icon ionic-ios-add-circle-outline" transform="translate(-3.375 -3.375)">
                                    <path id="Path_324" data-name="Path 324" d="M21.61,15.61h-10.2a.863.863,0,0,0-.9.9.873.873,0,0,0,.9.9h10.2a.9.9,0,1,0,0-1.8Z" transform="translate(-3.137 -3.137)" />
                                    <path id="Path_325" data-name="Path 325" d="M13.375,4.721a8.65,8.65,0,1,1-6.12,2.534,8.6,8.6,0,0,1,6.12-2.534m0-1.346a10,10,0,1,0,10,10,10,10,0,0,0-10-10Z" />
                                  </g>
                                </svg>
                              </button>
                              ADD ADDRESS
                            </h3>
                          </div>
                          <div className="editeForm">
                            <div className="contactBlock">
                              <h3 className="subHead">Contact Details</h3>
                              <form className="formcontact">
                                <div className="form-field empty ">
                                  <label className="form-label"> </label>
                                  <input id="add_phone" type="tel" className="form-input checkout invalid" inputMode="text" name="phone" maxLength={10} placeholder="Phone No."  />
                                  <div className="input-error" style={{display: 'none'}}>
                                    <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                      <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                                    </svg>
                                    <div className="tooltip">The entered phone number is wrong</div>
                                  </div>
                                </div>
                                <div className="form-field empty">
                                  <label  className="form-label" />
                                  <input id="add_email" type="email" className="form-input checkout invalid" name="email" placeholder="Email Address"  />
                                  <div className="input-error" style={{display: 'none'}}>
                                    <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                      <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                                    </svg>
                                    <div className="tooltip">The entered phone number is wrong</div>
                                  </div>
                                </div>
                                <div className="form-field fullName empty">
                                  <label  className="form-label" />
                                  <input id="add_text" type="text" className="form-input checkout invalid" name="text" placeholder="Full Name"  />
                                  <div className="input-error" style={{display: 'none'}}>
                                    <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                      <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                                    </svg>
                                    <div className="tooltip">The entered phone number is wrong</div>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="shippingBlock">
                              <h3 className="subHead">Shipping Address</h3>
                              <form className="formcontact">
                                <div className="form-field fullName">
                                  <label  className="form-label" />
                                  <input id="add_address1" type="text" className="form-input checkout" name="text" placeholder="Address (House No., Building, Street, Area)"  />
                                  <div className="input-error" style={{display: 'none'}}>
                                    <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                      <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                                    </svg>
                                    <div className="tooltip">The entered phone number is wrong</div>
                                  </div>
                                </div>
                                <div className="form-field ship">
                                  <label  className="form-label"> </label>
                                  <input id="add_postalcode" type="tel" className="form-input checkout" name="postalCode" maxLength={10} placeholder="Pincode" pattern="^\d{6}$"  />
                                  <div className="input-error" style={{display: 'none'}}>
                                    <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                      <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                                    </svg>
                                    <div className="tooltip">The entered phone number is wrong</div>
                                  </div>
                                </div>
                                <div className="form-field ship">
                                  <label  className="form-label" />
                                  <input id="add_city" type="text" className="form-input checkout" name="city" placeholder="City"  />
                                  <div className="input-error" style={{display: 'none'}}>
                                    <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                      <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                                    </svg>
                                    <div className="tooltip">The entered phone number is wrong</div>
                                  </div>
                                </div>
                                <div className="form-field ship mobile">
                                  <div className="dropdownSvg">
                                    <svg xmlns="https://www.w3.org/2000/svg" width={23} height={10} viewBox="0 0 25.76 14.035">
                                      <g id="Dropdown" transform="translate(1.028 1.092)">
                                        <path id="Path_64" data-name="Path 64" d="M371.1,4535.156l-12.149,10.437-11.605-10.926" transform="translate(-347.349 -4534.667)" fill="none" stroke="#80a03c" strokeWidth={3} />
                                      </g>
                                    </svg>
                                  </div>
                                  <select id="add_state"  name="state"  className="form-input checkout form-area">
                                    <option disabled selected>State</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                  </select>
                                </div>
                              </form>
                            </div>
                            <div className="totalOffer">
                              <p className="offerText hide" id="add_fielderror">Please provide a valid <span>contact number</span> to proceed</p>
                            </div>
                            <div className="editeMessageError addressActive">
                              <button className="errrorText show" id="add_error_btn">Please fill your details to proceed</button>
                              <button className="errrorText hide contact">Please check your <span> contact </span> details</button>
                              <button className="errrorText active hide" id="add_address">ADD ADDRESS</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* choose address popup */}
                    <div className="chooseAddressPopupMain">
                      <div className="chooseAddWrap">
                        <span className="sub-checkoutloader" style={{display: 'none'}}><span className="checkoutsubloader" /></span>
                        <div className="addressChoose">
                          <h3>
                            Choose an Address
                            <a className="closeModal" href="javascript:void(0)">
                              <svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} viewBox="0 0 44 44">
                                <path id="Icon_ionic-md-close" data-name="Icon ionic-md-close" d="M51.523,11.923l-4.4-4.4-17.6,17.6-17.6-17.6-4.4,4.4,17.6,17.6-17.6,17.6,4.4,4.4,17.6-17.6,17.6,17.6,4.4-4.4-17.6-17.6Z" transform="translate(-7.523 -7.523)" />
                              </svg>
                            </a>
                          </h3>
                        </div>
                        <div className="chooseAddMainPopup">
                          <div className="loginDataMain is-active">
                            <input type="radio" id="address_choose" className="addressInput" name="chooseAddNew" />
                            <label htmlFor="address_choose" className="rightData">
                              <div className="loginForm">
                                <div className="loginDataLeft">
                                  <p className="loginName">Rashmita Sancheti</p>
                                </div>
                                <div className="loginDataRight">
                                  <a href="javascript:void(0)" className="edit">
                                    <svg xmlns="https://www.w3.org/2000/svg" width="26.189" height="26.189" viewBox="0 0 26.189 26.189">
                                      <g id="Icon_feather-edit" data-name="Icon feather-edit" transform="translate(-2 -1.629)">
                                        <path id="Path_326" data-name="Path 326" d="M13.946,6H5.432A2.432,2.432,0,0,0,3,8.432V25.459a2.432,2.432,0,0,0,2.432,2.432H22.459a2.432,2.432,0,0,0,2.432-2.432V16.946" transform="translate(0 -1.073)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                                        <path id="Path_327" data-name="Path 327" d="M22.437,3.436a2.109,2.109,0,0,1,2.982,2.982L15.976,15.86,12,16.854l.994-3.976Z" transform="translate(0.964 0)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                                      </g>
                                    </svg>
                                  </a>
                                  <a href="javascript:void(0)" className="delete">
                                    <svg xmlns="https://www.w3.org/2000/svg" width="20.053" height={25} viewBox="0 0 20.053 25">
                                      <g id="_0e6cf822d3a8fd70fcceb9f95ebf5c76" data-name="0e6cf822d3a8fd70fcceb9f95ebf5c76" transform="translate(-9.8 -5.5)">
                                        <path id="Path_516" data-name="Path 516" d="M14.159,30H25.542a2.31,2.31,0,0,0,2.315-2.3V12.1H28.87a.455.455,0,0,0,.482-.48v-1.1a1.776,1.776,0,0,0-1.785-1.776h-4.1V7.488A1.5,1.5,0,0,0,21.973,6H17.68a1.5,1.5,0,0,0-1.5,1.488V8.736h-4.1A1.776,1.776,0,0,0,10.3,10.512v1.1a.455.455,0,0,0,.482.48H11.8V27.7A2.352,2.352,0,0,0,14.159,30Zm12.734-2.3a1.345,1.345,0,0,1-1.351,1.344H14.159A1.345,1.345,0,0,1,12.808,27.7V12.1H26.941V27.7ZM17.149,7.488a.534.534,0,0,1,.531-.528h4.293a.534.534,0,0,1,.531.528V8.736H17.2V7.488Zm-5.885,3.024a.811.811,0,0,1,.82-.816H27.52a.811.811,0,0,1,.82.816v.624H11.265Z" fill="none" stroke="#000" strokeWidth={1} />
                                        <g id="Path_517" data-name="Path 517" transform="translate(-6.4 -9.9)" fill="none">
                                          <path d="M29.815,37.1a.537.537,0,0,0,.6-.531V23.931a.6.6,0,0,0-1.2,0v12.64A.571.571,0,0,0,29.815,37.1Zm-3.478,0a.537.537,0,0,0,.6-.531V23.931a.6.6,0,0,0-1.2,0v12.64A.537.537,0,0,0,26.337,37.1Zm-3.538,0a.537.537,0,0,0,.6-.531V23.931a.6.6,0,0,0-1.2,0v12.64A.537.537,0,0,0,22.8,37.1Z" stroke="none" />
                                          <path d="M 29.81495475769043 37.10239410400391 C 29.5151538848877 37.10239410400391 29.21535301208496 36.88995361328125 29.21535301208496 36.57129287719727 L 29.21535301208496 23.93110466003418 C 29.21535301208496 23.6124439239502 29.4551944732666 23.40000343322754 29.81495475769043 23.40000343322754 C 30.17470359802246 23.40000343322754 30.41455459594727 23.6124439239502 30.41455459594727 23.93110466003418 L 30.41455459594727 36.57129287719727 C 30.41455459594727 36.88995361328125 30.17470359802246 37.10239410400391 29.81495475769043 37.10239410400391 Z M 26.33725357055664 37.10239410400391 C 25.97749328613281 37.10239410400391 25.7376537322998 36.88995361328125 25.7376537322998 36.57129287719727 L 25.7376537322998 23.93110466003418 C 25.7376537322998 23.6124439239502 25.97749328613281 23.40000343322754 26.33725357055664 23.40000343322754 C 26.69701385498047 23.40000343322754 26.93685340881348 23.6124439239502 26.93685340881348 23.93110466003418 L 26.93685340881348 36.57129287719727 C 26.93685340881348 36.88995361328125 26.69701385498047 37.10239410400391 26.33725357055664 37.10239410400391 Z M 22.79959297180176 37.10239410400391 C 22.43983459472656 37.10239410400391 22.20000457763672 36.88995361328125 22.20000457763672 36.57129287719727 L 22.20000457763672 23.93110466003418 C 22.20000457763672 23.6124439239502 22.43983459472656 23.40000343322754 22.79959297180176 23.40000343322754 C 23.15935325622559 23.40000343322754 23.39919471740723 23.6124439239502 23.39919471740723 23.93110466003418 L 23.39919471740723 36.57129287719727 C 23.39919471740723 36.88995361328125 23.15935325622559 37.10239410400391 22.79959297180176 37.10239410400391 Z" stroke="none" fill="#000" />
                                        </g>
                                      </g>
                                    </svg>
                                  </a>
                                </div>
                              </div>
                              <div className="loginAdd">
                                <p className="address">Villa No.111, RBD Stillwaters, Silver County Road Bangalore, Karnataka,
                                  560102,India.</p>
                              </div>
                            </label>
                          </div>
                          <div className="loginDataMain non-active">
                            <input type="radio" id="address_choose-new" className="addressInput" name="chooseAddNew" />
                            <label htmlFor="address_choose-new" className="rightData">
                              <div className="loginForm">
                                <div className="loginDataLeft">
                                  <p className="loginName">Rashmita Sancheti</p>
                                </div>
                                <div className="loginDataRight">
                                  <a href="javascript:void(0)" className="edit">
                                    <svg xmlns="https://www.w3.org/2000/svg" width="26.189" height="26.189" viewBox="0 0 26.189 26.189">
                                      <g id="Icon_feather-edit" data-name="Icon feather-edit" transform="translate(-2 -1.629)">
                                        <path id="Path_326" data-name="Path 326" d="M13.946,6H5.432A2.432,2.432,0,0,0,3,8.432V25.459a2.432,2.432,0,0,0,2.432,2.432H22.459a2.432,2.432,0,0,0,2.432-2.432V16.946" transform="translate(0 -1.073)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                                        <path id="Path_327" data-name="Path 327" d="M22.437,3.436a2.109,2.109,0,0,1,2.982,2.982L15.976,15.86,12,16.854l.994-3.976Z" transform="translate(0.964 0)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                                      </g>
                                    </svg>
                                  </a>
                                  <a href="javascript:void(0)" className="delete">
                                    <svg xmlns="https://www.w3.org/2000/svg" width="20.053" height={25} viewBox="0 0 20.053 25">
                                      <g id="_0e6cf822d3a8fd70fcceb9f95ebf5c76" data-name="0e6cf822d3a8fd70fcceb9f95ebf5c76" transform="translate(-9.8 -5.5)">
                                        <path id="Path_516" data-name="Path 516" d="M14.159,30H25.542a2.31,2.31,0,0,0,2.315-2.3V12.1H28.87a.455.455,0,0,0,.482-.48v-1.1a1.776,1.776,0,0,0-1.785-1.776h-4.1V7.488A1.5,1.5,0,0,0,21.973,6H17.68a1.5,1.5,0,0,0-1.5,1.488V8.736h-4.1A1.776,1.776,0,0,0,10.3,10.512v1.1a.455.455,0,0,0,.482.48H11.8V27.7A2.352,2.352,0,0,0,14.159,30Zm12.734-2.3a1.345,1.345,0,0,1-1.351,1.344H14.159A1.345,1.345,0,0,1,12.808,27.7V12.1H26.941V27.7ZM17.149,7.488a.534.534,0,0,1,.531-.528h4.293a.534.534,0,0,1,.531.528V8.736H17.2V7.488Zm-5.885,3.024a.811.811,0,0,1,.82-.816H27.52a.811.811,0,0,1,.82.816v.624H11.265Z" fill="none" stroke="#000" strokeWidth={1} />
                                        <g id="Path_517" data-name="Path 517" transform="translate(-6.4 -9.9)" fill="none">
                                          <path d="M29.815,37.1a.537.537,0,0,0,.6-.531V23.931a.6.6,0,0,0-1.2,0v12.64A.571.571,0,0,0,29.815,37.1Zm-3.478,0a.537.537,0,0,0,.6-.531V23.931a.6.6,0,0,0-1.2,0v12.64A.537.537,0,0,0,26.337,37.1Zm-3.538,0a.537.537,0,0,0,.6-.531V23.931a.6.6,0,0,0-1.2,0v12.64A.537.537,0,0,0,22.8,37.1Z" stroke="none" />
                                          <path d="M 29.81495475769043 37.10239410400391 C 29.5151538848877 37.10239410400391 29.21535301208496 36.88995361328125 29.21535301208496 36.57129287719727 L 29.21535301208496 23.93110466003418 C 29.21535301208496 23.6124439239502 29.4551944732666 23.40000343322754 29.81495475769043 23.40000343322754 C 30.17470359802246 23.40000343322754 30.41455459594727 23.6124439239502 30.41455459594727 23.93110466003418 L 30.41455459594727 36.57129287719727 C 30.41455459594727 36.88995361328125 30.17470359802246 37.10239410400391 29.81495475769043 37.10239410400391 Z M 26.33725357055664 37.10239410400391 C 25.97749328613281 37.10239410400391 25.7376537322998 36.88995361328125 25.7376537322998 36.57129287719727 L 25.7376537322998 23.93110466003418 C 25.7376537322998 23.6124439239502 25.97749328613281 23.40000343322754 26.33725357055664 23.40000343322754 C 26.69701385498047 23.40000343322754 26.93685340881348 23.6124439239502 26.93685340881348 23.93110466003418 L 26.93685340881348 36.57129287719727 C 26.93685340881348 36.88995361328125 26.69701385498047 37.10239410400391 26.33725357055664 37.10239410400391 Z M 22.79959297180176 37.10239410400391 C 22.43983459472656 37.10239410400391 22.20000457763672 36.88995361328125 22.20000457763672 36.57129287719727 L 22.20000457763672 23.93110466003418 C 22.20000457763672 23.6124439239502 22.43983459472656 23.40000343322754 22.79959297180176 23.40000343322754 C 23.15935325622559 23.40000343322754 23.39919471740723 23.6124439239502 23.39919471740723 23.93110466003418 L 23.39919471740723 36.57129287719727 C 23.39919471740723 36.88995361328125 23.15935325622559 37.10239410400391 22.79959297180176 37.10239410400391 Z" stroke="none" fill="#000" />
                                        </g>
                                      </g>
                                    </svg>
                                  </a>
                                </div>
                              </div>
                              <div className="loginAdd">
                                <p className="address">Villa No.111, RBD Stillwaters, Silver County Road Bangalore, Karnataka,
                                  560102,India.</p>
                              </div>
                            </label>
                          </div>
                        </div>
                        <div className="loginDiffrentAdd">
                          <div className="loginBottomBorder">
                            <span />
                          </div>
                          <div className="chooseAddress" id="add_address_click">
                            <a href="javascript:void(0)">
                              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                <g id="Icon_ionic-ios-add-circle-outline" data-name="Icon ionic-ios-add-circle-outline" transform="translate(-3.375 -3.375)">
                                  <path id="Path_324" data-name="Path 324" d="M21.61,15.61h-4.2v-4.2a.9.9,0,0,0-1.8,0v4.2h-4.2a.863.863,0,0,0-.9.9.873.873,0,0,0,.9.9h4.2v4.2a.873.873,0,0,0,.9.9.9.9,0,0,0,.9-.9v-4.2h4.2a.9.9,0,1,0,0-1.8Z" transform="translate(-3.137 -3.137)" />
                                  <path id="Path_325" data-name="Path 325" d="M13.375,4.721a8.65,8.65,0,1,1-6.12,2.534,8.6,8.6,0,0,1,6.12-2.534m0-1.346a10,10,0,1,0,10,10,10,10,0,0,0-10-10Z" />
                                </g>
                              </svg>
                              ADD A NEW ADDRESS
                            </a>
                          </div>
                        </div>
                        <div className="bottomAddNewAddress" style={{display: 'none'}}>
                          <div className="addressHeadMain">
                            <div className="headEdite">
                              <h3>
                                <button id="bottom_add_modal">
                                  <svg className="minus-svg" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                    <g id="Icon_ionic-ios-add-circle-outline" data-name="Icon ionic-ios-add-circle-outline" transform="translate(-3.375 -3.375)">
                                      <path id="Path_324" data-name="Path 324" d="M21.61,15.61h-10.2a.863.863,0,0,0-.9.9.873.873,0,0,0,.9.9h10.2a.9.9,0,1,0,0-1.8Z" transform="translate(-3.137 -3.137)" />
                                      <path id="Path_325" data-name="Path 325" d="M13.375,4.721a8.65,8.65,0,1,1-6.12,2.534,8.6,8.6,0,0,1,6.12-2.534m0-1.346a10,10,0,1,0,10,10,10,10,0,0,0-10-10Z" />
                                    </g>
                                  </svg>
                                </button>
                                ADD A NEW ADDRESS</h3>
                            </div>
                            <div className="editeForm">
                              <div className="contactBlock">
                                <h3 className="subHead">Contact Details</h3>
                                <form className="formcontact">
                                  <div className="form-field empty contact">
                                    <label  className="form-label"> </label>
                                    <input id="o_add_phone" type="tel" className="form-input checkout invalid" inputMode="text" name="phone" maxLength={10} placeholder="Phone No."  />
                                    <div className="input-error" style={{display: 'none'}}>
                                      <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                        <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                                      </svg>
                                      <div className="tooltip">The entered phone number is wrong</div>
                                    </div>
                                  </div>
                                  <div className="form-field empty email">
                                    <label  className="form-label" />
                                    <input id="o_add_email" type="email" className="form-input checkout invalid" name="email" placeholder="Email Address"  />
                                    <div className="input-error" style={{display: 'none'}}>
                                      <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                        <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                                      </svg>
                                      <div className="tooltip">The entered phone number is wrong</div>
                                    </div>
                                  </div>
                                  <div className="form-field fullName empty">
                                    <label  className="form-label" />
                                    <input id="o_add_text" type="text" className="form-input checkout invalid" name="text" placeholder="Full Name"  />
                                    <div className="input-error" style={{display: 'none'}}>
                                      <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                        <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                                      </svg>
                                      <div className="tooltip">The entered phone number is wrong</div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div className="shippingBlock">
                                <h3 className="subHead">Shipping Address</h3>
                                <form className="formcontact">
                                  <div className="form-field fullName empty">
                                    <label  className="form-label" />
                                    <input id="o_add_address1" type="text" className="form-input checkout" name="text" placeholder="Address (House No., Building, Street, Area)"  />
                                    <div className="input-error" style={{display: 'none'}}>
                                      <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                        <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                                      </svg>
                                      <div className="tooltip">The entered phone number is wrong</div>
                                    </div>
                                  </div>
                                  <div className="form-field ship empty">
                                    <label  className="form-label"> </label>
                                    <input id="o_add_postalcode" type="tel" className="form-input checkout" name="postalCode" placeholder="Pincode" pattern="^\d{6}$" maxLength={6} />
                                    <div className="input-error" style={{display: 'none'}}>
                                      <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                        <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                                      </svg>
                                      <div className="tooltip">The entered phone number is wrong</div>
                                    </div>
                                  </div>
                                  <div className="form-field ship empty">
                                    <label  className="form-label" />
                                    <input id="o_add_city" type="text" className="form-input checkout" name="city" placeholder="City"  />
                                    <div className="input-error" style={{display: 'none'}}>
                                      <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                        <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                                      </svg>
                                      <div className="tooltip">The entered phone number is wrong</div>
                                    </div>
                                  </div>
                                  <div className="form-field ship mobile">
                                    <div className="dropdownSvg">
                                      <svg xmlns="https://www.w3.org/2000/svg" width={23} height={10} viewBox="0 0 25.76 14.035">
                                        <g id="Dropdown" transform="translate(1.028 1.092)">
                                          <path id="Path_64" data-name="Path 64" d="M371.1,4535.156l-12.149,10.437-11.605-10.926" transform="translate(-347.349 -4534.667)" fill="none" stroke="#80a03c" strokeWidth={3} />
                                        </g>
                                      </svg>
                                    </div>
                                    <label />
                                    <select id="o_add_state"  name="state"  className="form-input checkout form-area">
                                      <option disabled selected>State</option>
                                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                                      <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    </select>
                                  </div>
                                </form>
                              </div>
                              <div className="totalOffer">
                                <p className="offerText hide" id="o_add_fielderror">Please provide a valid <span>contact number</span> to proceed</p>
                              </div>
                              <div className="editeMessageError editfornbtn addressActive">
                                <button className="errrorText show" id="o_add_error_btn">Please fill your details to proceed</button>
                                <button className="errrorText hide contact">Please check your <span> contact </span> details</button>
                                <button className="errrorText active hide" id="o_add_address">ADD ADDRESS</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*edit address popup */}
                        <div className="bottomEditNewAddress" style={{display: 'none'}}>
                          <div className="editaddressHeadMain">
                            <div className="headEdite">
                              <h3>
                                <button id="bottom_edit_modal">
                                  <svg className="minus-svg" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                    <g id="Icon_ionic-ios-add-circle-outline" data-name="Icon ionic-ios-add-circle-outline" transform="translate(-3.375 -3.375)">
                                      <path id="Path_324" data-name="Path 324" d="M21.61,15.61h-10.2a.863.863,0,0,0-.9.9.873.873,0,0,0,.9.9h10.2a.9.9,0,1,0,0-1.8Z" transform="translate(-3.137 -3.137)" />
                                      <path id="Path_325" data-name="Path 325" d="M13.375,4.721a8.65,8.65,0,1,1-6.12,2.534,8.6,8.6,0,0,1,6.12-2.534m0-1.346a10,10,0,1,0,10,10,10,10,0,0,0-10-10Z" />
                                    </g>
                                  </svg>
                                </button>
                                EDIT ADDRESS</h3>
                            </div>
                            <div className="editeForm">
                              <div className="contactBlock">
                                <h3 className="subHead">Contact Details</h3>
                                <form className="formcontact">
                                  <div className="form-field empty">
                                    <label  className="form-label"> </label>
                                    <input id="o_edit_phone" type="tel" className="form-input checkout invalid" inputMode="text" name="phone" maxLength={10} placeholder="Phone No."  />
                                    <div className="input-error" style={{display: 'none'}}>
                                      <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                        <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                                      </svg>
                                      <div className="tooltip">The entered phone number is wrong</div>
                                    </div>
                                  </div>
                                  <div className="form-field empty">
                                    <label  className="form-label" />
                                    <input id="o_edit_email" type="email" className="form-input checkout invalid" name="email" placeholder="Email Address"  />
                                    <div className="input-error" style={{display: 'none'}}>
                                      <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                        <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                                      </svg>
                                      <div className="tooltip">The entered phone number is wrong</div>
                                    </div>
                                  </div>
                                  <div className="form-field fullName empty">
                                    <label  className="form-label" />
                                    <input id="o_edit_text" type="text" className="form-input checkout invalid" name="text" placeholder="Full Name"  />
                                    <div className="input-error" style={{display: 'none'}}>
                                      <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                        <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                                      </svg>
                                      <div className="tooltip">The entered phone number is wrong</div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div className="shippingBlock">
                                <h3 className="subHead">Shipping Address</h3>
                                <form className="formcontact">
                                  <div className="form-field fullName empty">
                                    <label  className="form-label" />
                                    <input id="o_edit_address1" type="text" className="form-input checkout" name="text" placeholder="Address (House No., Building, Street, Area)"  />
                                    <div className="input-error" style={{display: 'none'}}>
                                      <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                        <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                                      </svg>
                                      <div className="tooltip">The entered phone number is wrong</div>
                                    </div>
                                  </div>
                                  <div className="form-field ship empty">
                                    <label  className="form-label"> </label>
                                    <input id="o_edit_postalcode" type="tel" className="form-input checkout" name="postalCode" placeholder="Pincode" pattern="^\d{6}$" maxLength={6} />
                                    <div className="input-error" style={{display: 'none'}}>
                                      <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                        <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                                      </svg>
                                      <div className="tooltip">The entered phone number is wrong</div>
                                    </div>
                                  </div>
                                  <div className="form-field ship empty">
                                    <label  className="form-label" />
                                    <input id="o_edit_city" type="text" className="form-input checkout" name="city" placeholder="City"  />
                                    <div className="input-error" style={{display: 'none'}}>
                                      <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                        <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                                      </svg>
                                      <div className="tooltip">The entered phone number is wrong</div>
                                    </div>
                                  </div>
                                  <div className="form-field ship mobile">
                                    <div className="dropdownSvg">
                                      <svg xmlns="https://www.w3.org/2000/svg" width={23} height={10} viewBox="0 0 25.76 14.035">
                                        <g id="Dropdown" transform="translate(1.028 1.092)">
                                          <path id="Path_64" data-name="Path 64" d="M371.1,4535.156l-12.149,10.437-11.605-10.926" transform="translate(-347.349 -4534.667)" fill="none" stroke="#80a03c" strokeWidth={3} />
                                        </g>
                                      </svg>
                                    </div>
                                    <label />
                                    <select id="o_edit_state"  name="state"  className="form-input checkout form-area">
                                      <option disabled selected>State</option>
                                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                                      <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    </select>
                                  </div>
                                </form>
                              </div>
                              <div className="totalOffer">
                                <p className="offerText hide" id="o_edit_fielderror">Please provide a valid <span>contact number</span> to proceed</p>
                              </div>
                              <div className="editeMessageError addressActive">
                                <button className="errrorText show" id="o_edit_error_btn">Please fill your details to proceed</button>
                                <button className="errrorText hide contact">Please check your <span> contact </span> details</button>
                                <button className="errrorText active hide" id="o_edit_address">Update ADDRESS</button>
                              </div>
                            </div>
                          </div>
                        </div> 
                      </div>
                    </div>
                  </div>
                </div>
                <div className="billBlock">
                  <label htmlFor="billing" className="billings">
                    <input type="checkbox" id="billing" name="billing and shipping" className="inputeCheckbox checked" />
                    My billing address is the same as shipping address
                  </label>
                </div>
                {/* diffrent billing */}
                <div className="diffrentbilling">
                  <div className="contactBlock" style={{display: 'none'}}>
                    <h3 className="subHead">Contact Details</h3>
                    <form className="formcontact">
                      <div className="form-field empty contact">
                        <label htmlFor="phone1" id="phone-label" className="form-label"> </label>
                        <input id="phone1" type="tel" className="form-input checkout" inputMode="text" name="phone1" maxLength={10} placeholder="Phone No."  />
                        <div className="input-error" style={{display: 'none'}}>
                          <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                            <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                          </svg>
                          <div className="tooltip">The entered phone number is wrong</div>
                        </div>
                      </div>
                      <div className="form-field empty email">
                        <label htmlFor="email1" id="email-label" className="form-label" />
                        <input id="email1" type="email" className="form-input checkout" name="email" placeholder="Email Address"  />
                        <div className="input-error" style={{display: 'none'}}>
                          <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                            <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                          </svg>
                          <div className="tooltip">The entered phone number is wrong</div>
                        </div>
                      </div>
                      <div className="form-field fullName empty">
                        <label htmlFor="text1" id="text-label" className="form-label" />
                        <input id="text1" type="text" className="form-input checkout" name="text" placeholder="Full Name"  />
                        <div className="input-error" style={{display: 'none'}}>
                          <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                            <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                          </svg>
                          <div className="tooltip">The entered phone number is wrong</div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="shippingBlock" style={{display: 'none'}}>
                    <h3 className="subHead">Billing Details</h3>
                    <form className="formcontact">
                      <div className="form-field fullName empty">
                        <label htmlFor="address2" id="address-label" className="form-label" />
                        <input id="address2" type="text" className="form-input checkout" name="text" placeholder="Address (House No., Building, Street, Area)"  />
                        <div className="input-error" style={{display: 'none'}}>
                          <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                            <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                          </svg>
                          <div className="tooltip">The entered phone number is wrong</div>
                        </div>
                      </div>
                      <div className="form-field ship empty">
                        <label htmlFor="postalCode2" id="pincode-label" className="form-label"> </label>
                        <input id="postalCode2" type="tel" className="form-input checkout" name="postalCode" placeholder="Pincode" pattern="^\d{6}$" maxLength={6} />
                        <div className="input-error" style={{display: 'none'}}>
                          <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                            <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                          </svg>
                          <div className="tooltip">The entered phone number is wrong</div>
                        </div>
                      </div>
                      <div className="form-field ship empty">
                        <label htmlFor="city2" id="city-label" className="form-label" />
                        <input id="city2" type="text" className="form-input checkout" name="city" placeholder="City"  />
                        <div className="input-error" style={{display: 'none'}}>
                          <svg className="svgerror" xmlns="https://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                            <path id="Icon_material-error" data-name="Icon material-error" d="M13,3A10,10,0,1,0,23,13,10,10,0,0,0,13,3Zm1,15H12V16h2Zm0-4H12V8h2Z" transform="translate(-3 -3)" fill="#c97b5a" />
                          </svg>
                          <div className="tooltip">The entered phone number is wrong</div>
                        </div>
                      </div>
                      <div className="form-field ship mobile">
                        <div className="dropdownSvg">
                          <svg xmlns="https://www.w3.org/2000/svg" width={23} height={10} viewBox="0 0 25.76 14.035">
                            <g id="Dropdown" transform="translate(1.028 1.092)">
                              <path id="Path_64" data-name="Path 64" d="M371.1,4535.156l-12.149,10.437-11.605-10.926" transform="translate(-347.349 -4534.667)" fill="none" stroke="#80a03c" strokeWidth={3} />
                            </g>
                          </svg>
                        </div>
                        <label htmlFor="state2" />
                        <select id="state2" name="state"  className="form-input checkout form-area">
                          <option disabled selected>State</option>
                          <option value="Andhra Pradesh">Andhra Pradesh</option>
                          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="loginDetails different-billing" style={{display: 'none'}}>
                    <div className="contactBlock" style={{display: 'none'}}>
                      <h3 className="subHead">Billing Details</h3>
                      <div className="loginDataMain">
                        <div className="loginForm">
                          <div className="loginDataLeft">
                            <p className="loginName">Rashmita Sancheti</p>
                          </div>
                          <div className="loginDataRight">
                            <a href="javascript:void(0)" className="edit">
                              <svg xmlns="https://www.w3.org/2000/svg" width="26.189" height="26.189" viewBox="0 0 26.189 26.189">
                                <g id="Icon_feather-edit" data-name="Icon feather-edit" transform="translate(-2 -1.629)">
                                  <path id="Path_326" data-name="Path 326" d="M13.946,6H5.432A2.432,2.432,0,0,0,3,8.432V25.459a2.432,2.432,0,0,0,2.432,2.432H22.459a2.432,2.432,0,0,0,2.432-2.432V16.946" transform="translate(0 -1.073)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                                  <path id="Path_327" data-name="Path 327" d="M22.437,3.436a2.109,2.109,0,0,1,2.982,2.982L15.976,15.86,12,16.854l.994-3.976Z" transform="translate(0.964 0)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                                </g>
                              </svg>
                            </a>
                            <a href="javascript:void(0)" className="delete">
                              <svg xmlns="https://www.w3.org/2000/svg" width="20.053" height={25} viewBox="0 0 20.053 25">
                                <g id="_0e6cf822d3a8fd70fcceb9f95ebf5c76" data-name="0e6cf822d3a8fd70fcceb9f95ebf5c76" transform="translate(-9.8 -5.5)">
                                  <path id="Path_516" data-name="Path 516" d="M14.159,30H25.542a2.31,2.31,0,0,0,2.315-2.3V12.1H28.87a.455.455,0,0,0,.482-.48v-1.1a1.776,1.776,0,0,0-1.785-1.776h-4.1V7.488A1.5,1.5,0,0,0,21.973,6H17.68a1.5,1.5,0,0,0-1.5,1.488V8.736h-4.1A1.776,1.776,0,0,0,10.3,10.512v1.1a.455.455,0,0,0,.482.48H11.8V27.7A2.352,2.352,0,0,0,14.159,30Zm12.734-2.3a1.345,1.345,0,0,1-1.351,1.344H14.159A1.345,1.345,0,0,1,12.808,27.7V12.1H26.941V27.7ZM17.149,7.488a.534.534,0,0,1,.531-.528h4.293a.534.534,0,0,1,.531.528V8.736H17.2V7.488Zm-5.885,3.024a.811.811,0,0,1,.82-.816H27.52a.811.811,0,0,1,.82.816v.624H11.265Z" fill="none" stroke="#000" strokeWidth={1} />
                                  <g id="Path_517" data-name="Path 517" transform="translate(-6.4 -9.9)" fill="none">
                                    <path d="M29.815,37.1a.537.537,0,0,0,.6-.531V23.931a.6.6,0,0,0-1.2,0v12.64A.571.571,0,0,0,29.815,37.1Zm-3.478,0a.537.537,0,0,0,.6-.531V23.931a.6.6,0,0,0-1.2,0v12.64A.537.537,0,0,0,26.337,37.1Zm-3.538,0a.537.537,0,0,0,.6-.531V23.931a.6.6,0,0,0-1.2,0v12.64A.537.537,0,0,0,22.8,37.1Z" stroke="none" />
                                    <path d="M 29.81495475769043 37.10239410400391 C 29.5151538848877 37.10239410400391 29.21535301208496 36.88995361328125 29.21535301208496 36.57129287719727 L 29.21535301208496 23.93110466003418 C 29.21535301208496 23.6124439239502 29.4551944732666 23.40000343322754 29.81495475769043 23.40000343322754 C 30.17470359802246 23.40000343322754 30.41455459594727 23.6124439239502 30.41455459594727 23.93110466003418 L 30.41455459594727 36.57129287719727 C 30.41455459594727 36.88995361328125 30.17470359802246 37.10239410400391 29.81495475769043 37.10239410400391 Z M 26.33725357055664 37.10239410400391 C 25.97749328613281 37.10239410400391 25.7376537322998 36.88995361328125 25.7376537322998 36.57129287719727 L 25.7376537322998 23.93110466003418 C 25.7376537322998 23.6124439239502 25.97749328613281 23.40000343322754 26.33725357055664 23.40000343322754 C 26.69701385498047 23.40000343322754 26.93685340881348 23.6124439239502 26.93685340881348 23.93110466003418 L 26.93685340881348 36.57129287719727 C 26.93685340881348 36.88995361328125 26.69701385498047 37.10239410400391 26.33725357055664 37.10239410400391 Z M 22.79959297180176 37.10239410400391 C 22.43983459472656 37.10239410400391 22.20000457763672 36.88995361328125 22.20000457763672 36.57129287719727 L 22.20000457763672 23.93110466003418 C 22.20000457763672 23.6124439239502 22.43983459472656 23.40000343322754 22.79959297180176 23.40000343322754 C 23.15935325622559 23.40000343322754 23.39919471740723 23.6124439239502 23.39919471740723 23.93110466003418 L 23.39919471740723 36.57129287719727 C 23.39919471740723 36.88995361328125 23.15935325622559 37.10239410400391 22.79959297180176 37.10239410400391 Z" stroke="none" fill="#000" />
                                  </g>
                                </g>
                              </svg>
                            </a>
                          </div>
                        </div>
                        <div className="loginAdd">
                          <p className="address">Villa No.111, RBD Stillwaters, Silver County Road Bangalore, Karnataka,
                            560102,India.</p>
                        </div>
                      </div>
                      <div className="loginDiffrentAdd">
                        <div className="loginBottomBorder">
                          <span />
                        </div>
                        <div className="chooseAddress">
                          <a href="javascript:void(0)">
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                              <g id="Icon_ionic-ios-add-circle-outline" data-name="Icon ionic-ios-add-circle-outline" transform="translate(-3.375 -3.375)">
                                <path id="Path_324" data-name="Path 324" d="M21.61,15.61h-4.2v-4.2a.9.9,0,0,0-1.8,0v4.2h-4.2a.863.863,0,0,0-.9.9.873.873,0,0,0,.9.9h4.2v4.2a.873.873,0,0,0,.9.9.9.9,0,0,0,.9-.9v-4.2h4.2a.9.9,0,1,0,0-1.8Z" transform="translate(-3.137 -3.137)" fill="#c97b5a" />
                                <path id="Path_325" data-name="Path 325" d="M13.375,4.721a8.65,8.65,0,1,1-6.12,2.534,8.6,8.6,0,0,1,6.12-2.534m0-1.346a10,10,0,1,0,10,10,10,10,0,0,0-10-10Z" fill="#c97b5a" />
                              </g>
                            </svg>
                            CHOOSE ANOTHER ADDRESS
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="billBlock shipp">
                  <label htmlFor="whatsappblock" className="billings">
                    <input type="checkbox" id="whatsappblock" name="billing and shipping on WhatsApp" className="inputeCheckbox checked" />
                    <span className="text">Get shipping updates on <span className="textWhatapp">WhatsApp.</span>Opt out anytime</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="layoutRight">
              <span className="sub-checkoutloader" style={{display: 'none'}}><span className="checkoutsubloader top" /> <span className="checkoutsubloader bottom" /></span>
              {/* order summery */}
              <div className="orderSummery">
                <h3>Order Summary</h3>
                <div className="cardMain" id="checkout_product_list">
                  <div className="card">
                    <div className="card-images">
                      <img className="image lazyloaded" src="https://store-ad1xf4xgb0.mybigcommerce.com/content/images/checkout/Endurance.png" loading="lazy" alt="name" />
                    </div>
                    <div className="card-bodys">
                      <h4 className="card-titles">Dia Free Juice &amp; Aloe Garcinia Juice - Dia…</h4>
                      <p className="card-details">1 month(2 units): ₹824 @25% off</p>
                      <div className="bottomBody">
                        <div className="leftPrice">
                          <p className="salePrice"><span className="salePriceMain">₹824</span><span className="orignalPrice">1030</span></p>
                        </div>
                        <div className="rightQtn">
                          <button className="buttondec">
                            <svg className="plus" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 409.6 409.6" xmlSpace="preserve">
                              <path d="M392.533,187.733H17.067C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h375.467
                            c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z" />
                            </svg>
                          </button>
                          <input className="form-input form-input-incrementTotal" id="qty[]" name="qty[]" type="tel" defaultValue={1} data-quantity-min={0} data-quantity-max={0} min={1} pattern="[0-9]*" />
                          <button className="buttoninc">
                            <svg className="plus" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve">
                              <path d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216
                            v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-images">
                      <img className="image" src="https://store-ad1xf4xgb0.mybigcommerce.com/content/images/checkout/Endurance.png" />
                    </div>
                    <div className="card-bodys"> 
                      <h4 className="card-titles">Dia Free Juice &amp; Aloe Garcinia Juice - Dia…</h4>
                      <p className="card-details">1 month(2 units): ₹824 @25% off</p>
                      <div className="bottomBody">
                        <div className="leftPrice">
                          <p className="salePrice"><span className="salePriceMain">₹824</span><span className="orignalPrice">1030</span></p>
                        </div>
                        <div className="rightQtn">
                          <button className="buttondec">
                            <svg className="plus" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 409.6 409.6" xmlSpace="preserve">
                              <path d="M392.533,187.733H17.067C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h375.467
                            c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z" />
                            </svg>
                          </button>
                          <input className="form-input form-input-incrementTotal" id="qty[]" name="qty[]" type="tel" defaultValue={1} data-quantity-min={0} data-quantity-max={0} min={1} pattern="[0-9]*" />
                          <button className="buttoninc">
                            <svg className="plus" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve">
                              <path d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216
                            v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* coupons*/}
              <div className="couponsBlock">
                <h3 className="heading">Coupons</h3>
                <div className="couponsTopHead">
                  <p className="headLogin right-login" style={{display: 'none'}}>
                    Get 5% cashback on every order.
                    <a href="/login.php" className="textLogin">LOGIN NOW!</a> 
                  </p>
                  <div className="formCoupons">
                    <input type="text" className="form-input" placeholder="Enter coupon code" id="coupon_input" />
                    <button className="button-submit" type="submit" id="apply">Apply</button>
                  </div>
                </div>
                <div className="couponsAppliedBlock" id="couponsAppliedBlock">
                  <div className="leftApplied">
                    <img src="https://store-ad1xf4xgb0.mybigcommerce.com/content/images/checkout/coupons.png" loading="lazy" alt="name" />
                    <p className="couponsApplied"><span className="couponsNames" id="applied_main_coupon_name">HAPPYHOUR15 </span> applied</p>
                  </div>
                  <div className="rightApplied">
                    <a className="couponsRemove" id="remove_offer">Remove offer</a>
                  </div>
                </div>
                <p className="errorCoupons" id="error_coupon" style={{display: 'none'}}>The gift certificate or coupon code is invalid.</p>
                <div className="couponsList">
                  <button className="couponsCard">
                    <span className="couponsDis">15% OFF</span>
                    <span className="bottomBlock">
                      <span className="couponsNameBlock">
                        <span className="couponsName">HAPPYHOUR15:</span>
                        <span className="couponsNameoff">Extra 15% off</span>
                      </span>
                      <span className="couponsNameText show">Add items worth <span className="disPrice">189.00</span> more to avail</span>
                      <span className="couponsNameText hide">TAP TO APPLY</span>
                    </span>
                  </button>
                  <button className="couponsCard">
                    <span className="couponsDis">15% OFF</span>
                    <span className="bottomBlock">
                      <span className="couponsNameBlock">
                        <span className="couponsName">HAPPYHOUR15:</span>
                        <span className="couponsNameoff">Extra 15% off</span>
                      </span>
                      <span className="couponsNameText show">Add items worth <span className="disPrice">189.00</span> more to avail</span>
                      <span className="couponsNameText hide">TAP TO APPLY</span>
                    </span>
                  </button>
                  <button className="couponsCard">
                    <span className="couponsDis">15% OFF</span>
                    <span className="bottomBlock">
                      <span className="couponsNameBlock">
                        <span className="couponsName">HAPPYHOUR15:</span>
                        <span className="couponsNameoff">Extra 15% off</span>
                      </span>
                      <span className="couponsNameText show">Add items worth <span className="disPrice">189.00</span> more to avail</span>
                      <span className="couponsNameText hide">TAP TO APPLY</span>
                    </span>
                  </button>
                </div>
                {/* poup up coupons */}
                <div className="popupCouponsMain">
                  <div className="popupCouponsWrap">
                    <span className="sub-checkoutloader" style={{display: 'none'}}><span className="checkoutsubloader" /></span>
                    <div className="couponsHeadPopup">
                      <h3>Coupons
                        <a className="closeModalCoupons">
                          <svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} viewBox="0 0 44 44">
                            <path id="Icon_ionic-md-close" data-name="Icon ionic-md-close" d="M51.523,11.923l-4.4-4.4-17.6,17.6-17.6-17.6-4.4,4.4,17.6,17.6-17.6,17.6,4.4,4.4,17.6-17.6,17.6,17.6,4.4-4.4-17.6-17.6Z" transform="translate(-7.523 -7.523)" />
                          </svg>
                        </a>
                      </h3>
                    </div>
                    <div className="formCoupons">
                      <input type="text" className="form-input" placeholder="Enter coupon code" id="pop_coupon_input" />
                      <button className="button-submit" type="submit" id="pop_apply">Apply</button>
                    </div>
                    <div className="couponsAppliedBlock" id="pop_couponsAppliedBlock">
                      <div className="leftApplied">
                        <img src="https://store-ad1xf4xgb0.mybigcommerce.com/content/images/checkout/coupons.png" loading="lazy" alt="name" />
                        <p className="couponsApplied"><span className="couponsNames" id="pop_applied_main_coupon_name">HAPPYHOUR15 </span> applied</p>
                      </div>
                      <div className="rightApplied">
                        <a className="couponsRemove" id="pop_remove_offer">Remove offer</a>
                      </div>
                    </div>
                    <p className="errorCoupons" id="pop_error_coupon" style={{display: 'none'}}>The gift certificate or coupon code is invalid.</p>
                    <div className="couponsList">
                      <button className="couponsCard">
                        <span className="couponsDis">15% OFF</span>
                        <span className="bottomBlock">
                          <span className="couponsNameBlock">
                            <span className="couponsName">HAPPYHOUR15:</span>
                            <span className="couponsNameoff">Extra 15% off</span>
                          </span>
                          <span className="couponsNameText show">Add items worth <span className="disPrice">189.00</span> more to avail</span>
                          <span className="couponsNameText hide">TAP TO APPLY</span>
                        </span>
                      </button>
                      <button className="couponsCard">
                        <span className="couponsDis">15% OFF</span>
                        <span className="bottomBlock">
                          <span className="couponsNameBlock">
                            <span className="couponsName">HAPPYHOUR15:</span>
                            <span className="couponsNameoff">Extra 15% off</span>
                          </span>
                          <span className="couponsNameText show">Add items worth <span className="disPrice">189.00</span> more to avail</span>
                          <span className="couponsNameText hide">TAP TO APPLY</span>
                        </span>
                      </button>
                      <button className="couponsCard">
                        <span className="couponsDis">15% OFF</span>
                        <span className="bottomBlock">
                          <span className="couponsNameBlock">
                            <span className="couponsName">HAPPYHOUR15:</span>
                            <span className="couponsNameoff">Extra 15% off</span>
                          </span>
                          <span className="couponsNameText show">Add items worth <span className="disPrice">189.00</span> more to avail</span>
                          <span className="couponsNameText hide">TAP TO APPLY</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div> 
                <div className="viewAllbtn">
                  <a className="btnView">VIEW MORE</a>
                </div>
                {/* kapiva cash */}
                <div className="kapivacash" style={{display: 'none'}}>
                  <div className="kapivacashBottomBorder">
                    <span />
                  </div>
                  <label htmlFor="kapiva-wallet" className="kapiva-cash">
                    <input type="checkbox" id="kapiva-wallet" name="Kapiva cash" className="inputeCheckbox checked" />
                    <span className="text text-success"><span className="text-cash">120 Kapiva Cash</span> redeemed successfully</span>
                    <span className="text text-use" style={{display: 'none'}}>Use <span className="text-cash">120 Kapiva Cash</span> on this purchase</span>
                  </label>
                </div>
              </div>
              {/* appnd card */}
              <div className="inner-card">
              </div>
              {/* price summery */}
              <div className="priceSummary">
                <h3 className="heading">
                  <a className="heading_sub is-open" >
                    Price Summary
                    <svg xmlns="http://www.w3.org/2000/svg" width="17.233" height="11.177" viewBox="0 0 17.233 11.177">
                      <g id="Dropdown" transform="translate(16.13 10.161) rotate(180)">
                        <path id="Path_64" data-name="Path 64" d="M362.423,4535.025l-7.71,7.642-7.364-8" transform="translate(-347.349 -4534.667)" fill="none" stroke="#80a03c" strokeWidth={3} />
                      </g>
                    </svg>
                  </a>
                </h3>
                <div className="cart-total-main" style={{display: 'none'}}>
                  <ul className="cart-totals">
                    <li className="cart-total">
                      <p className="cart-total-label wrap">Order Total:</p>
                      <p className="cart-total-wrap" id="order_total">₹609.00</p>
                    </li>
                    <li className="cart-total">
                      <p className="cart-total-label wrap">Listing Discount:</p>
                      <p className="cart-total-wrap" id="listing_discount">₹609.00</p>
                    </li>
                    <li className="cart-total">
                      <p className="cart-total-label wrap">Items Discount:</p>
                      <p className="cart-total-wrap" id="items_discount">₹609.00</p>
                    </li>
                    <li className="cart-total">
                      <p className="cart-total-label wrap">Items Total:</p>
                      <p className="cart-total-wrap" id="items_total">₹609.00</p>
                    </li>
                    <li className="cart-total">
                      <p className="cart-total-label wrap">Coupon Discount:</p>
                      <p className="cart-total-wrap" id="coupon_discount">₹609.00</p>
                    </li>
                    <li className="cart-total">
                      <p className="cart-total-label wrap">Shipping (Free Above Rs.499):</p>
                      <p className="cart-total-wrap" id="shippingCostTotal">₹609.00</p>
                    </li>
                    <li className="cart-total">
                      <p className="cart-total-label wrap">GST (Inclusive):</p>
                      <p className="cart-total-wrap" id="gst">₹609.00</p>
                    </li>
                    <li className="cart-total" style={{display: 'none'}} id="online_block">
                      <p className="cart-total-label wrap">Online Payment Discount:</p>
                      <p className="cart-total-wrap" id="online_payment_discount">₹609.00</p>
                    </li>
                    <li className="cart-total" style={{display: 'none'}} id="cash_block">
                      <p className="cart-total-label wrap">Cash-on-Delivery Fees:</p>
                      <p className="cart-total-wrap" id="con_fees">₹609.00</p>
                    </li>
                    <li className="cart-total" style={{display: 'flex'}} id="store_credit_block">
                      <p className="cart-total-label wrap">Kapiva Cash:</p>
                      <p className="cart-total-wrap" id="store_credit_discount">₹12.00</p>
                    </li>
                  </ul>
                </div>
                <div className="bottomTotal">
                  <ul className="cart-totals">
                    <li className="cart-total">
                      <p className="cart-total-label">Grand Total:</p>
                      <p className="cart-total-value" id="grand_total">₹609.00</p>
                    </li>
                  </ul>
                </div>
                <div className="savingBlock">
                  <div className="savingText-block">
                    <div className="savingText-svg">
                      <svg xmlns="http://www.w3.org/2000/svg" width={59} height={59} viewBox="0 0 59 59">
                        <g id="Group_946" data-name="Group 946" transform="translate(2 2)">
                          <g id="circle3918" fill="#80a03c" stroke="#fff" strokeWidth={2}>
                            <circle cx="27.5" cy="27.5" r="27.5" stroke="none" />
                            <circle cx="27.5" cy="27.5" r="28.5" fill="none" />
                          </g>
                          <path id="path7" d="M27.974,12.076a2.037,2.037,0,1,0,2.037,2.037A2.039,2.039,0,0,0,27.974,12.076Zm10.864,0a2.037,2.037,0,1,0,2.037,2.037A2.039,2.039,0,0,0,38.838,12.076Zm-6.57,1.35a.68.68,0,0,0-.57.976,10.261,10.261,0,0,1,1.029,4.464,10.146,10.146,0,0,1-2.809,7.026.679.679,0,0,0,.984.936,11.548,11.548,0,0,0,2.016-13.02A.684.684,0,0,0,32.268,13.426Zm-4.294.008a.679.679,0,1,1-.679.679A.68.68,0,0,1,27.974,13.434Zm10.864,0a.679.679,0,1,1-.679.679A.68.68,0,0,1,38.838,13.434ZM18.469,14.792a2.036,2.036,0,0,0-1.517,3.395,2.034,2.034,0,0,0,0,2.716A2.036,2.036,0,0,0,18.469,24.3a.679.679,0,0,0,0-1.358.679.679,0,1,1,0-1.358.679.679,0,0,0,0-1.358.679.679,0,1,1,0-1.358.679.679,0,0,0,0-1.358.679.679,0,1,1,0-1.358.679.679,0,0,0,0-1.358Zm4.724.233a.676.676,0,0,0-.3,1.215c.1.076.2.152.294.228s.193.161.286.244a.672.672,0,0,0,.451.172.68.68,0,0,0,.454-1.186c-.107-.1-.219-.193-.334-.286s-.228-.176-.345-.263a.679.679,0,0,0-.5-.125Zm2.249,2.488a.69.69,0,0,0-.257.088.675.675,0,0,0-.247.926,7.416,7.416,0,0,1,.613,6.084l-1.369-1.369a.68.68,0,0,0-1.082.164L12.538,43.571a.679.679,0,0,0,.6.992.689.689,0,0,0,.316-.077L33.621,33.925a.683.683,0,0,0,.164-1.085L31.7,30.758a7.406,7.406,0,0,1,9.357,1.512.68.68,0,0,0,1.021-.9,8.764,8.764,0,0,0-11.362-1.594L26.6,25.661a8.756,8.756,0,0,0-.488-7.813A.678.678,0,0,0,25.441,17.513Zm16.478.705a.679.679,0,0,0-.48,1.159.669.669,0,0,1,.2.48.68.68,0,0,1-.2.48.7.7,0,0,1-.96,0,.68.68,0,0,0-.96.963.679.679,0,0,1-.96.96.679.679,0,1,0-.96.96.68.68,0,1,1-.96.963.679.679,0,0,0-.96.96,2.038,2.038,0,0,0,3.472-1.329,2.039,2.039,0,0,0,1.92-1.923A2.037,2.037,0,0,0,42.4,18.418.681.681,0,0,0,41.92,18.219ZM23.874,24.855,26,26.982l-2.785-.873Zm-5.405.8a.679.679,0,1,0,.679.679A.679.679,0,0,0,18.469,25.656Zm25.8,0a2.037,2.037,0,1,0,2.037,2.037A2.039,2.039,0,0,0,44.27,25.656Zm0,1.358a.679.679,0,1,1-.679.679A.68.68,0,0,1,44.27,27.014Zm-21.693.318,5.493,1.716,1.955,1.957c.01.016.013.034.024.05a.672.672,0,0,0,.212.186L31.5,32.48l-9.986-3.119,1.064-2.029Zm-1.7,3.252,10.145,3.169L28.2,35.23l-8.389-2.62Zm-7.837.5a2.037,2.037,0,1,0,2.037,2.037A2.039,2.039,0,0,0,13.037,31.087Zm0,1.358a.679.679,0,1,1-.679.679A.68.68,0,0,1,13.037,32.445ZM43.164,33.8a.678.678,0,0,0-.682.9c.075.212.141.427.2.642s.1.434.135.655a.682.682,0,0,0,.671.573.747.747,0,0,0,.109-.008.681.681,0,0,0,.562-.78c-.042-.261-.1-.519-.162-.777s-.144-.507-.231-.756a.682.682,0,0,0-.6-.454Zm-23.992.034L26.5,36.121,23.68,37.6l-5.57-1.74Zm16.346,1.888a2.035,2.035,0,0,0-2.05,1.422,2.008,2.008,0,0,0-1.432.247,2.03,2.03,0,0,0-.9,1.138,2,2,0,0,0-1.432.247,2.034,2.034,0,0,0-.713,2.793.684.684,0,0,0,.586.332.665.665,0,0,0,.345-.1.679.679,0,0,0,.239-.931.678.678,0,0,1,1.167-.692.68.68,0,0,0,1.17-.692.68.68,0,0,1,1.17-.692.68.68,0,0,0,1.262-.35.665.665,0,0,0-.1-.345.683.683,0,0,1-.074-.515.673.673,0,0,1,.31-.414.687.687,0,0,1,.515-.074.675.675,0,0,1,.416.31.68.68,0,0,0,1.17-.692,2.045,2.045,0,0,0-1.647-.995ZM17.471,37.081,21.98,38.49l-2.822,1.477-2.75-.859,1.064-2.026ZM40.2,39.235a2.037,2.037,0,1,0,2.037,2.037A2.039,2.039,0,0,0,40.2,39.235Zm-24.427,1.1,1.689.528L14.75,42.277Zm24.427.263a.679.679,0,1,1-.679.679A.68.68,0,0,1,40.2,40.593Z" transform="translate(-1.148 -1.36)" fill="#fff" />
                        </g>
                      </svg>
                    </div>
                    <p className="savingText">
                      You’ll <span>save ₹</span><span className="savePrice">466</span> on this order
                    </p>
                  </div>
                  <div className="kapivacash-block">
                    <p className="kapivacash-text savingText">
                      You’ll <span>earn </span><span className="kapivaPrice">46</span><span> Kapiva Cash</span> on this order
                    </p>
                    <div className="kapivacash-svg">
                      <svg xmlns="http://www.w3.org/2000/svg" width={59} height={59} viewBox="0 0 59 59">
                        <g id="Group_946" data-name="Group 946" transform="translate(2 2)">
                          <g id="circle3918" fill="#80a03c" stroke="#fff" strokeWidth={2}>
                            <circle cx="27.5" cy="27.5" r="27.5" stroke="none" />
                            <circle cx="27.5" cy="27.5" r="28.5" fill="none" />
                          </g>
                          <path id="path7" d="M27.974,12.076a2.037,2.037,0,1,0,2.037,2.037A2.039,2.039,0,0,0,27.974,12.076Zm10.864,0a2.037,2.037,0,1,0,2.037,2.037A2.039,2.039,0,0,0,38.838,12.076Zm-6.57,1.35a.68.68,0,0,0-.57.976,10.261,10.261,0,0,1,1.029,4.464,10.146,10.146,0,0,1-2.809,7.026.679.679,0,0,0,.984.936,11.548,11.548,0,0,0,2.016-13.02A.684.684,0,0,0,32.268,13.426Zm-4.294.008a.679.679,0,1,1-.679.679A.68.68,0,0,1,27.974,13.434Zm10.864,0a.679.679,0,1,1-.679.679A.68.68,0,0,1,38.838,13.434ZM18.469,14.792a2.036,2.036,0,0,0-1.517,3.395,2.034,2.034,0,0,0,0,2.716A2.036,2.036,0,0,0,18.469,24.3a.679.679,0,0,0,0-1.358.679.679,0,1,1,0-1.358.679.679,0,0,0,0-1.358.679.679,0,1,1,0-1.358.679.679,0,0,0,0-1.358.679.679,0,1,1,0-1.358.679.679,0,0,0,0-1.358Zm4.724.233a.676.676,0,0,0-.3,1.215c.1.076.2.152.294.228s.193.161.286.244a.672.672,0,0,0,.451.172.68.68,0,0,0,.454-1.186c-.107-.1-.219-.193-.334-.286s-.228-.176-.345-.263a.679.679,0,0,0-.5-.125Zm2.249,2.488a.69.69,0,0,0-.257.088.675.675,0,0,0-.247.926,7.416,7.416,0,0,1,.613,6.084l-1.369-1.369a.68.68,0,0,0-1.082.164L12.538,43.571a.679.679,0,0,0,.6.992.689.689,0,0,0,.316-.077L33.621,33.925a.683.683,0,0,0,.164-1.085L31.7,30.758a7.406,7.406,0,0,1,9.357,1.512.68.68,0,0,0,1.021-.9,8.764,8.764,0,0,0-11.362-1.594L26.6,25.661a8.756,8.756,0,0,0-.488-7.813A.678.678,0,0,0,25.441,17.513Zm16.478.705a.679.679,0,0,0-.48,1.159.669.669,0,0,1,.2.48.68.68,0,0,1-.2.48.7.7,0,0,1-.96,0,.68.68,0,0,0-.96.963.679.679,0,0,1-.96.96.679.679,0,1,0-.96.96.68.68,0,1,1-.96.963.679.679,0,0,0-.96.96,2.038,2.038,0,0,0,3.472-1.329,2.039,2.039,0,0,0,1.92-1.923A2.037,2.037,0,0,0,42.4,18.418.681.681,0,0,0,41.92,18.219ZM23.874,24.855,26,26.982l-2.785-.873Zm-5.405.8a.679.679,0,1,0,.679.679A.679.679,0,0,0,18.469,25.656Zm25.8,0a2.037,2.037,0,1,0,2.037,2.037A2.039,2.039,0,0,0,44.27,25.656Zm0,1.358a.679.679,0,1,1-.679.679A.68.68,0,0,1,44.27,27.014Zm-21.693.318,5.493,1.716,1.955,1.957c.01.016.013.034.024.05a.672.672,0,0,0,.212.186L31.5,32.48l-9.986-3.119,1.064-2.029Zm-1.7,3.252,10.145,3.169L28.2,35.23l-8.389-2.62Zm-7.837.5a2.037,2.037,0,1,0,2.037,2.037A2.039,2.039,0,0,0,13.037,31.087Zm0,1.358a.679.679,0,1,1-.679.679A.68.68,0,0,1,13.037,32.445ZM43.164,33.8a.678.678,0,0,0-.682.9c.075.212.141.427.2.642s.1.434.135.655a.682.682,0,0,0,.671.573.747.747,0,0,0,.109-.008.681.681,0,0,0,.562-.78c-.042-.261-.1-.519-.162-.777s-.144-.507-.231-.756a.682.682,0,0,0-.6-.454Zm-23.992.034L26.5,36.121,23.68,37.6l-5.57-1.74Zm16.346,1.888a2.035,2.035,0,0,0-2.05,1.422,2.008,2.008,0,0,0-1.432.247,2.03,2.03,0,0,0-.9,1.138,2,2,0,0,0-1.432.247,2.034,2.034,0,0,0-.713,2.793.684.684,0,0,0,.586.332.665.665,0,0,0,.345-.1.679.679,0,0,0,.239-.931.678.678,0,0,1,1.167-.692.68.68,0,0,0,1.17-.692.68.68,0,0,1,1.17-.692.68.68,0,0,0,1.262-.35.665.665,0,0,0-.1-.345.683.683,0,0,1-.074-.515.673.673,0,0,1,.31-.414.687.687,0,0,1,.515-.074.675.675,0,0,1,.416.31.68.68,0,0,0,1.17-.692,2.045,2.045,0,0,0-1.647-.995ZM17.471,37.081,21.98,38.49l-2.822,1.477-2.75-.859,1.064-2.026ZM40.2,39.235a2.037,2.037,0,1,0,2.037,2.037A2.039,2.039,0,0,0,40.2,39.235Zm-24.427,1.1,1.689.528L14.75,42.277Zm24.427.263a.679.679,0,1,1-.679.679A.68.68,0,0,1,40.2,40.593Z" transform="translate(-1.148 -1.36)" fill="#fff" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
            {/* payment */}
            <div className="paymentMethod">
              <span className="sub-checkoutloader" style={{display: 'none'}}><span className="checkoutsubloader" /></span>
              <h3 className="Head">Choose Payment Method</h3>
              <div className="mobile-payment">
                <div className="mobile-payment-title">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14.72" height="8.489" viewBox="0 0 14.72 8.489">
                    <path id="Path_8420" data-name="Path 8420" d="M361.349,4535l-7.16,7.1-6.84-7.43" transform="translate(-346.981 -4534.328)" fill="none" stroke="#80a03c" strokeWidth={1} />
                  </svg>
                  <h3 className="Head">Choose Payment Method</h3>
                </div>
                <div className="pay-options">
                  <div className="pay-offer">
                    <svg id="d2775eacd153d5922cf8939848ad18f9" xmlns="http://www.w3.org/2000/svg" width="36.298" height="35.478" viewBox="0 0 36.298 35.478">
                      <path id="Path_8477" data-name="Path 8477" d="M253.8,26.976c0,1.307-2.247,2.344-2.527,3.567-.287,1.264,1.281,3.173.733,4.313s-3.033,1.116-3.824,2.112-.208,3.406-1.207,4.2-3.2-.312-4.358.253c-1.137.55-1.643,2.976-2.906,3.263-1.222.278-2.728-1.679-4.032-1.679s-2.812,1.957-4.032,1.679c-1.264-.287-1.769-2.713-2.906-3.263s-3.365.547-4.358-.253-.409-3.2-1.207-4.2-3.265-.954-3.824-2.112,1.02-3.049.734-4.313c-.278-1.223-2.527-2.261-2.527-3.567s2.247-2.345,2.527-3.569c.286-1.264-1.283-3.173-.734-4.313s3.033-1.116,3.824-2.112.21-3.406,1.207-4.2,3.2.312,4.36-.253,1.643-2.976,2.906-3.263c1.221-.278,2.727,1.679,4.032,1.679s2.812-1.951,4.034-1.673c1.264.287,1.769,2.713,2.906,3.263,1.156.559,3.365-.547,4.358.253s.409,3.2,1.207,4.2,3.267.954,3.824,2.112-1.02,3.049-.733,4.313C251.556,24.63,253.8,25.668,253.8,26.976Z" transform="translate(-217.56 -9.236)" fill="#fff" />
                      <path id="Path_8478" data-name="Path 8478" d="M253.8,26.976c0,1.307-2.247,2.344-2.527,3.567-.287,1.264,1.281,3.173.733,4.313s-3.033,1.116-3.824,2.112-.208,3.406-1.207,4.2-3.2-.312-4.358.253c-1.137.55-1.643,2.976-2.906,3.263-1.222.278-2.728-1.679-4.032-1.679s-2.812,1.957-4.032,1.679c-1.264-.287-1.769-2.713-2.906-3.263s-3.365.547-4.358-.253-.409-3.2-1.207-4.2-3.265-.954-3.824-2.112,1.02-3.049.734-4.313c-.278-1.223-2.527-2.261-2.527-3.567s2.247-2.345,2.527-3.569c.286-1.264-1.283-3.173-.734-4.313s3.033-1.116,3.824-2.112.21-3.406,1.207-4.2,3.2.312,4.36-.253,1.643-2.976,2.906-3.263c1.221-.278,2.727,1.679,4.032,1.679s2.812-1.951,4.034-1.673c1.264.287,1.769,2.713,2.906,3.263,1.156.559,3.365-.547,4.358.253s.409,3.2,1.207,4.2,3.267.954,3.824,2.112-1.02,3.049-.733,4.313C251.556,24.63,253.8,25.668,253.8,26.976Z" transform="translate(-217.56 -9.236)" fill="#e4222e" />
                      <path id="Path_8479" data-name="Path 8479" d="M253.8,26.976c0,1.307-2.247,2.344-2.527,3.567-.287,1.264,1.281,3.173.733,4.313s-3.033,1.116-3.824,2.112-.208,3.406-1.207,4.2-3.2-.312-4.358.253c-1.137.55-1.643,2.976-2.906,3.263-1.222.278-2.728-1.679-4.032-1.679s-2.812,1.957-4.032,1.679c-1.264-.287-1.769-2.713-2.906-3.263s-3.365.547-4.358-.253-.409-3.2-1.207-4.2-3.265-.954-3.824-2.112,1.02-3.049.734-4.313c-.278-1.223-2.527-2.261-2.527-3.567s2.247-2.345,2.527-3.569c.286-1.264-1.283-3.173-.734-4.313s3.033-1.116,3.824-2.112.21-3.406,1.207-4.2,3.2.312,4.36-.253,1.643-2.976,2.906-3.263c1.221-.278,2.727,1.679,4.032,1.679s2.812-1.951,4.034-1.673c1.264.287,1.769,2.713,2.906,3.263,1.156.559,3.365-.547,4.358.253s.409,3.2,1.207,4.2,3.267.954,3.824,2.112-1.02,3.049-.733,4.313C251.556,24.63,253.8,25.668,253.8,26.976Z" transform="translate(-217.504 -9.236)" fill="#c97b5a" />
                      <path id="Path_8480" data-name="Path 8480" d="M220.1,88.313a5.681,5.681,0,0,0-.613-2.613,1.15,1.15,0,0,0-.126.2c-.364.758.2,1.851.543,2.871A1.561,1.561,0,0,0,220.1,88.313Zm31.192,0a1.557,1.557,0,0,0,.19.454c.34-1.02.907-2.114.543-2.871a1.154,1.154,0,0,0-.126-.2A5.716,5.716,0,0,0,251.3,88.313Zm-3.091,13.56c-.8,1-.208,3.406-1.207,4.2s-3.2-.312-4.358.246c-1.137.55-1.643,2.976-2.906,3.263-1.222.278-2.728-1.679-4.032-1.679s-2.812,1.957-4.032,1.679c-1.264-.287-1.769-2.713-2.906-3.263s-3.365.547-4.358-.246-.409-3.2-1.207-4.2c-.744-.935-2.973-.955-3.7-1.916a2.367,2.367,0,0,0-.126,1.7c.559,1.158,3.033,1.116,3.824,2.112s.21,3.406,1.207,4.2,3.2-.312,4.358.253,1.643,2.976,2.906,3.263c1.221.278,2.727-1.679,4.032-1.679s2.81,1.957,4.032,1.679c1.264-.287,1.769-2.713,2.906-3.263,1.156-.559,3.365.547,4.358-.253s.409-3.2,1.207-4.2,3.265-.954,3.824-2.112a2.309,2.309,0,0,0-.126-1.7C251.179,100.918,248.952,100.938,248.206,101.874Zm-28.1-6.424c-.207-.914-1.516-1.724-2.161-2.62a1.634,1.634,0,0,0-.364.948c0,1.137,1.717,2.079,2.334,3.114A2.8,2.8,0,0,0,220.1,95.449Zm31.192,0a2.8,2.8,0,0,0,.19,1.442c.618-1.035,2.334-1.971,2.334-3.114a1.643,1.643,0,0,0-.363-.948C252.809,93.725,251.5,94.535,251.3,95.449Z" transform="translate(-217.577 -76.038)" fill="#b26442" />
                      <path id="Path_8481" data-name="Path 8481" d="M303.094,105.354a1.12,1.12,0,0,1-.781-1.922l11.473-11.173a1.12,1.12,0,0,1,1.551,1.61l-11.469,11.169A1.12,1.12,0,0,1,303.094,105.354Zm11.016,2.19a3.849,3.849,0,0,1-2.688-1.086,3.706,3.706,0,0,1,0-5.329,3.882,3.882,0,0,1,5.387,0,3.706,3.706,0,0,1,0,5.329h0A3.846,3.846,0,0,1,314.111,107.544Zm0-5.265a1.616,1.616,0,0,0-1.13.448,1.465,1.465,0,0,0,0,2.12,1.634,1.634,0,0,0,2.262,0h0a1.468,1.468,0,0,0,0-2.12A1.622,1.622,0,0,0,314.111,102.28Zm-10.692-5.147a3.854,3.854,0,0,1-2.688-1.084,3.706,3.706,0,0,1,0-5.329,3.882,3.882,0,0,1,5.387,0,3.706,3.706,0,0,1,0,5.329h0a3.852,3.852,0,0,1-2.7,1.084Zm1.916-1.887Zm-1.916-3.377a1.618,1.618,0,0,0-1.13.455,1.465,1.465,0,0,0,0,2.12,1.632,1.632,0,0,0,2.262,0,1.468,1.468,0,0,0,0-2.12A1.621,1.621,0,0,0,303.418,91.868Z" transform="translate(-290.7 -80.788)" fill="#fff" />
                    </svg>
                    <span className="pay-offer-text">BONUS OFFER: <span className="offer-text">Pay online to get <span>additional 5% off</span></span></span>
                  </div>
                  <div className="pay-section">
                    <div className="pay-upi payment-section">
                      <h3 className="sub-title">UPI Payments</h3>
                      <div className="upi-method">
                        <div className="upi-pay">
                          <div className="pay-img">
                            <img src="https://cdn11.bigcommerce.com/s-ad1xf4xgb0/images/stencil/original/image-manager/bank-1.png" alt="paytm" />
                          </div>
                          <div className="pay-title">Paytm</div>
                        </div>
                        <div className="upi-pay upi-pay-more">
                          <div className="pay-img">
                            <span className="circle" />
                            <span className="circle" />
                            <span className="circle" />
                          </div>
                          <div className="pay-title">More</div>
                        </div>
                        <div className="add-upi-id">
                          <form className="form payment-form">
                            <div className="form-field">
                              <label htmlFor="mobile-upi-card-number" id="upi-card-label" className="form-label" />
                              <div className="upi-verify">
                                <input id="mobile-upi-card-number" type="tel" className="form-input checkout" inputMode="text" name="upiCardNumber" placeholder="Enter your UPI ID" />
                              </div>
                            </div>
                            <div className="upi-btn">
                              <button className="errrorText verify">VERIFY</button>
                              <button className="errrorText" style={{display: 'none'}}>Enter your UPI ID to proceed</button>
                              <button className="errrorText priceTotal" style={{display: 'none'}}>
                                PAY NOW:
                                {/* <span class="colon">:</span> */}
                                <span className="discountPrice">₹5,612.00</span>
                                <span className="orignalPrice">₹999.00</span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="payment-section">
                      <div className="card-pay ">
                        <div className="pay-img">                         
                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={50} height={50} viewBox="0 0 50 50">
                            <defs>
                              <filter id="Rectangle_608" x={0} y={0} width={50} height={50} filterUnits="userSpaceOnUse">
                                <feOffset dx={2} dy={2}  />
                                <feGaussianBlur stdDeviation={1} result="blur" />
                                <feFlood floodOpacity="0.149" />
                                <feComposite operator="in" in2="blur" />
                                <feComposite in="SourceGraphic" />
                              </filter>
                            </defs>
                            <g id="Group_959" data-name="Group 959" transform="translate(-29 -265)">
                              <g transform="matrix(1, 0, 0, 1, 29, 265)" filter="url(#Rectangle_608)">
                                <rect id="Rectangle_608-2" data-name="Rectangle 608" width={44} height={44} rx={5} transform="translate(1 1)" fill="#80a03c" />
                              </g>
                              <path id="Path_8402" data-name="Path 8402" d="M69.5,129.1v6.117l.683-.683H49.556a1.982,1.982,0,0,0-1.768.986,2.624,2.624,0,0,0-.249,1.345v9.192l.683-.683H45.149a.937.937,0,0,1-.143-.007l.092.01-.089-.02a.826.826,0,0,1-.085-.027c-.068-.027-.055-.02.038.02,0,0-.109-.058-.116-.061-.14-.082,0,0-.007.007a1.177,1.177,0,0,1-.184-.184c.017-.017.082.126.031.031l-.065-.116c-.075-.13.038.143,0,0a1.636,1.636,0,0,1-.044-.174l.01.092a.837.837,0,0,1-.007-.092c0-.058,0-.031,0-.048v-.041c-.007-1.181,0-2.365,0-3.547V129.051c0-.017,0-.031,0-.048.007-.075.007-.061-.007.044,0,0,.041-.16.044-.174.038-.147-.075.126,0,0a1.27,1.27,0,0,0,.065-.116c.072-.13-.106.106,0,0,.031-.031.058-.065.092-.1.116-.109,0,0,0,0a1.326,1.326,0,0,1,.113-.072c.143-.079,0,0,0-.007a.648.648,0,0,1,.13-.041l.044-.01c.075-.014.058-.014-.048,0a.894.894,0,0,1,.14-.007H66.6c.778,0,1.557-.01,2.335,0a.62.62,0,0,1,.143.007c0,.017-.164-.044-.024,0l.109.031c.147.038-.126-.075,0,0a1.268,1.268,0,0,0,.116.065c.13.072-.106-.106,0,0,.031.031.065.058.1.092.109.116,0,0,0,0a1.323,1.323,0,0,1,.072.113c.079.143,0,0,.007,0a.971.971,0,0,1,.041.13c0,.014.007.031.01.044.014.075.014.058,0-.048a.962.962,0,0,0-.007.143.683.683,0,1,0,1.365,0,1.969,1.969,0,0,0-1.939-1.939H45.845c-.236,0-.468,0-.7,0a1.974,1.974,0,0,0-1.85,1.352,2.2,2.2,0,0,0-.092.73v15.548a1.97,1.97,0,0,0,1.307,1.84,3.619,3.619,0,0,0,1.242.106h2.464a.694.694,0,0,0,.683-.683v-6.687c0-.946,0-1.888,0-2.833v-.089a.837.837,0,0,1,.007-.092c0-.092-.038.13,0,.044a1.009,1.009,0,0,0,.048-.174c.017-.085-.065.113-.017.041.02-.031.034-.065.051-.1,0,.007.048-.075.048-.075s-.1.109-.027.034l.123-.123c.092-.089-.031.031-.034.027l.075-.048c.024-.014.051-.027.079-.044.123-.072-.137.038,0,0a1.453,1.453,0,0,1,.174-.044c0,.01-.181.01-.044.007.031,0,.061,0,.092,0h.007c.133,0,.266,0,.4,0H70.179a.694.694,0,0,0,.683-.683V129.1a.681.681,0,1,0-1.362,0Z" transform="translate(-7.2 148.844)" fill="#fff" />
                              <path id="Path_8403" data-name="Path 8403" d="M43.965,251.88H69.194c.341,0,.686.007,1.027,0h.044a.683.683,0,0,0,0-1.365H45.037c-.341,0-.686-.007-1.027,0h-.044a.683.683,0,0,0,0,1.365Zm29.949,3.734v15.016a.962.962,0,0,1-.007.147c-.014,0,.041-.177,0-.048-.014.041-.024.085-.038.13-.038.137.061-.085.01-.02a1.022,1.022,0,0,0-.075.133c-.068.123.082-.072.014-.014-.027.024-.048.055-.075.082a.772.772,0,0,1-.1.089c-.017-.017.126-.082.031-.031l-.116.065c-.126.075.143-.038,0,0a.822.822,0,0,0-.085.027l-.089.02c.106-.014.119-.014.044-.007-.6.007-1.208,0-1.813,0H51.383c-.611,0-1.222.01-1.83,0h-.048c-.017,0-.031,0-.048,0-.075-.007-.061-.007.044.007,0,0-.123-.031-.133-.031l-.085-.027s.143.072,0-.007l-.075-.044c-.061-.041-.048-.031.031.031a.524.524,0,0,1-.065-.058.816.816,0,0,1-.075-.079c-.1-.1.024.01.01.017A1.318,1.318,0,0,1,49,270.82c.007,0,.051.154.007,0,0-.01-.034-.133-.031-.133s.01.181.007.044c0-.038,0-.055,0-.1V258.375c0-.918-.014-1.84,0-2.758v0c0-.017,0,.027,0-.048,0-.017,0-.031,0-.048.007-.075.007-.061-.007.044,0,0,.044-.218.061-.215s-.072.143.007,0a1.263,1.263,0,0,1,.072-.113s-.106.119,0,0a.816.816,0,0,1,.079-.075c.1-.1-.01.024-.017.01a1.325,1.325,0,0,1,.113-.072c.01-.007.079-.041.079-.041s-.154.051,0,.007a1.012,1.012,0,0,0,.109-.027c.051-.01.031-.007-.068.007a.836.836,0,0,1,.092-.007c.055,0,.109,0,.16,0h23.72c.017,0,.031,0,.048,0h0c-.014,0-.031,0-.044-.007l.089.02a.969.969,0,0,1,.13.041c0,.02-.133-.068-.041-.014a1.268,1.268,0,0,0,.116.065c.13.072-.1-.106,0,0a1.3,1.3,0,0,1,.154.157c-.014.014-.082-.14-.017-.014l.055.1c.075.126-.038-.143,0,0a.824.824,0,0,0,.027.085c0,.014.007.031.01.044.014.075.014.058,0-.048,0,0,0,.13,0,.14a.683.683,0,0,0,1.365,0,1.953,1.953,0,0,0-1.55-1.894,2.582,2.582,0,0,0-.485-.041h-23.6a2.4,2.4,0,0,0-.543.055,1.96,1.96,0,0,0-1.481,1.884c0,.249,0,.495,0,.744v14.1c0,.089,0,.177,0,.266a1.961,1.961,0,0,0,1.748,1.83,5.392,5.392,0,0,0,.621.014H72.945a3.452,3.452,0,0,0,.9-.065,1.965,1.965,0,0,0,1.437-1.874V255.614a.683.683,0,1,0-1.365,0Z" transform="translate(-7.279 29.699)" fill="#fff" />
                              <path id="Path_8404" data-name="Path 8404" d="M280.965,463.588h2.365a.683.683,0,1,0,0-1.365h-2.365a.689.689,0,0,0-.683.683A.7.7,0,0,0,280.965,463.588Zm3.97-5.676h-3.181c-.075,0-.044.024-.007.007s.058.014,0,0a.809.809,0,0,1-.089-.027c0-.027.133.075.041.01s.027.031.031.031a.568.568,0,0,1-.065-.061c-.082-.072.051.024.024.034a.324.324,0,0,1-.034-.058c-.034-.075.038.14.007.017a.573.573,0,0,1-.021-.089c.021-.01.007.154.01.041v-3.038c0-.048,0-.1,0-.147,0-.01.007-.044,0-.051.031.038-.031.136,0,.044a.37.37,0,0,1,.027-.089s-.065.16-.01.041c.048-.1-.014.055-.031.031a.563.563,0,0,1,.061-.065c.075-.082-.031.031-.034.024s.075-.051.079-.044c.017.027-.147.041-.038.017a.484.484,0,0,0,.089-.02c-.017.014-.164.007-.041.01h2.97c.065,0,.133,0,.2,0,.017,0,.058.007.068,0-.048.038-.133-.034-.044,0a.52.52,0,0,0,.089.027c-.02,0-.14-.072-.041-.01s-.027-.031-.031-.031.055.055.065.061c.1.089-.034-.027-.024-.034s.051.075.044.079-.048-.171-.017-.038a.572.572,0,0,0,.02.089c-.007-.01,0-.137-.014-.065v.031c0,.055,0,.113,0,.167v3.014c0,.017-.007.044,0,.051-.014-.014.044-.164,0-.044a.222.222,0,0,1-.014.044c-.021.058-.021.058,0,0,.024-.01.031-.058-.007,0-.068.113.027-.031.031-.031s-.055.055-.061.065c-.072.082.024-.051.034-.024,0,.007-.082.041-.078.044s.167-.048.038-.017c-.02.007-.044.01-.068.017-.089.024.181-.017.024-.01a.683.683,0,0,0,0,1.365,1.489,1.489,0,0,0,1.464-1.464c0-.164,0-.328,0-.492v-2.127c0-.188,0-.375,0-.563a1.477,1.477,0,0,0-1.188-1.444,4.389,4.389,0,0,0-.669-.031h-1.014c-.584,0-1.167,0-1.751,0a1.5,1.5,0,0,0-1.413.99,2.253,2.253,0,0,0-.082.771v2.823a1.517,1.517,0,0,0,.707,1.324,1.8,1.8,0,0,0,.976.212h2.97a.683.683,0,1,0,0-1.365Zm.99,5.676h2.366a.683.683,0,1,0,0-1.365h-2.366a.689.689,0,0,0-.683.683A.7.7,0,0,0,285.925,463.588Zm4.96.034h2.366a.683.683,0,1,0,0-1.365h-2.366a.683.683,0,1,0,0,1.365Zm4.96,0h2.366a.683.683,0,0,0,0-1.365h-2.366a.683.683,0,0,0,0,1.365Z" transform="translate(-236.189 -166.028)" fill="#fff" />
                            </g>
                          </svg>
                        </div>
                        <h3 className="sub-title">Debit/Credit Card</h3>
                        <svg className="svg-arrow" xmlns="http://www.w3.org/2000/svg" width="14.72" height="8.489" viewBox="0 0 14.72 8.489">
                          <path id="Path_8420" data-name="Path 8420" d="M361.349,4535l-7.16,7.1-6.84-7.43" transform="translate(-346.981 -4534.328)" fill="none" stroke="#000000" strokeWidth={1} />
                        </svg>
                      </div>
                      <div className="card-pay-section" style={{display: 'none'}}>
                        <form className="juspay_inline_form" id="payment_form">
                          <input type="hidden" className="merchant_id" defaultValue="kapiva" />
                          <input type="hidden" className="order_id" defaultValue={141839447800} />
                          <div className="card_number_div" />
                          <div className="card_exp_month_div" />
                          <div className="card_exp_year_div" />
                          <div className="security_code_div" />
                          <div className="name_on_card_div" />
                          <input type="hidden" className="redirect" defaultValue="true" />
                          <input type="hidden" className="payment_channel" defaultValue="WEB" />
                          <div className="card-btn">
                            <button className="errrorText">Enter your card details to proceed</button>
                            <button className="errrorText priceTotal" style={{display: 'none'}}>
                              PAY NOW:
                              {/* <span class="colon">:</span> */}
                              <span className="discountPrice">₹5,612.00</span>
                              <span className="orignalPrice">₹999.00</span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="payment-section">
                      <div className="wallete-pay">
                        <div className="pay-img">
                          <img src="https://cdn11.bigcommerce.com/s-ad1xf4xgb0/images/stencil/original/image-manager/bank-1.png" alt="paytm" />
                        </div>
                        <h3 className="sub-title">Paytm Wallete</h3>
                      </div>
                    </div>
                    <div className="pay-bank payment-section">
                      <h3 className="sub-title">Netbanking</h3>
                      <div className="bank-method">
                        <div className="bank-pay">
                          <div className="pay-img">
                            <img src="https://cdn11.bigcommerce.com/s-ad1xf4xgb0/images/stencil/original/image-manager/bank-1.png" alt="paytm" />
                          </div>
                          <div className="pay-title">SBI</div>
                        </div>
                        <div className="bank-pay bank-pay-more">
                          <div className="pay-img">
                            <span className="circle" />
                            <span className="circle" />
                            <span className="circle" />
                          </div>
                          <div className="pay-title">More</div>
                        </div>
                      </div>
                      <div className="all-banks">
                        <div className="all-banks-title">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14.72" height="8.489" viewBox="0 0 14.72 8.489">
                            <path id="Path_8420" data-name="Path 8420" d="M361.349,4535l-7.16,7.1-6.84-7.43" transform="translate(-346.981 -4534.328)" fill="none" stroke="#000000" strokeWidth={1} />
                          </svg>
                          <h3 className="Head">Choose Payment Method</h3>
                        </div>  
                      </div>
                    </div>
                    <div className="payment-section">
                      <div className="wallete-pay">
                        <div className="pay-img">
                          <img src="https://cdn11.bigcommerce.com/s-ad1xf4xgb0/images/stencil/original/image-manager/bank-1.png" alt="paytm" />
                        </div>
                        <h3 className="sub-title">Pay using CRED</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cod-section">
                  <div className="pay-img">                    
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={50} height={50} viewBox="0 0 50 50">
                      <defs>
                        <filter id="Rectangle_608" x={0} y={0} width={50} height={50} filterUnits="userSpaceOnUse">
                          <feOffset dx={2} dy={2} />
                          <feGaussianBlur stdDeviation={1} result="blur" />
                          <feFlood floodOpacity="0.149" />
                          <feComposite operator="in" in2="blur" />
                          <feComposite in="SourceGraphic" />
                        </filter>
                      </defs>
                      <g id="Group_961" data-name="Group 961" transform="translate(-24 -602)">
                        <g transform="matrix(1, 0, 0, 1, 24, 602)" filter="url(#Rectangle_608)">
                          <rect id="Rectangle_608-2" data-name="Rectangle 608" width={44} height={44} rx={5} transform="translate(1 1)" fill="#80a03c" />
                        </g>
                        <g id="_7486e1b2d055ac32e5da005926f7af09" data-name="7486e1b2d055ac32e5da005926f7af09" transform="translate(31.002 554.119)" fill="none">
                          <path d="M19.377,74.566a.477.477,0,0,0,.477.477h1.4a1.023,1.023,0,0,1-.9.545h-.5a.477.477,0,0,0-.345.807l2,2.093a.477.477,0,1,0,.69-.659l-1.3-1.362a1.984,1.984,0,0,0,1.374-1.423H22.6a.477.477,0,0,0,0-.954h-.331a1.965,1.965,0,0,0-.227-.545H22.6a.477.477,0,0,0,0-.954H19.854a.477.477,0,0,0,0,.954h.5a1.023,1.023,0,0,1,.9.545h-1.4a.477.477,0,0,0-.477.477Zm10.8-5.916H18.165l-.373-3.677a4.609,4.609,0,0,0-.514-1.685L17.07,62.9l-.008-.015,0-.006-1.744-3.45a1.735,1.735,0,0,0-1.473-.951h-.053l-.746.051-6.7.454-.994.068q-.246-.008-.492-.023c-.117-.007-.236-.017-.36-.027a1.047,1.047,0,0,0-.8-.909l-3.1-.775a.477.477,0,0,0-.232.926l3.1.776.01,0a.1.1,0,0,1,.072.114L2,65.943a.1.1,0,0,1-.114.072l-1.3-.3a.477.477,0,1,0-.211.931l1.3.3a1.048,1.048,0,0,0,1.255-.791l.008-.034.917.634a3,3,0,0,0,.742.373l1.278.436a1.264,1.264,0,0,0-.549,1.145c0,.013,0,.025,0,.038a1.267,1.267,0,0,0,1.261,1.148h.045l.836-.029A1.335,1.335,0,0,0,9.1,71.7l.79-.27V80.19a2.388,2.388,0,0,0,2.385,2.385h17.9a2.388,2.388,0,0,0,2.385-2.385V71.035A2.388,2.388,0,0,0,30.179,68.65ZM6.6,68.939a.315.315,0,0,1-.323-.287v-.014a.313.313,0,0,1,.235-.331c.087-.022.246-.072.5-.152l.312-.1,1.641.559-.367.254-1.994.07Zm3.382,1.456L8.794,70.8A.381.381,0,0,1,8.3,70.53a.385.385,0,0,1,.161-.409l.5-.346A.477.477,0,0,0,9.1,69.68l.9-.62.567.323a2.375,2.375,0,0,0-.578,1.011Zm.033-2.419a.477.477,0,0,0-.082-.037l-2.438-.831-.007,0L4.9,66.223a2.047,2.047,0,0,1-.507-.255L3.289,65.2a.477.477,0,0,0-.132-.064l1.179-5.2.028,0q.486.044.973.058h.044l1.02-.069,6.7-.454.716-.049a.78.78,0,0,1,.64.426l1.744,3.45.015.03,0,.009.208.391a3.656,3.656,0,0,1,.408,1.335l.363,3.579H16.038l-.322-2.615a.477.477,0,0,0-.213-.341l-.56-.366-.009-.007-1.467-.957a1.406,1.406,0,0,0-2.156.955c0,.024-.008.049-.01.073a1.363,1.363,0,0,0-.008.15,1.394,1.394,0,0,0,.536,1.105l3.617,2.848h0l.757.6a.606.606,0,0,1,.184.237.623.623,0,0,1,.038.377.617.617,0,0,1-.047.137l0,.007a.616.616,0,0,1-.856.26Zm7.011,3.609q.03-.036.058-.073h11.28A1.883,1.883,0,0,0,29.7,72.85v5.525a1.883,1.883,0,0,0-1.338,1.338H14.094a1.883,1.883,0,0,0-1.338-1.338V72.85a1.883,1.883,0,0,0,1.338-1.338h.2l.749.427a1.571,1.571,0,0,0,1.979-.354Zm-2.039-3.666L12.418,65.9a.446.446,0,0,1-.171-.354.416.416,0,0,1,0-.047v-.011l0-.012a.442.442,0,0,1,.052-.149.452.452,0,0,1,.641-.158l.408.266h0l1.441.94ZM31.61,80.19a1.433,1.433,0,0,1-1.431,1.431h-17.9a1.433,1.433,0,0,1-1.431-1.431V71.035a1.434,1.434,0,0,1,.585-1.154L13.221,70.9a.476.476,0,0,0-.02.136.923.923,0,0,1-.922.922.477.477,0,0,0-.477.477v6.357a.477.477,0,0,0,.477.477.923.923,0,0,1,.922.922.477.477,0,0,0,.477.477h15.1a.477.477,0,0,0,.477-.477.923.923,0,0,1,.922-.922.477.477,0,0,0,.477-.477V72.434a.477.477,0,0,0-.477-.477.923.923,0,0,1-.922-.922.477.477,0,0,0-.477-.477H17.392a1.574,1.574,0,0,0-.13-.61,1.548,1.548,0,0,0-.207-.344H30.179a1.433,1.433,0,0,1,1.431,1.431Z" stroke="none" />
                          <path d="M 30.17855262756348 82.57517242431641 L 12.27895259857178 82.57517242431641 C 10.96226215362549 82.57369995117188 9.895252227783203 81.50668334960938 9.893772125244141 80.19000244140625 L 9.893772125244141 71.43292236328125 L 9.104252815246582 71.70298004150391 C 8.595342636108398 71.87743377685547 8.031461715698242 71.72924041748047 7.674032688140869 71.32718658447266 C 7.316612720489502 70.92509460449219 7.235542297363281 70.34774017333984 7.46840238571167 69.86277008056641 C 7.189772605895996 69.87261199951172 6.911232471466064 69.88236999511719 6.632772445678711 69.89203643798828 C 5.958477973937988 69.9149169921875 5.389291286468506 69.41043853759766 5.326652526855469 68.74492645263672 C 5.32506275177002 68.73207092285156 5.323972702026367 68.719482421875 5.323342323303223 68.70695495605469 C 5.287582397460938 68.25444030761719 5.497312545776367 67.81752014160156 5.872752666473389 67.56238555908203 L 4.594942569732666 67.12669372558594 C 4.331412315368652 67.03736114501953 4.081592559814453 66.91178131103516 3.852672576904297 66.75358581542969 L 2.935562610626221 66.11989593505859 L 2.927932500839233 66.15361022949219 C 2.819552421569824 66.63090515136719 2.395882606506348 66.97010040283203 1.906442523002625 66.971435546875 C 1.827702522277832 66.97139739990234 1.749212503433228 66.96257019042969 1.672432541847229 66.94510650634766 L 0.3697525262832642 66.64985656738281 C 0.1127925366163254 66.59160614013672 -0.04828746616840363 66.33605194091797 0.009972535073757172 66.0791015625 C 0.06823252886533737 65.8221435546875 0.323762446641922 65.66106414794922 0.580732524394989 65.71932220458984 L 1.883352518081665 66.01463317871094 C 1.90802276134491 66.02025604248047 1.933922529220581 66.01581573486328 1.955322504043579 66.00232696533203 C 1.976732492446899 65.98883056640625 1.991892576217651 65.96738433837891 1.9974524974823 65.94268035888672 L 3.541332483291626 59.13153457641602 C 3.552922487258911 59.08017349243164 3.520732641220093 59.02911376953125 3.469392538070679 59.01743316650391 L 3.458902597427368 59.01495361328125 L 0.3593225479125977 58.23846435546875 C 0.1037425324320793 58.17446517944336 -0.05154746398329735 57.9153938293457 0.01245253439992666 57.65982437133789 C 0.07645253837108612 57.40425491333008 0.3355226218700409 57.24894332885742 0.5910925269126892 57.31295394897461 L 3.686282634735107 58.08829498291016 C 4.12064266204834 58.18902206420898 4.443582534790039 58.5537223815918 4.491012573242188 58.99707412719727 C 4.615932464599609 59.00795364379883 4.734872341156006 59.01711273193359 4.851462364196777 59.02455520629883 C 5.015342712402344 59.03495407104492 5.179372310638428 59.04273223876953 5.343502521514893 59.04789352416992 L 6.337582588195801 58.98015213012695 C 8.57247257232666 58.82886505126953 10.80745220184326 58.67737197875977 13.04252243041992 58.52570343017578 L 13.78841209411621 58.47507476806641 C 13.80605125427246 58.47391891479492 13.82373142242432 58.47370910644531 13.84139251708984 58.47443389892578 C 14.46827220916748 58.50164413452148 15.03162288665771 58.86519241333008 15.31467247009277 59.42519378662109 L 17.05902290344238 62.875244140625 C 17.06004333496094 62.87721252441406 17.06112289428711 62.87924194335938 17.06208229064941 62.88128280639648 L 17.06984329223633 62.896484375 L 17.27757263183594 63.28739547729492 C 17.55571174621582 63.81068420410156 17.73031234741211 64.38268280029297 17.79181289672852 64.97209167480469 L 18.16479301452637 68.64952087402344 L 30.17855262756348 68.64952087402344 C 31.49523162841797 68.65098571777344 32.56225204467773 69.71800231933594 32.56371307373047 71.03468322753906 L 32.56371307373047 80.19000244140625 C 32.56225204467773 81.50668334960938 31.49523162841797 82.57369995117188 30.17855262756348 82.57517242431641 Z M 11.43326282501221 69.88090515136719 C 11.06587219238281 70.15062713623047 10.84856224060059 70.57892608642578 10.8478422164917 71.03468322753906 L 10.8478422164917 80.19000244140625 C 10.84875297546387 80.97999572753906 11.48895263671875 81.62019348144531 12.27895259857178 81.62111663818359 L 30.17855262756348 81.62110137939453 C 30.96855163574219 81.62019348144531 31.60874176025391 80.97999572753906 31.60965347290039 80.19000244140625 L 31.60965347290039 71.03468322753906 C 31.60874176025391 70.24468994140625 30.96855163574219 69.60449981689453 30.17855262756348 69.60359191894531 L 17.05571174621582 69.60359191894531 C 17.1391716003418 69.70868682861328 17.20862197875977 69.82418060302734 17.26230239868164 69.94718170166016 C 17.34593200683594 70.13996124267578 17.39011192321777 70.3475341796875 17.39225196838379 70.55765533447266 L 28.77925300598145 70.55765533447266 C 29.0427131652832 70.55765533447266 29.25628280639648 70.77123260498047 29.25628280639648 71.03468322753906 C 29.25687217712402 71.54379272460938 29.66944313049316 71.95635986328125 30.17855262756348 71.95695495605469 C 30.44201278686523 71.95695495605469 30.65558242797852 72.17053985595703 30.65558242797852 72.43399047851562 L 30.65558242797852 78.79063415527344 C 30.65558242797852 79.05409240722656 30.44201278686523 79.26767730712891 30.17854309082031 79.26767730712891 C 29.66944313049316 79.26825714111328 29.25688171386719 79.68082427978516 29.25628280639648 80.18993377685547 C 29.25628280639648 80.45339202880859 29.0427131652832 80.66697692871094 28.77925300598145 80.66697692871094 L 13.67825222015381 80.66697692871094 C 13.41479206085205 80.66697692871094 13.20121288299561 80.45340728759766 13.20121288299561 80.18993377685547 C 13.20061206817627 79.68082427978516 12.78805255889893 79.26825714111328 12.27895259857178 79.26767730712891 C 12.01549243927002 79.26767730712891 11.80191230773926 79.05409240722656 11.80191230773926 78.79063415527344 L 11.80191230773926 72.43399047851562 C 11.80191230773926 72.17053985595703 12.01549243927002 71.95695495605469 12.2789421081543 71.95695495605469 C 12.78805255889893 71.95635986328125 13.20061206817627 71.54379272460938 13.20121288299561 71.03468322753906 C 13.20127296447754 70.98867034912109 13.2080020904541 70.94291687011719 13.22118282318115 70.89882659912109 L 11.43326282501221 69.88090515136719 Z M 14.09384250640869 71.51172637939453 C 13.92050266265869 72.16557312011719 13.40983295440674 72.67624664306641 12.75598239898682 72.84958648681641 L 12.75598239898682 78.37504577636719 C 13.40983295440674 78.54837036132812 13.92050266265869 79.05904388427734 14.09384250640869 79.712890625 L 28.3636531829834 79.712890625 C 28.5369930267334 79.05904388427734 29.04766273498535 78.54837036132812 29.70151329040527 78.37504577636719 L 29.70151329040527 72.84958648681641 C 29.04766273498535 72.67625427246094 28.5369930267334 72.16558074951172 28.36366271972656 71.51172637939453 L 17.08319282531738 71.51172637939453 C 17.06483268737793 71.53649139404297 17.0456428527832 71.56080627441406 17.02563285827637 71.58468627929688 C 16.53769111633301 72.16429901123047 15.70555019378662 72.31305694580078 15.04702281951904 71.93838500976562 L 14.29763221740723 71.51172637939453 L 14.09384250640869 71.51172637939453 Z M 15.82293224334717 71.18982696533203 C 16.05701446533203 71.18978881835938 16.27099227905273 71.05863952636719 16.37502288818359 70.84909057617188 C 16.37597274780273 70.84681701660156 16.37724304199219 70.84464263916016 16.37826347351074 70.84235382080078 C 16.39934158325195 70.79884338378906 16.41522216796875 70.75301361083984 16.42558288574219 70.70580291748047 C 16.45249176025391 70.57920074462891 16.43930244445801 70.44738006591797 16.38786315917969 70.32861328125 C 16.34740257263184 70.23542022705078 16.28414344787598 70.15390014648438 16.20392227172852 70.09156036376953 L 11.82863235473633 66.64673614501953 C 11.48853206634521 66.3812255859375 11.29054260253906 65.97319030761719 11.29244232177734 65.54173278808594 C 11.2924222946167 65.49173736572266 11.29516220092773 65.4417724609375 11.30064296722412 65.39206695556641 C 11.30293273925781 65.36808013916016 11.30624294281006 65.34328460693359 11.31044292449951 65.31930541992188 C 11.33633232116699 65.15633392333984 11.39097213745117 64.99925231933594 11.47180271148682 64.85538482666016 C 11.6620922088623 64.51590728759766 11.98456287384033 64.27045440673828 12.36247253417969 64.17748260498047 C 12.74038314819336 64.08449554443359 13.13992214202881 64.15229797363281 13.46600246429443 64.36474609375 L 14.93348217010498 65.32147216796875 C 14.9366626739502 65.32357025146484 14.93946266174316 65.32592010498047 14.94258213043213 65.32802581787109 L 15.50300216674805 65.69367980957031 C 15.62071228027344 65.77050018310547 15.69854259490967 65.89533996582031 15.7156925201416 66.03486633300781 L 16.0378532409668 68.64952087402344 L 17.20576286315918 68.64952087402344 L 16.8427734375 65.07011413574219 C 16.79385185241699 64.6029052734375 16.65536308288574 64.14952087402344 16.43487167358398 63.73473358154297 L 16.22733306884766 63.34419250488281 C 16.22574234008789 63.34118270874023 16.22417259216309 63.33814239501953 16.22262191772461 63.33510208129883 L 16.20736312866211 63.30508422851562 L 14.46294212341309 59.8551025390625 C 14.33935260772705 59.61063385009766 14.09660243988037 59.44888305664062 13.82339286804199 59.428955078125 L 13.10714244842529 59.47761535644531 C 10.8723726272583 59.62945175170898 8.637412071228027 59.78092193603516 6.402262687683105 59.93200302124023 L 5.382682323455811 60.0014533996582 C 5.367932319641113 60.00247192382812 5.352911472320557 60.00266265869141 5.338352680206299 60.00222396850586 C 5.013362407684326 59.9924430847168 4.688722610473633 59.9730224609375 4.364882469177246 59.94395446777344 C 4.355212688446045 59.94313430786133 4.34586238861084 59.94135284423828 4.336452484130859 59.9399528503418 L 3.157482624053955 65.14090728759766 C 3.204452514648438 65.15522003173828 3.24892258644104 65.17672729492188 3.289332628250122 65.20463562011719 L 4.394782543182373 65.96851348876953 C 4.551072597503662 66.07653045654297 4.72164249420166 66.16227722167969 4.901582717895508 66.22325134277344 L 9.932572364807129 67.93848419189453 C 9.961032867431641 67.94819641113281 9.988502502441406 67.96055603027344 10.01462268829346 67.97543334960938 L 15.51890277862549 71.10917663574219 C 15.61141395568848 71.16227722167969 15.71655082702637 71.1903076171875 15.82293224334717 71.18982696533203 Z M 9.992112159729004 69.06040191650391 L 9.097062110900879 69.680419921875 C 9.057862281799316 69.71914672851562 9.012242317199707 69.75078582763672 8.962222099304199 69.77391052246094 L 8.462102890014648 70.12037658691406 C 8.328132629394531 70.20972442626953 8.263872146606445 70.37297058105469 8.300992965698242 70.5296630859375 C 8.326252937316895 70.63372039794922 8.394102096557617 70.72236633300781 8.48795223236084 70.77389526367188 C 8.58181095123291 70.82544708251953 8.693011283874512 70.83513641357422 8.79437255859375 70.80063629150391 L 9.981232643127441 70.39470672607422 C 10.08693218231201 70.01481628417969 10.28554248809814 69.66721343994141 10.55914211273193 69.38326263427734 L 9.992112159729004 69.06040191650391 Z M 7.319002628326416 68.05539703369141 C 7.227912425994873 68.08343505859375 7.109672546386719 68.12115478515625 7.006702423095703 68.15397644042969 C 6.755592346191406 68.23393249511719 6.596892356872559 68.28411102294922 6.509952545166016 68.30605316162109 C 6.360812664031982 68.34375 6.261172771453857 68.48422241210938 6.274862766265869 68.63742065429688 L 6.275052547454834 68.6407470703125 C 6.275502681732178 68.64440155029297 6.275882720947266 68.6480712890625 6.27620267868042 68.65174102783203 C 6.290863037109375 68.81803131103516 6.432878494262695 68.94414520263672 6.599692344665527 68.93852996826172 L 6.599632740020752 68.93852996826172 C 7.263912677764893 68.91563415527344 7.928462505340576 68.89242553710938 8.593252182006836 68.86888122558594 L 8.959992408752441 68.61484527587891 L 7.319002628326416 68.05539703369141 Z M 14.98659229278564 67.918701171875 L 14.79590225219727 66.37151336669922 L 12.94508266448975 65.16398620605469 C 12.84024143218994 65.09574127197266 12.71182060241699 65.07398223876953 12.59035205841064 65.10389709472656 C 12.46889209747314 65.13378143310547 12.36524295806885 65.21267700195312 12.30407238006592 65.32179260253906 C 12.27796268463135 65.36808013916016 12.260422706604 65.41872406005859 12.2523021697998 65.47125244140625 C 12.2516622543335 65.47532653808594 12.25102233886719 65.47940063476562 12.25026226043701 65.48347473144531 C 12.24988269805908 65.48748016357422 12.2496223449707 65.49073028564453 12.24912261962891 65.49472045898438 C 12.24736213684082 65.51031494140625 12.24649238586426 65.52597045898438 12.2465124130249 65.54167175292969 C 12.24556255340576 65.67995452880859 12.30875205993652 65.81085205078125 12.4176025390625 65.89614105224609 L 14.98659229278564 67.918701171875 Z M 21.85348701477051 78.63506317138672 C 21.72771453857422 78.63506317138672 21.60214614868164 78.58562469482422 21.5084228515625 78.48748016357422 L 19.50945281982422 76.39452362060547 C 19.37757301330566 76.25644683837891 19.34074211120605 76.05300140380859 19.41583251953125 75.87745666503906 C 19.49093246459961 75.70189666748047 19.66348266601562 75.58802032470703 19.85445213317871 75.58802032470703 L 20.35419273376465 75.5880126953125 C 20.73304176330566 75.587646484375 21.08064270019531 75.37787628173828 21.2575626373291 75.04286193847656 L 19.85445213317871 75.04287719726562 C 19.59099197387695 75.04287719726562 19.37741279602051 74.82929229736328 19.37741279602051 74.56583404541016 L 19.37741279602051 74.56576538085938 C 19.37741279602051 74.30230712890625 19.59099197387695 74.08872985839844 19.85444259643555 74.08872985839844 L 21.2575626373291 74.08872985839844 C 21.08063316345215 73.75374603271484 20.73302268981934 73.54400634765625 20.35418319702148 73.54364013671875 L 19.85445213317871 73.54364013671875 C 19.59099197387695 73.54364013671875 19.37741279602051 73.33006286621094 19.37741279602051 73.06660461425781 C 19.37741279602051 72.80314636230469 19.59099197387695 72.58957672119141 19.85444259643555 72.58957672119141 L 22.60305213928223 72.58957672119141 C 22.86651229858398 72.58957672119141 23.08009338378906 72.80314636230469 23.08009338378906 73.06660461425781 C 23.08009338378906 73.33006286621094 22.86651229858398 73.54364013671875 22.60305213928223 73.54364013671875 L 22.04499244689941 73.54364013671875 C 22.14766311645508 73.712890625 22.22417259216309 73.89668273925781 22.27193260192871 74.08880615234375 L 22.60311317443848 74.08880615234375 C 22.86657333374023 74.08880615234375 23.08015251159668 74.30236053466797 23.08015251159668 74.56583404541016 C 23.08015251159668 74.82929229736328 22.86657333374023 75.04287719726562 22.60311317443848 75.04287719726562 L 22.27174186706543 75.04287719726562 C 22.09980201721191 75.72826385498047 21.57622337341309 76.27044677734375 20.89724159240723 76.46620178222656 L 22.19840240478516 77.82855224609375 C 22.38036346435547 78.01909637451172 22.3734130859375 78.32105255126953 22.18288230895996 78.50301361083984 C 22.09049034118652 78.59124755859375 21.97189712524414 78.63506317138672 21.85348701477051 78.63506317138672 Z" stroke="none" fill="#fff" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="cod-title">
                    <h3 className="sub-title">Cash On Delivery</h3>
                    <p className="sub-text">Available only on orders below <span>₹2000</span></p>
                  </div>
                </div>
              </div>
              <div className="payment desktop-payment">
                <ul className="desktop-tab tabs" data-tab>
                  <li className="tab is-active" id="li-upi">
                    <a className="tab-title" href="#tab-upi">
                      <svg xmlns="http://www.w3.org/2000/svg" width="59.335" height="59.335" viewBox="0 0 59.335 59.335">
                        <path id="_2e0248395af332e045eba28e96afb1c2" data-name="2e0248395af332e045eba28e96afb1c2" d="M30.412,19.615a1.42,1.42,0,0,0-2.4,1.027v1.915l-3.071-2.941a1.42,1.42,0,0,0-2.4,1.026V38.693a1.42,1.42,0,0,0,2.4,1.026l3.071-2.941v1.915a1.42,1.42,0,0,0,2.4,1.026l9.426-9.027a1.42,1.42,0,0,0,0-2.05ZM24.275,37.947V21.387l8.646,8.28Zm5.474,0V35.112l4.615-4.42a1.42,1.42,0,0,0,0-2.051l-4.615-4.42V21.387l8.646,8.281ZM59.08,48.4l-9.452-9.452a.869.869,0,0,0-1.484.615V43.9H41.981A18.824,18.824,0,0,0,19.707,13.692H10.321a.869.869,0,0,0-.869.869v3.113L2.1,10.32,9.452,2.967V6.08a.869.869,0,0,0,.869.869H25.946a.869.869,0,0,0,0-1.738H11.19V.869A.869.869,0,0,0,9.706.254L.254,9.706a.869.869,0,0,0,0,1.229l9.452,9.452a.869.869,0,0,0,1.484-.615V15.43h6.163A18.824,18.824,0,0,0,39.627,45.642h9.387a.869.869,0,0,0,.869-.869V41.66l7.354,7.354-7.354,7.354V53.254a.869.869,0,0,0-.869-.869H33.388a.869.869,0,1,0,0,1.738H48.145v4.342a.869.869,0,0,0,1.484.615l9.452-9.452a.869.869,0,0,0,0-1.229ZM29.667,46.761A17.094,17.094,0,1,1,46.761,29.667,17.113,17.113,0,0,1,29.667,46.761Z" transform="translate(0 0.001)" />
                      </svg>
                      <span>UPI</span>
                    </a>
                  </li>
                  <li className="tab" id="li-card"> 
                    <a className="tab-title" href="#tab-card">                      
                      <svg xmlns="http://www.w3.org/2000/svg" width="52.226" height="40.496" viewBox="0 0 52.226 40.496">
                        <g id="Group_816" data-name="Group 816" transform="translate(-4.197 -9.774)">
                          <path id="_9a605ff90c78f8dd2231d4a60fbd5fcf" data-name="9a605ff90c78f8dd2231d4a60fbd5fcf" d="M45.137,90.5H3.825A3.829,3.829,0,0,1,0,86.67V63.618a3.83,3.83,0,0,1,3.264-3.783V53.825A3.829,3.829,0,0,1,7.089,50H48.4a3.829,3.829,0,0,1,3.825,3.825V76.878a3.83,3.83,0,0,1-3.264,3.783V86.67A3.829,3.829,0,0,1,45.137,90.5ZM3.825,61.322a2.3,2.3,0,0,0-2.3,2.3V86.67a2.3,2.3,0,0,0,2.3,2.3H45.137a2.3,2.3,0,0,0,2.3-2.3V63.618a2.3,2.3,0,0,0-2.3-2.3Zm45.128,2.04a2.359,2.359,0,0,1,.009.255V79.1A2.3,2.3,0,0,0,50.7,76.878V63.363ZM4.794,56.834v2.958H45.137a3.828,3.828,0,0,1,3.381,2.04H50.7v-5Zm2.3-5.3a2.3,2.3,0,0,0-2.3,2.3V55.3H50.7V53.825a2.3,2.3,0,0,0-2.3-2.3ZM37.95,86.824a3.06,3.06,0,1,1,1.525-5.712,3.06,3.06,0,1,1,0,5.3A3.051,3.051,0,0,1,37.95,86.824Zm3.055-4.59a1.5,1.5,0,0,0-.383.052,3.055,3.055,0,0,1,0,2.958,1.5,1.5,0,0,0,.383.05h0a1.53,1.53,0,0,0,0-3.06Zm-3.06,0a1.53,1.53,0,1,0,0,3.06h0a1.53,1.53,0,1,0,0-3.06ZM14.434,85.905H5.7a.765.765,0,1,1,0-1.53h8.737a.765.765,0,1,1,0,1.53Zm-8.771-3.06a.765.765,0,0,1,0-1.53H21.633a.765.765,0,1,1,0,1.53Zm37.638-5.3H36.67a.765.765,0,1,1,0-1.53H43.3a.765.765,0,1,1,0,1.53Zm-10.325,0h-6.63a.765.765,0,1,1,0-1.53h6.63a.765.765,0,1,1,0,1.53Zm-10.325,0h-6.63a.765.765,0,1,1,0-1.53h6.63a.765.765,0,1,1,0,1.53Zm-10.326,0H5.695a.765.765,0,1,1,0-1.53h6.63a.765.765,0,1,1,0,1.53Zm-.544-6.426h-5.1A1.787,1.787,0,0,1,4.9,69.33V66.168a1.787,1.787,0,0,1,1.785-1.785h5.1a1.787,1.787,0,0,1,1.785,1.785V69.33A1.787,1.787,0,0,1,11.781,71.115Zm-5.1-5.2a.255.255,0,0,0-.255.255V69.33a.255.255,0,0,0,.255.255h5.1a.255.255,0,0,0,.255-.255V66.168a.255.255,0,0,0-.255-.255Zm35.6,3.264H30.958a1.787,1.787,0,0,1-1.785-1.785V66.168a1.787,1.787,0,0,1,1.785-1.785H42.281a1.787,1.787,0,0,1,1.785,1.785v1.224A1.787,1.787,0,0,1,42.281,69.177ZM30.958,65.913a.255.255,0,0,0-.255.255v1.224a.255.255,0,0,0,.255.255H42.281a.255.255,0,0,0,.255-.255V66.168a.255.255,0,0,0-.255-.255Z" transform="translate(4.197 -40.226)" />
                        </g>
                      </svg>
                      <span>Credit/Debit Card</span>
                    </a>
                  </li>
                  <li className="tab" id="li-netbanking">
                    <a className="tab-title" href="#tab-netbanking">                      
                      <svg xmlns="http://www.w3.org/2000/svg" width="49.326" height="49.326" viewBox="0 0 49.326 49.326">
                        <g id="_50c394e33ab97f1008fd9370bd5731b4" data-name="50c394e33ab97f1008fd9370bd5731b4" fill="none">
                          <path d="M24.663,34.151a.723.723,0,1,0,.723.723A.723.723,0,0,0,24.663,34.151ZM8.345,28.659H24.671a.723.723,0,0,0,.723-.723V26.494a2.172,2.172,0,0,0-1.66-2.107V17.58h.552a1.109,1.109,0,0,0,1.108-1.108v-2.5a.874.874,0,0,0-.006-.088v-.018a.644.644,0,0,0-.019-.088v-.012a.765.765,0,0,0-.036-.1.016.016,0,0,0-.007-.015.663.663,0,0,0-.048-.085h0a.685.685,0,0,0-.062-.078l-.014-.016a.688.688,0,0,0-.072-.067h0L16.945,6.929a.723.723,0,0,0-.9,0L7.9,13.4h0a.6.6,0,0,0-.072.067l-.024.018a.782.782,0,0,0-.062.078v0a.71.71,0,0,0-.046.084l-.008.015a.771.771,0,0,0-.035.1v.012a.643.643,0,0,0-.018.088v.018a.644.644,0,0,0-.006.087v2.5a1.109,1.109,0,0,0,1.108,1.108h.552v6.8a2.172,2.172,0,0,0-1.667,2.106v1.445a.723.723,0,0,0,.723.721ZM16.5,8.417l6.1,4.828H10.417Zm-7.43,7.718V14.69H23.948v1.445ZM22.288,17.58v6.744H20.843V17.58Zm-2.89,0v6.744h-5.78V17.58Zm-7.226,0v6.744H10.728V17.58ZM9.068,26.494a.723.723,0,0,1,.723-.723H23.226a.724.724,0,0,1,.723.723v.723H9.068ZM45.714,0H3.613A3.617,3.617,0,0,0,0,3.613V35.106a3.617,3.617,0,0,0,3.613,3.613H18.979V43.16h-1.87a2.357,2.357,0,0,0-2.119,1.3.771.771,0,0,0-.044.11l-1.19,3.814a.723.723,0,0,0,.7.937H34.875a.723.723,0,0,0,.69-.937l-1.19-3.814a.771.771,0,0,0-.044-.11,2.357,2.357,0,0,0-2.119-1.3H30.347V38.719H45.714a3.617,3.617,0,0,0,3.613-3.613V3.613A3.617,3.617,0,0,0,45.714,0Zm-13.5,44.606a.919.919,0,0,1,.8.463l.877,2.812H15.432l.877-2.812a.919.919,0,0,1,.8-.463ZM20.424,43.16V38.719H28.9V43.16Zm27.457-8.054a2.171,2.171,0,0,1-2.168,2.168H3.613a2.171,2.171,0,0,1-2.168-2.168V3.613A2.17,2.17,0,0,1,3.613,1.445h42.1a2.17,2.17,0,0,1,2.168,2.168ZM44.835,3.287H4.491a1.206,1.206,0,0,0-1.2,1.2V30.941a1.206,1.206,0,0,0,1.2,1.2H44.835a1.206,1.206,0,0,0,1.2-1.2V4.491a1.206,1.206,0,0,0-1.2-1.2ZM44.594,30.7H4.732V4.732H44.594ZM30,24.114H40.307a1.4,1.4,0,0,0,1.4-1.4V19.731a1.4,1.4,0,0,0-1.4-1.4H30a1.4,1.4,0,0,0-1.4,1.4v2.987a1.4,1.4,0,0,0,1.4,1.4Zm.048-4.335H40.259v2.89H30.047ZM29.3,27H40.961a.723.723,0,1,0,0-1.445H29.3A.723.723,0,0,0,29.3,27ZM16.5,10.626a.822.822,0,1,0,.822.822.822.822,0,0,0-.822-.822ZM30,16.888H40.307a1.4,1.4,0,0,0,1.4-1.4V12.5a1.4,1.4,0,0,0-1.4-1.4H30a1.4,1.4,0,0,0-1.4,1.4v2.987a1.4,1.4,0,0,0,1.4,1.4Zm.048-4.335H40.259v2.89H30.047Z" stroke="none" />
                          <path d="M 14.44531154632568 49.3262939453125 C 14.21673107147217 49.3262939453125 14.0014476776123 49.21807479858398 13.86509704589844 49.03432464599609 C 13.7275972366333 48.84901428222656 13.68686771392822 48.60919189453125 13.75547790527344 48.38888168334961 L 14.94527721405029 44.57477188110352 C 14.9572172164917 44.53708267211914 14.97202777862549 44.50036239624023 14.98959732055664 44.46494293212891 C 15.3903284072876 43.6622428894043 16.21188354492188 43.15642929077148 17.10908699035645 43.16049194335938 L 18.97905731201172 43.16049194335938 L 18.97905731201172 38.71920394897461 L 3.612767457962036 38.71920394897461 C 1.618377447128296 38.71707153320312 0.002127435989677906 37.10083389282227 -2.564087026257766e-06 35.1064338684082 L -2.564087026257766e-06 3.612762928009033 C 0.002127435989677906 1.618372917175293 1.618367433547974 0.002122963313013315 3.612767457962036 2.963256747534615e-06 L 45.71351623535156 2.963256747534615e-06 C 47.70791625976562 0.002122963313013315 49.32415771484375 1.618372917175293 49.32627868652344 3.612762928009033 L 49.32627868652344 35.1064338684082 C 49.32415771484375 37.10082244873047 47.70790863037109 38.71707153320312 45.71351623535156 38.71920394897461 L 30.34721755981445 38.71920394897461 L 30.34721755981445 43.16049194335938 L 32.21140670776367 43.16049194335938 C 33.10962295532227 43.15659332275391 33.93017196655273 43.6622428894043 34.33089828491211 44.46493148803711 C 34.34845733642578 44.50036239624023 34.36327743530273 44.53708267211914 34.37521743774414 44.57477188110352 L 35.56501770019531 48.38888168334961 C 35.63332748413086 48.60821151733398 35.59325790405273 48.84695434570312 35.45706558227539 49.03204345703125 C 35.32089614868164 49.2170524597168 35.10486602783203 49.32627105712891 34.87521743774414 49.32627105712891 L 14.45105743408203 49.32627105712891 C 14.44912815093994 49.32629013061523 14.44723892211914 49.3262939453125 14.44531154632568 49.3262939453125 Z M 17.10665893554688 44.60559844970703 C 16.77680206298828 44.60559844970703 16.47210693359375 44.78243255615234 16.30850791931152 45.06899261474609 L 15.43180751800537 47.88117218017578 L 33.89447784423828 47.88117218017578 L 33.01777648925781 45.06899261474609 C 32.85375595092773 44.78171157836914 32.54776382446289 44.60537719726562 32.21718597412109 44.6056022644043 L 17.10908699035645 44.6056022644043 C 17.1082592010498 44.6056022644043 17.10748672485352 44.60559844970703 17.10665893554688 44.60559844970703 Z M 20.42415809631348 38.71920394897461 L 20.42415809631348 43.16049194335938 L 28.9021167755127 43.16049194335938 L 28.9021167755127 38.71920394897461 L 20.42415809631348 38.71920394897461 Z M 3.612767457962036 1.44510293006897 C 2.416037321090698 1.446172952651978 1.446167469024658 2.416043043136597 1.445107460021973 3.612762928009033 L 1.445107460021973 35.1064338684082 C 1.446697473526001 36.30293273925781 2.416257381439209 37.27249145507812 3.612767457962036 37.27409362792969 L 45.71350860595703 37.27408218383789 C 46.91001892089844 37.27249145507812 47.87957763671875 36.30293273925781 47.88117599487305 35.1064338684082 L 47.88116836547852 3.612762928009033 C 47.88010787963867 2.416043043136597 46.91023635864258 1.446172952651978 45.71351623535156 1.44510293006897 L 3.612767457962036 1.44510293006897 Z M 24.66313743591309 35.59585189819336 C 24.26407814025879 35.59585189819336 23.94058799743652 35.27235412597656 23.94058799743652 34.87329483032227 C 23.94058799743652 34.4742431640625 24.26407814025879 34.15074157714844 24.66313743591309 34.15074157714844 C 25.06219673156738 34.15074157714844 25.38568687438965 34.4742431640625 25.38568687438965 34.87329483032227 C 25.38568687438965 35.27235412597656 25.06219673156738 35.59585189819336 24.66313743591309 35.59585189819336 Z M 44.83488845825195 32.14493179321289 L 4.491387367248535 32.14493179321289 C 3.826737403869629 32.14387130737305 3.28819751739502 31.60533332824707 3.287137508392334 30.940673828125 L 3.287137508392334 4.491393089294434 C 3.28819751739502 3.826732873916626 3.826737403869629 3.288192987442017 4.491387367248535 3.287132978439331 L 44.83488845825195 3.287132978439331 C 45.49954605102539 3.288192987442017 46.03807830810547 3.826732873916626 46.03914642333984 4.491393089294434 L 46.03914642333984 30.940673828125 C 46.03807830810547 31.60533332824707 45.49954605102539 32.14387130737305 44.83488845825195 32.14493179321289 Z M 4.732237339019775 4.732243061065674 L 4.732237339019775 30.6998233795166 L 44.59403610229492 30.6998233795166 L 44.59403610229492 4.732243061065674 L 4.732237339019775 4.732243061065674 Z M 8.34500789642334 28.65934371948242 C 7.946697235107422 28.65934371948242 7.623507499694824 28.33701324462891 7.622447490692139 27.93871307373047 L 7.622447490692139 26.49360275268555 C 7.625227451324463 25.49102210998535 8.314027786254883 24.62067222595215 9.289137840270996 24.38760375976562 L 9.289137840270996 17.58308219909668 L 8.737107276916504 17.58308219909668 C 8.125447273254395 17.58255386352539 7.629727363586426 17.08683204650879 7.629197597503662 16.47517204284668 L 7.629197597503662 13.97032260894775 C 7.629167556762695 13.94132328033447 7.631097316741943 13.91235256195068 7.634977340698242 13.88361263275146 L 7.634977340698242 13.86531257629395 C 7.63902759552002 13.835693359375 7.645147323608398 13.80640316009521 7.653277397155762 13.77764320373535 L 7.653277397155762 13.76607322692871 C 7.662697315216064 13.73323249816895 7.674277305603027 13.70104312896729 7.687957286834717 13.66974258422852 L 7.695667266845703 13.65432262420654 C 7.709177494049072 13.62537288665771 7.724627494812012 13.59737300872803 7.741917610168457 13.57050323486328 L 7.741917610168457 13.56569290161133 C 7.760787487030029 13.53839302062988 7.781387329101562 13.51233291625977 7.803567409515381 13.48765277862549 L 7.827657222747803 13.46935272216797 C 7.849847316741943 13.44492340087891 7.874007225036621 13.42236328125 7.899917602539062 13.40191268920898 L 16.04742813110352 6.928802967071533 C 16.31040000915527 6.720271587371826 16.68233871459961 6.720273971557617 16.9453067779541 6.928802967071533 L 25.12942695617676 13.40576267242432 C 25.15509796142578 13.42648315429688 25.17924690246582 13.44902324676514 25.2016773223877 13.4732027053833 L 25.21612739562988 13.48958301544189 C 25.23854827880859 13.51406288146973 25.25914764404297 13.54014301300049 25.27778816223145 13.56761264801025 C 25.29589653015137 13.59465312957764 25.31199836730957 13.62299251556396 25.32595825195312 13.65239334106445 C 25.33269691467285 13.65721321105957 25.33269691467285 13.66203308105469 25.33269691467285 13.66781330108643 C 25.34672737121582 13.69908332824707 25.3586368560791 13.73127269744873 25.36834716796875 13.76415252685547 C 25.36834716796875 13.7680025100708 25.36834716796875 13.77571296691895 25.36834716796875 13.77571296691895 C 25.37680816650391 13.80445289611816 25.38324737548828 13.83374309539795 25.38761711120605 13.86338329315186 L 25.38761711120605 13.88168334960938 C 25.3910083770752 13.91079330444336 25.39294815063477 13.94005298614502 25.39339828491211 13.96935272216797 L 25.39339828491211 16.47228240966797 C 25.39286804199219 17.08394241333008 24.89714813232422 17.57966232299805 24.28547668457031 17.58019256591797 L 23.73344802856445 17.58019256591797 L 23.73344802856445 24.38664245605469 C 24.70623779296875 24.6224536895752 25.39181709289551 25.49265289306641 25.39339828491211 26.49360275268555 L 25.39339828491211 27.93679237365723 C 25.39339828491211 28.33585357666016 25.06990814208984 28.65934371948242 24.67084693908691 28.65933227539062 L 8.34500789642334 28.65934371948242 Z M 9.790107727050781 25.77105331420898 C 9.391057014465332 25.77105331420898 9.067557334899902 26.09454345703125 9.067557334899902 26.49360275268555 L 9.067557334899902 27.21616363525391 L 23.94829750061035 27.21616363525391 L 23.94829750061035 26.49360275268555 C 23.94776725769043 26.09476280212402 23.62457656860352 25.77158355712891 23.22573661804199 25.77105331420898 L 9.790107727050781 25.77105331420898 Z M 20.84324836730957 17.58019256591797 L 20.84324836730957 24.32402229309082 L 22.2883472442627 24.32402229309082 L 22.2883472442627 17.58019256591797 L 20.84324836730957 17.58019256591797 Z M 13.61771774291992 17.58019256591797 L 13.61771774291992 24.32402229309082 L 19.39813804626465 24.32402229309082 L 19.39813804626465 17.58019256591797 L 13.61771774291992 17.58019256591797 Z M 10.72750759124756 17.58019256591797 L 10.72750759124756 24.32402229309082 L 12.172607421875 24.32402229309082 L 12.172607421875 17.58019256591797 L 10.72750759124756 17.58019256591797 Z M 9.067557334899902 14.68998336791992 L 9.067557334899902 16.13508224487305 L 23.94829750061035 16.13508224487305 L 23.94829750061035 14.68998336791992 L 9.067557334899902 14.68998336791992 Z M 22.59374809265137 13.244873046875 L 16.49732780456543 8.417263031005859 L 10.41728782653809 13.244873046875 L 22.59374809265137 13.244873046875 Z M 40.9610481262207 27.00421333312988 L 29.30385780334473 27.00421333312988 C 28.90480804443359 27.00421333312988 28.58130836486816 26.68071365356445 28.58130836486816 26.28166389465332 C 28.58130836486816 25.88260269165039 28.90480804443359 25.55910301208496 29.30385780334473 25.55910301208496 L 40.9610481262207 25.55910301208496 C 41.3600959777832 25.55910301208496 41.68359756469727 25.88260269165039 41.68359756469727 26.28166389465332 C 41.68359756469727 26.68071365356445 41.3600959777832 27.00421333312988 40.9610481262207 27.00421333312988 Z M 40.3068962097168 24.1140022277832 L 29.99846649169922 24.1140022277832 L 29.99847793579102 24.1140022277832 C 29.22740745544434 24.1129322052002 28.60259819030762 23.48813247680664 28.60153770446777 22.71706390380859 L 28.60153770446777 19.73051261901855 C 28.60259819030762 18.95944213867188 29.22740745544434 18.33463287353516 29.99846649169922 18.33357238769531 L 40.3068962097168 18.33358383178711 C 41.07817840576172 18.33410263061523 41.70329666137695 18.9592227935791 41.70382690429688 19.73051261901855 L 41.70382690429688 22.71706390380859 C 41.70276641845703 23.48812294006348 41.07795715332031 24.1129322052002 40.3068962097168 24.1140022277832 Z M 30.0466365814209 19.77868270874023 L 30.0466365814209 22.66889381408691 L 40.25871658325195 22.66889381408691 L 40.25871658325195 19.77868270874023 L 30.0466365814209 19.77868270874023 Z M 29.99847793579102 24.1140022277832 L 29.99846649169922 24.1140022277832 L 29.99847793579102 24.1140022277832 Z M 29.99846649169922 24.1140022277832 L 29.99847793579102 24.1140022277832 Z M 40.3068962097168 16.88847351074219 L 29.99846649169922 16.88847351074219 L 29.99847793579102 16.88847351074219 C 29.22740745544434 16.88740348815918 28.60259819030762 16.26260375976562 28.60153770446777 15.49153327941895 L 28.60153770446777 12.50498294830322 C 28.60259819030762 11.73391342163086 29.22740745544434 11.10910320281982 29.99846649169922 11.10804271697998 L 40.3068962097168 11.10804271697998 C 41.07817840576172 11.1085729598999 41.70329666137695 11.73369312286377 41.70382690429688 12.50498294830322 L 41.70382690429688 15.49153327941895 C 41.70276641845703 16.26260375976562 41.07795715332031 16.88740348815918 40.3068962097168 16.88847351074219 Z M 30.0466365814209 12.5531530380249 L 30.0466365814209 15.44336318969727 L 40.25871658325195 15.44336318969727 L 40.25871658325195 12.5531530380249 L 30.0466365814209 12.5531530380249 Z M 29.99847793579102 16.88847351074219 L 29.99846649169922 16.88847351074219 L 29.99847793579102 16.88847351074219 Z M 29.99846649169922 16.88847351074219 L 29.99847793579102 16.88847351074219 Z M 16.49636650085449 12.26991271972656 C 16.04250717163086 12.26991271972656 15.6745777130127 11.9019832611084 15.6745777130127 11.44812297821045 C 15.6745777130127 10.99427318572998 16.04250717163086 10.6263427734375 16.49636650085449 10.6263427734375 C 16.95022773742676 10.6263427734375 17.31814765930176 10.99427318572998 17.31814765930176 11.44812297821045 C 17.31814765930176 11.9019832611084 16.95022773742676 12.26991271972656 16.49636650085449 12.26991271972656 Z" stroke="none" fill="#000" />
                        </g>
                      </svg>
                      <span>Netbanking</span>
                    </a>
                  </li>
                  <li className="tab" id="li-wallets">
                    <a className="tab-title" href="#tab-wallets">                      
                      <svg id="_60d50628cd8531045a81db4a48c9166a" data-name="60d50628cd8531045a81db4a48c9166a" xmlns="http://www.w3.org/2000/svg" width="57.67" height="48.567" viewBox="0 0 57.67 48.567">
                        <g id="Path_608" data-name="Path 608" transform="translate(6.507 0.804)" fill="none">
                          <path d="M42.83,10.581a.759.759,0,0,0,.759-.759V7.3A2.489,2.489,0,0,0,41.1,4.809H37.025L36.1,2.064a.759.759,0,0,0-.939-.483L13.07,8.3a.76.76,0,0,0,.443,1.452l21.382-6.5,2.038,6.017a.759.759,0,1,0,1.437-.487l-.83-2.451H41.1a.969.969,0,0,1,.968.968V9.822a.757.757,0,0,0,.757.759Z" stroke="none" />
                          <path d="M 42.83044052124023 10.58085918426514 L 42.8304328918457 10.58085918426514 C 42.83044052124023 10.58085918426514 42.83044052124023 10.58085918426514 42.83044052124023 10.58085918426514 Z M 42.83044052124023 10.58085918426514 C 42.41157150268555 10.58085918426514 42.07162094116211 10.24090957641602 42.07314300537109 9.822039604187012 L 42.07314300537109 7.293649673461914 C 42.07314300537109 6.759439468383789 41.63909149169922 6.325389385223389 41.10488128662109 6.325389385223389 L 37.53993988037109 6.325389385223389 L 38.37009048461914 8.776379585266113 C 38.50462341308594 9.173259735107422 38.29194259643555 9.604039192199707 37.89507293701172 9.738569259643555 C 37.49819183349609 9.873088836669922 37.06740951538086 9.660420417785645 36.93289184570312 9.26353931427002 L 34.89470291137695 3.246099472045898 L 13.51266193389893 9.747669219970703 C 13.1204137802124 9.844690322875977 12.72079181671143 9.617949485778809 12.60287189483643 9.23146915435791 C 12.48495197296143 8.844989776611328 12.68991184234619 8.433779716491699 13.06951141357422 8.295289993286133 L 35.15573120117188 1.581249594688416 C 35.54781723022461 1.462058067321777 35.96369171142578 1.675720810890198 36.09514236450195 2.063859462738037 L 37.02546310424805 4.809269428253174 L 41.10336303710938 4.809269428253174 C 42.47558212280273 4.810939788818359 43.58758163452148 5.922939777374268 43.58926010131836 7.295169353485107 L 43.58926010131836 9.822039604187012 C 43.58926010131836 10.24111938476562 43.2495231628418 10.58085918426514 42.8304328918457 10.58085918426514 Z" stroke="none" fill="#000" />
                        </g>
                        <g id="Path_609" data-name="Path 609" transform="translate(0 0.001)" fill="none">
                          <path d="M55.394,22.765a.759.759,0,1,0,0,1.518c.533,0,.759.226.759.759v9.106c0,.533-.226.759-.759.759H43.253c-.533,0-.759-.226-.759-.759V26.559c0-.533.226-.759.759-.759h9.106a.759.759,0,0,0,.759-.759V15.936a2.134,2.134,0,0,0-2.276-2.276H4.553a2.817,2.817,0,0,1-3.035-3.035A2.817,2.817,0,0,1,4.553,7.589h7.7L7.664,9.1a.759.759,0,1,0,.475,1.44l27.5-9.065A.759.759,0,0,0,35.161.037L16.8,6.093a.593.593,0,0,0-.1-.021H4.553A4.311,4.311,0,0,0,0,10.624V44.012a4.311,4.311,0,0,0,4.553,4.553H50.841a2.134,2.134,0,0,0,2.276-2.276V38.7a.759.759,0,1,0-1.518,0v7.588c0,.533-.226.759-.759.759H4.553a2.817,2.817,0,0,1-3.035-3.035V14.133a4.611,4.611,0,0,0,3.035,1.044H50.841c.533,0,.759.226.759.759v8.347H43.253a2.134,2.134,0,0,0-2.276,2.276v7.588a2.134,2.134,0,0,0,2.276,2.276H55.394a2.134,2.134,0,0,0,2.276-2.276V25.042A2.134,2.134,0,0,0,55.394,22.765Z" stroke="none" />
                          <path d="M 35.39907836914062 -0.00141143798828125 C 35.71767425537109 -0.00141143798828125 36.01438903808594 0.2007255554199219 36.11983489990234 0.5197601318359375 C 36.25143432617188 0.9178886413574219 36.03535461425781 1.347320556640625 35.63722610473633 1.478908538818359 L 8.139106750488281 10.54378128051758 C 7.878620147705078 10.64074325561523 7.585960388183594 10.58756256103516 7.376277923583984 10.40512084960938 C 7.166576385498047 10.22269058227539 7.073406219482422 9.940200805664062 7.133415222167969 9.668807983398438 C 7.193428039550781 9.397411346435547 7.397018432617188 9.180549621582031 7.664085388183594 9.103538513183594 L 12.2564582824707 7.58892822265625 L 4.55291748046875 7.58892822265625 C 2.681667327880859 7.58892822265625 1.517635345458984 8.752960205078125 1.517635345458984 10.62421035766602 C 1.517635345458984 12.49546051025391 2.681667327880859 13.65948867797852 4.55291748046875 13.65948867797852 L 50.84095764160156 13.65948867797852 C 52.22351837158203 13.65948867797852 53.11740875244141 14.55337905883789 53.11740875244141 15.93595123291016 L 53.11740875244141 25.04179954528809 C 53.11740875244141 25.46088027954102 52.77766799926758 25.80061912536621 52.35858535766602 25.80061912536621 L 43.25274658203125 25.80061912536621 C 42.72005462646484 25.80061912536621 42.49392700195312 26.0267391204834 42.49392700195312 26.55944061279297 L 42.49392700195312 34.14764022827148 C 42.49392700195312 34.68032836914062 42.72005462646484 34.90645980834961 43.25274658203125 34.90645980834961 L 55.39386749267578 34.90645980834961 C 55.92656707763672 34.90645980834961 56.15268707275391 34.68032836914062 56.15268707275391 34.14764022827148 L 56.15268707275391 25.04179954528809 C 56.15268707275391 24.50909996032715 55.92656707763672 24.2829704284668 55.39386749267578 24.2829704284668 C 54.97478866577148 24.2829704284668 54.63504791259766 23.94323921203613 54.63504791259766 23.52414894104004 C 54.63504791259766 23.10507011413574 54.97478866577148 22.76533889770508 55.39386749267578 22.76533889770508 C 56.77643585205078 22.76533889770508 57.67033767700195 23.65921974182129 57.67033767700195 25.04179954528809 L 57.67033767700195 34.14764022827148 C 57.67033767700195 35.53020858764648 56.77643585205078 36.42409896850586 55.39386749267578 36.42409896850586 L 43.25274658203125 36.42409896850586 C 41.87017822265625 36.42409896850586 40.97628784179688 35.53020858764648 40.97628784179688 34.14764022827148 L 40.97628784179688 26.55944061279297 C 40.97628784179688 25.17687034606934 41.87017822265625 24.2829704284668 43.25274658203125 24.2829704284668 L 51.59977722167969 24.2829704284668 L 51.59977722167969 15.93595123291016 C 51.59977722167969 15.40325927734375 51.3736457824707 15.17712783813477 50.84095764160156 15.17712783813477 L 4.55291748046875 15.17712783813477 C 3.326667785644531 15.17712783813477 2.296188354492188 14.79013061523438 1.517635345458984 14.13299942016602 L 1.517635345458984 44.01229858398438 C 1.517635345458984 45.88354873657227 2.681667327880859 47.04758071899414 4.55291748046875 47.04758071899414 L 50.84095764160156 47.04758071899414 C 51.3736457824707 47.04758071899414 51.59977722167969 46.82144927978516 51.59977722167969 46.28876113891602 L 51.59977722167969 38.7005615234375 C 51.59977722167969 38.28147125244141 51.93950653076172 37.94174194335938 52.35858535766602 37.94174194335938 C 52.77766799926758 37.94174194335938 53.11740875244141 38.28147125244141 53.11740875244141 38.7005615234375 L 53.11740875244141 46.28876113891602 C 53.11740875244141 47.67132949829102 52.22351837158203 48.56521987915039 50.84095764160156 48.56521987915039 L 4.55291748046875 48.56521987915039 C 1.830265045166016 48.56521987915039 -3.814697265625e-06 46.73495101928711 -3.814697265625e-06 44.01229858398438 L -3.814697265625e-06 10.62421035766602 C -3.814697265625e-06 7.901569366455078 1.830265045166016 6.0712890625 4.55291748046875 6.0712890625 L 16.69403839111328 6.0712890625 C 16.73046875 6.0712890625 16.76233673095703 6.086471557617188 16.79723739624023 6.092540740966797 L 35.16068649291992 0.03715133666992188 C 35.23978424072266 0.01100540161132812 35.32009124755859 -0.00141143798828125 35.39907836914062 -0.00141143798828125 Z" stroke="none" fill="#000" />
                        </g>
                        <g id="Ellipse_97" data-name="Ellipse 97" transform="translate(47.217 29.004)" fill="none" stroke="#000" strokeWidth="1.5">
                          <circle cx="1.349" cy="1.349" r="1.349" stroke="none" />
                          <circle cx="1.349" cy="1.349" r="0.599" fill="none" />
                        </g>
                      </svg>
                      <span>Wallets</span>
                    </a>
                  </li>
                  <li className="tab" id="li-cred">
                    <a className="tab-title" href="#tab-cred">                      
                      <svg id="Group_886" data-name="Group 886" xmlns="http://www.w3.org/2000/svg" width="43.205" height="48.829" viewBox="0 0 43.205 48.829">
                        <g id="Group_887" data-name="Group 887" transform="translate(0.5 0.5)">
                          <path id="Path_8395" data-name="Path 8395" d="M41.234,1.57a1.758,1.758,0,0,1,.2.007c.137.014.171.049.185.186a2.6,2.6,0,0,1,.006.289V9.225q0,13.333.012,26.664a.677.677,0,0,1-.453.746c-6.368,3.45-12.784,6.951-19.343,10.533a.62.62,0,0,1-.28.092.509.509,0,0,1-.255-.082Q11.6,41.86,1.887,36.557a.478.478,0,0,1-.317-.532q.01-13.185.006-26.369V2.011a1.505,1.505,0,0,1,.04-.383.986.986,0,0,1,.417-.057h39.2ZM1.96,8.836,41.234.5H2.033C.965.5.506.955.506,2.011Q.506,19.018.5,36.025A1.521,1.521,0,0,0,1.374,37.5q9.714,5.3,19.417,10.618a1.58,1.58,0,0,0,.768.214,1.648,1.648,0,0,0,.794-.224q9.662-5.277,19.339-10.53A1.713,1.713,0,0,0,42.7,35.888q-.024-16.86-.011-33.721a5.107,5.107,0,0,0-.012-.512A1.219,1.219,0,0,0,41.544.513,3,3,0,0,0,41.234.5" transform="translate(-0.5 -0.5)" fill="none" stroke="#000" strokeWidth={1} />
                          <path id="Path_8396" data-name="Path 8396" d="M11.74,12.929H26.213v-.737H12.22c-1.013,0-2.026,0-3.06-.01h0c-.175,0-1.766,0-2.172.409s-.409,2.012-.408,2.188q.014,7.99,0,15.979c0,.7,1.382,2.295,2,2.636,3.643,2.008,7.557,4.169,11.5,6.375a2.194,2.194,0,0,0,1.087.31,2.486,2.486,0,0,0,1.225-.137c3.793-2.125,7.461-4.409,11.169-6.444.779-.428,2.221-2.134,2.207-3.018-.022-1.505-.018-3.043-.015-4.529l0-1.211h.037l-.614.043q0,1.663,0,3.324c0,1.267.073,3.6,0,3.758a12.044,12.044,0,0,1-.99,1.015c-1.188.653-1.293.963-2.478,1.621l-1.253.7-2.224,1.231c-2.082,1.152-4.619,2.218-6.693,3.386a.809.809,0,0,1-.374.126.8.8,0,0,1-.367-.122C16.634,37.5,11.734,34.475,7.265,32c.042.023.517.29.264.151a.412.412,0,0,1-.269-.457q.006-6.167,0-12.333V13.332c-.015-.927.047-.344.044-.347s.108,0,.376,0Zm0-1.07H7.685A1.3,1.3,0,0,0,6.2,13.332q0,9.183,0,18.365a1.459,1.459,0,0,0,.821,1.4q6.639,3.669,13.267,7.358a1.8,1.8,0,0,0,.888.258,1.825,1.825,0,0,0,.9-.264c2.809-1.582,5.636-3.136,8.456-4.7,1.6-.889,3.2-1.781,4.808-2.664a1.344,1.344,0,0,0,.812-1.211c.005-2.615,0-5.229.006-7.844,0-.272-.118-.355-.358-.355h-.021c-.2,0-.276,0-.276,0-.28.056-.316.075-.316.706,0,2.065-.029,4.7,0,6.767.012,1.016,0,.877-1.618,1.938-3.78,2.074-7.734,4.323-11.5,6.432-.208.116-.718.569-.9.569a1.422,1.422,0,0,1-.608-.223c-3.827-2.142-8.666-5.067-12.507-7.184a3.348,3.348,0,0,1-1.474-1.913c.009-5.328.045-10.977.035-16.3,0-.2.089-.366.519-.71-.523-2.017,4.359-.819,5.235-.819h3.124l11.289.057c.481.013.5-.164.5-.616-.05-.357,0-.509-.5-.51H11.74" transform="translate(-0.102 0.294)" fill="none" stroke="#000" strokeWidth={1} />
                          <path id="Path_8397" data-name="Path 8397" d="M12.686,7.239q2.85.006,5.7.005h15.9a.923.923,0,0,1,.35.047.781.781,0,0,1,.057.37q0,4.68,0,9.359l.686,0h-.011c.006-1.947.006-4.963.005-6.909V8.192c0-1.169-1.55-1.647-2.728-1.647H12.686c0-.123,0,.821,0,.693m-.609-1.072c-.357,0-.5.094-.478.472.029.548.015-.227,0,.323.013.252.093.329.349.329h.033l.123,0c.093,0,.187,0,.28,0H32.649c1.753.009,2.05.069,2,1.946,0,2.785.005,5.57-.006,8.355,0,.343.025.5.347.5h.4c.3,0-.475.006-.179.006h.043c.516,0,.519,0,.519-.5q0-4.965,0-9.93A1.3,1.3,0,0,0,34.29,6.174h-15.9q-3.15,0-6.3-.007Z" transform="translate(0.275 -0.104)" fill="none" stroke="#000" strokeWidth={1} />
                          <path id="Path_8398" data-name="Path 8398" d="M12.968,21.166c.064,0-.943,0-.878,0s.124-1.069.187-1.07c1.395-.266,0,2.584,0,3.341,0,1.065,0,2.13-.005,3.2,0,.68,1.364,2.261,1.956,2.587,1.851,1.021,3.783,2.1,5.745,3.212a1.6,1.6,0,0,0,.793.219,1.662,1.662,0,0,0,.824-.232q1.311-.732,2.624-1.46c1.066-.593,2.132-1.185,3.206-1.788.059.108.12-.855.181-.747q-3.314,1.833-6.621,3.676l-.066.036a.227.227,0,0,1-.282,0l-5.336-2.984c-2.25-1.258-2.326-1.3-2.326-1.64V23.065c0-.63,0-1.26,0-1.9m-.7-1.069c-.229,0-.386.11-.38.457.018,1.16.006,2.321.006,3.48v3.481a1.406,1.406,0,0,0,.7,1.357l7.513,4.2a1.338,1.338,0,0,0,.66.185,1.361,1.361,0,0,0,.664-.185q3.681-2.048,7.366-4.087c.215-.12.23-.234.111-.435-.3-.5.091.221-.173-.3-.092-.183-.182-.265-.3-.265a.615.615,0,0,0-.287.1c-2.128,1.2-4.95,3.283-7.082,4.473a.614.614,0,0,1-.3.1.536.536,0,0,1-.266-.08c-1.912-1.083-4.9-3.226-6.824-4.287-.671-.27-1.4-1.645-1.4-1.645a50.665,50.665,0,0,0,.721-6.085c0-.286-.044-.457-.322-.457" transform="translate(0.296 0.868)" fill="none" stroke="#000" strokeWidth={1} />
                        </g>
                      </svg>
                      <span>CRED</span>
                    </a>
                  </li>
                  <li className="tab" id="li-cash">
                    <a className="tab-title" href="#tab-cash">            
                      <svg xmlns="http://www.w3.org/2000/svg" width="54.161" height="48.567" viewBox="0 0 54.161 48.567">
                        <g id="_9ab9093b0ac8db12c8502e0e9970a03c" data-name="9ab9093b0ac8db12c8502e0e9970a03c" transform="translate(-8 -7.996)" fill="none">
                          <path d="M30.7,8a2.027,2.027,0,0,0-.321.084L8.781,17.316a.934.934,0,0,0-.781.93V46.268a.934.934,0,0,0,.007.112q0,.009,0,.019,0,.03.011.06a.934.934,0,0,0,.566.7l21.79,9.32a.934.934,0,0,0,.329.075h.168a.934.934,0,0,0,.278-.071L43,51.419a10.174,10.174,0,0,0,1.625,2.138,10.278,10.278,0,1,0,8.9-17.4V18.253a.934.934,0,0,0-.792-.934L31.15,8.088a.934.934,0,0,0-.245-.069h-.1a.933.933,0,0,0-.1,0V8Zm8.039,4.594,7.209,2.871L23.978,24.706l-6.7-2.875,21.453-9.24ZM9.108,19.684l6.363,2.4V34.145a.934.934,0,0,0,1.35.833l3-1.5,3.229,4.839a.9.9,0,0,0,1.027.482h.03l.062-.019a.938.938,0,0,0,.642-1.01V26.079l5.78,2.144V55.374L9.108,46.268Zm43.308,0V36.022a12.154,12.154,0,0,0-7.8,2.992,10.2,10.2,0,0,0-2.73,4.96l-2.3.984-5.448,2.327A.934.934,0,1,0,34.877,49l5.446-2.331,1.3-.555a15.047,15.047,0,0,0,.734,4.328L31.695,54.969V28.219ZM51.89,37.871a3.487,3.487,0,1,0,0,.007ZM47.979,40.5v1.864h.011v.049h1.974a1.851,1.851,0,0,1,1.046.547,1.753,1.753,0,0,1,.243.387H47.99v1.868h3.237a1.708,1.708,0,0,1-.217.342,2.044,2.044,0,0,1-1.593.592H47.979v1.868h.543l4.936,4.8,1.3-1.339-3.834-3.732a3.687,3.687,0,0,0,1.438-.9,3.637,3.637,0,0,0,.876-1.63h2.222V43.347H53.253a3.73,3.73,0,0,0-.364-.934h2.572V40.5Zm-8.053.65a.934.934,0,0,0-.336.08l-5.446,2.331a.934.934,0,0,0,.734,1.718l5.446-2.331a.934.934,0,0,0-.4-1.8Z" stroke="none" />
                          <path d="M 30.75326919555664 9.549488067626953 L 10.01082229614258 18.4209098815918 L 16.08994293212891 20.71035385131836 L 36.39736938476562 11.96371078491211 L 30.75326919555664 9.549488067626953 M 47.17124938964844 16.57217025756836 L 26.70901107788086 25.18357849121094 L 31.13738632202148 26.82629776000977 L 51.51789855957031 18.43141937255859 L 47.17124938964844 16.57217025756836 M 16.97061920166016 23.32916259765625 L 16.97060775756836 33.22631454467773 L 20.33171844482422 31.54680633544922 L 23.30886840820312 36.00823211669922 L 23.30886840820312 26.05080413818359 L 16.97061920166016 23.32916259765625 M 30.70317077636719 7.995986938476562 C 30.70566177368164 7.995986938476562 30.70814895629883 7.995994567871094 30.71063995361328 7.996009826660156 L 30.71063995361328 8.018428802490234 C 30.74361419677734 8.016674041748047 30.77664566040039 8.016674041748047 30.80962753295898 8.018428802490234 C 30.83266448974609 8.017566680908203 30.855712890625 8.017566680908203 30.87872695922852 8.018428802490234 C 30.88744735717773 8.018306732177734 30.89617156982422 8.018306732177734 30.90487670898438 8.018428802490234 C 30.98919677734375 8.030197143554688 31.07151794433594 8.053447723388672 31.14953994750977 8.087528228759766 L 52.73210906982422 17.31932830810547 C 53.19176864624023 17.38998794555664 53.52938079833984 17.78811645507812 53.52399826049805 18.25314712524414 L 53.52399826049805 36.1601676940918 C 55.65721893310547 36.49456787109375 57.62938690185547 37.49700927734375 59.15680694580078 39.02328872680664 C 63.16277694702148 43.03985595703125 63.16277694702148 49.54076766967773 59.15682983398438 53.55733871459961 C 55.14003753662109 57.56453704833984 48.63769912719727 57.56453704833984 44.62089920043945 53.55733871459961 C 43.96721649169922 52.9055290222168 43.43680572509766 52.18274688720703 42.99604034423828 51.41887664794922 L 31.14953994750977 56.48580932617188 C 31.06098937988281 56.52366638183594 30.96712875366211 56.547607421875 30.87125778198242 56.55677795410156 C 30.85197067260742 56.55738067626953 30.83266067504883 56.55738067626953 30.81335830688477 56.55677795410156 C 30.80091094970703 56.55702972412109 30.7884635925293 56.55702972412109 30.77600860595703 56.55677795410156 C 30.76667022705078 56.55691909790039 30.75732803344727 56.55691909790039 30.74799728393555 56.55677795410156 C 30.73984527587891 56.55677795410156 30.73180389404297 56.55700302124023 30.72371673583984 56.55700302124023 C 30.71686935424805 56.55700302124023 30.71001815795898 56.55693054199219 30.70316696166992 56.55677795410156 C 30.58996963500977 56.55202865600586 30.47858810424805 56.52671051025391 30.37445831298828 56.48207855224609 L 8.584598541259766 47.16249847412109 C 8.287437438964844 47.04071807861328 8.073707580566406 46.77478790283203 8.018699645996094 46.45838928222656 C 8.014308929443359 46.4385986328125 8.010578155517578 46.41865539550781 8.007488250732422 46.39862823486328 C 8.007427215576172 46.39239883422852 8.007427215576172 46.38616943359375 8.007488250732422 46.37994766235352 C 8.00274658203125 46.34277725219727 8.000259399414062 46.30535888671875 8.000019073486328 46.26789093017578 L 8.000019073486328 18.24567794799805 C 7.995639801025391 17.78567886352539 8.326896667480469 17.39100646972656 8.780696868896484 17.31558990478516 L 30.37446975708008 8.080059051513672 C 30.44732666015625 8.048679351806641 30.52389907836914 8.026706695556641 30.60231781005859 8.014686584472656 C 30.63311004638672 8.006877899169922 30.66427993774414 8.000648498535156 30.69569778442383 7.996009826660156 C 30.69819259643555 7.995994567871094 30.70068359375 7.995986938476562 30.70317077636719 7.995986938476562 Z M 23.97775650024414 24.70558929443359 L 45.94318771362305 15.46156692504883 L 38.73439788818359 12.59034729003906 L 38.73439788818359 12.59035873413086 L 17.28165817260742 21.83028793334961 L 23.97775650024414 24.70558929443359 Z M 16.40448379516602 35.07596969604492 C 16.23398971557617 35.07596969604492 16.06396102905273 35.02931976318359 15.91416931152344 34.93692016601562 C 15.63933944702148 34.76738739013672 15.47159957885742 34.46788787841797 15.47061920166016 34.14497756958008 L 15.47061920166016 22.07995986938477 L 9.108047485351562 19.68376922607422 L 9.108047485351562 46.26789093017578 L 30.58873748779297 55.37378692626953 L 30.58873748779297 28.22266006469727 L 24.80886840820312 26.07859802246094 L 24.80886840820312 37.77194976806641 C 24.85360717773438 38.11806869506836 24.70160675048828 38.46025085449219 24.41479873657227 38.65908813476562 C 24.33858871459961 38.71231079101562 24.25486755371094 38.75384902954102 24.16639709472656 38.7823486328125 C 24.14608001708984 38.78927612304688 24.12551879882812 38.79550933837891 24.10475921630859 38.801025390625 C 24.09479904174805 38.80118560791016 24.0848388671875 38.80118560791016 24.07487869262695 38.801025390625 C 24.0428581237793 38.8089599609375 24.01043701171875 38.815185546875 23.97775650024414 38.81969833374023 C 23.59406661987305 38.86105346679688 23.22450637817383 38.66215515136719 23.04766845703125 38.31916809082031 L 19.81850814819336 33.48009872436523 L 16.82092666625977 34.97794723510742 C 16.68943786621094 35.04347229003906 16.54679870605469 35.07596969604492 16.40448379516602 35.07596969604492 Z M 34.51081848144531 49.07933807373047 C 34.14798736572266 49.07933807373047 33.80279541015625 48.86662292480469 33.65124893188477 48.51186752319336 C 33.44857025146484 48.03738784790039 33.66889953613281 47.48843765258789 34.14337921142578 47.28575897216797 L 39.59131622314453 44.95866775512695 L 41.88852691650391 43.97441864013672 C 42.31245803833008 42.09642791748047 43.25908660888672 40.3766975402832 44.6190185546875 39.01393890380859 C 46.49066925048828 37.14564895629883 49.77192687988281 36.07355880737305 52.41595840454102 36.02196884155273 L 52.41595840454102 19.68376922607422 L 31.69488906860352 28.21892929077148 L 31.69488906860352 54.96876907348633 L 42.35892868041992 50.44660949707031 C 41.95177841186523 49.28866577148438 41.60650634765625 47.33245086669922 41.62519073486328 46.11847686767578 L 40.32344055175781 46.67316818237305 L 34.87736892700195 49.00399780273438 C 34.75764846801758 49.05513763427734 34.63326263427734 49.07933807373047 34.51081848144531 49.07933807373047 Z M 51.88978576660156 54.70988845825195 C 54.12138748168945 54.70988845825195 56.26115798950195 53.82136917114258 57.83638000488281 52.24062728881836 C 59.41756820678711 50.66413879394531 60.30626678466797 48.52312850952148 60.30626678466797 46.29029846191406 C 60.30626678466797 44.05747985839844 59.41756820678711 41.91646575927734 57.83638000488281 40.3399658203125 C 56.18912887573242 38.69271087646484 54.03945922851562 37.87093734741211 51.88978576660156 37.87093734741211 L 51.88978576660156 37.87841033935547 C 49.65914154052734 37.87656021118164 47.51773834228516 38.76573944091797 45.94318771362305 40.34745788574219 C 44.36198806762695 41.92242813110352 43.47315979003906 44.06228637695312 43.47315979003906 46.29404830932617 C 43.47315979003906 48.52579879760742 44.36198806762695 50.66566848754883 45.94318771362305 52.24063873291016 C 47.51839828491211 53.82136917114258 49.65816879272461 54.70988845825195 51.88978576660156 54.70988845825195 Z M 47.97892761230469 40.50058746337891 L 55.46072769165039 40.50058746337891 L 55.46072769165039 42.41307067871094 L 52.88897705078125 42.41307067871094 C 53.05183792114258 42.70653533935547 53.17433929443359 43.02064895629883 53.25316619873047 43.34688568115234 L 55.46258926391602 43.34688568115234 L 55.46258926391602 45.21453857421875 L 53.24008941650391 45.21453857421875 C 53.08880615234375 45.80844879150391 52.81052780151367 46.376220703125 52.36416625976562 46.84499740600586 C 51.98690795898438 47.24093627929688 51.49385070800781 47.54536819458008 50.92607879638672 47.74893951416016 L 54.76036834716797 51.48049926757812 L 53.45861053466797 52.81959915161133 L 48.52240753173828 48.01600646972656 L 47.97892761230469 48.01600646972656 L 47.97892761230469 46.14835739135742 L 49.41701889038086 46.14835739135742 C 50.20702743530273 46.14835739135742 50.68515014648438 45.89995574951172 51.01012802124023 45.55632019042969 C 51.10536956787109 45.45732879638672 51.15765762329102 45.33219909667969 51.22676849365234 45.21453857421875 L 47.99012756347656 45.21453857421875 L 47.99012756347656 43.34688568115234 L 51.2529182434082 43.34688568115234 C 51.17821884155273 43.21241760253906 51.11656951904297 43.07046890258789 51.01012802124023 42.96027755737305 C 50.73056793212891 42.66860961914062 50.36325073242188 42.47641754150391 49.96424102783203 42.41305541992188 L 47.99013900756836 42.41305541992188 L 47.99013900756836 42.36449813842773 L 47.97892761230469 42.36449813842773 L 47.97892761230469 40.50058746337891 Z M 39.9744873046875 41.14926910400391 C 40.40995788574219 41.14926910400391 40.79077911376953 41.45198059082031 40.88576889038086 41.88142776489258 C 40.98429870605469 42.32689666748047 40.74652099609375 42.77835083007812 40.32342910766602 42.94907760620117 L 34.87735748291016 45.27989959716797 C 34.40290069580078 45.48257446289062 33.85393905639648 45.26225280761719 33.65124893188477 44.78776550292969 C 33.44857025146484 44.31328582763672 33.66889953613281 43.76435089111328 34.14337921142578 43.56166839599609 L 39.58944702148438 41.23083877563477 C 39.69552612304688 41.18338775634766 39.80954742431641 41.15615081787109 39.92562866210938 41.15052795410156 L 39.92562866210938 41.15053558349609 C 39.94200897216797 41.14968872070312 39.95824432373047 41.14926910400391 39.9744873046875 41.14926910400391 Z" stroke="none" fill="#000" />
                        </g>
                      </svg>
                      <span>Cash On Delivery</span>
                    </a>
                  </li>
                </ul>
                <div className="payment-tabs-contents tabs-contents">
                  <div className="tab-content is-active" id="tab-upi">
                    <h3 className="tab-content-title">Pay using UPI ID</h3>
                    <div className="payment-tab-content">
                      <form className="form payment-form">
                        <div className="payment-card form-field">
                          <label htmlFor="upi-card-number" id="upi-card-label" className="form-label" />
                          <div className="upi-verify">
                            <input id="upi-card-number" type="tel" className="form-input checkout" inputMode="text" name="upiCardNumber" placeholder="Enter your UPI ID"  />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="tab-content " id="tab-card">
                    <h3 className="tab-content-title">Pay using Credit/Debit Card</h3>       
                    <div className="payment-tab-content ">
                      <form className="juspay_inline_form" id="payment_form">
                        <input type="hidden" className="merchant_id" defaultValue="kapiva" />
                        <input type="hidden" className="order_id" defaultValue={141839447800} />
                        <div className="card_number_div" />
                        <div className="card_exp_month_div" />
                        <div className="card_exp_year_div" />
                        <div className="security_code_div" />
                        <div className="name_on_card_div" />
                        <input type="hidden" className="redirect" defaultValue="true" />
                        <input type="hidden" className="payment_channel" defaultValue="WEB" />
                      </form>
                    </div>
                  </div>
                  <div className="tab-content " id="tab-wallets">
                    <h3 className="tab-content-title">Wallets</h3>                    
                    <div className="payment-tab-content ">
                      <div className="paymemnt-options" id="wallet_options">
                        <div className="pay-card">
                          <div className="pay-img">
                            <img src="https://cdn11.bigcommerce.com/s-ad1xf4xgb0/images/stencil/original/image-manager/bank-1.png" alt="paytm" />
                          </div>
                          <div className="pay-title">
                            <article>Paytm</article>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content " id="tab-netbanking">                    
                    <h3 className="tab-content-title">Netbanking</h3>
                    <div className="payment-tab-content ">
                      <div>
                        <div className="main-banks">
                          <div className="pay-card nb-btn-main" id="main_NB_SBI">
                            <div className="pay-img">
                              <img src="https://assets.juspay.in/hyper/images/internalPP/ic_bank_508548.png" alt="paytm" />
                            </div>
                            <div className="pay-title">
                              <article>SBI</article>
                            </div>
                          </div>
                          <div className="pay-card nb-btn-main" id="main_NB_HDFC">
                            <div className="pay-img">
                              <img src="https://assets.juspay.in/hyper/images/internalPP/ic_bank_607152.png" alt="paytm" />
                            </div>
                            <div className="pay-title">
                              <article>HDFC</article>
                            </div>
                          </div>
                          <div className="pay-card nb-btn-main" id="main_NB_ICICI">
                            <div className="pay-img">
                              <img src="https://assets.juspay.in/hyper/images/internalPP/ic_bank_508534.png" alt="paytm" />
                            </div>
                            <div className="pay-title">
                              <article>ICICI</article>
                            </div>
                          </div>
                        </div>
                        <div>
                          <form className="search-banks form">
                            <input id="search_banks" type="text" className="form-input " placeholder="Search banks" />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content no-content is-active" id="tab-cred">
                  </div>
                  <div className="tab-content no-content is-active" id="tab-cash">
                  </div>
                </div>
              </div>
            </div>
            <div className="totalMainBottom">
              {/* total payment */}
              <div className="totalMainHead">
                <span className="sub-totalloader" style={{display: 'none'}}><span className="checkouttotalloader" /></span>
                <div className="totalOffer">
                  <p className="offerText" id="offer_show">Pay online to get extra 5% upto Rs. 200</p>
                  <p className="offerText hide" id="fielderror">Please provide a valid <span>contact number</span> to proceed</p>
                </div>
                <div className="editeMessageError">
                  <div className="messagePrice for-mob-payemnt">
                    <div className="sticky-mobile-payment">
                      <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14.72" height="8.489" viewBox="0 0 14.72 8.489">
                          <path id="Path_8420" data-name="Path 8420" d="M361.349,4535l-7.16,7.1-6.84-7.43" transform="translate(361.701 4542.817) rotate(180)" fill="none" stroke="#80a03c" strokeWidth={1} />
                        </svg>
                        pay using: <span /></button>
                    </div>
                    <div className="final-checkout-btn">
                      <button className="errrorText hide" id="place_order_error">Please fill your address details to proceed</button>
                      <button className="errrorText hide contact" id="place_order_contact_error">Please check your <span> contact </span> details</button>
                      <button className="priceTotal errrorText active show" id="place_order">PLACE ORDER<span className="colon">:</span><span className="discountPrice">₹1,181</span><span className="orignalPrice" id="orignalPriceOrder">995</span></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-info">
              <div className="info-list">
                <p>100% SECURE PAYMENTS</p>
                <div className="pay-card">
                  <div className="card">                    
                    <svg xmlns="http://www.w3.org/2000/svg" width={149} height={60} viewBox="0 0 149 60">
                      <g id="Group_955" data-name="Group 955" transform="translate(0)">
                        <g id="Rectangle_849" data-name="Rectangle 849" transform="translate(0)" fill="#fff" stroke="#868686" strokeWidth="0.14">
                          <rect width={149} height={60} rx={5} stroke="none" />
                          <rect x="0.07" y="0.07" width="148.86" height="59.86" rx="4.93" fill="none" />
                        </g>
                        <g id="Group_937" data-name="Group 937" transform="translate(15.925 14.155)">
                          <path id="Path_8434" data-name="Path 8434" d="M223.507,287.851c-.479-.047-.96-.079-1.436-.142a15.943,15.943,0,0,1-13.4-11.763,15.334,15.334,0,0,1-.466-5.249,15.934,15.934,0,0,1,26.031-11.032,15.281,15.281,0,0,1,5.6,9.926,15.45,15.45,0,0,1-3.624,12.637,15.607,15.607,0,0,1-9.934,5.465c-.5.076-1.007.106-1.51.158Zm-2.934-21.1h-3.859c-.343,0-.465.1-.493.442a4.331,4.331,0,0,0,.019.987,1.134,1.134,0,0,0,1.132.994c.3.006.592,0,.888,0,.37,0,.37,0,.37.364v4.133a6.25,6.25,0,0,0,.213,1.628,3.914,3.914,0,0,0,2.758,2.982,6.2,6.2,0,0,0,3.745-.123c.29-.1.295-.1.3.212,0,.854-.006,1.707,0,2.561a1.366,1.366,0,0,0,1.388,1.384c.406,0,.813.007,1.219,0a.518.518,0,0,0,.529-.53V269.542c0-.454,0-.454.442-.454h1.548c.382,0,.493-.117.493-.506v-.761a1.111,1.111,0,0,0-1.17-1.157q-.914-.008-1.827,0a.494.494,0,0,1-.421-.186c-.228-.271-.465-.537-.7-.8q-1.991-2.3-3.991-4.594a1.639,1.639,0,0,0-1.308-.617,7.581,7.581,0,0,0-2.312.625.336.336,0,0,0-.094.555,2.447,2.447,0,0,0,.18.179q2.457,2.333,4.916,4.663c.059.056.168.109.141.194-.035.111-.159.065-.247.065h-3.859M325.38,277.1a.78.78,0,0,1-.746.376c-1.684-.012-3.368,0-5.052-.011-.247,0-.358.057-.348.319.009.192-.042.386-.044.58a1.527,1.527,0,0,0,1.521,1.623,5.39,5.39,0,0,0,2.672-.585c.606-.28.725-.247,1.1.321a1.426,1.426,0,0,1,.311,1.324,1.233,1.233,0,0,1-.588.7,7.231,7.231,0,0,1-4.108.755,5.212,5.212,0,0,1-1.945-.534,3.9,3.9,0,0,1-2.209-3.51c-.057-1.308-.03-2.62-.008-3.93a4.11,4.11,0,0,1,3.824-4.134,7.1,7.1,0,0,1,2.423.083,3.839,3.839,0,0,1,3.154,3.432c.01.065.028.131.043.2Zm-4.555-1.532h1.421c.172,0,.247-.062.247-.237v-.811a1.49,1.49,0,0,0-1.38-1.549,1.537,1.537,0,0,0-1.915,1.578c0,.247.009.493,0,.74s.083.291.3.285c.448-.011.9,0,1.345,0m-70.4,4.373v1.775a.579.579,0,0,1-.617.649q-.951.022-1.9,0a.585.585,0,0,1-.617-.577,2.249,2.249,0,0,1-.016-.3q0-6.743,0-13.486c0-.123.011-.237.022-.354a.78.78,0,0,1,.576-.7,12.481,12.481,0,0,1,4.283-.7,5.811,5.811,0,0,1,3.207.972,4.324,4.324,0,0,1,1.936,3.141,14.143,14.143,0,0,1-.021,3.966,4.589,4.589,0,0,1-4.024,3.8,5.52,5.52,0,0,1-2.605-.2c-.189-.069-.218.016-.218.175v1.85m.1-7.818c0,.878.007,1.755,0,2.634a.394.394,0,0,0,.276.417,2.992,2.992,0,0,0,1.443.189,2.008,2.008,0,0,0,1.974-2.063,14.546,14.546,0,0,0-.093-2.568,1.9,1.9,0,0,0-1.07-1.526,3.153,3.153,0,0,0-2.324-.073c-.178.054-.2.173-.2.331v2.66m54.163,2.586v-6.721c0-.7.158-.912.82-1.12a12.343,12.343,0,0,1,3.992-.629,5.712,5.712,0,0,1,3.59,1.206,4.363,4.363,0,0,1,1.63,2.944,14.1,14.1,0,0,1,0,3.793,4.506,4.506,0,0,1-3.738,3.877,5.3,5.3,0,0,1-2.856-.123c-.225-.079-.276-.019-.275.2.007,1.158,0,2.317,0,3.474,0,.544-.209.759-.74.761s-1.083,0-1.625,0-.783-.229-.79-.787v-6.879Zm3.259-2.591c0,.887.006,1.775,0,2.662a.37.37,0,0,0,.247.385,2.932,2.932,0,0,0,1.442.2,2.02,2.02,0,0,0,2-2.07v-1.7a4.916,4.916,0,0,0-.218-1.311,1.616,1.616,0,0,0-.873-1.036,3.166,3.166,0,0,0-2.323-.144.326.326,0,0,0-.28.37c.012.88,0,1.758,0,2.638m-48.924,2.142V266.9c0-.556.2-.764.766-.76a7.273,7.273,0,0,1,1.216.033,1.346,1.346,0,0,1,1.144,1.19c.083.818.017,1.64.033,2.459,0,.22.007.439,0,.659-.007.186.041.265.247.207a8.574,8.574,0,0,1,1.7-.265,3.973,3.973,0,0,1,4.355,3.207,6.729,6.729,0,0,1,.168,1.48v6.518c0,.51-.215.73-.719.74q-.484.007-.965,0a1.471,1.471,0,0,1-1.48-1.49q-.007-2.765,0-5.528a3.615,3.615,0,0,0-.123-1.079,1.377,1.377,0,0,0-1.2-1.019,4.5,4.5,0,0,0-1.684.113c-.234.053-.307.169-.306.406q.011,3.8,0,7.608v.3a.635.635,0,0,1-.711.683q-.876.011-1.752,0c-.477,0-.693-.229-.693-.707v-7.4m11.288,2.08c.028-.591-.052-1.357.041-2.111a3.926,3.926,0,0,1,2.994-3.541,6.567,6.567,0,0,1,4.333.139,3.891,3.891,0,0,1,2.6,3.578c.1,1.264.047,2.534.033,3.8a4.17,4.17,0,0,1-1.416,3.291,4.9,4.9,0,0,1-2.641,1.073,6.751,6.751,0,0,1-3.105-.289,4.093,4.093,0,0,1-2.837-3.921c-.009-.617,0-1.234,0-2.019m3.323.031c0,.684-.009,1.234,0,1.781a1.485,1.485,0,0,0,1.41,1.645c1.11.142,2.074-.247,2.108-1.6.028-1.123.02-2.246,0-3.37a1.566,1.566,0,0,0-1.3-1.662,3.043,3.043,0,0,0-.734-.023,1.452,1.452,0,0,0-1.443,1.335c-.088.674-.014,1.351-.042,1.891m25.94,1.089c-.872,0-1.743.007-2.615,0-.22,0-.311.081-.318.287a5.15,5.15,0,0,0-.047.864,1.551,1.551,0,0,0,1.49,1.374,5.13,5.13,0,0,0,2.649-.558c.661-.316.793-.279,1.187.348a1.348,1.348,0,0,1,.247,1.357,1.069,1.069,0,0,1-.459.558,6.743,6.743,0,0,1-6.224.232,3.652,3.652,0,0,1-2.112-3.19,32.461,32.461,0,0,1,0-4.583,3.927,3.927,0,0,1,2.961-3.568,6.4,6.4,0,0,1,3.606-.009,3.726,3.726,0,0,1,2.785,3.207,17.261,17.261,0,0,1,.086,3.062c-.009.433-.247.623-.695.624h-2.541m-1.332-1.9H299.7c.158,0,.234-.052.229-.22-.007-.262.007-.524-.006-.785a1.664,1.664,0,0,0-3.3-.242c-.047.337-.012.675-.027,1.012-.009.178.069.237.241.234.474-.006.946,0,1.42,0m-16.1,1.183v-4.742a.82.82,0,0,1,.682-.924,12.262,12.262,0,0,1,3.934-.672,5.239,5.239,0,0,1,3.578,1.11,4.242,4.242,0,0,1,1.374,2.694,6.636,6.636,0,0,1,.056,1.036v6.366c0,.544-.2.751-.753.748a7.723,7.723,0,0,1-1.241-.03,1.284,1.284,0,0,1-1.135-1.313c-.007-1.8,0-3.6,0-5.4a6.024,6.024,0,0,0-.093-1.21,1.473,1.473,0,0,0-1.488-1.269,7.53,7.53,0,0,0-1.441.085c-.247.038-.315.147-.313.384q.009,3.879,0,7.76v.3a.617.617,0,0,1-.617.593c-.651.012-1.3.014-1.955,0a.582.582,0,0,1-.59-.65V276.75" transform="translate(-208.151 -256.001)" fill="#5f259f" />
                          <path id="Path_8435" data-name="Path 8435" d="M321.713,365.916c0,.939-.006,1.876,0,2.814a.37.37,0,0,1-.285.407,4.516,4.516,0,0,1-1.876.227,1.813,1.813,0,0,1-1.774-1.834c-.084-1-.022-2.01-.04-3.015-.007-.493,0-.98,0-1.469,0-.2.067-.286.28-.285,1.134.007,2.267.01,3.4,0,.247,0,.3.1.3.318-.007.946,0,1.892,0,2.837" transform="translate(-304.214 -349.59)" fill="#5f259f" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="card">                    
                    <svg xmlns="http://www.w3.org/2000/svg" width={149} height={60} viewBox="0 0 149 60">
                      <g id="Group_955" data-name="Group 955" transform="translate(0)">
                        <g id="Rectangle_849" data-name="Rectangle 849" transform="translate(0)" fill="#fff" stroke="#868686" strokeWidth="0.14">
                          <rect width={149} height={60} rx={5} stroke="none" />
                          <rect x="0.07" y="0.07" width="148.86" height="59.86" rx="4.93" fill="none" />
                        </g>
                        <g id="Group_937" data-name="Group 937" transform="translate(15.925 14.155)">
                          <path id="Path_8434" data-name="Path 8434" d="M223.507,287.851c-.479-.047-.96-.079-1.436-.142a15.943,15.943,0,0,1-13.4-11.763,15.334,15.334,0,0,1-.466-5.249,15.934,15.934,0,0,1,26.031-11.032,15.281,15.281,0,0,1,5.6,9.926,15.45,15.45,0,0,1-3.624,12.637,15.607,15.607,0,0,1-9.934,5.465c-.5.076-1.007.106-1.51.158Zm-2.934-21.1h-3.859c-.343,0-.465.1-.493.442a4.331,4.331,0,0,0,.019.987,1.134,1.134,0,0,0,1.132.994c.3.006.592,0,.888,0,.37,0,.37,0,.37.364v4.133a6.25,6.25,0,0,0,.213,1.628,3.914,3.914,0,0,0,2.758,2.982,6.2,6.2,0,0,0,3.745-.123c.29-.1.295-.1.3.212,0,.854-.006,1.707,0,2.561a1.366,1.366,0,0,0,1.388,1.384c.406,0,.813.007,1.219,0a.518.518,0,0,0,.529-.53V269.542c0-.454,0-.454.442-.454h1.548c.382,0,.493-.117.493-.506v-.761a1.111,1.111,0,0,0-1.17-1.157q-.914-.008-1.827,0a.494.494,0,0,1-.421-.186c-.228-.271-.465-.537-.7-.8q-1.991-2.3-3.991-4.594a1.639,1.639,0,0,0-1.308-.617,7.581,7.581,0,0,0-2.312.625.336.336,0,0,0-.094.555,2.447,2.447,0,0,0,.18.179q2.457,2.333,4.916,4.663c.059.056.168.109.141.194-.035.111-.159.065-.247.065h-3.859M325.38,277.1a.78.78,0,0,1-.746.376c-1.684-.012-3.368,0-5.052-.011-.247,0-.358.057-.348.319.009.192-.042.386-.044.58a1.527,1.527,0,0,0,1.521,1.623,5.39,5.39,0,0,0,2.672-.585c.606-.28.725-.247,1.1.321a1.426,1.426,0,0,1,.311,1.324,1.233,1.233,0,0,1-.588.7,7.231,7.231,0,0,1-4.108.755,5.212,5.212,0,0,1-1.945-.534,3.9,3.9,0,0,1-2.209-3.51c-.057-1.308-.03-2.62-.008-3.93a4.11,4.11,0,0,1,3.824-4.134,7.1,7.1,0,0,1,2.423.083,3.839,3.839,0,0,1,3.154,3.432c.01.065.028.131.043.2Zm-4.555-1.532h1.421c.172,0,.247-.062.247-.237v-.811a1.49,1.49,0,0,0-1.38-1.549,1.537,1.537,0,0,0-1.915,1.578c0,.247.009.493,0,.74s.083.291.3.285c.448-.011.9,0,1.345,0m-70.4,4.373v1.775a.579.579,0,0,1-.617.649q-.951.022-1.9,0a.585.585,0,0,1-.617-.577,2.249,2.249,0,0,1-.016-.3q0-6.743,0-13.486c0-.123.011-.237.022-.354a.78.78,0,0,1,.576-.7,12.481,12.481,0,0,1,4.283-.7,5.811,5.811,0,0,1,3.207.972,4.324,4.324,0,0,1,1.936,3.141,14.143,14.143,0,0,1-.021,3.966,4.589,4.589,0,0,1-4.024,3.8,5.52,5.52,0,0,1-2.605-.2c-.189-.069-.218.016-.218.175v1.85m.1-7.818c0,.878.007,1.755,0,2.634a.394.394,0,0,0,.276.417,2.992,2.992,0,0,0,1.443.189,2.008,2.008,0,0,0,1.974-2.063,14.546,14.546,0,0,0-.093-2.568,1.9,1.9,0,0,0-1.07-1.526,3.153,3.153,0,0,0-2.324-.073c-.178.054-.2.173-.2.331v2.66m54.163,2.586v-6.721c0-.7.158-.912.82-1.12a12.343,12.343,0,0,1,3.992-.629,5.712,5.712,0,0,1,3.59,1.206,4.363,4.363,0,0,1,1.63,2.944,14.1,14.1,0,0,1,0,3.793,4.506,4.506,0,0,1-3.738,3.877,5.3,5.3,0,0,1-2.856-.123c-.225-.079-.276-.019-.275.2.007,1.158,0,2.317,0,3.474,0,.544-.209.759-.74.761s-1.083,0-1.625,0-.783-.229-.79-.787v-6.879Zm3.259-2.591c0,.887.006,1.775,0,2.662a.37.37,0,0,0,.247.385,2.932,2.932,0,0,0,1.442.2,2.02,2.02,0,0,0,2-2.07v-1.7a4.916,4.916,0,0,0-.218-1.311,1.616,1.616,0,0,0-.873-1.036,3.166,3.166,0,0,0-2.323-.144.326.326,0,0,0-.28.37c.012.88,0,1.758,0,2.638m-48.924,2.142V266.9c0-.556.2-.764.766-.76a7.273,7.273,0,0,1,1.216.033,1.346,1.346,0,0,1,1.144,1.19c.083.818.017,1.64.033,2.459,0,.22.007.439,0,.659-.007.186.041.265.247.207a8.574,8.574,0,0,1,1.7-.265,3.973,3.973,0,0,1,4.355,3.207,6.729,6.729,0,0,1,.168,1.48v6.518c0,.51-.215.73-.719.74q-.484.007-.965,0a1.471,1.471,0,0,1-1.48-1.49q-.007-2.765,0-5.528a3.615,3.615,0,0,0-.123-1.079,1.377,1.377,0,0,0-1.2-1.019,4.5,4.5,0,0,0-1.684.113c-.234.053-.307.169-.306.406q.011,3.8,0,7.608v.3a.635.635,0,0,1-.711.683q-.876.011-1.752,0c-.477,0-.693-.229-.693-.707v-7.4m11.288,2.08c.028-.591-.052-1.357.041-2.111a3.926,3.926,0,0,1,2.994-3.541,6.567,6.567,0,0,1,4.333.139,3.891,3.891,0,0,1,2.6,3.578c.1,1.264.047,2.534.033,3.8a4.17,4.17,0,0,1-1.416,3.291,4.9,4.9,0,0,1-2.641,1.073,6.751,6.751,0,0,1-3.105-.289,4.093,4.093,0,0,1-2.837-3.921c-.009-.617,0-1.234,0-2.019m3.323.031c0,.684-.009,1.234,0,1.781a1.485,1.485,0,0,0,1.41,1.645c1.11.142,2.074-.247,2.108-1.6.028-1.123.02-2.246,0-3.37a1.566,1.566,0,0,0-1.3-1.662,3.043,3.043,0,0,0-.734-.023,1.452,1.452,0,0,0-1.443,1.335c-.088.674-.014,1.351-.042,1.891m25.94,1.089c-.872,0-1.743.007-2.615,0-.22,0-.311.081-.318.287a5.15,5.15,0,0,0-.047.864,1.551,1.551,0,0,0,1.49,1.374,5.13,5.13,0,0,0,2.649-.558c.661-.316.793-.279,1.187.348a1.348,1.348,0,0,1,.247,1.357,1.069,1.069,0,0,1-.459.558,6.743,6.743,0,0,1-6.224.232,3.652,3.652,0,0,1-2.112-3.19,32.461,32.461,0,0,1,0-4.583,3.927,3.927,0,0,1,2.961-3.568,6.4,6.4,0,0,1,3.606-.009,3.726,3.726,0,0,1,2.785,3.207,17.261,17.261,0,0,1,.086,3.062c-.009.433-.247.623-.695.624h-2.541m-1.332-1.9H299.7c.158,0,.234-.052.229-.22-.007-.262.007-.524-.006-.785a1.664,1.664,0,0,0-3.3-.242c-.047.337-.012.675-.027,1.012-.009.178.069.237.241.234.474-.006.946,0,1.42,0m-16.1,1.183v-4.742a.82.82,0,0,1,.682-.924,12.262,12.262,0,0,1,3.934-.672,5.239,5.239,0,0,1,3.578,1.11,4.242,4.242,0,0,1,1.374,2.694,6.636,6.636,0,0,1,.056,1.036v6.366c0,.544-.2.751-.753.748a7.723,7.723,0,0,1-1.241-.03,1.284,1.284,0,0,1-1.135-1.313c-.007-1.8,0-3.6,0-5.4a6.024,6.024,0,0,0-.093-1.21,1.473,1.473,0,0,0-1.488-1.269,7.53,7.53,0,0,0-1.441.085c-.247.038-.315.147-.313.384q.009,3.879,0,7.76v.3a.617.617,0,0,1-.617.593c-.651.012-1.3.014-1.955,0a.582.582,0,0,1-.59-.65V276.75" transform="translate(-208.151 -256.001)" fill="#5f259f" />
                          <path id="Path_8435" data-name="Path 8435" d="M321.713,365.916c0,.939-.006,1.876,0,2.814a.37.37,0,0,1-.285.407,4.516,4.516,0,0,1-1.876.227,1.813,1.813,0,0,1-1.774-1.834c-.084-1-.022-2.01-.04-3.015-.007-.493,0-.98,0-1.469,0-.2.067-.286.28-.285,1.134.007,2.267.01,3.4,0,.247,0,.3.1.3.318-.007.946,0,1.892,0,2.837" transform="translate(-304.214 -349.59)" fill="#5f259f" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="card">                    
                    <svg xmlns="http://www.w3.org/2000/svg" width={149} height={60} viewBox="0 0 149 60">
                      <g id="Group_953" data-name="Group 953" transform="translate(-0.166)">
                        <g id="Rectangle_851" data-name="Rectangle 851" transform="translate(0.166)" fill="#fff" stroke="#868686" strokeWidth="0.14">
                          <rect width={149} height={60} rx={5} stroke="none" />
                          <rect x="0.07" y="0.07" width="148.86" height="59.86" rx="4.93" fill="none" />
                        </g>
                        <g id="_4b23e6da7925ac09c76b64539cb41807" data-name="4b23e6da7925ac09c76b64539cb41807" transform="translate(24.516 14.156)">
                          <path id="Path_8429" data-name="Path 8429" d="M202.9,234.281l.818-.654a6.03,6.03,0,0,1,8.911.715c.245.286.368.306.613.061.163-.184.347-.327.511-.511a6.187,6.187,0,0,1,10.587,4.392c.041,5.863.02,11.706.02,17.57a3.134,3.134,0,0,1-3.352,3.391c-.818,0-1.635-.061-2.453.02-.838.082-1.083-.184-1.083-1.062.041-5.72.02-11.441.02-17.161v-.715c-.02-1.328-.552-1.88-1.819-1.941a1.865,1.865,0,0,0-2.064,1.8c-.02.266,0,.552,0,.817v14.812a3.1,3.1,0,0,1-3.413,3.412c-1.1-.02-2.6.49-3.229-.225-.552-.613-.184-2.063-.184-3.146v-15.22c0-1.8-1.165-2.717-2.677-2.1a2.029,2.029,0,0,0-1.247,2.125c.02,4.74,0,9.459,0,14.2v1.124a3.122,3.122,0,0,1-3.291,3.248c-.818.02-1.635-.061-2.453.02-.879.082-1.145-.163-1.124-1.1.041-8.029.02-16.058.02-24.107,0-.347.02-.674,0-1.021-.041-.449.143-.592.593-.592,1.88.02,3.74.02,5.621,0,.47,0,.695.123.654.633A8.476,8.476,0,0,0,202.9,234.281Z" transform="translate(-125.583 -227.553)" fill="#02b9ef" />
                          <path id="Path_8430" data-name="Path 8430" d="M-45.374,246.927v8.38c-.02,3.638-1.921,5.518-5.559,5.539-1.594,0-3.209.02-4.8,0A5.544,5.544,0,0,1-61.5,255.43a65.68,65.68,0,0,1-.02-6.949,5.884,5.884,0,0,1,6.05-5.682c.879-.02,1.778,0,2.657,0,.858-.02,1.185-.511,1.165-1.329,0-.818-.368-1.185-1.185-1.145q-1.38.031-2.759,0c-2.248-.041-3.495-1.267-3.475-3.475,0-.9-.409-2.105.184-2.637.511-.45,1.676-.163,2.555-.163,2.289-.02,4.558,0,6.847,0a3.916,3.916,0,0,1,4.108,4.108C-45.354,241.061-45.374,244-45.374,246.927Zm-6.254,4.64v-1.022c0-2.085,0-2.085-2.085-2a1.51,1.51,0,0,0-1.635,1.655c-.02.858-.02,1.7,0,2.555.02,1.472.674,1.86,2.8,1.921,1.574.041.777-1.063.92-1.676A11.139,11.139,0,0,0-51.628,251.567Z" transform="translate(79.394 -229.132)" fill="#06306f" />
                          <path id="Path_8431" data-name="Path 8431" d="M43.756,245.035c0,3.127.041,6.275-.02,9.4-.041,2.412-.613,4.6-2.943,5.886a6.569,6.569,0,0,1-3.025.818c-2.35.041-4.7,0-7.051.041-.572,0-.695-.2-.674-.715.041-.858-.02-1.7.02-2.555a2.98,2.98,0,0,1,2.923-2.943c1.063-.041,2.105-.02,3.168,0,.858,0,1.329-.347,1.329-1.267,0-.94-.45-1.267-1.308-1.288a16.631,16.631,0,0,1-4.272-.245,5.694,5.694,0,0,1-4.272-5.253c-.123-3.985-.041-7.971-.061-11.957,0-.45.143-.593.593-.572,1.676.02,3.332.041,5.007,0,.736-.02.634.388.634.838v8.993c0,1.308.613,2,1.758,2.044,1.349.041,1.942-.511,1.942-1.88,0-3.025.02-6.07-.02-9.1,0-.715.184-.92.9-.9,1.492.061,3,.082,4.5,0,.818-.041.94.266.92.981C43.736,238.576,43.756,241.805,43.756,245.035Z" transform="translate(8.446 -229.467)" fill="#06306f" />
                          <path id="Path_8432" data-name="Path 8432" d="M-148.545,249.431V239.416c0-3.27,2-5.314,5.294-5.273a35.414,35.414,0,0,1,6.418.164,5.334,5.334,0,0,1,4.456,5.437c.02,2.964,0,5.927,0,8.891,0,3.72-2.187,5.989-5.907,6.091-1.124.041-2.248.02-3.372,0-.511-.02-.736.143-.715.695.041.817.02,1.635,0,2.453a2.985,2.985,0,0,1-3.025,3.045c-1.022.02-2.31.429-2.964-.164-.613-.552-.163-1.86-.184-2.841C-148.565,255.092-148.545,252.251-148.545,249.431Zm6.172-5.007v1.942c0,2.31,0,2.31,2.31,2.105a1.418,1.418,0,0,0,1.492-1.574c.02-1.145-.041-2.31.02-3.454.123-3.311-.491-2.984-3.188-3-.49,0-.654.143-.654.634C-142.352,242.175-142.372,243.3-142.372,244.423Z" transform="translate(148.685 -229.223)" fill="#06306f" />
                          <path id="Path_8433" data-name="Path 8433" d="M120.27,230.529c0-2.717-.02-5.455.02-8.173,0-.633-.143-.9-.838-.879-.92.041-2.146.306-2.657-.143-.634-.593-.143-1.859-.225-2.84v-.2c0-.96-.307-2.084.1-2.8s1.656-.266,2.534-.49a7.405,7.405,0,0,0,4.108-2.84,4.678,4.678,0,0,1,2.841-1.839c.634-.123,1.022-.041.981.776-.061,1.144,0,2.309-.02,3.473-.02.49.163.654.654.633.818-.02,1.635.02,2.453-.02.491-.02.654.163.634.654-.02,1.675-.02,3.33,0,5.006,0,.47-.123.715-.634.654a1.537,1.537,0,0,0-.307,0c-.9.082-2.146-.409-2.616.2-.45.572-.164,1.757-.164,2.676,0,5.557-.02,11.094.02,16.651,0,.776-.2,1.022-.981.96-.736-.061-1.492,0-2.248-.02a3.585,3.585,0,0,1-3.659-3.78Z" transform="translate(-62.291 -210.276)" fill="#02b9ef" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="card">                    
                    <svg xmlns="http://www.w3.org/2000/svg" width={149} height={60} viewBox="0 0 149 60">
                      <g id="Group_952" data-name="Group 952" transform="translate(0.227)">
                        <g id="Rectangle_852" data-name="Rectangle 852" transform="translate(-0.227)" fill="#fff" stroke="#868686" strokeWidth="0.14">
                          <rect width={149} height={60} rx={5} stroke="none" />
                          <rect x="0.07" y="0.07" width="148.86" height="59.86" rx="4.93" fill="none" />
                        </g>
                        <g id="b2f8f208b4147c4175ff758979f8c445" transform="translate(30.221 14.156)">
                          <path id="Path_8425" data-name="Path 8425" d="M92.072,339.271h.675l-.632,2.621a1.111,1.111,0,0,0,.054.877.8.8,0,0,0,.718.289,1.278,1.278,0,0,0,.857-.289,1.646,1.646,0,0,0,.471-.877l.632-2.621h.685l-.643,2.685a2.282,2.282,0,0,1-.75,1.305,2.157,2.157,0,0,1-1.4.439,1.4,1.4,0,0,1-1.189-.428,1.556,1.556,0,0,1-.118-1.305Zm3.363,4.311,1.071-4.483,2.035,2.632c.054.075.107.15.161.235s.107.182.171.289l.718-2.985h.632l-1.071,4.472-2.078-2.685-.161-.225a1.152,1.152,0,0,1-.129-.257l-.718,3h-.632Zm4.734,0,1.028-4.311h.685l-1.028,4.311Zm1.66,0,1.028-4.311H105.2l-.139.6H103.4l-.257,1.07h1.66l-.15.61H103l-.482,2.022h-.685Zm3.106,0,1.028-4.311h.685l-1.028,4.311Zm1.66,0,1.028-4.311h2.346l-.139.6h-1.66l-.257,1.081h1.66l-.15.61h-1.66l-.332,1.391h1.66l-.15.631Zm3.138,0,1.028-4.311h.921a5.308,5.308,0,0,1,1.242.1,1.275,1.275,0,0,1,.568.31,1.361,1.361,0,0,1,.375.728,2.571,2.571,0,0,1-.054,1.016,3.341,3.341,0,0,1-.428,1.016,2.482,2.482,0,0,1-.728.727,2.1,2.1,0,0,1-.707.31,4.777,4.777,0,0,1-1.114.1h-1.1Zm.835-.642h.578a3.2,3.2,0,0,0,.728-.064,1.4,1.4,0,0,0,.461-.214,1.742,1.742,0,0,0,.482-.524,2.35,2.35,0,0,0,.289-.727,1.905,1.905,0,0,0,.054-.717.985.985,0,0,0-.236-.524.724.724,0,0,0-.375-.214,3.189,3.189,0,0,0-.76-.064H111.3Zm6.394-1.294-.461,1.936h-.643l1.028-4.311h1.039a3.13,3.13,0,0,1,.664.054.657.657,0,0,1,.332.171.712.712,0,0,1,.214.407,1.412,1.412,0,0,1-.021.556,1.789,1.789,0,0,1-.246.567,1.471,1.471,0,0,1-.407.407,1.434,1.434,0,0,1-.418.171,3.517,3.517,0,0,1-.685.054h-.4Zm.182-.578h.171a1.743,1.743,0,0,0,.793-.128.668.668,0,0,0,.3-.449.461.461,0,0,0-.086-.481,1.2,1.2,0,0,0-.707-.139h-.171Zm4.295,2.514-.214-1.113h-1.671l-.75,1.113h-.718l3.106-4.483.964,4.483Zm-1.478-1.7h1.167l-.193-.984a1.316,1.316,0,0,1-.021-.214,2.147,2.147,0,0,1-.011-.267,7.144,7.144,0,0,1-.268.492Zm3.181,1.7.471-1.969-.857-2.332h.718l.536,1.466c.011.043.021.086.043.15s.032.128.054.192l.129-.192c.043-.064.086-.118.129-.171l1.253-1.444h.685l-2,2.321-.471,1.969h-.685Zm6.522-2.129c0-.032.011-.128.032-.278.011-.128.021-.225.032-.31-.043.1-.086.192-.139.3a2.35,2.35,0,0,1-.193.3l-1.649,2.3-.536-2.343c-.021-.1-.043-.193-.054-.278a2.25,2.25,0,0,1-.021-.267c-.021.086-.054.182-.086.289a2.394,2.394,0,0,1-.129.31l-.964,2.118h-.632l2.067-4.493.589,2.717a1.9,1.9,0,0,1,.032.214c.011.1.032.225.054.374.075-.128.171-.278.3-.471a.964.964,0,0,0,.075-.118l1.863-2.717-.064,4.493h-.632Zm1.135,2.129,1.028-4.311h2.345l-.139.6h-1.66l-.257,1.081h1.66l-.15.61h-1.66l-.332,1.391h1.66l-.15.631Zm3.127,0L135,339.1l2.035,2.632c.054.075.107.15.161.235s.107.182.171.289l.718-2.985h.632l-1.071,4.472-2.078-2.685-.161-.225a1.153,1.153,0,0,1-.129-.257l-.718,3h-.632Zm6.972-3.723-.889,3.712h-.685l.889-3.712H139.1l.139-.6h2.913l-.139.6H140.9Zm.718,2.856.61-.257a.576.576,0,0,0,.182.439.752.752,0,0,0,.493.15.814.814,0,0,0,.525-.171.778.778,0,0,0,.289-.46q.1-.385-.45-.674a.69.69,0,0,0-.118-.064,2.062,2.062,0,0,1-.771-.631.917.917,0,0,1-.064-.685,1.49,1.49,0,0,1,.557-.856,1.617,1.617,0,0,1,1-.332,1.347,1.347,0,0,1,.739.182.709.709,0,0,1,.311.524l-.6.278a.645.645,0,0,0-.2-.3.521.521,0,0,0-.321-.1.774.774,0,0,0-.471.15.68.68,0,0,0-.257.4c-.064.257.118.5.535.727a.611.611,0,0,0,.075.043,1.741,1.741,0,0,1,.718.578.962.962,0,0,1,.064.706,1.7,1.7,0,0,1-.61.973,1.774,1.774,0,0,1-1.1.364,1.208,1.208,0,0,1-.825-.257A.839.839,0,0,1,141.616,342.716Zm5.044.867,1.028-4.311h.685l-1.028,4.311Zm1.671,0L149.4,339.1l2.035,2.632c.054.075.107.15.161.235s.107.182.171.289l.718-2.985h.632l-1.071,4.472-2.078-2.685-.161-.225a1.151,1.151,0,0,1-.128-.257l-.718,3h-.632Zm6.972-3.723-.889,3.712h-.685l.889-3.712H153.5l.139-.6h2.913l-.139.6H155.3Zm.739,3.723,1.028-4.311h2.356l-.139.6h-1.66l-.257,1.081h1.66l-.15.61h-1.66l-.332,1.391h1.66l-.15.631Zm4.23-1.936-.461,1.926h-.643l1.028-4.312h.953a2.993,2.993,0,0,1,.632.054.7.7,0,0,1,.353.182.736.736,0,0,1,.2.407,1.364,1.364,0,0,1-.021.546,1.575,1.575,0,0,1-.439.813,1.456,1.456,0,0,1-.8.353l.975,1.958h-.771l-.932-1.926Zm.171-.546h.129a1.536,1.536,0,0,0,.75-.128.693.693,0,0,0,.289-.46c.054-.235.032-.407-.075-.5a1.071,1.071,0,0,0-.675-.15h-.129Zm2.024,2.482,1.028-4.311h2.345l-.139.6h-1.66l-.257,1.07h1.66l-.15.61h-1.66l-.482,2.022h-.685Zm5.655,0-.214-1.113h-1.671l-.75,1.113h-.718l3.106-4.483.964,4.483Zm-1.489-1.7H167.8l-.193-.984a1.32,1.32,0,0,1-.021-.214,2.144,2.144,0,0,1-.011-.267,7.153,7.153,0,0,1-.268.492Zm6.662-1.562a1.359,1.359,0,0,0-.525-.374,1.581,1.581,0,0,0-.653-.129,1.882,1.882,0,0,0-1.232.449,2.133,2.133,0,0,0-.718,1.177,1.4,1.4,0,0,0,.15,1.155,1.075,1.075,0,0,0,.953.449,2.009,2.009,0,0,0,.739-.139,3.057,3.057,0,0,0,.75-.406l-.193.792a2.37,2.37,0,0,1-.675.3,2.721,2.721,0,0,1-.728.1,2.148,2.148,0,0,1-.857-.16,1.5,1.5,0,0,1-.61-.481,1.527,1.527,0,0,1-.3-.727,2.168,2.168,0,0,1,.054-.9,2.956,2.956,0,0,1,.375-.888,2.822,2.822,0,0,1,.653-.728,2.742,2.742,0,0,1,.835-.481,2.677,2.677,0,0,1,.91-.16,2.046,2.046,0,0,1,.685.107,1.8,1.8,0,0,1,.568.332l-.182.717Zm.064,3.263,1.028-4.311h2.346l-.139.6h-1.66l-.257,1.081h1.66l-.15.61h-1.66l-.332,1.391h1.66l-.15.631Z" transform="translate(-91.349 -311.915)" fill="#3d3d3c" />
                          <path id="Path_8426" data-name="Path 8426" d="M180.616,108.868h-4.7L182.446,85.3h4.7Zm-2.439-22.83a1.727,1.727,0,0,0-1.508-.674h-25.8l-1.273,4.622h23.472l-1.369,4.932H152.918v-.011h-4.7l-3.894,14.068h4.7l2.61-9.436h21.108a2.975,2.975,0,0,0,1.861-.674,3.134,3.134,0,0,0,1.145-1.669l2.61-9.436a1.914,1.914,0,0,0-.182-1.722Zm-36.588,21.354a2.163,2.163,0,0,1-2.075,1.583H115.3a1.692,1.692,0,0,1-1.476-.674,1.853,1.853,0,0,1-.2-1.669l5.905-21.268h4.7l-5.274,19h18.786l5.274-19h4.7l-6.119,22.028Z" transform="translate(-111.147 -85.3)" fill="#70706e" />
                          <path id="Path_8427" data-name="Path 8427" d="M822.847,85.7l5.938,11.811L816.3,109.322Z" transform="translate(-738.649 -85.657)" fill="#098041" />
                          <path id="Path_8428" data-name="Path 8428" d="M783.758,85.7,789.7,97.511l-12.5,11.811Z" transform="translate(-703.733 -85.657)" fill="#e97626" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="card">                    
                    <svg xmlns="http://www.w3.org/2000/svg" width={149} height={60} viewBox="0 0 149 60">
                      <g id="Group_1007" data-name="Group 1007" transform="translate(-227 -1540)">
                        <g id="Rectangle_862" data-name="Rectangle 862" transform="translate(227 1540)" fill="#fff" stroke="#868686" strokeWidth="0.14">
                          <rect width={149} height={60} rx={5} stroke="none" />
                          <rect x="0.07" y="0.07" width="148.86" height="59.86" rx="4.93" fill="none" />
                        </g>
                        <g id="Visa_credit_card" data-name="Visa credit card" transform="translate(250.003 1554.011)">
                          <path id="Path_8443" data-name="Path 8443" d="M20.677,38.871,17.852,25.212A3.344,3.344,0,0,0,14.174,22.7H1.1l-.1.652C11.165,25.8,17.886,31.716,20.677,38.871Zm9.5-15.866L21.915,44.087l-.853-3.176A33.052,33.052,0,0,0,9.359,28.1L16.9,53.867H25.81L39.084,23.005Zm12.338,0L37.245,53.934H45.6l5.283-30.929Zm55.321,0H91.279a4.18,4.18,0,0,0-4.414,2.575L74.41,53.9h8.844s1.438-3.812,1.772-4.648H95.81c.251,1.07,1.02,4.614,1.02,4.614h7.824ZM87.45,42.934c.7-1.772,3.344-8.643,3.344-8.643s.7-1.772,1.12-2.942l.585,2.658,1.939,8.928Zm-19.577-7.54c-2.926-1.421-4.731-2.391-4.715-3.829s1.521-2.658,4.815-2.658a15.18,15.18,0,0,1,6.3,1.187l.769.351,1.137-6.687a21.55,21.55,0,0,0-7.54-1.287c-8.359,0-14.194,4.18-14.244,10.2,0,4.43,4.18,6.921,7.373,8.359s4.43,2.491,4.43,3.845c0,2.073-2.625,3.026-5.015,3.026a17.688,17.688,0,0,1-7.924-1.672l-1.087-.5-1.187,6.921a26.532,26.532,0,0,0,9.4,1.672c8.844,0,14.6-4.146,14.662-10.566-.017-3.477-2.257-6.152-7.172-8.359Z" transform="translate(-1 -22.469)" fill="#273991" />
                          <path id="Path_8444" data-name="Path 8444" d="M17.852,25.129a3.344,3.344,0,0,0-3.678-2.508H1.1l-.1.652C11.165,25.731,17.886,31.633,20.677,38.8Z" transform="translate(-1 -22.386)" fill="#f99f1b" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="card">                                        
                    <svg xmlns="http://www.w3.org/2000/svg" width={149} height={60} viewBox="0 0 149 60">
                      <g id="Group_1008" data-name="Group 1008" transform="translate(-389 -1540)">
                        <g id="Rectangle_861" data-name="Rectangle 861" transform="translate(389 1540)" fill="#fff" stroke="#868686" strokeWidth="0.14">
                          <rect width={149} height={60} rx={5} stroke="none" />
                          <rect x="0.07" y="0.07" width="148.86" height="59.86" rx="4.93" fill="none" />
                        </g>
                        <g id="_96055f9ed08cbab86f978645e4d92879" data-name="96055f9ed08cbab86f978645e4d92879" transform="translate(437.564 1554.012)">
                          <path id="Path_8437" data-name="Path 8437" d="M85.418,74.607a15.651,15.651,0,0,0,10.617,4.128,15.925,15.925,0,0,0,0-31.85,15.65,15.65,0,0,0-10.617,4.128,15.926,15.926,0,0,0,0,23.594Z" transform="translate(-58.979 -46.885)" fill="#e9b040" fillRule="evenodd" />
                          <path id="Path_8438" data-name="Path 8438" d="M172.041,122.912a.49.49,0,0,1,.492-.492.5.5,0,0,1,.519.492.5.5,0,0,1-.519.52A.5.5,0,0,1,172.041,122.912Zm.492.411a.421.421,0,0,0,.41-.411.4.4,0,0,0-.41-.383.391.391,0,0,0-.383.383A.417.417,0,0,0,172.533,123.323Zm-.055-.164h-.11v-.465h.191a.162.162,0,0,1,.11.028c.055.027.055.055.055.109s-.027.109-.082.109l.11.219h-.137l-.055-.192h-.082v-.082h.11c.027,0,.027-.028.027-.055s0-.028-.027-.055h-.11Z" transform="translate(-121.247 -98.117)" fill="#e9b040" fillRule="evenodd" />
                          <path id="Path_8439" data-name="Path 8439" d="M45.779,61.129c-.055-.574-.164-1.121-.274-1.7H35.819a16.663,16.663,0,0,1,.438-1.668h8.784q-.286-.863-.657-1.7H36.941q.411-.869.9-1.7h5.61a14.384,14.384,0,0,0-1.2-1.668h-3.2a15.732,15.732,0,0,1,1.614-1.7,15.925,15.925,0,1,0,0,23.594,15.162,15.162,0,0,0,1.587-1.668h-3.2a18.85,18.85,0,0,1-1.2-1.7h5.61a12.712,12.712,0,0,0,.93-1.7H36.941a17.78,17.78,0,0,1-.684-1.668h8.784a17.03,17.03,0,0,0,.465-1.7,16.805,16.805,0,0,0,.274-1.7,16.592,16.592,0,0,0,.082-1.668c0-.573-.027-1.147-.082-1.694Z" transform="translate(-14.174 -46.885)" fill="#cc2131" fillRule="evenodd" />
                          <path id="Path_8440" data-name="Path 8440" d="M172.041,106.8a.5.5,0,0,1,.492-.519.5.5,0,0,1,.519.519.506.506,0,1,1-1.012,0Zm.492.383a.384.384,0,1,0,0-.766.383.383,0,1,0,0,.766Zm-.055-.164h-.11v-.438h.3c.055.028.055.082.055.137a.147.147,0,0,1-.082.109l.11.191h-.137l-.055-.164h-.082v-.082h.055c.027,0,.055,0,.055-.028.027,0,.027-.027.027-.055a.027.027,0,0,0-.027-.027c0-.028-.028,0-.055,0h-.055Z" transform="translate(-121.247 -87.168)" fill="#fff" fillRule="evenodd" />
                          <path id="Path_8441" data-name="Path 8441" d="M37.383,93.471a5.051,5.051,0,0,1-1.285.219c-.82,0-1.312-.52-1.312-1.451a4.922,4.922,0,0,1,.055-.6l.109-.629.082-.52L35.77,86h1.64l-.191.985h1.039l-.246,1.642H36.972l-.437,2.681a1.26,1.26,0,0,0-.027.274c0,.356.164.492.574.492a2.989,2.989,0,0,0,.519-.055Zm5.3-.055a6.426,6.426,0,0,1-1.75.246,2.628,2.628,0,0,1-2.925-2.928c0-2.272,1.258-3.913,3.007-3.913a2.191,2.191,0,0,1,2.3,2.38,7.553,7.553,0,0,1-.191,1.615H39.706a.771.771,0,0,0-.027.219c0,.766.519,1.149,1.5,1.149a4.118,4.118,0,0,0,1.777-.41ZM41.675,89.5v-.328a.757.757,0,0,0-.82-.848c-.547,0-.93.41-1.094,1.177h1.914Zm-17.414,4.05H22.566l.984-6.211-2.214,6.211H20.16l-.137-6.184-1.039,6.184H17.317l1.339-8.072h2.488l.055,4.981,1.668-4.981H25.6Zm4.128-2.928a1.55,1.55,0,0,0-.328-.028c-.984,0-1.476.383-1.476.985a.619.619,0,0,0,.629.684C28.033,92.267,28.361,91.583,28.389,90.626Zm1.367,2.928H28.279l.027-.684a2,2,0,0,1-1.8.793,1.658,1.658,0,0,1-1.531-1.806,2.9,2.9,0,0,1,.137-.848c.273-1.013,1.285-1.642,2.843-1.67.191,0,.492,0,.765.028a1.458,1.458,0,0,0,.054-.438c0-.438-.355-.575-1.148-.575a4.557,4.557,0,0,0-1.421.219l-.246.055-.109.027.246-1.478a6.41,6.41,0,0,1,2-.356c1.476,0,2.269.684,2.269,1.943a6.213,6.213,0,0,1-.082,1.286L29.892,92.4l-.055.411-.027.329-.027.219-.027.191Zm21.187-6.512a3.285,3.285,0,0,1,1.531.438l.3-1.751a3.776,3.776,0,0,0-.437-.164l-.683-.192A4.85,4.85,0,0,0,49,85.618a5.14,5.14,0,0,0-1.012.876l-.219-.055-1.75,1.231.082-.684H44.3l-1.066,6.567h1.723l.628-3.529s.246-.493.356-.657a1,1,0,0,1,.957-.411h.137a8.842,8.842,0,0,0-.082,1.259c0,2.134,1.2,3.475,3.062,3.475a5.52,5.52,0,0,0,1.5-.219l.3-1.861a3.086,3.086,0,0,1-1.449.438c-1.011,0-1.613-.766-1.613-1.97,0-1.779.9-3.037,2.187-3.037Zm14.516-1.56-.382,2.3a1.77,1.77,0,0,0-1.559-.93,2.579,2.579,0,0,0-2.269,1.5v-.027l-1.093-.657.109-.684H58.432l-1.039,6.567h1.695l.574-3.529s.437-.493.547-.657a1.068,1.068,0,0,1,.765-.411,5.924,5.924,0,0,0-.3,1.943c0,1.642.847,2.736,2.1,2.736a1.986,1.986,0,0,0,1.586-.739l-.082.657H65.9l1.312-8.072h-1.75Zm-2.1,6.513c-.574,0-.875-.438-.875-1.286,0-1.286.547-2.216,1.339-2.216.6,0,.9.465.9,1.286C64.72,91.091,64.173,91.994,63.353,91.994Zm-7.9-1.368a1.55,1.55,0,0,0-.328-.028c-.985,0-1.477.383-1.477.985a.619.619,0,0,0,.629.684C55.1,92.267,55.425,91.583,55.453,90.626Zm1.367,2.928h-1.5l.055-.684a2,2,0,0,1-1.8.793,1.665,1.665,0,0,1-1.586-1.806c0-1.559,1.175-2.517,3.034-2.517a7.083,7.083,0,0,1,.738.028,1.686,1.686,0,0,0,.082-.438c0-.438-.356-.575-1.176-.575a4.688,4.688,0,0,0-1.421.219l-.219.055-.109.027.246-1.478a6.414,6.414,0,0,1,2-.356c1.476,0,2.242.684,2.242,1.943a4.718,4.718,0,0,1-.082,1.286L56.957,92.4l-.055.411-.055.329-.027.219v.191ZM33.337,88.381a8.1,8.1,0,0,1,1.285.11l.246-1.532c-.492-.055-1.148-.137-1.531-.137-1.913,0-2.542,1.04-2.542,2.244a1.869,1.869,0,0,0,1.285,1.806c.683.329.793.383.793.684,0,.41-.355.657-1.012.657a4.573,4.573,0,0,1-1.558-.274l-.191,1.5.027.028.328.055a4.308,4.308,0,0,0,.438.082c.41.028.765.055.984.055,1.914,0,2.707-.738,2.707-2.189a1.869,1.869,0,0,0-1.285-1.833c-.738-.329-.82-.383-.82-.684S32.817,88.381,33.337,88.381Z" transform="translate(-16.305 -72.936)" fill="#1b3771" fillRule="evenodd" />
                          <path id="Path_8442" data-name="Path 8442" d="M54.334,84.171l-.3,1.751a3.281,3.281,0,0,0-1.531-.438c-1.285,0-2.187,1.259-2.187,3.037,0,1.232.6,1.97,1.613,1.97a3.354,3.354,0,0,0,1.448-.41l-.3,1.833a5.688,5.688,0,0,1-1.5.247c-1.859,0-3.007-1.341-3.007-3.5,0-2.873,1.586-4.9,3.854-4.9a3.36,3.36,0,0,1,.792.082l.684.164c.219.082.274.11.438.164Zm-5.522,1.2h-.164c-.574,0-.9.274-1.421,1.067l.164-1.013H45.831L44.766,92h1.723c.628-4.023.792-4.707,1.613-4.707h.109a6.884,6.884,0,0,1,.656-1.888l-.055-.027Zm-9.9,6.54a3.544,3.544,0,0,1-1.23.219,1.265,1.265,0,0,1-1.367-1.45,4.515,4.515,0,0,1,.055-.575l.109-.657.082-.519.738-4.488H39l-.191.985h.875l-.219,1.614h-.875l-.465,2.737a1.029,1.029,0,0,0-.027.274c0,.329.164.465.574.465a1.136,1.136,0,0,0,.465-.055l-.218,1.45ZM32.327,87.51a1.916,1.916,0,0,0,1.285,1.833c.711.328.82.438.82.711,0,.411-.3.6-.984.6a5.1,5.1,0,0,1-1.531-.246l-.246,1.5.082.028.3.055a1.794,1.794,0,0,0,.465.055,6.311,6.311,0,0,0,.93.055c1.8,0,2.652-.684,2.652-2.189a1.82,1.82,0,0,0-1.2-1.833c-.738-.328-.82-.41-.82-.711,0-.356.3-.52.847-.52a10.666,10.666,0,0,1,1.23.082l.246-1.5a9.889,9.889,0,0,0-1.5-.137C32.983,85.293,32.3,86.306,32.327,87.51ZM67.428,92H65.815l.082-.63a2.047,2.047,0,0,1-1.586.711c-1.257,0-2.078-1.067-2.078-2.709,0-2.189,1.285-4.05,2.788-4.05a1.964,1.964,0,0,1,1.641.9l.383-2.3h1.695L67.428,92Zm-2.515-1.532c.793,0,1.34-.93,1.34-2.217,0-.848-.3-1.286-.9-1.286-.765,0-1.339.9-1.339,2.189Q64.011,90.466,64.913,90.465Zm-20.749,1.4a5.6,5.6,0,0,1-1.777.274c-1.914,0-2.9-1.012-2.9-2.955,0-2.244,1.258-3.913,2.98-3.913a2.2,2.2,0,0,1,2.323,2.381,6.621,6.621,0,0,1-.219,1.642H41.184a.537.537,0,0,0-.027.192c0,.766.52,1.149,1.5,1.149a3.757,3.757,0,0,0,1.777-.411l-.273,1.642Zm-.957-3.913v-.328a.757.757,0,0,0-.82-.848c-.547,0-.93.411-1.094,1.176ZM25.794,92H24.1l.984-6.212L22.869,92H21.693l-.137-6.157L20.518,92H18.932l1.339-8.072h2.46l.082,5.008,1.64-5.008h2.679Zm4.237-2.928c-.164,0-.246-.027-.383-.027-.957,0-1.449.356-1.449,1.012a.577.577,0,0,0,.6.657C29.511,90.711,30,90.055,30.031,89.07ZM31.288,92H29.866l.027-.684a2.13,2.13,0,0,1-1.8.794,1.589,1.589,0,0,1-1.558-1.779c0-1.614,1.093-2.545,3.007-2.545.191,0,.438.027.711.054a1.381,1.381,0,0,0,.055-.41c0-.438-.3-.6-1.094-.6a5.634,5.634,0,0,0-1.421.164l-.246.082-.164.027.246-1.478a6.868,6.868,0,0,1,2.05-.329c1.476,0,2.269.657,2.269,1.915a8.283,8.283,0,0,1-.137,1.314l-.383,2.326-.055.41-.027.329-.027.247ZM57.1,89.07c-.192,0-.273-.027-.383-.027-.984,0-1.477.356-1.477,1.012a.6.6,0,0,0,.629.657C56.548,90.711,57.067,90.055,57.1,89.07ZM58.352,92H56.931l.027-.684a2.129,2.129,0,0,1-1.8.794A1.589,1.589,0,0,1,53.6,90.328c0-1.614,1.093-2.545,3.007-2.545.192,0,.438.027.684.054a1.742,1.742,0,0,0,.082-.41c0-.438-.3-.6-1.093-.6a5.86,5.86,0,0,0-1.449.164l-.219.082-.164.027.246-1.478a6.87,6.87,0,0,1,2.05-.329c1.476,0,2.242.657,2.242,1.915a5.893,5.893,0,0,1-.136,1.314l-.356,2.326-.055.41-.055.329-.027.247V92h0Zm4.593-6.622h-.164c-.574,0-.9.274-1.421,1.067l.164-1.013H59.965L58.926,92h1.695c.629-4.023.793-4.707,1.613-4.707h.109A6.883,6.883,0,0,1,63,85.4l-.055-.027Z" transform="translate(-17.4 -71.9)" fill="#fff" fillRule="evenodd" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="card">                                        
                    <svg xmlns="http://www.w3.org/2000/svg" width={149} height={60} viewBox="0 0 149 60">
                      <g id="Group_1006" data-name="Group 1006" transform="translate(-553 -1540)">
                        <g id="Rectangle_859" data-name="Rectangle 859" transform="translate(553 1540)" fill="#fff" stroke="#868686" strokeWidth="0.14">
                          <rect width={149} height={60} rx={5} stroke="none" />
                          <rect x="0.07" y="0.07" width="148.86" height="59.86" rx="4.93" fill="none" />
                        </g>
                        <g id="_607236e6df210482d842bbd34722ec94" data-name="607236e6df210482d842bbd34722ec94" transform="translate(566.733 1554.011)">
                          <path id="Path_8446" data-name="Path 8446" d="M19.242,50.51c-.114-.075.675-3.115,2.557-9.846,1.5-5.355,2.9-10.364,3.128-11.133l.408-1.395,5.882.108c6.877.125,7.936.216,9.042.776,1.96.993,2.5,2.518,1.825,5.162a8.7,8.7,0,0,1-3.8,5.3,2.363,2.363,0,0,0-.781.778c-.031.158.22.5.643.891a5.228,5.228,0,0,1,.9,1.034c.307.6.254,1.787-.173,3.853a29.159,29.159,0,0,0-.469,3.216l-.085,1.375H35.471a10.193,10.193,0,0,1-3.025-.178c-.278-.278-.216-.987.267-3.018.537-2.26.57-3.148.135-3.7-.572-.73-1.094-.886-3.15-.956-1.662-.055-1.939-.03-2.19.2-.392.355-.71,1.27-1.639,4.717l-.79,2.936H22.243a22.773,22.773,0,0,1-3-.112ZM34.209,37.9c1.351-.4,1.92-1.283,1.923-2.977a1.714,1.714,0,0,0-.26-1.079c-.41-.494-1.646-.662-3.964-.54l-2.016.109L29.6,34.4a14.869,14.869,0,0,0-.72,3.349c.031.227.189.342.565.416a18.386,18.386,0,0,0,4.765-.267Zm9.535,13.049a3.2,3.2,0,0,1-1.906-1.618c-.565-1.321-.045-4.258,2.018-11.4.494-1.71.9-3.128.9-3.148a1.38,1.38,0,0,1,.233-.27c.19-.192.625-.234,2.369-.234a14.755,14.755,0,0,1,2.5.139l.369.142-.368,1.307c-.9,3.21-1.842,7.1-2,8.322-.148,1.106-.142,1.4.033,1.766.4.834,1.849,1.008,3.082.375,1.447-.744,1.719-1.382,4.044-9.494a5.609,5.609,0,0,1,.892-2.118l.41-.44h2.324c1.8,0,2.341.045,2.4.2S58.149,45.615,56.9,49.88l-.2.669-2.484.074a16.44,16.44,0,0,1-2.483-.018,5.826,5.826,0,0,1,.224-.73c.5-1.425-.124-1.513-1.953-.278a6.686,6.686,0,0,1-4.13,1.575,4.925,4.925,0,0,1-2.139-.226Zm16.515-.44c-.132-.085.633-3.034,2.9-11.184l3.079-11.07,5.2.043c6.491.055,7.816.17,9.072.788a3.818,3.818,0,0,1,1.981,1.832c.773,1.463.76,3.16-.041,5.488-1.23,3.579-3.527,5.931-6.554,6.716a26.433,26.433,0,0,1-3.419.382c-4.592.274-4.315.223-4.561.852-.118.3-.577,1.837-1.02,3.409l-.805,2.862H63.267A22.387,22.387,0,0,1,60.258,50.505ZM73.647,38.59a3.158,3.158,0,0,0,2.812-1.652A3.2,3.2,0,0,0,76.8,34.19c-.472-.72-1.118-.876-3.548-.864a11.629,11.629,0,0,0-2.334.143,32.558,32.558,0,0,0-1.189,4.7.867.867,0,0,0,.1.463A16.358,16.358,0,0,0,73.647,38.59Zm8.5,12.417c-1.75-.733-2.2-1.944-1.633-4.365.8-3.382,2.554-4.513,8.585-5.527,3.642-.614,4.551-1.061,4.812-2.371.195-.969-.636-1.5-2.351-1.5a2.991,2.991,0,0,0-2.4.933l-.749.628-1.929.05c-2.234.057-2.922-.033-2.922-.378a5.972,5.972,0,0,1,1.695-2.383,7.881,7.881,0,0,1,3.307-1.747c2.648-.69,7.207-.611,8.774.153a4.459,4.459,0,0,1,1.939,1.767c.335.642.216,1.308-1.368,7.585-.777,3.082-1.413,5.866-1.413,6.187v.584H94.651c-1.01,0-2.145.043-2.524.1l-.686.094-.3-.7c-.355-.828-.4-.828-2.265.014a9.861,9.861,0,0,1-4.351,1.19,4.116,4.116,0,0,1-2.379-.305Zm7.991-3.473a4.766,4.766,0,0,0,2.189-3.51l0-.58-.945.088a13.488,13.488,0,0,0-4.065,1.311,2.168,2.168,0,0,0-1.084,1.841c0,.706.107.9.6,1.108A6.577,6.577,0,0,0,90.133,47.534ZM98.32,57.665c-.6-.134-.618-.355-.2-1.989.554-2.185.518-2.139,1.889-2.352,1.477-.23,2.138-.554,2.467-1.214.365-.731.338-3.6-.1-11.3a45.822,45.822,0,0,1-.2-6.356c.111-.135.864-.185,2.8-.185h2.649l.047,4.971a31.917,31.917,0,0,0,.21,5.139c.271.27,1.266-1.412,5.342-9.034l.577-1.077h2.338a13.625,13.625,0,0,1,2.409.114c.075.121-3.469,6.437-7.024,12.522-5.054,8.649-6.005,9.84-8.376,10.5a22.383,22.383,0,0,1-4.822.257Z" transform="translate(-19.231 -25.865)" fill="#227fbb" fillRule="evenodd" opacity="0.938" />
                          <path id="Path_8447" data-name="Path 8447" d="M90.338,55.065l6.95-25.459L103.9,42.763Z" transform="translate(10.66 -25.247)" fill="#1aaf5d" fillRule="evenodd" />
                          <path id="Path_8448" data-name="Path 8448" d="M87.31,55.129l6.95-25.457,6.616,13.155Z" transform="translate(9.387 -25.219)" fill="#f59d00" fillRule="evenodd" />
                          <path id="Path_8449" data-name="Path 8449" d="M100.988,29.874V28.139h-.66v-.3h1.665v.3h-.665v1.736h-.341Zm1.231,0V27.836h.5l.516,1.628.5-1.628h.49v2.038h-.31v-1.71l-.526,1.71h-.307l-.548-1.736v1.736h-.312Z" transform="translate(14.859 -25.991)" fillRule="evenodd" />
                          <path id="Path_8450" data-name="Path 8450" d="M105.463,29.364a2.827,2.827,0,1,1-2.827-2.827,2.827,2.827,0,0,1,2.827,2.827Z" transform="translate(14.641 -26.537)" fill="none" stroke="#000" strokeWidth="0.5" fillRule="evenodd" opacity="0.938" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="card">                                        
                    <svg xmlns="http://www.w3.org/2000/svg" width={149} height={60} viewBox="0 0 149 60">
                      <g id="Group_1005" data-name="Group 1005" transform="translate(-715 -1540)">
                        <g id="Rectangle_860" data-name="Rectangle 860" transform="translate(715 1540)" fill="#fff" stroke="#868686" strokeWidth="0.14">
                          <rect width={149} height={60} rx={5} stroke="none" />
                          <rect x="0.07" y="0.07" width="148.86" height="59.86" rx="4.93" fill="none" />
                        </g>
                        <path id="Path_8476" data-name="Path 8476" d="M4535.409,7899.667a1.95,1.95,0,0,0,1.321-2.385l-.119-7.556-1.734,7.417Z" transform="translate(-3697.636 -6313.198)" fill="#fff" />
                        <g id="_877c28c9cac9beb4afd56671c0e91d37" data-name="877c28c9cac9beb4afd56671c0e91d37" transform="translate(743.678 1554.011)">
                          <path id="Path_8452" data-name="Path 8452" d="M5.9,27.772H9.1L7.5,23.7Z" transform="translate(1.954 -19.919)" fill="#2fabf7" />
                          <path id="Path_8453" data-name="Path 8453" d="M34.472,24.145A2.835,2.835,0,0,0,33.309,24H30.4v2.327h2.909a2.835,2.835,0,0,0,1.163-.145,1.132,1.132,0,0,0,.436-1.018.809.809,0,0,0-.436-1.018Z" transform="translate(13.085 -19.783)" fill="#228fe0" />
                          <path id="Path_8454" data-name="Path 8454" d="M79.18,21.1v1.745L78.307,21.1H71.472v1.745L70.6,21.1H61.292a8.854,8.854,0,0,0-4.072.873V21.1H50.675v.873a4.193,4.193,0,0,0-2.763-.873H24.5l-1.6,3.636L21.3,21.1H13.88v1.745L13.007,21.1H6.754L3.845,27.935.5,35.5H7.917l.873-2.327h2.036L11.7,35.5h8.435V33.753l.727,1.745h4.218l.727-1.745V35.5H46.021V31.717h.291c.291,0,.291,0,.291.436v3.2H57.074V34.48A8.712,8.712,0,0,0,61,35.353h4.363l.873-2.327h2.036l.873,2.327H77.58V33.171l1.309,2.182h6.835V21.1H79.18ZM30.023,33.317H27.551v-8l-3.49,8H21.879l-3.49-8v8H13.444l-1.018-2.182H7.481l-.873,2.327H3.845L8.208,23.136h3.636l4.072,9.744V23.136h3.927l3.2,6.981,2.909-6.981h4.072Zm9.89-8H34.241v1.891h5.527v2.036H34.241V31.28h5.672v2.182H31.768V23.136h8.144v2.182ZM50.82,29.535a3.638,3.638,0,0,1,.436,1.891v2.036H48.784V32.153a3.464,3.464,0,0,0-.436-2.036c-.436-.436-.873-.436-1.745-.436H43.985v3.781H41.513V23.136h5.527a5.575,5.575,0,0,1,2.909.436A2.478,2.478,0,0,1,51.111,25.9a2.9,2.9,0,0,1-1.745,2.763,2.766,2.766,0,0,1,1.454.873Zm4.363,3.781H52.711V22.991h2.472Zm28.651,0h-3.49L75.69,25.608v7.708H70.745l-.873-2.182h-5.09l-.873,2.327H61.146a5.078,5.078,0,0,1-3.49-1.163,5.111,5.111,0,0,1-1.309-3.927A5.961,5.961,0,0,1,57.656,24.3c.727-.873,2.036-1.163,3.636-1.163h2.327v2.182H61.292A2.682,2.682,0,0,0,59.4,25.9a3.415,3.415,0,0,0-.727,2.327A3.164,3.164,0,0,0,59.4,30.7a2.318,2.318,0,0,0,1.745.582h1.018l3.345-8h3.636l4.072,9.744V23.282h3.636l4.218,7.126V23.282h2.472V33.317Z" transform="translate(-0.5 -21.1)" fill="#0571c1" />
                          <path id="Path_8455" data-name="Path 8455" d="M54.205,27.772H57.55L55.95,23.7ZM29.481,48.715v-8.29L25.7,44.5Z" transform="translate(10.95 -19.919)" fill="#228fe0" />
                          <path id="Path_8456" data-name="Path 8456" d="M17.6,35.9v1.891h5.381v2.036H17.6v2.182h5.963l2.763-3.054L23.708,35.9Z" transform="translate(7.269 -14.376)" fill="#2fabf7" />
                          <path id="Path_8457" data-name="Path 8457" d="M33.054,35.9H30v2.618h3.2c.873,0,1.454-.436,1.454-1.309a1.467,1.467,0,0,0-1.6-1.309Z" transform="translate(12.903 -14.376)" fill="#228fe0" />
                          <path id="Path_8458" data-name="Path 8458" d="M85.081,39.645V33.1H78.973a4.772,4.772,0,0,0-3.054.873V33.1h-6.69a4.615,4.615,0,0,0-2.909.873V33.1H54.54v.873a5.622,5.622,0,0,0-3.2-.873H43.487v.873c-.727-.727-2.472-.873-3.345-.873H31.416L29.38,35.282,27.489,33.1H14.4V47.353H27.2l2.036-2.182,1.891,2.182h7.853V44.008H40a8.847,8.847,0,0,0,3.345-.436V47.5h6.545V43.717h.291c.436,0,.436,0,.436.436V47.5H70.392a5.7,5.7,0,0,0,3.345-.873V47.5h6.254a6.532,6.532,0,0,0,3.49-.727,4.951,4.951,0,0,0,2.327-4.363A5.57,5.57,0,0,0,85.081,39.645ZM40,41.972H37.088v3.49H32.434l-2.909-3.345-3.054,3.345h-9.6V35.136h9.744l2.909,3.345,3.054-3.345h7.708c1.891,0,4.072.582,4.072,3.345-.145,2.909-2.182,3.49-4.363,3.49ZM54.54,41.39a3.3,3.3,0,0,1,.436,1.891v2.036H52.5V44.008a3.247,3.247,0,0,0-.436-2.036c-.291-.436-.873-.436-1.745-.436H47.7v3.781H45.232V34.991h5.527a5.855,5.855,0,0,1,2.909.436,2.573,2.573,0,0,1,1.309,2.327,2.9,2.9,0,0,1-1.745,2.763,2.487,2.487,0,0,1,1.309.873Zm10.035-4.218H58.9v1.891h5.527V41.1H58.9v2.036h5.672v2.182H56.431V34.991h8.144v2.182Zm6.108,8.144H66.029V43.135h4.654a1.227,1.227,0,0,0,1.018-.291,1.054,1.054,0,0,0,0-1.454,1.229,1.229,0,0,0-.873-.291c-2.327-.145-5.09,0-5.09-3.2,0-1.454.873-3.054,3.49-3.054h4.8v2.472H69.52a2.157,2.157,0,0,0-1.018.145c-.291.145-.291.436-.291.727,0,.436.291.582.582.727a1.845,1.845,0,0,0,.873.145h1.309a3.7,3.7,0,0,1,2.763.873,3.01,3.01,0,0,1,.727,2.182c0,2.182-1.309,3.2-3.781,3.2ZM83.191,44.3a4.241,4.241,0,0,1-3.054,1.018H75.483V43.135h4.654a1.227,1.227,0,0,0,1.018-.291,1.054,1.054,0,0,0,0-1.454,1.229,1.229,0,0,0-.873-.291c-2.327-.145-5.09,0-5.09-3.2,0-1.454.873-3.054,3.49-3.054h4.8v2.472H79.118a2.157,2.157,0,0,0-1.018.145c-.291.145-.291.436-.291.727,0,.436.145.582.582.727a1.845,1.845,0,0,0,.873.145h1.309a3.7,3.7,0,0,1,2.763.873.142.142,0,0,1,.145.145,3.339,3.339,0,0,1,.582,2.036,2.96,2.96,0,0,1-.873,2.182Z" transform="translate(5.815 -15.648)" fill="#0571c1" />
                          <path id="Path_8459" data-name="Path 8459" d="M41.472,36.145A2.835,2.835,0,0,0,40.309,36H37.4v2.327h2.909a2.835,2.835,0,0,0,1.163-.145,1.132,1.132,0,0,0,.436-1.018A.809.809,0,0,0,41.472,36.145Z" transform="translate(16.265 -14.331)" fill="#228fe0" />
                          <g id="Group_942" data-name="Group 942" transform="translate(36.65 3.781)">
                            <path id="Path_8460" data-name="Path 8460" d="M36.608,24.282a2.835,2.835,0,0,0-1.163-.145H32.535v2.327h2.909a2.835,2.835,0,0,0,1.163-.145,1.132,1.132,0,0,0,.436-1.018.809.809,0,0,0-.436-1.018Zm17.6,3.49H57.55L55.95,23.7ZM29.481,48.715v-8.29L25.7,44.5Zm5.527-7.272H31.954v2.618h3.2c.873,0,1.454-.436,1.454-1.309a1.467,1.467,0,0,0-1.6-1.309Zm11.78.291a2.835,2.835,0,0,0-1.163-.145H42.716v2.327h2.909a2.835,2.835,0,0,0,1.163-.145,1.132,1.132,0,0,0,.436-1.018A.809.809,0,0,0,46.788,41.734Z" transform="translate(-25.7 -23.7)" fill="#228fe0" />
                          </g>
                          <path id="Path_8461" data-name="Path 8461" d="M39.124,45.026l-2.036-2.182v2.472h-4.8L29.38,41.972l-3.2,3.345h-9.6V35.136h9.744l3.054,3.345,1.454-1.745L27.2,33.1H14.4V47.353H27.2l2.182-2.182,1.891,2.182h7.853Z" transform="translate(5.815 -15.648)" fill="#2fabf7" />
                          <g id="Group_943" data-name="Group 943" transform="translate(0 0)">
                            <path id="Path_8462" data-name="Path 8462" d="M30.314,35.353l-1.891-2.036h-.873v-.873l-2.182-2.182-1.454,3.054H21.879l-3.49-8v8H13.444l-1.018-2.182H7.481L6.463,33.317H3.845l4.363-10.18h3.636l4.072,9.744V23.136H18.1L16.062,21.1H13.88v1.745L13.153,21.1h-6.4L3.845,27.935.5,35.353H8.063l.873-2.182h2.036l1.018,2.182h8.144V33.607l.727,1.745h4.218l.727-1.745v1.745Z" transform="translate(-0.5 -21.1)" fill="#2fabf7" />
                            <path id="Path_8463" data-name="Path 8463" d="M17.127,27.027,14.8,24.7l1.745,3.781Z" transform="translate(5.997 -19.464)" fill="#2fabf7" />
                          </g>
                          <g id="Group_944" data-name="Group 944" transform="translate(31.705 17.016)">
                            <path id="Path_8464" data-name="Path 8464" d="M79.892,46.762a5.32,5.32,0,0,0,2.327-3.927L80.183,40.8a4.3,4.3,0,0,1,.291,1.454,2.96,2.96,0,0,1-.873,2.182,4.241,4.241,0,0,1-3.054,1.018H71.893V43.271h4.654a1.227,1.227,0,0,0,1.018-.291,1.054,1.054,0,0,0,0-1.454,1.229,1.229,0,0,0-.873-.291c-2.327-.145-5.09,0-5.09-3.2,0-1.454.873-2.763,3.054-3.054l-1.6-1.6c-.291.145-.436.291-.582.291V32.8h-6.69a4.615,4.615,0,0,0-2.909.873V32.8H50.951v.873a5.622,5.622,0,0,0-3.2-.873H39.9v.873c-.727-.727-2.472-.873-3.345-.873H27.827L25.79,34.982,23.9,32.8H22.3l4.363,4.363,2.182-2.327h7.708c1.891,0,4.072.582,4.072,3.345,0,2.909-2.036,3.49-4.218,3.49H33.5v2.182l2.182,2.182V43.853h.727a8.847,8.847,0,0,0,3.345-.436v3.927H46.3V43.562h.291c.436,0,.436,0,.436.436v3.345H66.8a5.7,5.7,0,0,0,3.345-.873v.873H76.4a5.77,5.77,0,0,0,3.49-.582ZM50.951,41.526a3.3,3.3,0,0,1,.436,1.891v2.036H48.915V44.144a3.247,3.247,0,0,0-.436-2.036c-.291-.436-.873-.436-1.745-.436H44.115v3.781H41.643V35.127h5.527a5.855,5.855,0,0,1,2.909.436,2.573,2.573,0,0,1,1.309,2.327,2.9,2.9,0,0,1-1.745,2.763,2.487,2.487,0,0,1,1.309.873Zm10.035-4.218H55.314V39.2H60.84v2.036H55.314v2.036h5.672v2.182H52.841V35.127h8.144v2.182Zm6.108,8.144H62.44V43.271h4.654a1.227,1.227,0,0,0,1.018-.291,1.054,1.054,0,0,0,0-1.454,1.229,1.229,0,0,0-.873-.291c-2.327-.145-5.09,0-5.09-3.2,0-1.454.873-3.054,3.49-3.054h4.8v2.472H65.93a2.156,2.156,0,0,0-1.018.145c-.291.145-.291.436-.291.727,0,.436.291.582.582.727a1.845,1.845,0,0,0,.873.145h1.309a3.7,3.7,0,0,1,2.763.873,3.011,3.011,0,0,1,.727,2.182c0,2.182-1.309,3.2-3.781,3.2Z" transform="translate(-22.3 -32.8)" fill="#228fe0" />
                            <path id="Path_8465" data-name="Path 8465" d="M57.9,36.873c0,.436.145.582.582.727a1.845,1.845,0,0,0,.873.145h1.309a4.224,4.224,0,0,1,2.036.436L60.518,36H59.209a2.156,2.156,0,0,0-1.018.145A1.111,1.111,0,0,0,57.9,36.873Z" transform="translate(-6.125 -31.346)" fill="#228fe0" />
                          </g>
                          <g id="Group_945" data-name="Group 945" transform="translate(14.398 0.145)">
                            <path id="Path_8466" data-name="Path 8466" d="M56.9,33.1l.291.436h.145Zm-8-8,2.472,5.963v-3.49Z" transform="translate(7.092 -19.428)" fill="#228fe0" />
                            <path id="Path_8467" data-name="Path 8467" d="M41.523,31.671h.291c.291,0,.291,0,.291.436v3.2H52.576v-.873a8.712,8.712,0,0,0,3.927.873h4.363l.873-2.327h2.036l.873,2.327h8.435V33.853l-2.036-2.036v1.6H66.1l-.727-2.327h-5.09l-.873,2.327H56.648a5.078,5.078,0,0,1-3.49-1.163,5.112,5.112,0,0,1-1.309-3.927,5.961,5.961,0,0,1,1.309-4.072c.727-.873,2.036-1.163,3.636-1.163h2.327v2.182H56.794a2.682,2.682,0,0,0-1.891.582,3.415,3.415,0,0,0-.727,2.327,3.164,3.164,0,0,0,.727,2.472,2.318,2.318,0,0,0,1.745.582h1.018l3.345-8h1.454L60.429,21.2H56.648a8.855,8.855,0,0,0-4.072.873V21.2h-6.4v.873a4.193,4.193,0,0,0-2.763-.873H20l-1.6,3.636L16.8,21.2H10.4l2.036,2.036h2.909l2.472,5.381.873.873,2.618-6.4H25.38V33.417H22.907v-8l-2.472,5.817,4.218,4.218H41.378l.145-3.781Zm6.69-8.581h2.472V33.417H48.213Zm-12.8,2.182H29.743v1.891h5.527V29.2H29.743v2.036h5.672v2.182H27.27V23.091h8.144Zm4.072,8H37.015V22.945h5.527a5.575,5.575,0,0,1,2.909.436,2.478,2.478,0,0,1,1.163,2.327,2.9,2.9,0,0,1-1.745,2.763,1.9,1.9,0,0,1,1.163.873,3.638,3.638,0,0,1,.436,1.891v2.036H44V31.962a3.464,3.464,0,0,0-.436-2.036c-.145-.291-.582-.291-1.454-.291H39.487v3.636Z" transform="translate(-10.4 -21.2)" fill="#228fe0" />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="info-card">
                  <div className="card">
                    <div className="card-svg">
                      <svg xmlns="http://www.w3.org/2000/svg" width={95} height={96} viewBox="0 0 95 96">
                        <g id="Group_964" data-name="Group 964" transform="translate(-0.49)">
                          <ellipse id="Ellipse_362" data-name="Ellipse 362" cx="47.5" cy={48} rx="47.5" ry={48} transform="translate(0.49)" fill="rgba(201,123,90,0.27)" />
                          <g id="free-delivery-free-svgrepo-com" transform="translate(12.877 21.234)">
                            <g id="Group_371" data-name="Group 371" transform="translate(3.136 0)">
                              <g id="Group_370" data-name="Group 370" transform="translate(0 0)">
                                <path id="Path_591" data-name="Path 591" d="M78.241,172.7l-2.227-10c.609-.129,1.056-.29,1.066-1.663a5.662,5.662,0,0,0-5.655-5.655H61.281v-2.962c0-2.832-1.248-2.783-2.783-2.783H22.055c-1.535,0-2.783-.17-2.783,2.783v24.417c0,.744,1.6.744,1.6,0V151.331a.09.09,0,0,1,.09-.09H59.588a.09.09,0,0,1,.09.09v25.507c0,.744,1.6.744,1.6,0v-2.617H78.263c1.954,0,3.614,2.375,4.184,4.142H78.26a1.347,1.347,0,0,0-1.347,1.347v2.873c.155,2.942,1.226,4.219,4.219,4.219h1.526v7.015h-5.7c-.269-3.159-3.672-5.634-6.969-5.745s-6.847,2.685-6.969,5.745H61.281V182.583c0-.744-1.6-.744-1.6,0v11.234H45.29c-1.157-3.339-3.707-5.745-7.435-5.745s-6.281,2.406-7.438,5.745H20.965a.09.09,0,0,1-.09-.09v-4.053H27.8c.744,0,.744-1.6,0-1.6H19.235l.038,4.565a2.786,2.786,0,0,0,2.783,2.783h2.913c0,.03,5.449.06,5.449.09.353,4.658,3.482,7.438,7.438,7.438a7.416,7.416,0,0,0,7.429-7.047c0,.1.008-.141.008-.39,0-.03,0-.06,0-.09H61.463c0,.03,1.088.06,1.088.09a7.438,7.438,0,0,0,14.875,0c0-.03,0-.06,0-.09h5.491a1.347,1.347,0,0,0,1.347-1.347V179.71A7.1,7.1,0,0,0,78.241,172.7Zm-16.96-15.714H71.425a4.105,4.105,0,0,1,4.053,4.053v.09h-14.2Zm0,15.633v-9.887H74.336l2.2,9.887ZM37.855,201.344a5.835,5.835,0,1,1,5.835-5.835A5.841,5.841,0,0,1,37.855,201.344Zm32.134,0a5.835,5.835,0,1,1,5.835-5.835A5.842,5.842,0,0,1,69.989,201.344ZM82.659,185.3H80.042c-1.5,0-1.526-1.875-1.526-2.717v-2.616h4.142V185.3Z" transform="translate(-19.235 -149.636)" />
                              </g>
                            </g>
                            <g id="Group_373" data-name="Group 373" transform="translate(18.973 43.09)">
                              <g id="Group_372" data-name="Group 372" transform="translate(0 0)">
                                <path id="Path_592" data-name="Path 592" d="M131.05,406.172a2.783,2.783,0,1,0,2.783,2.783A2.786,2.786,0,0,0,131.05,406.172Z" transform="translate(-128.267 -406.172)" />
                              </g>
                            </g>
                            <g id="Group_375" data-name="Group 375" transform="translate(51.107 43.09)">
                              <g id="Group_374" data-name="Group 374" transform="translate(0 0)">
                                <path id="Path_593" data-name="Path 593" d="M413.238,406.172a2.783,2.783,0,1,0,2.783,2.783A2.786,2.786,0,0,0,413.238,406.172Z" transform="translate(-410.455 -406.172)" />
                              </g>
                            </g>
                            <g id="Group_377" data-name="Group 377" transform="translate(28.876 38.435)">
                              <g id="Group_376" data-name="Group 376" transform="translate(0 0)">
                                <path id="Path_594" data-name="Path 594" d="M215.472,372.967h-9.36c-.346,0-.346,1.6,0,1.6h9.36C215.819,374.57,215.819,372.967,215.472,372.967Z" transform="translate(-205.853 -372.967)" />
                              </g>
                            </g>
                            <g id="Group_379" data-name="Group 379" transform="translate(0 32.69)">
                              <g id="Group_378" data-name="Group 378" transform="translate(0 0)">
                                <path id="Path_595" data-name="Path 595" d="M35.619,338.763H18.383c-.744,0-.744,1.6,0,1.6H35.619C36.362,340.366,36.362,338.763,35.619,338.763Z" transform="translate(-17.826 -338.763)" />
                              </g>
                            </g>
                          </g>
                          <text id="FREE" transform="translate(20.49 29)" fontSize={14} fontFamily="Jost-Book, 'Jost\*'"><tspan x={0} y={14}>FREE</tspan></text>
                        </g>
                      </svg>
                    </div>
                    <div className="info-card-title">
                      <h3>Free shipping above ₹x</h3>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-svg">                      
                      <svg xmlns="http://www.w3.org/2000/svg" width={96} height={96} viewBox="0 0 96 96">
                        <g id="Group_965" data-name="Group 965" transform="translate(0.476)">
                          <circle id="Ellipse_363" data-name="Ellipse 363" cx={48} cy={48} r={48} transform="translate(-0.476)" fill="rgba(163,200,194,0.27)" />
                          <g id="return-svgrepo-com" transform="translate(13.059 13.059)">
                            <path id="Union_23" data-name="Union 23" d="M0,35.5a35.82,35.82,0,0,1,.341-4.941v-19.1A3.51,3.51,0,0,1,3.88,8h9.171A35.5,35.5,0,1,1,0,35.5Z" transform="translate(0.465 -0.059)" fill="none" stroke="#000" strokeWidth="0.75" />
                            <path id="Union_24" data-name="Union 24" d="M35.465,50.6,35.3,49.1l-4.2-4.3-5.367-4.074C24.5,39.8,22.612,39.314,23,37.816a2.267,2.267,0,0,1,3.325-1.5L31.2,38.3l.444-.364V26.295H3.529A3.42,3.42,0,0,1,0,23.014V3.281A3.418,3.418,0,0,1,3.529,0h48.6A3.415,3.415,0,0,1,55.66,3.281V23.014a3.418,3.418,0,0,1-3.527,3.281H39.025a1.929,1.929,0,0,1,.769,1.533v1.541h.449v-.51a1.923,1.923,0,1,1,3.846,0v.51H44.6c.467-1.947,3.1-1.418,3.406,1.173l.138,12.3-1.165,7.784ZM35.5,29.369h.444V27.828a1.924,1.924,0,0,1,.769-1.533H35.5Z" transform="translate(0.9 8.243)" fill="none" stroke="#000" strokeWidth="0.75" />
                            <g id="Group_723" data-name="Group 723" transform="translate(4.751 9.82)">
                              <path id="Path_7736" data-name="Path 7736" d="M44.5,78.887H83.851a1.081,1.081,0,0,1,1.074,1.074V96.372a1.077,1.077,0,0,1-1.054,1.074H38.021V94.832H81.663c.284,0,.608.02.608-.385v-12.6a.409.409,0,0,0-.324-.385H44.464V84.7l-6.929-4.376,6.929-4.376v2.9Z" transform="translate(-37.535 -75.949)" />
                            </g>
                            <path id="Path_7738" data-name="Path 7738" d="M188.072,206.887l-4.194-4.3-5.369-4.072c-1.236-.932-3.12-1.418-2.735-2.917a2.266,2.266,0,0,1,3.323-1.5l4.883,1.986.446-.365V178.016a1.937,1.937,0,0,1,1.925-1.925h0a1.937,1.937,0,0,1,1.925,1.925v9.138h.446v-1.54a1.937,1.937,0,0,1,1.925-1.925h0a1.937,1.937,0,0,1,1.925,1.925v1.54h.446v-.507a1.937,1.937,0,0,1,1.925-1.925h0a1.937,1.937,0,0,1,1.925,1.925v.507h.506c.466-1.945,3.1-1.418,3.4,1.175l.142,12.3-1.168,7.785-11.506-.02Z" transform="translate(-151.876 -149.543)" fill="none" stroke="#000" strokeWidth="0.75" />
                            <path id="Union_18" data-name="Union 18" d="M.024,11.153v-9.4H1.135V0H14.712V1.754h1.215l.282,5.813A32.2,32.2,0,0,1,.75,11.153Zm-.024,0H.024Z" transform="translate(34.167 58.905)" fill="none" stroke="#000" strokeWidth="0.75" />
                            <g id="Group_724" data-name="Group 724" transform="translate(23.765 27.211)">
                              <path id="Path_7741" data-name="Path 7741" d="M175.653,317.141c.122.02,2.046,1.236,2.046,1.236l-.588,1.074a7.372,7.372,0,0,1-1.925-1.438A.657.657,0,0,1,175.653,317.141Z" transform="translate(-175.136 -298.314)" fill="none" stroke="#000" strokeWidth="0.75" />
                              <path id="Path_7742" data-name="Path 7742" d="M245.777,181.426v1.864h-2.533v-1.864C243.244,180.716,245.777,180.716,245.777,181.426Z" transform="translate(-233.833 -180.894)" stroke="#000" strokeWidth="0.75" />
                            </g>
                          </g>
                          <text id="REFUND" transform="translate(25.78 38.196)" fontSize={8} fontFamily="Jost-Book, 'Jost\*'"><tspan x={0} y={0}>REFUND</tspan></text>
                        </g>
                      </svg>
                    </div>
                    <div className="info-card-title">
                      <h3>Hassle-free refunds</h3>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-svg">
                      <svg xmlns="http://www.w3.org/2000/svg" width={94} height={96} viewBox="0 0 94 96">
                        <g id="Group_966" data-name="Group 966" transform="translate(-0.146)">
                          <ellipse id="Ellipse_364" data-name="Ellipse 364" cx={47} cy={48} rx={47} ry={48} transform="translate(0.146)" fill="rgba(201,123,90,0.27)" />
                          <path id="eafb4ecf6a6a0c35219f5073349e2c7f" d="M1205.258,2865.205a.648.648,0,0,0-.009.082v26.346a.764.764,0,0,0,1.526,0v-24.885l-1.238-.862c11.44,8.646,27.5,1.164,26.844-11.632a.724.724,0,0,0-.376-.591.794.794,0,0,0-.725-.026,10.214,10.214,0,0,1-4.812.636c-1.948-.093-4.061-.405-6.168-.592-4.036-.359-8.037-.225-10.96,2.384C1207.405,2857.79,1205.914,2860.621,1205.258,2865.205Zm-7.355.9v21.18a.764.764,0,0,0,1.526,0v-22.649c0-.027,0-.056-.008-.082-.772-5.388-2.516-8.715-4.79-10.744-3.43-3.061-8.128-3.206-12.865-2.787-2.5.222-5,.592-7.306.7a12.281,12.281,0,0,1-5.766-.766.788.788,0,0,0-.725.024.727.727,0,0,0-.376.591C1166.853,2866.155,1184.573,2874.854,1197.9,2866.1Zm9.332-.823c9.986,6.76,23.349.749,23.633-9.933a12.063,12.063,0,0,1-3.285.408c-2.281.007-4.857-.4-7.423-.626-3.591-.32-7.178-.323-9.78,2-1.508,1.346-2.664,3.454-3.333,6.672a7.836,7.836,0,0,1,1.052-.407,19.472,19.472,0,0,1,4.438-.619c2.146-.14,4.289-.3,6.143-1.594a7.657,7.657,0,0,1-2.306,1.42,29.813,29.813,0,0,1-5.327,1.26,14,14,0,0,0-2.487.713A6.927,6.927,0,0,0,1207.236,2865.281Zm-9.616-2.228c-.792-3.961-2.194-6.544-4.028-8.179-3.108-2.773-7.393-2.782-11.684-2.4-3.033.27-6.077.749-8.774.74a13.761,13.761,0,0,1-4.033-.532c.188,12.919,16.367,20.221,28.356,11.941a9.916,9.916,0,0,0-2.315-1.261,19.786,19.786,0,0,0-3.6-.97,42.625,42.625,0,0,1-7.577-1.652,10.9,10.9,0,0,1-3.3-1.951c2.6,1.892,5.655,2.18,8.707,2.43a27.851,27.851,0,0,1,6.233.962A10.972,10.972,0,0,1,1197.62,2863.053Zm3.963-18.211v19.82a.764.764,0,0,0,1.526,0V2844.2c1.938-4.151,2.237-7.264,1.564-9.681-1.025-3.692-4.343-5.835-7.962-7.577-1.889-.909-3.853-1.717-5.554-2.623a9.711,9.711,0,0,1-3.725-2.978.783.783,0,0,0-1.276-.035C1178.636,2831.617,1187.563,2845.734,1201.583,2844.842Zm.7-2.54c1.246-3.1,1.446-5.489.914-7.407-.914-3.284-3.955-5.1-7.175-6.648-2.3-1.108-4.71-2.069-6.639-3.232a11.427,11.427,0,0,1-2.557-2.01c-5.7,9.184,2.26,21.035,14.461,20.4a6.494,6.494,0,0,0-.763-1.21,13.033,13.033,0,0,0-1.781-1.806,28.231,28.231,0,0,1-3.953-3.632,7.153,7.153,0,0,1-1.251-2.33c.926,2.007,2.7,3.166,4.486,4.311a18.542,18.542,0,0,1,3.519,2.656A6.994,6.994,0,0,1,1202.285,2842.3Z" transform="translate(-1152.304 -2808.612)" fillRule="evenodd" />
                        </g>
                      </svg>                                            
                    </div>
                    <div className="info-card-title">
                      <h3>All natural products</h3>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-svg">
                      <svg xmlns="http://www.w3.org/2000/svg" width={96} height={96} viewBox="0 0 96 96">
                        <g id="Group_967" data-name="Group 967" transform="translate(0.271)">
                          <circle id="Ellipse_365" data-name="Ellipse 365" cx={48} cy={48} r={48} transform="translate(-0.271)" fill="rgba(163,200,194,0.27)" />
                          <g id="cc190aa78ef9a7ad9bfe98a68582de4e" transform="translate(22.01 15.926)">
                            <g id="Path_8488" data-name="Path 8488" transform="translate(-3.962 -2.2)" fill="none">
                              <path d="M15.028,15.962a14.079,14.079,0,0,0,28.15,0,14.079,14.079,0,0,0-28.15,0Zm-2.815,31.9a10.959,10.959,0,0,1,10.634-8.758H35.358a12.531,12.531,0,0,1,7.194,2.5,3.1,3.1,0,0,0,4.066-4.692,18.379,18.379,0,0,0-11.26-4.066H22.847c-7.819,0-14.7,5.317-16.89,13.45L4.393,52.245A9.231,9.231,0,0,0,5.957,60.69a9.517,9.517,0,0,0,7.507,3.441H35.046a3.128,3.128,0,0,0,0-6.256H13.464a2.251,2.251,0,0,1-2.189-1.251,2.522,2.522,0,0,1-.938-2.815l1.877-5.943Z" stroke="none" />
                              <path d="M 29.10280990600586 3.200000762939453 C 25.60091018676758 3.200000762939453 22.30939102172852 4.541969299316406 19.83459091186523 6.978687286376953 C 17.37971878051758 9.395797729492188 16.02775955200195 12.58622741699219 16.02775955200195 15.9622802734375 C 16.02775955200195 19.33831787109375 17.37971878051758 22.52874755859375 19.83459091186523 24.94585800170898 C 22.30939102172852 27.3825798034668 25.60091018676758 28.72454833984375 29.10280990600586 28.72454833984375 C 32.60472106933594 28.72454833984375 35.896240234375 27.3825798034668 38.37104034423828 24.94585800170898 C 40.82591247558594 22.52874755859375 42.17787170410156 19.33832931518555 42.17787170410156 15.9622802734375 C 42.17787170410156 12.58622741699219 40.82591247558594 9.395797729492188 38.37104034423828 6.978687286376953 C 35.896240234375 4.541969299316406 32.60472106933594 3.200000762939453 29.10280990600586 3.200000762939453 M 22.84723091125488 33.85234069824219 C 19.21380996704102 33.85234069824219 15.77777862548828 35.04879760742188 12.91057968139648 37.3123779296875 C 10.00518417358398 39.60610961914062 7.934749603271484 42.80414581298828 6.923114776611328 46.56057357788086 L 5.341949462890625 52.56086730957031 C 4.529834747314453 54.9972038269043 5.051803588867188 57.79961395263672 6.737686157226562 60.06361389160156 C 8.492942810058594 62.09851455688477 10.75578308105469 63.1302375793457 13.46387100219727 63.1302375793457 L 35.04560852050781 63.1302375793457 C 36.37796020507812 63.1302375793457 37.17340087890625 62.33480072021484 37.17340087890625 61.00244903564453 C 37.17340087890625 59.67008972167969 36.37796020507812 58.87464904785156 35.04560852050781 58.87464904785156 L 13.46387100219727 58.87464904785156 C 12.15164184570312 58.87464904785156 11.11067199707031 58.31750869750977 10.50453948974609 57.298828125 C 9.401397705078125 56.42279434204102 8.931869506835938 54.87007904052734 9.384811401367188 53.50006103515625 L 11.24809265136719 47.59967803955078 C 12.60044479370117 41.92038726806641 17.25720596313477 38.10791778564453 22.84723091125488 38.10791778564453 L 35.35839080810547 38.10791778564453 C 37.98258209228516 38.10791778564453 40.67118072509766 39.03759002685547 43.13355255126953 40.79641723632812 L 43.20088958740234 40.84452056884766 L 43.25942230224609 40.90303802490234 C 43.58415222167969 41.22776794433594 44.04410171508789 41.40660858154297 44.55456161499023 41.40660858154297 C 45.18920135498047 41.40660858154297 45.80807876586914 41.12821960449219 46.13122177124023 40.69736862182617 L 46.17385101318359 40.64051818847656 L 46.22409820556641 40.59027099609375 C 46.71244812011719 40.1019287109375 46.74573135375977 39.47129821777344 46.72209930419922 39.13884735107422 C 46.68077087402344 38.55725860595703 46.41114044189453 38.01300048828125 46.01844024658203 37.71846771240234 L 45.99375152587891 37.6993408203125 C 42.93772125244141 35.2545166015625 39.06127166748047 33.85234069824219 35.35837936401367 33.85234069824219 L 22.84723091125488 33.85234069824219 M 29.10280990600586 2.199996948242188 C 36.92229080200195 2.199996948242188 43.17787170410156 8.455577850341797 43.17787170410156 15.9622802734375 C 43.17787170410156 23.46896743774414 36.92229080200195 29.72454833984375 29.10280990600586 29.72454833984375 C 21.28334045410156 29.72454833984375 15.02775955200195 23.46896743774414 15.02775955200195 15.9622802734375 C 15.02775955200195 8.455577850341797 21.28334045410156 2.199996948242188 29.10280990600586 2.199996948242188 Z M 22.84723091125488 32.85234069824219 L 35.35837936401367 32.85234069824219 C 39.42451095581055 32.85234069824219 43.49065017700195 34.41623687744141 46.61843872070312 36.9184684753418 C 47.86954116821289 37.8568000793457 48.18233108520508 40.04625701904297 46.93120956420898 41.29737854003906 C 45.99287033081055 42.54849243164062 43.80342102050781 42.86125946044922 42.55231094360352 41.61014938354492 C 40.36286163330078 40.04625701904297 37.86063003540039 39.10791778564453 35.35839080810547 39.10791778564453 L 22.84723091125488 39.10791778564453 C 17.84276962280273 39.10791778564453 13.46387100219727 42.54848861694336 12.21274948120117 47.86573028564453 L 12.21274948120117 47.86573791503906 L 10.3360710144043 53.80854034423828 C 10.02330017089844 54.74687957763672 10.3360710144043 55.99798965454102 11.27441024780273 56.62355041503906 C 11.58718872070312 57.24909973144531 12.21274948120117 57.87464904785156 13.46387100219727 57.87464904785156 L 35.04560852050781 57.87464904785156 C 36.92229080200195 57.87464904785156 38.17340087890625 59.12577056884766 38.17340087890625 61.00244903564453 C 38.17340087890625 62.87912750244141 36.92229080200195 64.13024139404297 35.04560852050781 64.13024139404297 L 13.46387100219727 64.13024139404297 C 10.3360710144043 64.13024139404297 7.833839416503906 62.87912750244141 5.957160949707031 60.68967056274414 C 4.080490112304688 58.18743133544922 3.454929351806641 55.05965042114258 4.393268585205078 52.2446403503418 L 5.957160949707031 46.30184173583984 C 8.146621704101562 38.16957855224609 15.02775192260742 32.85234069824219 22.84723091125488 32.85234069824219 Z" stroke="none" fill="#000" />
                            </g>
                            <g id="Path_8489" data-name="Path 8489" transform="translate(19.737 25.294)" fill="none">
                              <path d="M21.981,32.57a2.839,2.839,0,0,0,2.189.938H24.8a3.989,3.989,0,0,0,2.189-1.564l6.256-12.511a3.3,3.3,0,0,0-1.251-4.066,3.3,3.3,0,0,0-4.066,1.251l-4.379,8.758-3.128-3.128a3.1,3.1,0,1,0-4.379,4.379l5.943,5.943Z" stroke="none" />
                              <path d="M 24.62491416931152 32.50812911987305 C 25.35903739929199 32.23315811157227 25.9488410949707 31.78168487548828 26.09115982055664 31.49702835083008 L 32.32650375366211 19.0263500213623 C 32.74906158447266 17.91894340515137 32.27899169921875 16.66214561462402 31.57686233520508 16.27915573120117 C 31.3003044128418 16.1745491027832 31.00406646728516 16.12153816223145 30.69565010070801 16.12153816223145 C 29.86816024780273 16.12153816223145 29.09619140625 16.50961685180664 28.81836128234863 17.06526756286621 L 23.8189811706543 27.06403732299805 L 19.71013069152832 22.95518684387207 C 19.29392051696777 22.53896713256836 18.76748085021973 22.30974769592285 18.22779083251953 22.30974769592285 C 17.68810081481934 22.30974769592285 17.16166114807129 22.53896713256836 16.74544143676758 22.95517730712891 C 15.88651084899902 23.81411743164062 15.88651084899902 25.06094741821289 16.74544143676758 25.91987800598145 L 22.68823051452637 31.8626880645752 C 23.16477012634277 32.33922958374023 23.55267143249512 32.50812911987305 24.17057991027832 32.50812911987305 L 24.62491416931152 32.50812911987305 M 24.79614067077637 33.50812911987305 L 24.17057991027832 33.50812911987305 C 23.23223114013672 33.50812911987305 22.60667991638184 33.19535827636719 21.98112106323242 32.56978607177734 L 21.98114013671875 32.56978607177734 L 16.038330078125 26.62698745727539 C 14.78722095489502 25.37586784362793 14.78722095489502 23.49919700622559 16.038330078125 22.24807739257812 C 17.28945350646973 20.99696731567383 19.1661319732666 20.99697113037109 20.41724014282227 22.24807739257812 L 23.54503059387207 25.37586784362793 L 27.92393112182617 16.61805725097656 C 28.54949951171875 15.36694812774658 30.42617225646973 14.7413854598999 31.99006080627441 15.36694812774658 C 33.24118041992188 15.99249744415283 33.86674118041992 17.86917686462402 33.24118041992188 19.43306732177734 L 26.9855899810791 31.94423866271973 C 26.67282104492188 32.56978607177734 25.7344799041748 33.19534683227539 24.79614067077637 33.50812911987305 Z" stroke="none" fill="#000" />
                            </g>
                          </g>
                        </g>
                      </svg>                                            
                    </div>
                    <div className="info-card-title">
                      <h3>Trusted by 50L+ users</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* related card */}
        <div className="external-card" id="related_plroduct_list">
          {/* <div class="card-Carousel">
            <h3 class="heading-card">Add for Better Results</h3>
            <h4 class="subheading-card">To enhance the efficiency of achieving the goal</h4>
            <div class="glider-contain id="related_plroduct_list" >
                <ul class="card-Carousel-data" >
                    <li class="card-Carousels-inner">
                        <div class="card-figure__link">
                            <div class="card-img-container">
                                <img src="{{cdn 'webdav:images/checkout/card-image.png'}}" loading="lazy" alt="name">
                            </div>
                            <div class="tag-sections">
                                <span class="jdgm-star">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.412" height="21.315"
                                        viewBox="0 0 22.412 21.315">
                                        <g id="Rating" transform="translate(0.593 0.624)">
                                            <path id="Path_43" data-name="Path 43"
                                                d="M91.806,1290.659l3.28,6.645,7.333,1.066-5.306,5.173,1.253,7.3-6.559-3.448-6.559,3.448,1.253-7.3-5.306-5.173,7.333-1.066Z"
                                                transform="translate(-81.193 -1290.659)" fill="#80a03c" stroke="#80a03c"
                                                stroke-width="0.552" />
                                        </g>
                                    </svg>
                                </span>
                                <span class="jdgm-prev-badge__text">4/5</span>
                                <span class="countReview">(7.5k)</span>
                            </div>
                            <div class="tag-sectioCheckout">
                                <span class="groupBox">
                                    <span class="product-item-discount">37% OFF</span>
                                </span>
                            </div>
                        </div>
                        <div class="card-bodyChekout">
                            <h3 class="titles">Dia Free Juice & Aloe Garcinia Juice - Diabetes & Weight Care Combo</h3>
                            <div class="bodyBottom">
                                <p class="orignalPrice checkoutRightBottom">₹995</p>
                                <a href="javascript:void(0)" class="btn-add checkoutRightBottom">ADD</a>
                            </div>
                        </div>
                    </li>
                    <li class="card-Carousels-inner">
                      <div class="card-figure__link">
                          <div class="card-img-container">
                              <img src="{{cdn 'webdav:images/checkout/card-image.png'}}" loading="lazy" alt="name">
                          </div>
                          <div class="tag-sections">
                              <span class="jdgm-star">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="22.412" height="21.315"
                                      viewBox="0 0 22.412 21.315">
                                      <g id="Rating" transform="translate(0.593 0.624)">
                                          <path id="Path_43" data-name="Path 43"
                                              d="M91.806,1290.659l3.28,6.645,7.333,1.066-5.306,5.173,1.253,7.3-6.559-3.448-6.559,3.448,1.253-7.3-5.306-5.173,7.333-1.066Z"
                                              transform="translate(-81.193 -1290.659)" fill="#80a03c" stroke="#80a03c"
                                              stroke-width="0.552" />
                                      </g>
                                  </svg>
                              </span>
                              <span class="jdgm-prev-badge__text">4.57/5</span>
                              <span class="countReview">(7.5k)</span>
                          </div>
                          <div class="tag-sectioCheckout">
                              <span class="groupBox">
                                  <span class="product-item-discount">37% OFF</span>
                              </span>
                          </div>
                      </div>
                      <div class="card-bodyChekout">
                          <h3 class="titles">Dia Free Juice & Aloe Garcinia Juice - Diabetes & Weight Care Combo</h3>
                          <div class="bodyBottom">
                              <p class="orignalPrice checkoutRightBottom">₹995</p>
                              <a href="javascript:void(0)" class="btn-add checkoutRightBottom">ADD</a>
                          </div>
                      </div>
                    </li>
                    <li class="card-Carousels-inner">
                      <div class="card-figure__link">
                          <div class="card-img-container">
                              <img src="{{cdn 'webdav:images/checkout/card-image.png'}}" loading="lazy" alt="name">
                          </div>
                          <div class="tag-sections">
                              <span class="jdgm-star">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="22.412" height="21.315"
                                      viewBox="0 0 22.412 21.315">
                                      <g id="Rating" transform="translate(0.593 0.624)">
                                          <path id="Path_43" data-name="Path 43"
                                              d="M91.806,1290.659l3.28,6.645,7.333,1.066-5.306,5.173,1.253,7.3-6.559-3.448-6.559,3.448,1.253-7.3-5.306-5.173,7.333-1.066Z"
                                              transform="translate(-81.193 -1290.659)" fill="#80a03c" stroke="#80a03c"
                                              stroke-width="0.552" />
                                      </g>
                                  </svg>
                              </span>
                              <span class="jdgm-prev-badge__text">4.57/5</span>
                              <span class="countReview">(7.5k)</span>
                          </div>
                          <div class="tag-sectioCheckout">
                              <span class="groupBox">
                                  <span class="product-item-discount">37% OFF</span>
                              </span>
                          </div>
                      </div>
                      <div class="card-bodyChekout">
                          <h3 class="titles">Dia Free Juice & Aloe Garcinia Juice - Diabetes & Weight Care Combo</h3>
                          <div class="bodyBottom">
                              <p class="orignalPrice checkoutRightBottom">₹995</p>
                              <a href="javascript:void(0)" class="btn-add checkoutRightBottom">ADD</a>
                          </div>
                      </div>
                    </li>
                    <li class="card-Carousels-inner">
                      <div class="card-figure__link">
                          <div class="card-img-container">
                              <img src="{{cdn 'webdav:images/checkout/card-image.png'}}" loading="lazy" alt="name">
                          </div>
                          <div class="tag-sections">
                              <span class="jdgm-star">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="22.412" height="21.315"
                                      viewBox="0 0 22.412 21.315">
                                      <g id="Rating" transform="translate(0.593 0.624)">
                                          <path id="Path_43" data-name="Path 43"
                                              d="M91.806,1290.659l3.28,6.645,7.333,1.066-5.306,5.173,1.253,7.3-6.559-3.448-6.559,3.448,1.253-7.3-5.306-5.173,7.333-1.066Z"
                                              transform="translate(-81.193 -1290.659)" fill="#80a03c" stroke="#80a03c"
                                              stroke-width="0.552" />
                                      </g>
                                  </svg>
                              </span>
                              <span class="jdgm-prev-badge__text">4.57/5</span>
                              <span class="countReview">(7.5k)</span>
                          </div>
                          <div class="tag-sectioCheckout">
                              <span class="groupBox">
                                  <span class="product-item-discount">37% OFF</span>
                              </span>
                          </div>
                      </div>
                      <div class="card-bodyChekout">
                          <h3 class="titles">Dia Free Juice & Aloe Garcinia Juice - Diabetes & Weight Care Combo</h3>
                          <div class="bodyBottom">
                              <p class="orignalPrice checkoutRightBottom">₹995</p>
                              <a href="javascript:void(0)" class="btn-add checkoutRightBottom">ADD</a>
                          </div>
                      </div>
                    </li>
                    <li class="card-Carousels-inner">
                      <div class="card-figure__link">
                          <div class="card-img-container">
                              <img src="{{cdn 'webdav:images/checkout/card-image.png'}}" loading="lazy" alt="name">
                          </div>
                          <div class="tag-sections">
                              <span class="jdgm-star">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="22.412" height="21.315"
                                      viewBox="0 0 22.412 21.315">
                                      <g id="Rating" transform="translate(0.593 0.624)">
                                          <path id="Path_43" data-name="Path 43"
                                              d="M91.806,1290.659l3.28,6.645,7.333,1.066-5.306,5.173,1.253,7.3-6.559-3.448-6.559,3.448,1.253-7.3-5.306-5.173,7.333-1.066Z"
                                              transform="translate(-81.193 -1290.659)" fill="#80a03c" stroke="#80a03c"
                                              stroke-width="0.552" />
                                      </g>
                                  </svg>
                              </span>
                              <span class="jdgm-prev-badge__text">4.57/5</span>
                              <span class="countReview">(7.5k)</span>
                          </div>
                          <div class="tag-sectioCheckout">
                              <span class="groupBox">
                                  <span class="product-item-discount">37% OFF</span>
                              </span>
                          </div>
                      </div>
                      <div class="card-bodyChekout">
                          <h3 class="titles">Dia Free Juice & Aloe Garcinia Juice - Diabetes & Weight Care Combo</h3>
                          <div class="bodyBottom">
                              <p class="orignalPrice checkoutRightBottom">₹995</p>
                              <a href="javascript:void(0)" class="btn-add checkoutRightBottom">ADD</a>
                          </div>
                      </div>
                    </li>
                    <li class="card-Carousels-inner">
                      <div class="card-figure__link">
                          <div class="card-img-container">
                              <img src="{{cdn 'webdav:images/checkout/card-image.png'}}" loading="lazy" alt="name">
                          </div>
                          <div class="tag-sections">
                              <span class="jdgm-star">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="22.412" height="21.315"
                                      viewBox="0 0 22.412 21.315">
                                      <g id="Rating" transform="translate(0.593 0.624)">
                                          <path id="Path_43" data-name="Path 43"
                                              d="M91.806,1290.659l3.28,6.645,7.333,1.066-5.306,5.173,1.253,7.3-6.559-3.448-6.559,3.448,1.253-7.3-5.306-5.173,7.333-1.066Z"
                                              transform="translate(-81.193 -1290.659)" fill="#80a03c" stroke="#80a03c"
                                              stroke-width="0.552" />
                                      </g>
                                  </svg>
                              </span>
                              <span class="jdgm-prev-badge__text">4.57/5</span>
                              <span class="countReview">(7.5k)</span>
                          </div>
                          <div class="tag-sectioCheckout">
                              <span class="groupBox">
                                  <span class="product-item-discount">37% OFF</span>
                              </span>
                          </div>
                      </div>
                      <div class="card-bodyChekout">
                          <h3 class="titles">Dia Free Juice & Aloe Garcinia Juice - Diabetes & Weight Care Combo</h3>
                          <div class="bodyBottom">
                              <p class="orignalPrice checkoutRightBottom">₹995</p>
                              <a href="javascript:void(0)" class="btn-add checkoutRightBottom">ADD</a>
                          </div>
                      </div>
                    </li>
                </ul>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default index