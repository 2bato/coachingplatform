import './Header.css';
import BodyweightCell from './MetricsTracking/BodyweightCell';
import corgiheader from '../assets/corgiheader.png';

const Header = ({ WeekNumber }) => {
  return (
    <div className="Header">
      <div className="WeekNumber">
        <h2>Week {WeekNumber}</h2>
      </div>
      <div>
        <img src={corgiheader} className="corgiheader"></img>
      </div>
    </div>
  );
};

export default Header;
