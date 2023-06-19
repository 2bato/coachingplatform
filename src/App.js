import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Exercise from './components/Exercise';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header/>
      </div>
      <div className="App-exercise">
        <Exercise/>
      </div>
    </div>
  );
}

export default App;
