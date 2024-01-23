import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../styles/carrossel.css';
import Banner from './Banner';
import Card from './Card';

const CustomCarrossel = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: props.isCard?3:4
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items:  2 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel responsive={responsive} className='carrossel' partialVisible={true}>
        {props.produtos.map((product) => (
          props.isCard? 
          <Card key={product.id} id={product.id} name={product.name} price={product.price} image={product.images[0]} />
          : <Banner key={product.id} id={product.id} name={product.name} imgURL={product.imgurl}/>
        ))}
    </Carousel>
  );
};

export default CustomCarrossel;
