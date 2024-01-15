import React from 'react';
import imga from '../assets/banner1.jpg';
import '../styles/banner.css';

const Banner = (props) => {
  const { imgURL } = props;
  const bannerStyle = {
    backgroundImage: `url(${imga})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '480px',
    width: '260px',
    borderRadius: '3px',
    marginRight: '20px'
  };

  return <div className="banner" style={bannerStyle}>
    <h2>Vanguarda</h2>
  </div>;
};

export default Banner;
