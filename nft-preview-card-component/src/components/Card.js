import Nft from "../assets/image-equilibrium.jpg";
import Eth from "../assets/icon-ethereum.svg";
import Time from "../assets/icon-clock.svg";
import Portrait from "../assets/image-avatar.png";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <img className="card--image" src={Nft} />
      <h3 className="card--title">Equilibrium #3429</h3>
      <p className="card--description">
        Our Equilibrium collection promotes balance and calm
      </p>
      <div className="card--details">
        <div className="card--details-eth">
          <img src={Eth} />
          <span>0.041 ETH</span>
        </div>
        <div className="card--details-time">
          <img src={Time} />
          <span>3 days left</span>
        </div>
      </div>
      <div className="card--line"></div>
      <div className="card--author">
        <img src={Portrait} />
        <span>Creation of</span>
        <span>Jules Wyvern</span>
      </div>
    </div>
  );
}

export default Card;
