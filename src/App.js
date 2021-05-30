import './App.css';
import Flight from './components/Flight/Flight.tsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello Tiny Itinerary
        </p>
        <Flight />
      </header>
    </div>
  );
}

export default App;
