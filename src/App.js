import './App.css';
import Header from './components/Header';
import WeatherDetails from './components/WeatherDetails';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header/>
        <WeatherDetails/>
      </div>
    </div>
  );
}

export default App;
