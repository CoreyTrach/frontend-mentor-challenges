import './Score.css';

const Score = () => {
  return (
    <div className="score">
      <h4 className="score--title">Your Result</h4>
      <div className="score--rating">
        <p>76</p>
        <p>of 100</p>
      </div>
      <h2 className="score--superlative">Great</h2>
      <p className="score--description">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};

export default Score;
