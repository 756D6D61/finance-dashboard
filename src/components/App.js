import React, { Component } from 'react';
import StockPrices from './StockPrices'
import FX from './FX'
import SectorPerf from './SectorPerf'
import Crypto from './Crypto'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        app
        <StockPrices />
        <FX />
        <SectorPerf />
        <Crypto />
      </div>
    );
  }
}

export default App;
