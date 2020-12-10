import React from 'react';
import './customImage.css';

const CustomImage = ({ type, imageSrc }) => (
  <div className="image-container">
    <img className={`${type}-image`} src={imageSrc} />
  </div>
);

export default CustomImage;
