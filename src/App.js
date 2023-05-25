import React, { useContext } from 'react';
import { CalculationContext } from './context/context';

import Card from './components/card';

import './css/App.scss';
import './scripts.js';

function App() {
  const { functions } = useContext(CalculationContext);

  return (
    <div
      className="container"
      onKeyDown={functions.clearAll}
    >
      <header className="header">
        <img
          src={process.env.PUBLIC_URL + '/assets/images/logo.svg'}
          alt=""
        />
      </header>

      <Card />

      <footer className="attribution">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href="github.com/nicoams"
          target="_blank"
          rel="noreferrer"
        >
          Nicholas Albuquerque
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
