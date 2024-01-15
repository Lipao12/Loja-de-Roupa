import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../styles/carrossel.css';
import Card from './Card';

const CustomCarrossel = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel responsive={responsive}>
        {props.produtos.map((product) => (
        <Card key={product.id} name={product.name} price={product.price} imgURL={product.imgURL} />
        ))}
    </Carousel>
  );
};

export default CustomCarrossel;
