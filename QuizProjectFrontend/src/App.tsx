import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import countryJson from './countrydata.json';
import { Country } from './helpers/TypeInterfaces';

const App = () => {

  const dateObj = new Date();
  let date = new Date().toUTCString().slice(5, 16);
  var todaysSeed = require('random-seed').create();
  todaysSeed.seed(date);
  var todaysNumber = todaysSeed(countryJson.length + 1);

  const [countryData, setCountryData] = useState<Country[]>([]);
  setCountryData(countryJson);  

  const blankCountry : Country = {
    name: '',
    continent: '',
    population: 0,
    landArea: 0
  }

  const [guess, setGuess] = useState('');

  const [guessData, setGuessData] = useState(blankCountry);

  const makeGuess = (g: string) => {
    const found = countryData.find(({name}) => name === g);
    if (found) {
      setGuessData(found);
    }

  }


  return (
    <div>
        {countryData[todaysNumber].name}

        <div>
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
        <div>
          {guessData.name}
        </div>

    </div>
  );
}

export default App;
