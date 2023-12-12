import React, { useState } from 'react';
import { Slider, Tooltip } from 'antd';

const AccountSlider2 = () => {
  const [progressValue, setProgressValue] = useState(0);

  const marks = [
    { value: 0, label: 'Note Placed', style: { color: '#00FF00' } }, // Green color for "Note Placed"
    { value: 30, label: 'Sent to Celeb', style: { color: '#FF0000' } }, // Red color for "Sent to Celeb"
    { value: 65, label: <Tooltip title="Empty Mark 50"></Tooltip> },
    { value: 100, label: <Tooltip title="Empty Mark 75"></Tooltip> },
  ];

  const handleSliderChange = (value) => {
    setProgressValue(value);
  };

  const railStyle = {
    background: 'transparent',
    borderTop: '2px dashed #4B4B4B', // Customize the dashed line style
  };

  const getTooltipPopupContainer = (triggerNode) => {
    if (triggerNode && triggerNode.getAttribute('title') === null) {
      return document.body; // Return body for an empty Tooltip
    }
    return triggerNode.parentNode;
  };

  return (
    <div className="mainSliderCard">
      <Slider
        marks={marks.reduce((acc, mark) => {
          acc[mark.value] = { label: mark.label, style: mark.style };
          return acc;
        }, {})}
        step={null}
        dots
        value={progressValue}
        onChange={handleSliderChange}
        railStyle={railStyle}
        tipFormatter={(value) => (marks.find((mark) => mark.value === value)?.label || value)}
        getTooltipPopupContainer={getTooltipPopupContainer}
      />
    </div>
  );
};

export default AccountSlider2;
