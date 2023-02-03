import { useState } from 'react';

import Star from '../assets/icon-star.svg';
import Ranks from '../components/Ranks';
import Submitted from '../components/Submitted';
import './Rating.css';

const Rating = () => {
  const [isActiveIndex, setIsActiveIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClick = ({ target }) => {
    setIsActiveIndex(Number(target.innerText));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <Submitted isActiveIndex={isActiveIndex} />;
  } else {
    return (
      <div className='rating'>
        <div className='rating--icon'>
          <div className='rating--icon-circle'></div>
          <img src={Star} className='rating--icon-star' alt='Star Icon' />
        </div>
        <h2 className='rating--title'>How did we do?</h2>
        <p className='rating--description'>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className='rating--ranks'>
          {[1, 2, 3, 4, 5].map((rating) => (
            <Ranks
              key={rating.toString()}
              rating={rating}
              onClick={handleClick}
              isActive={isActiveIndex}
            />
          ))}
        </div>
        <button className='rating--submit' type='submit' onClick={handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
};

export default Rating;
