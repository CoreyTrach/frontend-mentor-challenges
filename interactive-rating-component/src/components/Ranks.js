import './Ranks.css';

const Ranks = ({ isActive, rating, onClick }) => {
  return (
    <div
      className='ranks'
      style={{
        backgroundColor: isActive === rating ? 'hsl(25, 97%, 53%)' : '',
      }}
      onClick={onClick}>
      {rating}
    </div>
  );
};

export default Ranks;
