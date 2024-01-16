import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/banner.css';

const Banner = (props) => {

  const bannerStyle = {
    backgroundImage: `url(${props.imgURL})`,
  };

  return (
    <Link to={`/colecao/${props.id}`} className='banner-link'>
      <div className="banner" style={bannerStyle}>
        <h2>{props.name}</h2>
      </div>
  </Link>
  );
};

export default Banner;
