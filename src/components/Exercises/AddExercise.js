import NewExcercise from './NewExercise';
import './AddExercise.css';

const AddExercise = (props) => {
  const saveNewExerciseHandler = (enteredExerciseData) => {
    const exerciseData = {
      ...enteredExerciseData,
    };
    props.onAddNewExercise(exerciseData);
  };
  return (
    <div className="AddExercise">
      <NewExcercise onSaveNewExercise={saveNewExerciseHandler} />
    </div>
  );
};

export default AddExercise;
