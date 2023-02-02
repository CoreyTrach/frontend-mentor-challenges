import { AiOutlineShoppingCart } from 'react-icons/ai';
import ImageDesktop from '../assets/image-product-desktop.jpg';
import ImageMobile from '../assets/image-product-mobile.jpg';

import './Card.css';

const Card = () => {
  return (
    <div className='card'>
      <div className='card--image'>
        <img className='card--image-desktop' src={ImageDesktop} alt='' />
        <img className='card--image-mobile' src={ImageMobile} alt='' />
      </div>
      <div className='card--content'>
        <h5 className='card--content-category'>Perfume</h5>
        <h2>Gabrielle Essence Eau De Parfum</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          accusamus recusandae voluptatibus quas qui, fugiat nam, exped.
        </p>
        <div className='card--content-price'>
          <span className='card--content-price-newPrice'>$149.99</span>
          <span className='card--content-price-oldPrice'>$169.99</span>
        </div>
        <button>
          <AiOutlineShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
