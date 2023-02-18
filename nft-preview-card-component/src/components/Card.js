import Nft from "../assets/image-equilibrium.jpg";
import Eth from "../assets/icon-ethereum.svg";
import Time from "../assets/icon-clock.svg";
import Portrait from "../assets/image-avatar.png";
import Eye from "../assets/icon-view.svg";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <div className="card--image">
        <img className="card--image-nft" src={Nft} />
        <div className="card--image-overlay">
          <div>
            <img className="eye" src={Eye} />
          </div>
        </div>
      </div>
      <h3 className="card--title">Equilibrium #3429</h3>
      <p className="card--description">
        Our Equilibrium collection promotes balance and calm
      </p>
      <div className="card--details">
        <div className="card--details-eth">
          <img src={Eth} />
          <span>0.041</span>
        </div>
        <div className="card--details-time">
          <img src={Time} />
          <span>3 days left</span>
        </div>
      </div>
      <div className="card--line"></div>
      <div className="card--author">
        <img src={Portrait} />
        <p className="card--author-text1">Creation of</p>
        <p className="card--author-text2">Jules Wyvern</p>
      </div>
    </div>
  );
}

export default Card;
