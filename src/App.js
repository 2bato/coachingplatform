import './App.css';
import Header from './components/Header';
import Exercise from './components/Exercise';
import AddExercise from './components/AddExercise';
import { useState } from 'react';
import DayTab from './components/DayTab';

const DUMMYexercises = [
  {
    id: 1,
    movement: 'Low Bar Paused Squat',
    scheme: '1 set of 4',
    rpe: 7,
    weight: 85,
    day: 1,
  },
  {
    id: 2,
    movement: 'Low Bar Comp Squat',
    scheme: '2 sets of 6',
    rpe: 6,
    weight: 195,
    day: 1,
  },
  {
    id: 3,
    movement: 'Tempo Paused Bench',
    scheme: '3 sets of 7',
    rpe: 7,
    weight: 257.5,
    day: 1,
  },
  {
    id: 4,
    movement: 'Cable Tricep Pushdowns',
    scheme: '3 sets of 7',
    rpe: 8,
    weight: 267.5,
    day: 1,
  },
];
function App() {
  const WeekNumber = '1';

  const [exercises, setExercises] = useState(DUMMYexercises);

  const addExerciseHandler = (exercise) => {
    setExercises((prevExercises) => {
      return [...prevExercises, exercise];
    });
  };

  return (
    <div className="App">
      <div className="App-header">
        <Header WeekNumber={WeekNumber} />
        <DayTab props={exercises} />
      </div>
      <div className="App-exercise">
        <Exercise props={exercises} />
        <AddExercise onAddNewExercise={addExerciseHandler} />
      </div>
    </div>
  );
}

export default App;
