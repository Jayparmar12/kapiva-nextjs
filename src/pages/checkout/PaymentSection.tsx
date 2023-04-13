import axios from 'axios'
import { method } from 'lodash'
import React, { useEffect, useState } from 'react'

function PaymentSection() {
  const url = "http://localhost"
  const [cart, cartId] = useState("6d55d441-446e-4980-a35c-f99e13faa09d")
  const [methods, setmethods] = useState(null)
  const [availableMethods, setAvailableMethods] = useState(null)
  const [activeMethod, setActiveMethod] = useState("UPI")

  useEffect(() => {
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8001/payment/juspay/payment-method/list',
      headers: { }
    };
    
    axios.request(config)
    .then((response) => {
      setAvailableMethods(Object.keys(response.data).map(key => key))
      setmethods(response.data);
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error);
    });

  }, [])  

  return (
    <>
    {(methods == null)? "Please Wait" : (
    <div className="paymentMethod">
    <span className="sub-checkoutloader" style={{display: 'none'}}><span className="checkoutsubloader" /></span>
    <h3 className="Head">Choose Payment Method</h3>
    <p className="sub-head" id="sub_head">Extra 12% off. 100% Secure Payments, Easy Return Policy</p>
    {/* <div id="online_payment_block">
              <input type="radio" id="online" name="orders" value="online" >
              <label for="online">Pay Online</label><br>
          </div>
          <div id="cash_payment_block">
            <input type="radio" id="cod" name="orders" value="cod" checked>
            <label for="cod">COD</label>
          </div> */}
    <div className="payment">
      <ul className="desktop-tab tabs" data-tab>
      {availableMethods.map(method => {
          console.log("test", method)
          if(method === "UPI"){

            return (
            <li className={`tab ${(activeMethod == "UPI") ? "is-active" : null}`} id="li-upi" key={method} onClick={e => setActiveMethod("UPI")}>
            <a className="tab-title" aria-selected="true" tabIndex={0}>
              <svg width={18} height={22} viewBox="0 0 18 22" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.7492 0L5.5 22L17.4167 11.003L11.7492 0Z" />
                <path d="M10.803 10.806L1.73999 19.1696L6.49489 2.4379L10.803 10.806Z" fillOpacity="0.3" strokeWidth="1.8" />
              </svg>
              upi
            </a>
          </li>)
          }else if(method === "CARD"){

            return (<li className={`tab ${(activeMethod == "CARD") ? "is-active" : null}`} id="li-card" onClick={e => setActiveMethod("CARD")}> 
            <a className="tab-title"  aria-selected="false" tabIndex={0} key={method}>
              <svg width={20} height={16} viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.3" x={2} y={2} width={16} height={2} />
                <rect opacity="0.3" x={2} y={8} width={16} height={6} />
                <path fillRule="evenodd" clipRule="evenodd" d="M18 0H2C0.89 0 0.01 0.89 0.01 2L0 14C0 15.11 0.89 16 2 16H18C19.11 16 20 15.11 20 14V2C20 0.89 19.11 0 18 0ZM18 14H2V8H18V14ZM2 4H18V2H2V4Z" />
              </svg>
              credit / debit card</a>
          </li>)
          }else if(method === "WALLET"){

            return (<li className={`tab ${(activeMethod == "WALLET") ? "is-active" : null}`} id="li-wallets" onClick={e => setActiveMethod("WALLET")}>
            <a className="tab-title"  aria-selected="false" key={method}>
              <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M10 2C5.59 2 2 5.59 2 10C2 14.41 5.59 18 10 18C14.41 18 18 14.41 18 10C18 5.59 14.41 2 10 2ZM7 8.5V11H11V13H7V15.5L3.5 12L7 8.5ZM13 9V11.5L16.5 8L13 4.5V7H9V9H13Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M0 10C0 4.48 4.48 0 10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10ZM2 10C2 14.41 5.59 18 10 18C14.41 18 18 14.41 18 10C18 5.59 14.41 2 10 2C5.59 2 2 5.59 2 10Z" />
                <path d="M13 4.5V7H9V9H13V11.5L16.5 8L13 4.5Z" />
                <path d="M7 8.5L3.5 12L7 15.5V13H11V11H7V8.5Z" />
              </svg>
              wallets</a>
          </li>)
          }else if(method === "CARD"){

            return (<li className={`tab ${(activeMethod == "CARD") ? "is-active" : null}`} id="li-card" onClick={e => setActiveMethod("CARD")}> 
            <a className="tab-title"  aria-selected="false" tabIndex={0} key={method}>
              <svg width={20} height={16} viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.3" x={2} y={2} width={16} height={2} />
                <rect opacity="0.3" x={2} y={8} width={16} height={6} />
                <path fillRule="evenodd" clipRule="evenodd" d="M18 0H2C0.89 0 0.01 0.89 0.01 2L0 14C0 15.11 0.89 16 2 16H18C19.11 16 20 15.11 20 14V2C20 0.89 19.11 0 18 0ZM18 14H2V8H18V14ZM2 4H18V2H2V4Z" />
              </svg>
              credit / debit card</a>
          </li>)
          }else if(method === "NB"){

            return (<li className={`tab ${(activeMethod == "NB") ? "is-active" : null}`} id="li-netbanking" onClick={e => setActiveMethod("NB")}>
            <a className="tab-title"  aria-selected="false" key={method}>
              <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.3" d="M6.29004 6.00001L11.5 3.26001L16.71 6.00001H6.29004Z" />
                <path d="M6.5 10H4.5V17H6.5V10V10Z" />
                <path d="M12.5 10H10.5V17H12.5V10V10Z" />
                <path d="M21 19H2V21H21V19V19Z" />
                <path d="M18.5 10H16.5V17H18.5V10V10Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M2 6L11.5 1L21 6V8H2V6ZM11.5 3.26L6.29 6H16.71L11.5 3.26Z" />
              </svg>
              netbanking</a>
          </li>)
          }
        })}
        
        
        
        
        <li className="tab" id="li-cred">
          <a className="tab-title" href="#tab-cred" aria-selected="false">
            <svg width={178} height={202} viewBox="0 0 178 202" xmlns="http://www.w3.org/2000/svg">
              <path d="M89.4324 201.41C88.3185 201.414 87.2229 201.128 86.2546 200.58L3.66056 154.32C2.66111 153.759 1.82976 152.944 1.25185 151.958C0.673939 150.972 0.370294 149.851 0.37209 148.71V6.43C0.37209 4.72466 1.05336 3.08916 2.26603 1.8833C3.47871 0.677444 5.12344 0 6.83842 0L172.016 0C173.731 0 175.376 0.677444 176.589 1.8833C177.801 3.08916 178.483 4.72466 178.483 6.43V148.71C178.484 149.851 178.181 150.972 177.603 151.958C177.025 152.944 176.194 153.759 175.194 154.32L92.6002 200.58C91.635 201.126 90.543 201.412 89.4324 201.41V201.41ZM13.3047 145L89.4324 187.64L165.55 145V12.86H13.3047V145Z" />
              <path d="M89.4324 137C88.3191 136.999 87.2248 136.713 86.2546 136.17L60.1077 121.51C59.1085 120.951 58.2767 120.137 57.6972 119.153C57.1176 118.169 56.8112 117.05 56.8092 115.91V89H69.7418V112.21L89.4425 123.21L112.422 110.33L118.767 121.53L92.6203 136.19C91.6454 136.728 90.5474 137.007 89.4324 137V137Z" />
              <path d="M89.4324 169.21C88.3191 169.209 87.2248 168.923 86.2546 168.38L31.8791 137.92C30.8811 137.36 30.0507 136.546 29.4729 135.562C28.8951 134.578 28.5906 133.459 28.5906 132.32V62.54C28.5906 60.8346 29.2719 59.1991 30.4846 57.9933C31.6972 56.7874 33.342 56.11 35.0569 56.11H114.916V69H41.5032V128.59L89.4123 155.43L137.311 128.59V100.71H150.244V132.32C150.244 133.459 149.94 134.578 149.362 135.562C148.784 136.546 147.954 137.36 146.956 137.92L92.5801 168.38C91.6189 168.918 90.5356 169.204 89.4324 169.21Z" />
              <path d="M150.264 76.13H137.332V40.92H51.4792V28.06H143.808C145.523 28.06 147.168 28.7374 148.38 29.9433C149.593 31.1492 150.274 32.7847 150.274 34.49L150.264 76.13Z" />
            </svg>
            cred</a>
        </li>
        <li className="tab" id="li-cash" style={{display: 'block'}}>
          <a className="tab-title" href="#tab-cash" aria-selected="false">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={40} height={34} viewBox="0 0 1902 1024">
              <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit={4} strokeWidth="97.5238" d="M243.81 243.81h292.571" />
              <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit={4} strokeWidth="97.5238" d="M195.048 633.905h195.048" />
              <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit={4} strokeWidth="97.5238" d="M48.762 438.857h390.095" />
              <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit={4} strokeWidth="97.5238" d="M1706.667 828.952c0 80.791-65.494 146.286-146.286 146.286s-146.286-65.494-146.286-146.286c0-80.791 65.494-146.286 146.286-146.286s146.286 65.494 146.286 146.286z" />
              <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit={4} strokeWidth="97.5238" d="M875.764 858.21c1.961-8.981 3.084-19.298 3.084-29.877 0-80.791-65.494-146.286-146.286-146.286-17.538 0-34.355 3.086-49.938 8.745l1.018-0.323c-42.827 14.504-75.97 47.487-90.394 89.202l-0.303 1.007c-3.313 11.623-5.217 24.972-5.217 38.766 0 80.98 65.647 146.627 146.627 146.627 67.186 0 123.818-45.188 141.161-106.829l0.248-1.032z" />
              <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit={4} strokeWidth="97.5238" d="M1365.333 828.952h-487.619" />
              <path fill="none" fillRule="evenodd" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit={4} strokeWidth="97.5238" d="M388.145 48.762h992.305c45.597 0.123 85.477 24.485 107.448 60.876l0.316 0.564 167.741 279.893 112.152 54.126c49.651 26.259 82.906 77.576 82.906 136.661 0 0.641-0.004 1.281-0.012 1.92l0.001-0.097v195.048c0 26.93-21.831 48.762-48.762 48.762v0h-97.524" />
              <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit={4} strokeWidth="97.5238" d="M582.217 828.952h-191.147" />
              <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit={4} strokeWidth="97.5238" d="M1657.905 390.095h-487.619v-341.333" />
              <path d="M694.37 466.164c-7.603 37.448-40.259 65.238-79.406 65.238-2.774 0-5.516-0.14-8.218-0.412l0.34 0.028c-1.082 0.046-2.351 0.072-3.627 0.072-50.36 0-91.185-40.825-91.185-91.185 0-3.979 0.255-7.898 0.749-11.742l-0.048 0.455c-0.175-2.189-0.275-4.74-0.275-7.315 0-53.861 43.663-97.524 97.524-97.524 0.097 0 0.193 0 0.289 0h-0.015c2.443-0.275 5.275-0.432 8.143-0.432 38.573 0 70.525 28.347 76.161 65.345l0.054 0.428h-43.398c-4.098-18.066-20.018-31.351-39.041-31.351-1.19 0-2.368 0.052-3.532 0.154l0.151-0.011c-36.084 0-48.762 32.67-48.762 69.242s11.703 69.73 48.762 69.73c0.757 0.051 1.641 0.080 2.532 0.080 18.825 0 34.611-13.009 38.86-30.527l0.056-0.273z" />
              <path d="M894.293 426.667c0.175 2.189 0.275 4.74 0.275 7.315 0 53.861-43.663 97.524-97.524 97.524-0.097 0-0.193 0-0.289 0h0.015c-1.172 0.052-2.547 0.082-3.929 0.082-51.976 0-94.11-42.135-94.11-94.11 0-3.464 0.187-6.884 0.552-10.252l-0.037 0.417c-0.131-1.896-0.206-4.109-0.206-6.339 0-53.861 43.663-97.524 97.524-97.524 0.073 0 0.145 0 0.218 0h-0.011c1.305-0.065 2.833-0.102 4.371-0.102 51.706 0 93.623 41.916 93.623 93.623 0 3.299-0.171 6.558-0.503 9.769l0.034-0.402zM744.107 426.667c0 39.497 17.067 69.242 52.663 69.242s52.663-32.67 52.663-68.267-15.604-68.267-53.15-68.267-52.175 27.794-52.175 67.291z" />
              <path d="M910.872 326.705h79.97c1.81-0.127 3.922-0.2 6.051-0.2 50.629 0 91.672 41.043 91.672 91.672 0 2.129-0.073 4.241-0.215 6.334l0.015-0.283c0.112 1.749 0.176 3.793 0.176 5.852 0 53.861-43.663 97.524-97.524 97.524-0.062 0-0.124 0-0.185 0h-78.009zM954.27 492.983h32.67c38.522 0 55.589-28.77 55.589-67.779s-15.604-63.39-55.101-63.39h-33.158z" />
            </svg>
            cash on delivery</a>
        </li>
      </ul>
      <div className="payment-tabs-contents tabs-contents">
        <div className={`tab-content tab-mobile-content ${(activeMethod == "UPI") ? "is-active" : null}`} id="tab-upi" aria-hidden="false">
          <button className="mobile-tab">
            <svg width={18} height={22} viewBox="0 0 18 22" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.7492 0L5.5 22L17.4167 11.003L11.7492 0Z" />
              <path d="M10.803 10.806L1.73999 19.1696L6.49489 2.4379L10.803 10.806Z" fillOpacity="0.3" strokeWidth="1.8" />
            </svg>
            UPI
            <span className="mobile-dropdown">
              <svg xmlns="http://www.w3.org/2000/svg" width="17.233" height="11.177" viewBox="0 0 17.233 11.177">
                <g id="Dropdown" transform="translate(16.13 10.161) rotate(180)">
                  <path id="Path_64" data-name="Path 64" d="M362.423,4535.025l-7.71,7.642-7.364-8" transform="translate(-347.349 -4534.667)" fill="none" stroke="#80a03c" strokeWidth={3} />
                </g>
              </svg>
            </span>
          </button>
          <div className="payment-tab-content">
            <p className="payment-title">UPI</p>
            <form className="form payment-form">
              <div className="payment-card form-field">
                <label htmlFor="upi-card-number" id="upi-card-label" className="form-label">UPI ID / VPA</label>
                <div className="upi-verify">
                  <input id="upi-card-number" type="tel" className="form-input " inputMode="text" name="upiCardNumber" placeholder="e.g name@upi" />
                  <div className="upi-verify-sub-btn">
                    <span className="verify-loader" /> 
                    <button className="upi-verify-btn" type="button">verify</button>
                  </div>
                  <span className="invalid-pay-id">invalid upi id</span>
                  <span className="valid-pay-id">successfull</span>
                </div>
                <span className="upi-info">A collect request will be sent to this UPI ID</span>
              </div>
              <button className="payment-card-btn">Proceed to Pay</button>
            </form>
          </div>
        </div>
        <div className={`tab-content tab-mobile-content ${(activeMethod == "CARD") ? "is-active" : null}`} id="tab-card" aria-hidden="true">
          <button className="mobile-tab">
            <svg width={20} height={16} viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.3" x={2} y={2} width={16} height={2} />
              <rect opacity="0.3" x={2} y={8} width={16} height={6} />
              <path fillRule="evenodd" clipRule="evenodd" d="M18 0H2C0.89 0 0.01 0.89 0.01 2L0 14C0 15.11 0.89 16 2 16H18C19.11 16 20 15.11 20 14V2C20 0.89 19.11 0 18 0ZM18 14H2V8H18V14ZM2 4H18V2H2V4Z" />
            </svg>
            credit / debit card
            <span className="mobile-dropdown">
              <svg xmlns="http://www.w3.org/2000/svg" width="17.233" height="11.177" viewBox="0 0 17.233 11.177">
                <g id="Dropdown" transform="translate(16.13 10.161) rotate(180)">
                  <path id="Path_64" data-name="Path 64" d="M362.423,4535.025l-7.71,7.642-7.364-8" transform="translate(-347.349 -4534.667)" fill="none" stroke="#80a03c" strokeWidth={3} />
                </g>
              </svg>
            </span>
          </button>
          <div className="payment-tab-content">
            <p className="payment-title">Enter credit / debit card details</p>
            <form className="juspay_inline_form" id="payment_form">
              <input type="hidden" className="merchant_id" defaultValue="kapiva" />
              <input type="hidden" className="order_id" defaultValue={141839447800} />
              <div className="card_number_div invalid"><iframe src="https://sandbox.juspay.in/iframe-element" frameBorder={0}  scrolling="no" name="card_number_iframe_kuBG6YH58MyWX9P2" className="card_number_iframe" style={{border: 'none', margin: '0px', padding: '0px', height: '100%', width: '100%', float: 'left', overflow: 'hidden', display: 'block'}} /></div>
              <div className="name_on_card_div"><iframe src="https://sandbox.juspay.in/iframe-element" frameBorder={0}  scrolling="no" name="name_on_card_iframe_kuBG6YH58MyWX9P2" className="name_on_card_iframe" style={{border: 'none', margin: '0px', padding: '0px', height: '100%', width: '100%', float: 'left', overflow: 'hidden', display: 'block'}} /></div>
              <div className="card_exp_month_div"><iframe src="https://sandbox.juspay.in/iframe-element" frameBorder={0}  scrolling="no" name="card_exp_month_iframe_kuBG6YH58MyWX9P2" className="card_exp_month_iframe" style={{border: 'none', margin: '0px', padding: '0px', height: '100%', width: '100%', float: 'left', overflow: 'hidden', display: 'block'}} /></div> <div className="juspay_dash">—</div> <div className="card_exp_year_div"><iframe src="https://sandbox.juspay.in/iframe-element" frameBorder={0}  scrolling="no" name="card_exp_year_iframe_kuBG6YH58MyWX9P2" className="card_exp_year_iframe" style={{border: 'none', margin: '0px', padding: '0px', height: '100%', width: '100%', float: 'left', overflow: 'hidden', display: 'block'}} /></div>
              <div className="security_code_div"><iframe src="https://sandbox.juspay.in/iframe-element" frameBorder={0}  scrolling="no" name="security_code_iframe_kuBG6YH58MyWX9P2" className="security_code_iframe" style={{border: 'none', margin: '0px', padding: '0px', height: '100%', width: '100%', float: 'left', overflow: 'hidden', display: 'block'}} /></div>
              {/* <div>
                      <input type="checkbox"  class="juspay_locker_save"> <span >Save card information</span>
                    </div>
                    <div>
                      <input type="checkbox" class="tokenize"> <span>Merchant hosted consent screen</span>
                    </div> */}
              <input type="hidden" className="redirect" defaultValue="true" />
              {/* <input type="hidden" class="offers" value="62dc1489-6d961ef28bc02617, de2f321f-c4ce-478a-bcca"/>  */}
              <input type="hidden" className="payment_channel" defaultValue="WEB" />
              {/* <input type="radio" class="auth_type" value="" name="auth_type"> Verify with Secure Password */}
              {/* <button type="submit" id="common_pay_btn" style="display: none;">Make Payment</button> */}
              <div>
                <button className="payment-card-btn" type="button" id="card_payment">Make Payment</button>
              </div>
              {/* <button class="payment-card-btn" type="submit" id="common_pay_btn">Make Payment</button> */}
            </form>
          </div>
        </div>
        <div className={`tab-content tab-mobile-content ${(activeMethod == "WALLET") ? "is-active" : null}`} id="tab-wallets" aria-hidden="true">
          <button className="mobile-tab">
            <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M10 2C5.59 2 2 5.59 2 10C2 14.41 5.59 18 10 18C14.41 18 18 14.41 18 10C18 5.59 14.41 2 10 2ZM7 8.5V11H11V13H7V15.5L3.5 12L7 8.5ZM13 9V11.5L16.5 8L13 4.5V7H9V9H13Z" />
              <path fillRule="evenodd" clipRule="evenodd" d="M0 10C0 4.48 4.48 0 10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10ZM2 10C2 14.41 5.59 18 10 18C14.41 18 18 14.41 18 10C18 5.59 14.41 2 10 2C5.59 2 2 5.59 2 10Z" />
              <path d="M13 4.5V7H9V9H13V11.5L16.5 8L13 4.5Z" />
              <path d="M7 8.5L3.5 12L7 15.5V13H11V11H7V8.5Z" />
            </svg>
            wallets
            <span className="mobile-dropdown">
              <svg xmlns="http://www.w3.org/2000/svg" width="17.233" height="11.177" viewBox="0 0 17.233 11.177">
                <g id="Dropdown" transform="translate(16.13 10.161) rotate(180)">
                  <path id="Path_64" data-name="Path 64" d="M362.423,4535.025l-7.71,7.642-7.364-8" transform="translate(-347.349 -4534.667)" fill="none" stroke="#80a03c" strokeWidth={3} />
                </g>
              </svg>
            </span>
          </button>
          <div className="payment-tab-content">
            <p className="payment-title">wallets</p>
            <div className="paymemnt-options" id="wallet_options">
              <div className="payment-select">
                <div className="pay-card">
                  <div className="pay-img">
                    <img src="https://cdn11.bigcommerce.com/s-ad1xf4xgb0/images/stencil/original/image-manager/bank-1.png" alt="paytm" />
                  </div>
                  <div className="pay-title">
                    <article>paytm</article>
                  </div>
                  <label className="pay-radio">
                    <input type="checkbox" className="pay-checkbox" />
                    <span className="pay-check" />
                  </label>
                </div>
                <div className="pay-btn">
                  <button className="payment-card-btn">Proceed to Pay</button>
                </div>
              </div>
              <div className="payment-select">
                <div className="pay-card">
                  <div className="pay-img">
                    <img src="https://cdn11.bigcommerce.com/s-ad1xf4xgb0/images/stencil/original/image-manager/bank-1.png" alt="paytm" />
                  </div>
                  <div className="pay-title">
                    <article>paytm</article>
                  </div>
                  <label className="pay-radio">
                    <input type="checkbox" className="pay-checkbox" />
                    <span className="pay-check" />
                  </label>
                </div>
                <div className="pay-btn">
                  <button className="payment-card-btn">Proceed to Pay</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`tab-content tab-mobile-content ${(activeMethod == "NB") ? "is-active" : null}`} id="tab-netbanking" aria-hidden="true">
          <button className="mobile-tab">
            <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.3" d="M6.29004 6.00001L11.5 3.26001L16.71 6.00001H6.29004Z" />
              <path d="M6.5 10H4.5V17H6.5V10V10Z" />
              <path d="M12.5 10H10.5V17H12.5V10V10Z" />
              <path d="M21 19H2V21H21V19V19Z" />
              <path d="M18.5 10H16.5V17H18.5V10V10Z" />
              <path fillRule="evenodd" clipRule="evenodd" d="M2 6L11.5 1L21 6V8H2V6ZM11.5 3.26L6.29 6H16.71L11.5 3.26Z" />
            </svg>
            netbanking
            <span className="mobile-dropdown">
              <svg xmlns="http://www.w3.org/2000/svg" width="17.233" height="11.177" viewBox="0 0 17.233 11.177">
                <g id="Dropdown" transform="translate(16.13 10.161) rotate(180)">
                  <path id="Path_64" data-name="Path 64" d="M362.423,4535.025l-7.71,7.642-7.364-8" transform="translate(-347.349 -4534.667)" fill="none" stroke="#80a03c" strokeWidth={3} />
                </g>
              </svg>
            </span>
          </button>
          <div className="payment-tab-content">
            <p className="payment-title">net banking</p>
            <div>
              <div className="main-banks">
                <div className="main-payment-select">
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
              </div>
              <div>
                <p className="more-banks">more banks</p>
                <form className="search-banks form">
                  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 13.7182L11.5755 10.3419C11.9917 9.8261 12.3246 9.22236 12.5743 8.53068C12.824 7.839 12.9489 7.11802 12.9489 6.36772C12.9489 5.48847 12.7765 4.66198 12.4316 3.88824C12.0987 3.11449 11.6379 2.44041 11.0493 1.86596C10.4608 1.29152 9.77408 0.834311 8.9893 0.494333C8.20451 0.166078 7.36623 0.00195312 6.47443 0.00195312C5.58263 0.00195312 4.74436 0.166078 3.95957 0.494333C3.17479 0.834311 2.48811 1.29152 1.89952 1.86596C1.31094 2.44041 0.85018 3.11449 0.517241 3.88824C0.172412 4.66198 0 5.48847 0 6.36772C0 7.2587 0.172412 8.09105 0.517241 8.86479C0.85018 9.63853 1.31094 10.3126 1.89952 10.8871C2.48811 11.4615 3.17479 11.9187 3.95957 12.2587C4.74436 12.5869 5.58263 12.7511 6.47443 12.7511C7.23544 12.7511 7.95481 12.628 8.63258 12.3818C9.31035 12.1356 9.9346 11.8073 10.5054 11.397L13.9298 14.7733C14.0131 14.8554 14.1052 14.914 14.2063 14.9492C14.3074 14.9844 14.3936 15.002 14.4649 15.002C14.5363 15.002 14.6225 14.9844 14.7235 14.9492C14.8246 14.914 14.9168 14.8554 15 14.7733C15.1546 14.6209 15.2319 14.4451 15.2319 14.2458C15.2319 14.0465 15.1546 13.8707 15 13.7182ZM1.53389 6.36772C1.53389 5.69949 1.65874 5.06643 1.90844 4.46854C2.17004 3.88237 2.52378 3.36655 2.96968 2.92106C3.41558 2.47557 3.94173 2.12974 4.54816 1.88355C5.14269 1.62563 5.78478 1.49668 6.47443 1.49668C7.16409 1.49668 7.80618 1.62563 8.40071 1.88355C9.00714 2.12974 9.53329 2.47557 9.97919 2.92106C10.4251 3.36655 10.7788 3.88237 11.0404 4.46854C11.2901 5.06643 11.415 5.69949 11.415 6.36772C11.415 7.04768 11.2901 7.68073 11.0404 8.2669C10.7907 8.85307 10.434 9.37475 9.97027 9.83197C9.51843 10.2775 8.99525 10.6262 8.40071 10.8783C7.80618 11.1303 7.16409 11.2563 6.47443 11.2563C5.78478 11.2563 5.14269 11.1274 4.54816 10.8695C3.94173 10.6116 3.41558 10.2628 2.96968 9.82317C2.52378 9.38355 2.17004 8.86479 1.90844 8.2669C1.65874 7.68073 1.53389 7.04768 1.53389 6.36772Z" />
                  </svg>
                  <input id="search_banks" type="text" className="form-input " placeholder="Search banks" />
                </form>
                <div className="paymemnt-options" id="nb_list">
                  <div className="payment-select">
                    <div className="pay-card">
                      <div className="pay-img">
                        <img src="https://cdn11.bigcommerce.com/s-2qk49wb9fq/stencil/e14be4b0-b432-013b-0130-6656f36aa988/e/2c199560-b9ab-013b-8e13-7653c6127534/img/paytm.png" alt="paytm" />
                      </div>
                      <div className="pay-title">
                        <article>paytm</article>
                      </div>
                      <label className="pay-radio">
                        <input type="checkbox" className="pay-checkbox" />
                        <span className="pay-check" />
                      </label>
                    </div>
                    <div className="pay-btn">
                      <button className="payment-card-btn">Proceed to Pay</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`tab-content tab-mobile-content ${(activeMethod == "CRED") ? "is-active" : null}`}id="tab-cred" aria-hidden="true">
          <button className="mobile-tab">
            <svg width={178} height={202} viewBox="0 0 178 202" xmlns="http://www.w3.org/2000/svg">
              <path d="M89.4324 201.41C88.3185 201.414 87.2229 201.128 86.2546 200.58L3.66056 154.32C2.66111 153.759 1.82976 152.944 1.25185 151.958C0.673939 150.972 0.370294 149.851 0.37209 148.71V6.43C0.37209 4.72466 1.05336 3.08916 2.26603 1.8833C3.47871 0.677444 5.12344 0 6.83842 0L172.016 0C173.731 0 175.376 0.677444 176.589 1.8833C177.801 3.08916 178.483 4.72466 178.483 6.43V148.71C178.484 149.851 178.181 150.972 177.603 151.958C177.025 152.944 176.194 153.759 175.194 154.32L92.6002 200.58C91.635 201.126 90.543 201.412 89.4324 201.41V201.41ZM13.3047 145L89.4324 187.64L165.55 145V12.86H13.3047V145Z" />
              <path d="M89.4324 137C88.3191 136.999 87.2248 136.713 86.2546 136.17L60.1077 121.51C59.1085 120.951 58.2767 120.137 57.6972 119.153C57.1176 118.169 56.8112 117.05 56.8092 115.91V89H69.7418V112.21L89.4425 123.21L112.422 110.33L118.767 121.53L92.6203 136.19C91.6454 136.728 90.5474 137.007 89.4324 137V137Z" />
              <path d="M89.4324 169.21C88.3191 169.209 87.2248 168.923 86.2546 168.38L31.8791 137.92C30.8811 137.36 30.0507 136.546 29.4729 135.562C28.8951 134.578 28.5906 133.459 28.5906 132.32V62.54C28.5906 60.8346 29.2719 59.1991 30.4846 57.9933C31.6972 56.7874 33.342 56.11 35.0569 56.11H114.916V69H41.5032V128.59L89.4123 155.43L137.311 128.59V100.71H150.244V132.32C150.244 133.459 149.94 134.578 149.362 135.562C148.784 136.546 147.954 137.36 146.956 137.92L92.5801 168.38C91.6189 168.918 90.5356 169.204 89.4324 169.21Z" />
              <path d="M150.264 76.13H137.332V40.92H51.4792V28.06H143.808C145.523 28.06 147.168 28.7374 148.38 29.9433C149.593 31.1492 150.274 32.7847 150.274 34.49L150.264 76.13Z" />
            </svg>
            cred
            <span className="mobile-dropdown">
              <svg xmlns="http://www.w3.org/2000/svg" width="17.233" height="11.177" viewBox="0 0 17.233 11.177">
                <g id="Dropdown" transform="translate(16.13 10.161) rotate(180)">
                  <path id="Path_64" data-name="Path 64" d="M362.423,4535.025l-7.71,7.642-7.364-8" transform="translate(-347.349 -4534.667)" fill="none" stroke="#80a03c" strokeWidth={3} />
                </g>
              </svg>
            </span>
          </button>
          <div className="payment-tab-content">
            <p className="payment-title">cred</p>
            <div className="paymemnt-options">
              <div className="payment-select cred-btn" id="cred-select">
                <div className="pay-card">
                  <div className="pay-img">
                    <img src="https://cdn11.bigcommerce.com/s-2qk49wb9fq/stencil/e14be4b0-b432-013b-0130-6656f36aa988/e/2c199560-b9ab-013b-8e13-7653c6127534/img/cred.png" alt="cred" />
                  </div>
                  <div className="pay-title">
                    <article>cred</article>
                  </div>
                  <label className="pay-radio">
                    <input type="checkbox" className="pay-checkbox"  />
                    <span className="pay-check" id="pay-cred" />
                  </label>
                </div>
                <div className="pay-btn">
                  <button className="payment-card-btn">Proceed to Pay</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`tab-content tab-mobile-content ${(activeMethod == "COD") ? "is-active" : null}`} id="tab-cash" aria-hidden="true">
          <button className="mobile-tab">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={30} height={24} viewBox="0 0 1902 1024">
              <title />
              <g id="icomoon-ignore">
              </g>
              <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit={4} strokeWidth="97.5238" d="M243.81 243.81h292.571" />
              <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit={4} strokeWidth="97.5238" d="M195.048 633.905h195.048" />
              <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit={4} strokeWidth="97.5238" d="M48.762 438.857h390.095" />
              <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit={4} strokeWidth="97.5238" d="M1706.667 828.952c0 80.791-65.494 146.286-146.286 146.286s-146.286-65.494-146.286-146.286c0-80.791 65.494-146.286 146.286-146.286s146.286 65.494 146.286 146.286z" />
              <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit={4} strokeWidth="97.5238" d="M875.764 858.21c1.961-8.981 3.084-19.298 3.084-29.877 0-80.791-65.494-146.286-146.286-146.286-17.538 0-34.355 3.086-49.938 8.745l1.018-0.323c-42.827 14.504-75.97 47.487-90.394 89.202l-0.303 1.007c-3.313 11.623-5.217 24.972-5.217 38.766 0 80.98 65.647 146.627 146.627 146.627 67.186 0 123.818-45.188 141.161-106.829l0.248-1.032z" />
              <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit={4} strokeWidth="97.5238" d="M1365.333 828.952h-487.619" />
              <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit={4} strokeWidth="97.5238" d="M388.145 48.762h992.305c45.597 0.123 85.477 24.485 107.448 60.876l0.316 0.564 167.741 279.893 112.152 54.126c49.651 26.259 82.906 77.576 82.906 136.661 0 0.641-0.004 1.281-0.012 1.92l0.001-0.097v195.048c0 26.93-21.831 48.762-48.762 48.762v0h-97.524" />
              <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit={4} strokeWidth="97.5238" d="M582.217 828.952h-191.147" />
              <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit={4} strokeWidth="97.5238" d="M1657.905 390.095h-487.619v-341.333" />
              <path d="M694.37 466.164c-7.603 37.448-40.259 65.238-79.406 65.238-2.774 0-5.516-0.14-8.218-0.412l0.34 0.028c-1.082 0.046-2.351 0.072-3.627 0.072-50.36 0-91.185-40.825-91.185-91.185 0-3.979 0.255-7.898 0.749-11.742l-0.048 0.455c-0.175-2.189-0.275-4.74-0.275-7.315 0-53.861 43.663-97.524 97.524-97.524 0.097 0 0.193 0 0.289 0h-0.015c2.443-0.275 5.275-0.432 8.143-0.432 38.573 0 70.525 28.347 76.161 65.345l0.054 0.428h-43.398c-4.098-18.066-20.018-31.351-39.041-31.351-1.19 0-2.368 0.052-3.532 0.154l0.151-0.011c-36.084 0-48.762 32.67-48.762 69.242s11.703 69.73 48.762 69.73c0.757 0.051 1.641 0.080 2.532 0.080 18.825 0 34.611-13.009 38.86-30.527l0.056-0.273z" />
              <path d="M894.293 426.667c0.175 2.189 0.275 4.74 0.275 7.315 0 53.861-43.663 97.524-97.524 97.524-0.097 0-0.193 0-0.289 0h0.015c-1.172 0.052-2.547 0.082-3.929 0.082-51.976 0-94.11-42.135-94.11-94.11 0-3.464 0.187-6.884 0.552-10.252l-0.037 0.417c-0.131-1.896-0.206-4.109-0.206-6.339 0-53.861 43.663-97.524 97.524-97.524 0.073 0 0.145 0 0.218 0h-0.011c1.305-0.065 2.833-0.102 4.371-0.102 51.706 0 93.623 41.916 93.623 93.623 0 3.299-0.171 6.558-0.503 9.769l0.034-0.402zM744.107 426.667c0 39.497 17.067 69.242 52.663 69.242s52.663-32.67 52.663-68.267-15.604-68.267-53.15-68.267-52.175 27.794-52.175 67.291z" />
              <path d="M910.872 326.705h79.97c1.81-0.127 3.922-0.2 6.051-0.2 50.629 0 91.672 41.043 91.672 91.672 0 2.129-0.073 4.241-0.215 6.334l0.015-0.283c0.112 1.749 0.176 3.793 0.176 5.852 0 53.861-43.663 97.524-97.524 97.524-0.062 0-0.124 0-0.185 0h-78.009zM954.27 492.983h32.67c38.522 0 55.589-28.77 55.589-67.779s-15.604-63.39-55.101-63.39h-33.158z" />
            </svg>
            cash on delivery
            <span className="mobile-dropdown">
              <svg xmlns="http://www.w3.org/2000/svg" width="17.233" height="11.177" viewBox="0 0 17.233 11.177">
                <g id="Dropdown" transform="translate(16.13 10.161) rotate(180)">
                  <path id="Path_64" data-name="Path 64" d="M362.423,4535.025l-7.71,7.642-7.364-8" transform="translate(-347.349 -4534.667)" fill="none" stroke="#80a03c" strokeWidth={3} />
                </g>
              </svg>
            </span>
          </button>
          <div className="payment-tab-content">
            <p className="payment-title">cash on delivery</p>
            <div className="paymemnt-options ">
              <div className="payment-select cash-select">
                <div className="pay-card">
                  {/* <div class="pay-img">
                          <img src="../assets/img/cred.png" alt="cred">
                        </div> */}
                  <div className="pay-title">
                    <article>cash on delivery</article>
                  </div>
                  <label className="pay-radio">
                    <input type="checkbox" className="pay-checkbox"  />
                    <span className="pay-check" id="pay-cash" />
                  </label>
                </div>
                <div className="pay-btn">
                  <button className="payment-card-btn">Proceed to Pay</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )}
    </>
  )
}

export default PaymentSection