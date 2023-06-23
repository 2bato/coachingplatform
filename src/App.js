import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Exercise from './components/Exercise';
import AddExercise from './components/AddExercise';
import { useState } from 'react';

const DUMMYexercises = [
  {
    movement: 'Low Bar Paused Squat',
    scheme: '1 set of 4',
    rpe: 7,
    weight: '215 kg',
  },
  {
    movement: 'Low Bar Comp Squat',
    scheme: '2 sets of 6',
    rpe: 6,
    weight: '175 kg',
  },
  {
    movement: 'Tempo Paused Bench',
    scheme: '3 sets of 7',
    rpe: 7,
    weight: '125 kg',
  },
  {
    movement: 'Tempo Paused Bench ggggggggggggggggg',
    scheme: '3 sets of 7',
    rpe: 7,
    weight: '125 kg',
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
