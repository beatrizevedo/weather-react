import './styles.css';
import Weather from './Weather.js';

export default function App() {
  return (
    <div className="App">
      <h1>Weather APP</h1>
      <h2>Check the weather in your city</h2>
      <Weather />
      <footer>
        This project was coded by{' '}
        <a href="https://github.com/beatrizevedo">Beatriz Azevedo</a>,
        open-sourced on{' '}
        <a href="https://github.com/beatrizevedo/weather-react">Github</a>,
        hosted on{' '}
        <a href="https://beatriz-weather-react.netlify.app/">Netlify</a>
      </footer>
    </div>
  );
}
