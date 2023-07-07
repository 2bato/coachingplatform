import NewExcercise from './NewExercise';
import './AddExercise.css';

const AddExercise = ({onAddNewExercise}) => {
  const saveNewExerciseHandler = (enteredExerciseData) => {
    const exerciseData = {
      ...enteredExerciseData,
    };
    onAddNewExercise(exerciseData);
  };
  return (
    <div className="AddExercise">
      <NewExcercise onSaveNewExercise={saveNewExerciseHandler} />
    </div>
  );
};

export default AddExercise;
