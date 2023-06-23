import './Header.css';
import BodyweightCell from './BodyweightCell';

export default function Header({ WeekNumber }) {
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
}
