import React from "react";
import celebrityImage from "../../assets/svg/OrderImg.svg";
import TickMark from "../../assets/svg/TickMark.svg";
import star from "../../assets/svg/Star.svg";
import profileBooking from "../../assets/svg/ProfileBooking.svg";
import bookingDivider from "../../assets/svg/DividerBooking.svg";
import precentage from "../../assets/svg/precentagebook.svg";
import InstaIcon from "../../assets/svg/InstaBooking.svg";
import plusIcon from "../../assets/svg/plus.svg";
import fangramBooking from "../../assets/svg/FangranBooking.svg";
import HDbooking from "../../assets/svg/HDbooking.svg";
import checkIcon from "../../assets/svg/checkBooking.svg";
import PhoneInput from "react-phone-number-input";
import moneyBack from "../../assets/svg/MoneyBack.svg"
import help from "../../assets/svg/HelpIcon.svg"
import secure from "../../assets/svg/Secure.svg"
import "react-phone-number-input/style.css";
import Spikes from "../../assets/svg/spikes.svg"
import Image from 'next/Image';
const { useState, useEffect } = React;
const Confirm = () => {
  const [value, setValue] = React.useState();

  return (
    <div className="confirm-main">
      <div className="personilize-sec">
        <div className="personilzeheading">PERSONALIZED VIDEO FROM</div>
        <div className="responsive-maincard-order">
          <div className="celebrityImageOrder">
            <Image src={celebrityImage} alt="" />
          </div>
          <div className="celebrity-description-order">
            <div className="celebrity-name-order">
              <h1>Sunny Leone</h1>
              <Image src={TickMark} />
              <div className="celebrity-rating">
                <Image src={star} />
                4.7(12)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="booking-details-main">
        <div className="booking-detail-sec">
          <div className="booking-detail-head">YOUR BOOKING DETAILS</div>

          <div className="celebrity-profile">
            <div className="celebrity-image-pro">
              <Image src={profileBooking} alt="" />
            </div>
            <div className="cel-descript">
              <div className="cel-name">Sunny Leone</div>
              <div className="cel-summary">Summary</div>
              <div className="summary-des">
                Hi, nayan what's up? Hope you are doing great in this festive
                season of Diwali. It's me Sunny Leone wishing you a very happy &
                prosperous Diwali from monika. May, the occasion of Diwali light
                up new hopes and opportunities in your life and fulfill all your
                dreams & desires. Have a good day bye-bye.
              </div>
            </div>
          </div>
          <div className="border-booking-page"></div>
          <div className="booking-strip">
            <div className="strip-name">Diwali</div>
            <div className="strip-price">
              ₹10450 <span>₹11000</span>
            </div>
          </div>
          <div className="booking-strip">
            <div className="strip-name">
              <Image src={precentage} alt="" />
              <span>₹550 </span>saved
            </div>
            <div className="strip-price" style={{color:"rgba(0, 129, 21, 1)"}}>Limited Offer</div>
          </div>
          <div className="border-booking">
            <Image src={bookingDivider} alt="" />
          </div>
          <div className="eligible">You're eligible for a FREE gift!</div>
          <div className="dm-insta">
            <div className="left-insta">
              <div className="insta-icon">
                <Image src={InstaIcon} alt="" />
              </div>
              <div className="insta-heading">
                DM On Instagram Get Unlocked
              <span> ₹0 <span style={{color:"rgba(126, 126, 126, 1)",textDecoration:"line-through"}}>₹1499</span> Free</span>{" "}
              </div>
            </div>
            <div className="right-insta">
              <div className="add-order">Want to add this to your order?</div>
              <div className="plus-icon">
                <Image src={plusIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="border-booking">
            <Image src={bookingDivider} alt="" />
          </div>
          <div className="eligible">Level Up Your Surprise</div>
          <div className="remove-logo">
              <div className="fangram-icon">
                <Image src={fangramBooking} alt="" />
              </div>
              <div className="fan-heading">
              <div className="fangram-heading">Remove the FanRang Logo <span>₹625</span></div>
              <div className="heading-des">
                Remove the logo and show off in your circle<span>Free</span>
              </div>
              </div>
          </div>
          <div className="remove-logo">
              <div className="fangram-icon">
                <Image src={HDbooking} alt="" />
              </div>
              <div className="fan-heading">
              <div className="fangram-heading">Get Full Hd Videos <span>₹250</span></div>
              <div className="heading-des">
              Display this video on the big Screen<span style={{color:"rgba(0, 129, 21, 1)"}}>ADD</span>
              </div>
              </div>
          </div>
          <div className="border-booking">
            <Image src={bookingDivider} alt="" />
          </div>
          <div className="eligible">OFFERS</div>
          <div className="check-booking">
              <div className="fangram-icon">
                <Image src={checkIcon} alt="" />
              </div>
              <div className="coupenhead">
              <div className="coupen-heading">"SMILES" coupon applied <span>Remove</span></div>
              <div className="coupen-des">Save another ₹550 on this order <span >View All Offers</span></div>
              </div>
            </div>
          
          <div className="border-booking">
            <Image src={bookingDivider} alt="" />
          </div>
          <div className="eligible">YOUR DETAILS</div>
          <div className="booking-input">
            <label htmlFor="">
              Billing number <sup>*</sup>
            </label>
            <PhoneInput
              international
              value={value}
              onChange={setValue}
              placeholder="Enter phone number"
              inputProps={{
                autoFocus: true,
              }}
              className="phone-booking"
              countrySelectProps={{}}
              
            />
          </div>
          <div className="booking-input-email">
            <label htmlFor="">
              Billing email id <sup>*</sup>
            </label>
            <input type="email" placeholder="Enter Your Email Address" className="input-billing"/>
          </div>
          <div className="reciept-send">
            *Your receipt & order updates will be sent here!
          </div>
          <div className="border-booking">
            <Image src={bookingDivider} alt="" />
          </div>
          <div className="eligible">BILLING SUMMARY</div>
          <div className="personel-vd">
            <div className="left-personel">Personalized Video</div>
            <div className="left-personel">₹11000</div>
          </div>
          <div className="add-ones">
            <div className="left-add">
              <Image src={precentage} alt="" />
              Add-ons
            </div>
            <div className="right-add">+₹2250</div>
          </div>
          <div className="add-ones">
            <div className="left-add">
              <Image src={precentage} alt="" />
              Coupon Discount
            </div>
            <div className="right-add">-₹550</div>
          </div>
          <div className="border-total"></div>
          <div className="prime-account">
            Prime Amount<span>₹99</span>
          </div>
          <div className="border-total"></div>
          <div className="prime-account">
            Prime Discount<span>-₹1650</span>
          </div>
          <div className="border-total"></div>
          <div className="total-price">
            Total <span>₹11149</span>
          </div>
          <div className="secure-payment">
            <div className="secure-payments-des">
              Secure and fast payments via Card, UPI, Netbanking and more By
              continuing, you agree to our terms
            </div>
            <div className="proceed">
              <button>Proceed To Pay</button>
            </div>
          </div>

        </div>

          <div className="svg">
           <Image src={Spikes} alt="spike"/>
           <Image src={Spikes} alt="spike"/>
           <Image src={Spikes} alt="spike"/>
          </div>
          <div className="money-back">
          <div className="money-back-icon">
            <Image src={moneyBack} alt="" />
          </div>
          <div className="money-heading">
            <div className="moneyhead">Money-back Guarantee!</div>
            <div className="moneydes">If for some reason, your request could not be completed, we’ll refund your money within 3-5 working days.</div>
          </div>
        </div>
        <div className="money-back">
          <div className="money-back-icon">
            <Image src={help} alt="" />
          </div>
          <div className="money-heading">
            <div className="moneyhead">Need help?</div>
            <div className="moneydes">Reach out to us on WhatsApp or Email for queries. Our support team shall get back to you within 2-3 working days.</div>
          </div>
        </div>
        <div className="money-back">
          <div className="money-back-icon">
            <Image src={secure} alt="" />
          </div>
          <div className="money-heading">
            <div className="moneyhead">Secured & safe payments</div>
            <div className="moneydes">Every transaction is 100% safe. Your payment details are encrypted during the transaction to safeguard your data.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
