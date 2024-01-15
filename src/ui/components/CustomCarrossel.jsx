import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../styles/carrossel.css';
import Banner from './Banner';
import Card from './Card';

const CustomCarrossel = (props) => {
  console.log(props.isCard);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: props.isCard?4:5
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
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
          props.isCard? 
          <Card key={product.id} name={product.name} price={product.price} imgURL={product.imgURL} />
          : <Banner key={product.id} />
        ))}
    </Carousel>
  );
};

export default CustomCarrossel;
