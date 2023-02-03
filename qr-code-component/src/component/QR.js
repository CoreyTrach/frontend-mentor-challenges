import qrImage from './assets/image-qr-code.png';
import './QR.css';

const QR = () => {
  return (
    <div className='qr'>
      <img className='qr--image' src={qrImage} alt='qr-code' />
      <h2 className='qr--title'>
        Improve your front end skills by building projects
      </h2>
      <p className='qr--description'>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
};

export default QR;
