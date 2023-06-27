import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import countryJson from './countrydata.json';
import { Country } from './helpers/TypeInterfaces';
import CountryLine from './CountryLine';
import './App.scss'

const App = () => {

  const dateObj = new Date();
  let date = new Date().toUTCString().slice(5, 16);
  var todaysSeed = require('random-seed').create();
  todaysSeed.seed(date);
  var todaysNumber = todaysSeed(countryJson.length);

  const [countryData, setCountryData] = useState<Country[]>(countryJson);

  const blankCountry: Country = {
    name: '',
    continent: '',
    population: 0,
    landArea: 0,
    flagColours: []
  }

  const [guess, setGuess] = useState('');

  const [guessData, setGuessData] = useState([blankCountry]);

  const makeGuess = (g: string) => {
    const found = countryData.find(({ name }) => name === g);
    if (found) {
      setGuessData([...guessData, found]);

    }

  }


  return (
    <div className='animatedBackground'>
      <div className='center'>
        <div className='tableContainer'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Continent</th>
                <th>Population</th>
                <th>Land Area</th>
              </tr>
            </thead>
            <tbody>
              {guessData.slice(1).map((item, i) => (<CountryLine guessInfo={item} correctInfo={countryData[todaysNumber]} />))}
            </tbody>
          </table>
          <label>
            Guess:
            <input
              onChange={e => setGuess(e.target.value)}
            />
            <button onClick={() => makeGuess(guess)}>
              Make Guess
            </button>
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
