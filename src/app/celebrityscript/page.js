"use client";
import React, { useState } from "react";
import Order from "./Order";
import Confirm from "./Confirm";
import Payments from "./Payments";
import {
  UserOutlined,
  ClockCircleOutlined,
  LockOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
const CelebrityScript = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleNextClick = () => {
    // Logic to navigate to the next tab
    if (activeTab < 4) {
      setActiveTab(activeTab + 1);
    }
  };

  const handlePreviousClick = () => {
    if (activeTab > 1) {
      setActiveTab(activeTab - 1);
    }
  };
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div className="celebrityScript">
      <div className="p-4 border-b-[1px]  ">
        <div className="tabs-celebrityScript">
          <div
            className={`ctab ${activeTab === 1 ? "cactive" : ""}`}
            onClick={() => handleTabClick(1)}
          >
            <div className="rounded-circle" />
            <div>Details</div>
          </div>

          {/* Rail between first and second tab */}
          <div
            className={`rail ${
              activeTab === 1 || activeTab === 2 ? "colored" : ""
            }`}
          />

          <div
            className={`ctab ${activeTab === 2 ? "cactive" : ""}`}
            onClick={() => handleTabClick(2)}
          >
            <div className="rounded-circle" />
            <div>Confirm</div>
          </div>

          {/* Rail between second and third tab */}
          <div className={`rail ${activeTab === 2 ? "colored" : ""}`} />

          <div
            className={`ctab ${activeTab === 3 ? "cactive" : ""}`}
            onClick={() => handleTabClick(3)}
          >
            <div className="rounded-circle" />
            <div>Payment</div>
          </div>
        </div>

        <div className="tab-content">
          {activeTab === 1 && <Order onNextClick={handleNextClick} />}
          {activeTab === 2 && (
            <Confirm
              onNextClick={handleNextClick}
              onPreviousClick={handlePreviousClick}
            />
          )}
          {activeTab === 3 && (
            <Payments
              onNextClick={handleNextClick}
              onPreviousClick={handlePreviousClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CelebrityScript;
