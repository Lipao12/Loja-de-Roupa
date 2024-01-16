import React from 'react';
import '../styles/banner.css';

const Banner = (props) => {

  const bannerStyle = {
    backgroundImage: `url(${props.imgURL})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '480px',
    width: '220px',
    borderRadius: '3px',
    marginRight: '20px'
  };

  return <div className="banner" style={bannerStyle}>
    <h2>Vanguarda</h2>
  </div>;
};

export default Banner;
