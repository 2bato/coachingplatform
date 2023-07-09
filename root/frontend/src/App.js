import './App.css';
import Header from './components/Header';
import AddExercise from './components/Exercises/AddExercise';
import { useState, useEffect } from 'react';
import DayTab from './components/DayTab';
import axios from 'axios';
import WeightChart from './components/MetricsTracking/WeightChart';

const App = () => {
  const WeekNumber = '1';

  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = () => {
    axios
      .get('http://localhost:8082/api/Exercises')
      .then((res) => {
        setExercises(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBookList');
      });
  };

  const addExerciseHandler = (exercise) => {
    axios
      .post('http://localhost:8082/api/Exercises', exercise)
      .then(() => {
        fetchExercises();
      })
      .catch((err) => {
        console.log('Error in AddExercise!');
      });
  };

  const removeExerciseHandler = (exerciseId) => {
    axios
      .delete(`http://localhost:8082/api/Exercises/${exerciseId}`)
      .then((res) => {
        fetchExercises();
      })
      .catch((err) => {
        console.log('Error in RemoveExercise!');
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
};

export default App;
