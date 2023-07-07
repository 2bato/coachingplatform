import './Exercise.css';
import WeightVisualizer from './WeightVisualizer';
import RpeDropdown from './RpeDropdown';
import ExpandableNotes from './ExpandableNotes';
import { AiOutlineClose } from 'react-icons/ai';

const Exercise = ({ props, onRemoveExercise }) => {
  const handleRemoveExercise = (id) => {
    onRemoveExercise(id);
  };

  return (
    <div className="Exercise">
      <div className="Exercise-Label">
        <div className="Movement">
          <p>Movement</p>
        </div>
        <div className="Scheme">
          <p>Scheme</p>
        </div>
        <div className="RpeDropdown">
          <p>RPE</p>
        </div>
        <div className="Weight">
          <p>Weight</p>
        </div>
      </div>
      {props.map((props) => (
        <div className="Exercise-Card">
          <div className="Exercise-Item">
            <div
              className="Exercise-Info"
              key={props.id}
              day={props.day}
              visualize={props.visualize}
            >
              <div className="Movement">
                <p>{props.movement}</p>
              </div>
              <div className="Scheme">
                <p>{props.scheme}</p>
              </div>
              <div className="RpeDropdown">
                <RpeDropdown rpe={props.rpe} />
              </div>
              <div className="Weight">
                {props.$visualize === true ? (
                  <div>
                    {props.weight === '' ? <p>BW</p> : <p>{props.weight}kg</p>}
                    <WeightVisualizer
                      className="WeightVisualizer"
                      weight={props.weight}
                    />
                  </div>
                ) : (
                  <div>
                    {props.weight === '' ? <p>BW</p> : <p>{props.weight}kg</p>}
                  </div>
                )}
              </div>
            </div>
            <div className="Delete">
              <button onClick={() => handleRemoveExercise(props.id)}>
                <AiOutlineClose />
              </button>
            </div>
          </div>
          <div className="Notes">
            {props.notes === '' ? (
              <></>
            ) : (
              <ExpandableNotes notes={props.notes}></ExpandableNotes>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Exercise;
