import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box"> Description </div>
            <div className="descriptionbox-nav-box fade"> Reviews (122)</div>
        </div>
        <div className="descriptionbox-desctiption">
            <p>
                Discover the perfect blend of style and comfort with our Clothes.
                Designed for specific occasion or use, everyday wear, formal events, outdoor activities, this jacket, dress,
                shirt is crafted from material, premium cotton, lightweight polyester to ensure you look and feel your best.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox
