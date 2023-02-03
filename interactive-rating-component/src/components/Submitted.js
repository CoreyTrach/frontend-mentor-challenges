import tyImage from '../assets/illustration-thank-you.svg';
import './Submitted.css';

const Submitted = ({ isActiveIndex }) => {
  return (
    <div className='submitted'>
      <img
        src={tyImage}
        className='submitted--image'
        alt='Thank you illustration'
      />
      <p className='submitted--rank'>You selected {isActiveIndex} out of 5</p>
      <h2 className='submitted-thanks'>Thank you!</h2>
      <p className='submitted-description'>
        We appreciate you taking the time to give a rating. If you ever need
        more supoort, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default Submitted;
