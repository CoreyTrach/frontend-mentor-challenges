import Details from './Details';
import './Summary.css';

const Summary = () => {
  return (
    <div className="summary">
      <h3>Summary</h3>
      <Details title="Reaction" score="80" color="red" />
      <Details title="Memory" score="92" color="orange" />
      <Details title="Verbal" score="61" color="green" />
      <Details title="Visual" score="72" color="blue" />
      <button type="submit">Continue</button>
    </div>
  );
};

export default Summary;
