"use client";
import React, { useState } from 'react';
import Profile from './Profile';
import Booking from './Booking';
import Wallet from './Wallet';
import Wishlist from './Wishlist';
import Image from "next/Image"

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className='container-fangram'>
        <div className="account-heading">       
         <h2>My Account</h2>
         </div>
        <div className="account-main">
      <div className="account-tabs">
        <div
          className={`tab ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          <div  />
          <div className='tab-heading'>Profile</div>
        </div>   
        <div
          className={`tab ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          <div  />
          <div className='tab-heading'>Booking</div>
        </div>
        <div
          className={`tab ${activeTab === 3 ? "active" : ""}`}
          onClick={() => handleTabClick(3)}
        >
          <div  />
          <div className='tab-heading'>Wallet</div>
        </div>
        <div
          className={`tab ${activeTab === 4 ? "active" : ""}`}
          onClick={() => handleTabClick(4)}
        >
          <div  />
          <div className='tab-heading'>Wishlist</div>
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 1 && <Profile />}
        {activeTab === 2 && <Booking />}
        {activeTab === 3 && <Wallet />}
        {activeTab === 4 && <Wishlist />}
      </div>
      </div>
    </div>
  );
};

export default MyAccount;
