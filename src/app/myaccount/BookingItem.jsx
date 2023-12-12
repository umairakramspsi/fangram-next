import React from 'react'
import user from "../../assets/svg/user.svg";
import line from "../../assets/svg/devideline.svg";
import Image from "next/Image"
import AccountSlider from './AccountSlider';
import AccountSlider2 from './AccountSlider2';
const BookingItem = ({ image, name }) => {
  return (
    <div>
         <div className="detailAccountItem">
      <div className="detailcardAccount">
        <div className="userProfile">
          <Image src={image} alt="missing" style={{borderRadius:"20px",border:"3px solid #ffff"}}/>
        </div>
        <div className="username">
          <h4>{name}</h4>
          <div className="requestData">
            <h6 className="leftreq">Request For</h6>
            <h6 className="rightreq">Recorder Video</h6>
          </div>
          <div className="requestData">
            <h6 className="leftreq">Booking Date</h6>
            <h6 className="rightreq">19 Oct, 2023</h6>
          </div>
        </div>
        <div className="devideline">
        </div>
        <div className="userorderid">
          <div className="requestData">
            <h6 className="leftreq">Order Id</h6>
            <h6 className="rightreq">630114</h6>
          </div>
          <div className="requestData">
            <h6 className="leftreq">Amount</h6>
            <h6 className="rightreq" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              $400 <span className='include-tax'>(INC. OF GSt)</span>
            </h6>
          </div>
        </div>
        <div className="suggestions">
          <div className="heading-bookfor">Booking For</div>
          <div className="name-bookfor">Saurav Gannguly</div>
          <div className="link-needhelp">Need help?</div>
        </div>
      </div>
      <div className="detailDesAccount">
       <div className="SliderRange"> 
       {name === "Priya Mani Raj" ? <AccountSlider2 /> : <AccountSlider />}
       </div>   
       </div>  
      </div>
    </div>
      
  )
}

export default BookingItem
