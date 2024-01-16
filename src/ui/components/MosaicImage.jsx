import img from '../assets/banner1.jpg';
import '../styles/mosaic-image.css';

function MosaicImage() {

  return (
        <div className='image-mosaic'>
            <div className='img1'><img src={img} /></div>
            <div className='img2'><img src={img} /></div>
            <div className='img3'><img src={img} /></div>
            <div className='img4'><img src={img} /></div>
            <div className='img5'><img src={img} /></div>
        </div>
  );
}

export default MosaicImage;
