import './NewExercise.css';

export default function NewExcercise() {
  return (
    <form className="NewExercise">
      <div className="NewExercise-movement">
        <label>Movement</label>
        <input type="text" />
      </div>
      <div className="NewExercise-scheme">
        <label>Scheme</label>
        <input type="text" />
      </div>
      <div className="NewExercise-rpe">
        <label>RPE</label>
        <input type="text" />
      </div>
      <div className="NewExercise-weight">
        <label>Weight</label>
        <input type="text" />
      </div>
      <div className='NewExercise-add'>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
