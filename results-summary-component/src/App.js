import Score from './components/Score';
import Summary from './components/Summary';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="backplate">
        <Score />
        <Summary />
      </div>
    </div>
  );
}

export default App;
