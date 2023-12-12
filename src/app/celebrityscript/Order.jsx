import React, { useState, useEffect } from "react";
import celebrityImage from "../../assets/svg/OrderImg.svg";
import TickMark from "../../assets/svg/TickMark.svg";
import star from "../../assets/svg/Star.svg";
import { EditOutlined } from "@ant-design/icons";
import longerMessage from "../../assets/svg/LongerMessage.svg";
import plusIcon from "../../assets/svg/plus.svg";
import editicon from "../../assets/svg/EditIcon.svg";
import fangram from "../../assets/svg/fangram.svg"
import ExtraItems from "./ExtraItems";
import gift from "../../assets/svg/gift.svg"
import hd from "../../assets/svg/hd.svg"
import insta from "../../assets/svg/insta.svg"
import Image from 'next/Image'
const TextareaWithLimit = ({ limit, placeholder }) => {
  const [text, setText] = useState("");
  const remainingCharacters = limit - text.length;

  const handleTextareaChange = (e) => {
    const newText = e.target.value;
    if (newText.length <= limit) {
      setText(newText);
    }
  };

  return (
    <div className="textarea-item">
      <textarea
        value={text}
        onChange={handleTextareaChange}
        cols="30"
        rows="10"
        maxLength={limit}
        placeholder={placeholder}
      ></textarea>
      <div className="charater-left">
        {remainingCharacters} characters remaining
        <button>
          Edit <Image src={editicon} />
        </button>
      </div>
    </div>
  );
};
const CustomRadioButton = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleButtonClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className={`custom-radio ${isChecked ? 'checked' : ''}`}>
      <button onClick={handleButtonClick}>
        <input
          type="radio"
          name="deliveryOption"
          checked={isChecked}
          onChange={() => {}} // Prevent default onChange behavior
        />
        {label}
      </button>
    </label>
  );
};


const Order = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [selectedOption, setSelectedOption] = useState("child"); // Set the default selected option
  const characterLimit = 132;
  const [selectedButton, setSelectedButton] = useState("English");
  const [isChecked, setIsChecked] = useState(false);

  const handleButtonClick = (occasion) => {
    setIsChecked(!isChecked);
    setSelectedButton(occasion);
  };

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Set up event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="order-main">
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
      <div className="order-detail-card">
        <div className="order-detail-heading">Order details</div>
        <div className="this-vedio">Who is this video for?</div>
        <div className="order-btns">
          <div
            className={`order-btn ${
              selectedOption === "child" ? "selected" : ""
            }`}
            onClick={() => handleOptionChange("child")}
          >
            <input
              type="radio"
              id="child"
              name="age"
              value="child"
              checked={selectedOption === "child"}
              onChange={() => {}}
              className="myradio"
            />
            <label htmlFor="child">
              <span className="custom-radio"></span>
              SomeOne Else
            </label>
          </div>
          <div
            className={`order-btn ${
              selectedOption === "adult" ? "selected" : ""
            }`}
            onClick={() => handleOptionChange("adult")}
          >
            <input
              type="radio"
              id="adult"
              name="age"
              value="adult"
              checked={selectedOption === "adult"}
              onChange={() => {}}
            />
            <label htmlFor="adult">
              <span className="custom-radio"></span>
              My Self
            </label>
          </div>
        </div>

        <div className="form-order-main">
          <div className="left-to">
            <div className="input-field">
              <label htmlFor="">
                To <span>(First Name)</span>
              </label>
              <input type="text" placeholder="Name of the reciever" />
            </div>
            <div className="left-to-btns">
            <div
              className={`left-tobtn ${
                selectedButton === "he" ? "selected" : ""
              }`}
            >
              <button onClick={() => handleButtonClick("he")}>
                He/Him
              </button>
            </div>
            <div
              className={`left-tobtn ${
                selectedButton === "she" ? "selected" : ""
              }`}
            >
              <button onClick={() => handleButtonClick("she")}>
              She/Her
              </button>
            </div>
            <div
              className={`left-tobtn ${
                selectedButton === "Others" ? "selected" : ""
              }`}
            >
              <button onClick={() => handleButtonClick("Others")}>
              Others
              </button>
            </div>
            </div>
          </div>
          <div className="rigth-form">
            <div className="input-field">
              <label htmlFor="">
                From <span>(First Name)</span>
              </label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className="left-to-btns">
            <div
              className={`left-tobtn ${
                selectedButton === "him" ? "selected" : ""
              }`}
            >
              <button onClick={() => handleButtonClick("him")}>
                He/Him
              </button>
            </div>
            <div
              className={`left-tobtn ${
                selectedButton === "her" ? "selected" : ""
              }`}
            >
              <button onClick={() => handleButtonClick("her")}>
              She/Her
              </button>
            </div>
            <div
              className={`left-tobtn ${
                selectedButton === "Other" ? "selected" : ""
              }`}
            >
              <button onClick={() => handleButtonClick("Other")}>
              Others
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="occasion-main">
        <div className="occasion-wrap">
          <div className="occasion-heading">Occasion</div>
          <div className="select-occasion">What’s the occasion?</div>
          <div className="what-occasion">Select an Occasion</div>
          <div className="occasion-btn">
            <div
              className={`ocassion-btn ${
                selectedButton === "Birthday" ? "selected" : ""
              }`}
            >
              <button onClick={() => handleButtonClick("Birthday")}>
                Birthday
              </button>
            </div>
            <div
              className={`ocassion-btn ${
                selectedButton === "Anniversary" ? "selected" : ""
              }`}
            >
              <button onClick={() => handleButtonClick("Anniversary")}>
                Anniversary
              </button>
            </div>
            <div
              className={`ocassion-btn ${
                selectedButton === "Wedding" ? "selected" : ""
              }`}
            >
              <button onClick={() => handleButtonClick("Wedding")}>
                Wedding
              </button>
            </div>
            <div
              className={`ocassion-btn ${
                selectedButton === "Get Well Soon" ? "selected" : ""
              }`}
            >
              <button onClick={() => handleButtonClick("Get Well Soon")}>
                Get Well Soon
              </button>
            </div>{" "}
            <div
              className={`ocassion-btn ${
                selectedButton === "All the Best" ? "selected" : ""
              }`}
            >
              <button onClick={() => handleButtonClick("All the Best")}>
                All the Best
              </button>
            </div>
            <div
              className={`ocassion-btn ${
                selectedButton === "Romantic" ? "selected" : ""
              }`}
            >
              <button onClick={() => handleButtonClick("Romantic")}>
                Romantic
              </button>
            </div>
            <div
              className={`ocassion-btn ${
                selectedButton === "Motivation" ? "selected" : ""
              }`}
            >
              <button onClick={() => handleButtonClick("Motivation")}>
                Motivation
              </button>
            </div>
            <div
              className={`ocassion-btn ${
                selectedButton === "New Born" ? "selected" : ""
              }`}
            >
              <button onClick={() => handleButtonClick("New Born")}>
                New Born
              </button>
            </div>
            <div
              className={`ocassion-btn ${
                selectedButton === "Super Fan" ? "selected" : ""
              }`}
            >
              <button onClick={() => handleButtonClick("Super Fan")}>
                Super Fan
              </button>
            </div>
            <div
              className={`ocassion-btn ${
                selectedButton === "Engagement" ? "selected" : ""
              }`}
            >
              <button onClick={() => handleButtonClick("Engagement")}>
                Engagement
              </button>
            </div>
            <div
              className={`ocassion-btn ${
                selectedButton === "Navratri" ? "selected" : ""
              }`}
            >
              <button onClick={() => handleButtonClick("Navratri")}>
                Navratri
              </button>
            </div>
            <div
              className={`ocassion-btn ${
                selectedButton === "Diwali" ? "selected" : ""
              }`}
            >
              <button onClick={() => handleButtonClick("Diwali")}>
                Diwali
              </button>
            </div>
          </div>
          <div className="what-says">
            What do you want Sunny Leone to say in the video?
          </div>
          <div className="not-applicable">
            (Not applicable for Brand, Social Work and Corporate messages)
          </div>
          <div className="select-language">Select a Language</div>
          <div className="language-btn">
            <div
              className={`English-btn ${
                selectedButton === "English" ? "select" : ""
              }`}
            >
              <button onClick={() => handleButtonClick("English")}>
                English
              </button>
            </div>
            <div
              className={`hindi-btn ${
                selectedButton === "हिंदी" ? "select" : ""
              }`}
            >
              <button onClick={() => handleButtonClick("हिंदी")}>हिंदी</button>
            </div>
          </div>
          <div className="textarea-main">
            <div className="textarea-item">
              <TextareaWithLimit
                limit={characterLimit}
                placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,132 characters remaining"
              />
            </div>
            <div className="textarea-item">
              <TextareaWithLimit
                limit={characterLimit}
                placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,132 characters remaining"
              />
            </div>
            <div className="textarea-item">
              <TextareaWithLimit
                limit={characterLimit}
                placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,132 characters remaining"
              />
            </div>
            <div className="textarea-item">
              <TextareaWithLimit
                limit={characterLimit}
                placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,132 characters remaining"
              />
            </div>
          </div>
          <div className="note">
            Note - Our celebrities wish to complete your order in their true
            self. Hence, the message / script may differ in some cases.
          </div>
          <div className="longermessage-main">
            <div className="longermessage-image">
              <Image src={longerMessage} alt="" />
            </div>
            <div className="wite-mess">
              <div className="write-longmess">Write longer message</div>
              <div className="message-price">₹600</div>
            </div>
            <div className="plus-icon">
              <Image src={plusIcon} alt="" />
            </div>
          </div>
          <div className="checbox-ordder">
            <div className="input-checkbox">
              <input type="checkbox" name="" id="" className="checkbox" />
              Don’t make this video public on Tring
            </div>
          </div>
        </div>
      </div>
      <div className="delivery-sec">
        <div className="delivery-wrap">
          <div className="delivery-heading">Delivery</div>
          <div className="quick-vedio">How quickly do you want the video?</div>
          <div className="within-4days">
          <CustomRadioButton label="Within 4 days Free" />

          </div>
          <div className="surprise-recipient">
            Do you want to deliver this surprise to the recipient?
          </div>
          <div className="surprise-btn">
          <CustomRadioButton label="Yes, go head ₹1500" />

          <CustomRadioButton label="No, Skip for now" />

          </div>
        </div>
      </div>
      <div className="extra-sec">
        <div className="extra-heading">Extras</div>
        <div className="extra-sec-items">
        <ExtraItems imageSrc={fangram} description={"Remove the FanRang logo"} explanation={"Download your video without a tring watermark"} price={"₹750"}/>
        <ExtraItems imageSrc={gift} description={"Gifting Experience"} explanation={"Gift wrap your video with special effects."} price={"₹600"}/>
        <ExtraItems imageSrc={hd} description={"Full HD "} explanation={"Video is recorded with full HD 1080x1920. Pick this if the video quality is extra important."} price={"₹300"}/>
        <ExtraItems imageSrc={insta} description={"Dm On Instagram "} explanation={"Want To your Order"} price={"₹600"}/>
        </div>
      </div>
    </div>
  );
};

export default Order;
