import IconMemory from '../assets/images/icon-memory.svg';
import IconReaction from '../assets/images/icon-reaction.svg';
import IconVerbal from '../assets/images/icon-verbal.svg';
import IconVisual from '../assets/images/icon-visual.svg';
import './Details.css';

const Details = ({ title, score, color }) => {
  let Icon;

  if (title === 'Memory') {
    Icon = IconMemory;
  } else if (title === 'Reaction') {
    Icon = IconReaction;
  } else if (title === 'Verbal') {
    Icon = IconVerbal;
  } else if (title === 'Visual') {
    Icon = IconVisual;
  }
  return (
    <div className={`details ${color}`}>
      <div className="details--title">
        <img src={Icon} />
        <p className={color}>{title}</p>
      </div>
      <div className="details--score">
        <span>{score}&nbsp;</span>
        <span>/ 100</span>
      </div>
    </div>
  );
};

export default Details;
