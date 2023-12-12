import React from 'react'
import ReelIcon from "../../assets/svg/Frame.svg"
import Image from "next/Image"

const Wallet = () => {
  return (
    <div className='wallet-main'>
      <div className="walletEarning-section">
        <div className="left-wallet">
          <div className="leftwallet-heading">
            <span>tcash</span>&nbsp; Earned
          </div>
          <div className="leftWallet-des">
            0
          </div>
        </div>
        <div className="devidelineWallet">
            
          </div>
        <div className="right-wallet">
        <div className="leftwallet-heading">
             Coupons
          </div>
          <div className="leftWallet-des">
            0
          </div>
        </div>
      </div>
      <div className='walletTransec-section'>
        <div className="transe-heading">
        Recent transactions
        </div>
        <div className="devidelineWallet">
            
        </div>
        <div className="transec-table">
        <table>
      <thead>
        <tr>
          <th>Activity</th>
          <th>Date & Time</th>
          <th>Earned & Redeem</th>
          <th>Payment Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{display:"flex",gap:"10px",alignItems:"center"}}>
            <span>
              <span className="fi fi-af"><Image src={ReelIcon} alt="" /></span>
            </span>
            <span>Sunny leone</span>
          </td>
          <td>19 Oct, 2023,6:23PM</td>
          <td>-₹1,99.00</td>
          <td>Failed</td>
          
        </tr>
        <tr>
        <td style={{display:"flex",gap:"10px",alignItems:"center"}}>
            <span>
              <span className="fi fi-af"><Image src={ReelIcon} alt="" /></span>
            </span>
            <span>Sunny leone</span>
          </td>
          <td>19 Oct, 2023,6:23PM</td>
          <td>-₹1,99.00</td>
          <td style={{color:"green"}}>Success</td>
          
        </tr>
        <tr>
        <td style={{display:"flex",gap:"10px",alignItems:"center"}}>
            <span>
              <span className="fi fi-af"><Image src={ReelIcon} alt="" /></span>
            </span>
            <span>Sunny leone</span>
          </td>
          <td>19 Oct, 2023,6:23PM</td>
          <td>-₹1,99.00</td>
          <td>Failed</td>
         
         
        </tr>
        <tr>
        <td style={{display:"flex",gap:"10px",alignItems:"center"}}>
            <span>
              <span className="fi fi-af"><Image src={ReelIcon} alt="" /></span>
            </span>
            <span>Sunny leone</span>
          </td>
          <td>19 Oct, 2023,6:23PM</td>
          <td>-₹1,99.00</td>
          <td>Failed</td>
         
         
        </tr>
        <tr>
        <td style={{display:"flex",gap:"10px",alignItems:"center"}}>
            <span>
              <span className="fi fi-af"><Image src={ReelIcon} alt="" /></span>
            </span>
            <span>Sunny leone</span>
          </td>
          <td>19 Oct, 2023,6:23PM</td>
          <td>-₹1,99.00</td>
          <td>Failed</td>
         
         
        </tr>
        <tr>
        <td style={{display:"flex",gap:"10px",alignItems:"center"}}>
            <span>
              <span className="fi fi-af"><Image src={ReelIcon} alt="" /></span>
            </span>
            <span>Sunny leone</span>
          </td>
          <td>19 Oct, 2023,6:23PM</td>
          <td>-₹1,99.00</td>
          <td>Failed</td>
         
         
        </tr>
      </tbody>
    </table>
        </div>
      </div>
  </div>
  )
}

export default Wallet
