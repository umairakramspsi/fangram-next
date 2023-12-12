import React from 'react'
import Image from "next/Image"

const Wishlist = () => {
  return (
    <div className='wishlist-main'>
      <div className="wishlistcard-main">
        <div className="wishcard-item">
         <div className="wishcard-heading">
          Shankar Mahadevan
         </div>
         <div className="wishlistdes">
          <div className="deswishlist">#Make With Song</div>
          <div className="cancel-btn">Remove</div>
         </div>
        </div>
        <div className="wishcard-item">
         <div className="wishcard-heading">
          Shankar Mahadevan
         </div>
         <div className="wishlistdes">
          <div className="deswishlist">#Make With Song</div>
          <div className="cancel-btn">Remove</div>
         </div>
        </div>
        <div className="wishcard-item">
         <div className="wishcard-heading">
          Shankar Mahadevan
         </div>
         <div className="wishlistdes">
          <div className="deswishlist">#Make With Song</div>
          <div className="cancel-btn">Remove</div>
         </div>
        </div>
        
      </div>
    </div>
  )
}

export default Wishlist
