import NewExcercise from './NewExercise';

export default function AddExercise(props) {
  const saveNewExerciseHandler = (enteredExerciseData) => {
    const exerciseData = {
      ...enteredExerciseData,
    };
    props.onAddNewExercise(exerciseData)
  };
  return (
    <div className="AddExercise">
      <NewExcercise onSaveNewExercise={saveNewExerciseHandler} />
    </div>
  );
}
