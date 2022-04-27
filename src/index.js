import React from 'react';
import ReactDOM from 'react-dom';
import App from './toDOApp';
import CoinApp from './CoinApp';
import MovieApp from './MovieApp';

ReactDOM.render(
  <React.StrictMode>
    <MovieApp />
  </React.StrictMode>,
  document.getElementById('root')
);
