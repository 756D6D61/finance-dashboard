import React, { Component } from 'react';
import StockPrices from './StockPrices'
import FX from './FX'
import SectorPerf from './SectorPerf'
import Crypto from './Crypto'
import { simpleAction } from '../actions/simpleAction';
import { connect } from 'react-redux';
import './App.css';

const mapStateToProps = state => ({
  ...state
 })

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

class App extends Component {
  simpleAction = (event) => {
    this.props.simpleAction();
   }
  render() {
    return (
      <div className="App">
        app
        <button onClick={this.simpleAction}>Test redux action</button>
        <pre>
 {
  JSON.stringify(this.props)
 }
</pre>
        <div class="wrapper side">
          <div>
            <StockPrices />
            <div class="wrapper">
              <div><SectorPerf /></div>
            </div>    
          </div>
          <div>
            <FX />
            <div class="wrapper">
              <div>
                <Crypto />
              </div>
            </div>    
            </div>        
          </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
