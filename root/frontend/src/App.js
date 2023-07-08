import './App.css';
import Header from './components/Header';
import AddExercise from './components/Exercises/AddExercise';
import { useState } from 'react';
import DayTab from './components/DayTab';
import WeightChart from './components/MetricsTracking/WeightChart';

const DUMMYexercises = [
  {
    id: 1,
    movement: 'Low Bar Paused Squat',
    scheme: '1 set of 4',
    rpe: 7,
    weight: 85,
    day: 0,
    $visualize: true,
    notes: 'Cue back extension, slow out of the hole'
  },
  {
    id: 2,
    movement: 'Low Bar Comp Squat',
    scheme: '2 sets of 6',
    rpe: 6,
    weight: 195,
    day: 0,
    $visualize: true,
    notes: ''
  },
  {
    id: 3,
    movement: 'Tempo Paused Bench',
    scheme: '3 sets of 7',
    rpe: 7,
    weight: 257.5,
    day: 1,
    $visualize: true,
    notes: ''
  },
  {
    id: 4,
    movement: 'Cable Tricep Pushdowns',
    scheme: '3 sets of 7',
    rpe: 8,
    weight: 267.5,
    day: 2,
    $visualize: false,
    notes: ''
  },
];

const App = () => {
  const WeekNumber = '1';

  const [exercises, setExercises] = useState(DUMMYexercises);

  const addExerciseHandler = (exercise) => {
    setExercises((prevExercises) => {
      return [...prevExercises, exercise];
    });
  };

  const removeExerciseHandler = (exerciseId) => {
    setExercises((prevExercises) => {
      return prevExercises.filter((exercise) => exercise.id !== exerciseId);
    });
  };

  return (
    <div className="App">
      <div className="App-header">
        <Header WeekNumber={WeekNumber} />
      </div>
      <div className="App-exercise">
        <DayTab props={exercises} onRemoveExercise={removeExerciseHandler} />
        <AddExercise onAddNewExercise={addExerciseHandler} />
        {console.log(exercises)}
      </div>
    </div>
  );
}

export default App;