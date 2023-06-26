import './Header.css';
import BodyweightCell from './MetricsTracking/BodyweightCell';

const Header = ({WeekNumber}) => {
  return (
    <div className="Header">
      <div className="WeekNumber">
        <h2>Week {WeekNumber}</h2>
      </div>
      <div>
        <BodyweightCell />
      </div>
    </div>
  );
};

export default Header;
