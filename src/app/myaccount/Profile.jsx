import React from "react";
import { Select, Space } from "antd";
import cameraIcon from "../../assets/svg/cameraIcon.svg";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import downIcon from "../../assets/svg/DownIcon.svg";
import Image from "next/Image"

const { useState, useEffect } = React;
const data = [
  { id: 0, label: "Male" },
  { id: 1, label: "Female" },
];

const Profile = () => {
  const [isGenderOpen, setGenderOpen] = useState(false);
  const [genderItems, setGenderItems] = useState(data);
  const [selectedGenderItem, setSelectedGenderItem] = useState(data[0].id); // Default to Male

  const [selectedDate, setSelectedDate] = useState(null);

  const [selectedImage, setSelectedImage] = useState();
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  // State for date of birth dropdown
  const [isDobOpen, setDobOpen] = useState(false);
  const [selectedDobItem, setSelectedDobItem] = useState(null);

  const toggleGenderDropdown = () => setGenderOpen(!isGenderOpen);
  const toggleDobDropdown = () => setDobOpen(!isDobOpen);

  const handleItemClick = (id, type) => {
    if (type === "gender") {
      setSelectedGenderItem(id); // This should update the state with the selected gender's id
      setGenderOpen(false);
    }
  };
  

  return (
    <div className="mainform">
      <div className="form">
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        id="imageInput"
        onChange={handleImageChange}
      />
       {selectedImage && (
        <div className="image-uploaded">
          <Image src={selectedImage} alt="Selected" style={{ maxWidth: '100%' }} className="image-uploaded" width={20} height={20}/>
        </div>
      )}
      <label htmlFor="imageInput" className="camera-icon">
        <Image src={cameraIcon} alt="" />
      </label>


        <div className="form-main">
          <form action="">
            <div className="input-field">
              <label htmlFor="">Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className="input-field">
              <label htmlFor="">Gender</label>
              <div className="dropdown">
              <div className="dropdown-header" onClick={toggleGenderDropdown}>
  {selectedGenderItem !== null
    ? genderItems.find((item) => item.id === selectedGenderItem).label
    : "Select Gender"}
  <div className="down-icon">
    <Image src={downIcon} alt="Down Icon" />
  </div>
</div>

                <div className={`dropdown-body ${isGenderOpen && "open"}`}>
                  {genderItems.map((item) => (
                    <div
                      className="dropdown-item"
                      onClick={() => handleItemClick(item.id, "gender")}
                      key={item.id}
                    >
                      <span
                        className={`dropdown-item-dot ${
                          item.id === selectedGenderItem && "selected"
                        }`}
                      >
                        •{" "}
                      </span>
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="input-field">
              <label htmlFor="dob">Date Of Birth</label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select Date of Birth"
                className="date-picker"

              />
              <span className="down-arrow">
                <Image src={downIcon} />
              </span>
            </div>

            <div className="input-field">
              <label htmlFor="">Email ID</label>
              <input type="text" placeholder="Enter Your Email Id" />
            </div>
            <div className="submit-btn">
              <button>Save Changes</button>
            </div>
          </form>
        </div>
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
  );
};

export default Profile;
