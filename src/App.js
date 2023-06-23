import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Exercise from './components/Exercise';
import AddExercise from './components/AddExercise';
import { useState } from 'react';

const DUMMYexercises = [
  {
    id: 1,
    movement: 'Low Bar Paused Squat',
    scheme: '1 set of 4',
    rpe: 7,
    weight: '215 kg',
    day: 1,
  },
  {
    id: 2,
    movement: 'Low Bar Comp Squat',
    scheme: '2 sets of 6',
    rpe: 6,
    weight: '175 kg',
    day: 1,
  },
  {
    id: 3,
    movement: 'Tempo Paused Bench',
    scheme: '3 sets of 7',
    rpe: 7,
    weight: '125 kg',
    day: 1,
  },
  {
    id: 4,
    movement: 'Cable Tricep Pushdowns',
    scheme: '3 sets of 7',
    rpe: 8,
    weight: '555 kg',
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
      </div>
      <div className="App-exercise">
        <Exercise props={exercises} />
        <AddExercise onAddNewExercise={addExerciseHandler} />
      </div>
    </div>
  );
}

export default App;
