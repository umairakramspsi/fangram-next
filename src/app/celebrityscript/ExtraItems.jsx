import React from 'react'
import plusIcon from "../../assets/svg/plus.svg";
import Image from "next/Image"
const ExtraItems = ({ imageSrc, description,explanation,price }) => {
  return (
    <div>
       <div className="extra-item">
        <div className="extra-img"><Image src={imageSrc} alt="" /></div>
          <div className="extra-description">
          <div className="extra-des">{description}</div>
          <div className="exta-ex">
             {explanation}
          </div>
          <div className="extra-price">
          {price}
          </div>
          </div> 
          <div className="plus-icon">
              <Image src={plusIcon} alt="" />
            </div>
      </div>
    </div>
  )
}

export default ExtraItems
