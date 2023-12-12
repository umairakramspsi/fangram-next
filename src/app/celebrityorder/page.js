"use client";

import React, { useState,useEffect } from "react";
import celebrityImage from "../../assets/svg/celebrityImage.svg";
import TickMark from "../../assets/svg/TickMark.svg";
import star from "../../assets/svg/Star.svg";
import verifiedLogo from "../../assets/svg/VerifiedLogo.svg";
import helpIcon from "../../assets/svg/orderinfo.svg";
import heartIcon from "../../assets/svg/heart-icon.svg";
import celeSlider from "../../assets/svg/celebritySlider.svg";
import availOffer from "../../assets/svg/AvailIcon.svg";
import NotActive from "../../assets/svg/NotActive.svg";
import Active from "../../assets/svg/Active.svg";
import plusicon from "../../assets/svg/plusicon.svg";
import Image from "next/image";

const faqData = [
  {
    question: "Lorem ipsum is placeholder text commonly",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
  },
  {
    question: "Lorem ipsum is placeholder text commonly",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
  },
  {
    question: "Lorem ipsum is placeholder text commonly",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
  },
  {
    question: "Lorem ipsum is placeholder text commonly",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
  },
  {
    question: "Lorem ipsum is placeholder text commonly",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
  },
  {
    question: "Lorem ipsum is placeholder text commonly",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
  },
  {
    question: "Lorem ipsum is placeholder text commonly",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
  },
  // Add more FAQ items as needed
];

const CelebrityOrder = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Set up event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleTextVisibility = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };
  return (
    <div className="container">
      <div className="container-fangram">
        <div className="breadcrumbs">Home &gt; Sunny Leone</div>
        <div className="mainCard-Celebrity">
         <div className="responsive-maincard">
          <div className="celebrityImage">
            <Image src={celebrityImage} alt="" />
          </div>
          <div className="celebrity-description">
            <div className="celebrity-name">
              <h1>Sunny Leone</h1>
              <Image src={TickMark} />
              <div className="celebrity-rating">
                <Image src={star} />
                4.7(12)
              </div>
            </div>
            <div className="respond-time">
              Responds in <span>5 Days</span>
            </div>
            <div className="main-topics-btns">
              <div className="topicbtn">
                <button>Celebrity of the Week</button>
              </div>
              <div className="topicbtn">
                <button>Valentine's Days Gifts</button>
              </div>
              <div className="topicbtn">
                <button>Baby Doll</button>
              </div>
              <div className="topicbtn">
                <button>Model</button>
              </div>
              <div className="topicbtn">
                <button>TV Star</button>
              </div>
            </div>
           {screenWidth > 580 ?(<><div className="subs-plan-btns">
              <div className="subsplan-btn">
                <button>
                  Book Video @ ₹9999{" "}
                  <span
                    style={{ textDecoration: "line-through", fontSize: "10px" }}
                  >
                    10,999
                  </span>
                </button>
              </div>
              <div className="subsplan-btn-black">
                <button>
                  Meet & Greet <span>Starts from ₹39,980</span>
                </button>
              </div>
              <div className="subsplan-btn-black">
                <button>For Business </button>
              </div>
            </div>
            <div className="secured-payment">
              <div className="payment-verified">
                Secured & safe payments <Image src={verifiedLogo} />
              </div>
              <div className="payment-verified">
                Need help? Text Us <Image src={helpIcon} />
              </div>
            </div></>):("")}
      
         
          </div>
          </div>
          {screenWidth> 580 ? (""):(
            <>
             <div className="subs-plan-btns">
             <div className="subsplan-btn">
               <button>
                 Book Video @ ₹9999{" "}
                 <span
                   style={{ textDecoration: "line-through", fontSize: "10px" }}
                 >
                   10,999
                 </span>
               </button>
             </div>
             <div className="subsplan-btn-black">
               <button>
                 Meet & Greet <span>Starts from ₹39,980</span>
               </button>
             </div>
             <div className="subsplan-btn-black">
               <button>For Business </button>
             </div>
           </div>
           <div className="secured-payment">
             <div className="payment-verified">
               Secured & safe payments <Image src={verifiedLogo} />
             </div>
             <div className="payment-verified">
               Need help? Text Us <Image src={helpIcon} />
             </div>
           </div>
           </>
          )}
          <div className="celebrity-slider">
            <div className="heart-icon">
              <Image src={heartIcon} alt="" />
            </div>
            <div className="slider-cel">
              <Image src={celeSlider} alt="" />
            </div>
          </div>
        </div>
        <div className="competitors-main"></div>
        <div className="available-offers">
          <div className="heading-avail-offer">Available Offers</div>
          <div className="availofferitems-main">
            <div className="availoffer-item">
              <div className="offer-heading">
                <Image src={availOffer} /> Buy For{" "}
                <span
                  style={{
                    background: "rgba(212, 41, 120, 1)",
                    borderRadius: "30px",
                    padding: "0px 10px",
                    color: "white",
                  }}
                >
                  ₹1,899
                </span>
              </div>
              <div className="offer-des">Extra ₹100 off on this booking</div>
            </div>
            <div className="availoffer-item">
              <div className="offer-heading">
                <Image src={availOffer} /> Buy For
                <span
                  style={{
                    background: "rgba(212, 41, 120, 1)",
                    borderRadius: "30px",
                    padding: "0px 10px",
                    color: "white",
                  }}
                >
                  ₹1,899
                </span>
              </div>
              <div className="offer-des">Extra ₹100 off on this booking</div>
            </div>
            <div className="availoffer-item">
              <div className="offer-heading">
                <Image src={availOffer} /> Buy For{" "}
                <span
                  style={{
                    background: "rgba(212, 41, 120, 1)",
                    borderRadius: "30px",
                    padding: "0px 10px",
                    color: "white",
                  }}
                >
                  ₹1,899
                </span>
              </div>
              <div className="offer-des">Extra ₹100 off on this booking</div>
            </div>
          </div>
        </div>
        <div className="recent-viewed">
          <div className="recent-viewed-heading">
            <div className="recent-heaing">Recent Viewed</div>
            <div className="pagintions">
              <div className="activeArrow">
                <Image src={NotActive} alt="" />
              </div>
              <div className="notactiveArrow">
                <Image src={Active} alt="" />
              </div>
            </div>
          </div>
          <div className="card-items-main">
            <div className="card-item-recents">
              <div className="card-heading-recent">Chota Bheem</div>
              <div className="card-tags">#Comman Caracter #Tv Star</div>
              <div className="card-button">
                <button>₹299</button>
              </div>
            </div>
            <div className="card-item-recents">
              <div className="card-heading-recent">Chota Bheem</div>
              <div className="card-tags">#Comman Caracter #Tv Star</div>
              <div className="card-button">
                <button>₹299</button>
              </div>
            </div>{" "}
            <div className="card-item-recents">
              <div className="card-heading-recent">Chota Bheem</div>
              <div className="card-tags">#Comman Caracter #Tv Star</div>
              <div className="card-button">
                <button>₹299</button>
              </div>
            </div>{" "}
            <div className="card-item-recents">
              <div className="card-heading-recent">Chota Bheem</div>
              <div className="card-tags">#Comman Caracter #Tv Star</div>
              <div className="card-button">
                <button>₹299</button>
              </div>
            </div>
          </div>
        </div>
        <div className="also-like">
          <div className="recent-viewed-heading">
            <div className="recent-heaing">You May Also Like</div>
            <div className="pagintions">
              <div className="activeArrow">
                <Image src={NotActive} alt="" />
              </div>
              <div className="notactiveArrow">
                <Image src={Active} alt="" />
              </div>
            </div>
          </div>
          <div className="Like-items-main">
            <div className="Like-item-recents">
              <div className="card-heading-Like">Pawan Chopra</div>
              <div className="card-tags">#Comman Caracter #Tv Star</div>
              <div className="card-button">
                <button>₹299</button>
              </div>
            </div>
            <div className="Like-item-recents">
              <div className="card-heading-Like">Pawan Chopra</div>
              <div className="card-tags">#Comman Caracter #Tv Star</div>
              <div className="card-button">
                <button>₹299</button>
              </div>
            </div>
            <div className="Like-item-recents">
              <div className="card-heading-Like">Pawan Chopra</div>
              <div className="card-tags">#Comman Caracter #Tv Star</div>
              <div className="card-button">
                <button>₹299</button>
              </div>
            </div>
            <div className="Like-item-recents">
              <div className="card-heading-Like">Pawan Chopra</div>
              <div className="card-tags">#Comman Caracter #Tv Star</div>
              <div className="card-button">
                <button>₹299</button>
              </div>
            </div>
          </div>
        </div>

        <div className="mainCardQuestion">
          <h2>Frequently asked questions</h2>
          {faqData.map((item, index) => (
            <div style={{ margin: "20px 0px" }}>
              <div className="questionBox" key={index}>
                <div
                  className="innerbox"
                  onClick={() => toggleTextVisibility(index)}
                >
                  <Image
                    src={plusicon}
                    alt="missing"
                    style={{ cursor: "pointer" }}
                  />
                  <h4>{item.question}</h4>
                </div>
                {visibleIndex === index && <p>{item.answer}</p>}
              </div>
            </div>
          ))}
        </div>

        <div className="discover-more">
          <div className="discover-more-heading">
            <h2>Discover More:</h2>
            <div className="discover-btns">
              <div className="discoverbtn">
                <button>Celebrities</button>
              </div>
              <div className="discoverbtn">
                <button>Movies</button>
              </div>
              <div className="discoverbtn">
                <button>Tv Shows</button>
              </div>
              <div className="discoverbtn">
                <button>Web Series</button>
              </div>
              <div className="discoverbtn">
                <button>Sports Events</button>
              </div>
              <div className="discoverbtn">
                <button>Events</button>
              </div>
              <div className="discoverbtn">
                <button>Wishes</button>
              </div>
              <div className="discoverbtn">
                <button>Gifts</button>
              </div>
              <div className="discoverbtn">
                <button>Quotes</button>
              </div>
              <div className="discoverbtn">
                <button>Invitations</button>
              </div>
              <div className="discoverbtn">
                <button>Captions</button>
              </div>
              <div className="discoverbtn">
                <button>Aarti</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CelebrityOrder;
