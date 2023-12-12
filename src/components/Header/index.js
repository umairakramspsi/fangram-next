"use client";
import React, { useState } from "react";
import styles from "./header.module.css";
import { Modal, Carousel } from "antd";
import logo from "../../assets/svg/logo.svg";
import noraFatehi from "../../assets/svg/noraFatehi.svg"
import facebook from "../../assets/svg/signUpFacebook.svg"
import google from "../../assets/svg/signUpGoogle.svg"
import apple from "../../assets/svg/signUpApple.svg"
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalStates, setModalStates] = useState([false, false]);
  const currentRoute = usePathname();
  const activeStyle = " text-white bg-indigo-500 rounded-lg	";
  const nonActiveStyle = " text-white";
  const handleToggleClick = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleToggleModal = (index) => {
    const newModalStates = modalStates.map((_, i) => (i === index ? !modalStates[i] : false));
    setModalStates(newModalStates);
  };

  const handleModalCancel = (index) => {
    const newModalStates = [...modalStates];
    newModalStates[index] = false;
    setModalStates(newModalStates);
  };

  return (
    <div className={styles.container}>
      <div className={`navBar ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        <div className="navBar-left">
          {isMobileMenuOpen && (
            <>
              <div className="mobile-logo">
              <Image src={logo} alt="missing" className="" href="/"/>
                <span onClick={handleToggleClick}>&#10005;</span>
              </div>
            </>
          )}
          <Image src={logo} alt="missing" className="logoFan" href="/"/>
          <Link
              href="/celebrityscript"
              className={
                currentRoute === "/celebrityscript"
                  ? "activelink"
                  : nonActiveStyle
              }
            >Categories</Link>
          <Link  href="/celebrityorder"
              className={
                currentRoute === "/celebrityorder"
                  ? "activelink"
                  : nonActiveStyle
              }>Gifting</Link>
          <Link href="/how">How to Fangram</Link>
          <Link href="/myaccount"
              className={
                currentRoute === "/myaccount"
                  ? "activelink"
                  : nonActiveStyle
              }>Support</Link>
        </div>
        <div className="navBar-right">
          <button className="promotebtn">Promote My Business</button>
          <button className="loginbtn" onClick={() => handleToggleModal(0)}>
            Login/Signup
          </button>
          <Modal
            footer={null}
            width={900}
            title=""
            open={modalStates[0]}
        onCancel={() => handleModalCancel(0)}

          >
            <div className="main-signup">
              <div className="left-slider">
                <Carousel autoplay>
                  <div>
                  <Image src={noraFatehi} alt="" className="img-slider"/>
                  </div>
                  <div>
                  <Image src={noraFatehi} alt="" className="img-slider"/>
                  </div>
                  <div>
                  <Image src={noraFatehi} alt="" className="img-slider"/>
                  </div>
                  <div>
                  <Image src={noraFatehi} alt="" className="img-slider"/>
                  </div>
                </Carousel>
              </div>
              <div className="right-slider">
                <div className="right-slider-main">
                <div className="welcome-heading">Welcome</div>
                <div className="signup-heading">Sign up with FanGram</div>
                <div className="social-signup">
                  <div className="facebook-icon"><Image src={facebook} alt="" /></div>
                  <div className="facebook-icon"><Image src={google} alt="" /></div>
                  <div className="facebook-icon"><Image src={apple} alt="" /></div>
                </div>
                <div className="continuewith-email">
                <p>Or Continue With Email</p>
                <span className="vertical-line"></span>
                </div>
                <div className="input-signup">
                  <input type="text" placeholder="Enter Your Name"/>
                  <input type="text" placeholder="Enter Your Email Address"/>
                  <input type="text" placeholder="Enter Your Password"/>
                  <input type="text" placeholder="Enter Your Invite Code (Optional)"/>
                </div>
                </div>
                <div className="signUp-btn">
                  <button>Sign Up</button>
                </div>
                <div className="login-fangram">Already on FanGram? <span onClick={() => handleToggleModal(1)}> Login</span></div>

              </div>
            </div>
          </Modal>
          <Modal
        footer={null}
        width={500}
        title=""
        open={modalStates[1]}
        onCancel={() => handleModalCancel(1)}
      >
       <div className="login-modal">
                <div className="right-slider-main">
                <div className="signup-heading">Login with FanGram</div>
                <div className="social-signup">
                  <div className="facebook-icon"><Image src={facebook} alt="" /></div>
                  <div className="facebook-icon"><Image src={google} alt="" /></div>
                  <div className="facebook-icon"><Image src={apple} alt="" /></div>
                </div>
                <div className="continuewith-email">
                <p>Or Continue With Email</p>
                <span className="vertical-line"></span>
                </div>
                <div className="input-signup">
                  <input type="text" placeholder="Enter Your Email Address"/>
                  <input type="text" placeholder="Enter Your Password"/>
                </div>
                </div>
                <div className="signUp-btn">
                  <button>Login</button>
                </div>
                <div className="login-fangram">Not on FanGram?<span onClick={() => handleToggleModal(0)}> Sign up</span></div>

              </div>
      </Modal>
        </div>
        <div className="mobile-toggle-btn" onClick={handleToggleClick}>
          {isMobileMenuOpen ? null : (
            <>
              <div className="mobile-logo">
                <Image src={logo} alt="" />
                <span>&#9776;</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
