import React from 'react'
import user from "../../assets/svg/user.svg";
import user2 from "../../assets/svg/User3.svg"
import BookingItem from './BookingItem';
const Booking = () => {
  return (
    <div className='bookingMain'>
    <BookingItem image={user} name="Sunny Leone" />
    <BookingItem image={user2} name="Priya Mani Raj" />
    <BookingItem image={user} name="Sunny Leone" />
    <BookingItem image={user2} name="Priya Mani Raj" />
  </div>
  )
}

export default Booking
