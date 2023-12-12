import React, { useState } from 'react';
import { Slider, Tooltip } from 'antd';

const AccountSlider = () => {
  const [progressValue, setProgressValue] = useState(0);

  const marks = {
    0: 'Note Placed',
    30: <Tooltip title="Empty Mark 25"></Tooltip>, // Empty Tooltip for mark 25
    65: <Tooltip title="Empty Mark 50"></Tooltip>, // Empty Tooltip for mark 50
    100: <Tooltip title="Empty Mark 75"></Tooltip>, // Empty Tooltip for mark 75
  };

  const handleSliderChange = (value) => {
    setProgressValue(value);
  };

  const railStyle = {
    background: 'transparent',
    borderTop: '2px dashed #4B4B4B', // Customize the dashed line style
  };
  const getTooltipPopupContainer = (triggerNode) => {
    if (triggerNode && triggerNode.getAttribute('title') === null) {
      return document.body; // Return body for empty Tooltip
    }
    return triggerNode.parentNode;
  };


  return (
    <div  className="mainSliderCard" >
      <Slider
        marks={marks}
        step={null}
        dots
        value={progressValue}
        onChange={handleSliderChange}
        railStyle={railStyle}
        tipFormatter={(value) => (marks[value] !== undefined ? marks[value] : value)}
        getTooltipPopupContainer={getTooltipPopupContainer}
      />
    </div>
  );
};

export default AccountSlider;
