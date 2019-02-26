import React, { Component } from 'react';
import { AreaChart, Area, XAxis, Tooltip } from 'recharts';
import { getCryptoData } from '../actions/crypto';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  ...state
 })

const mapDispatchToProps = dispatch => ({
  getCryptoData: () => dispatch(getCryptoData())
})


class Crypto extends Component {
  componentDidMount = () => {
    this.props.getCryptoData();
   }
  render() {
    const data = [
      {
        "name": "Page A",
        "uv": 4000,
        "pv": 2400,
        "amt": 8400,
      },
      {
        "name": "Page B",
        "uv": 5000,
        "pv": 1398,
        "amt": 2210
      },
      {
        "name": "Page C",
        "uv": 2000,
        "pv": 9800,
        "amt": 2290
      },
      {
        "name": "Page D",
        "uv": 6780,
        "pv": 3908,
        "amt": 2000
      },
      {
        "name": "Page E",
        "uv": 1890,
        "pv": 4800,
        "amt": 2181
      },
      {
        "name": "Page F",
        "uv": 2390,
        "pv": 3800,
        "amt": 7500
      },
      {
        "name": "Page G",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100
      }
    ]
    console.log(this.props.CryptoReducer)
      
    return (
      <div>
        Cryptocurrency
        <AreaChart width={730} height={250} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <XAxis dataKey="name" />
        
        <Area type="monotone" dataKey="uv" stroke="#E3078E" fill="#E3078E" fillOpacity={0.64}  />
        <Area type="monotone" dataKey="pv" stroke="#C5E60D" fill="#C5E60D" fillOpacity={0.75} />
        <Area type="monotone" dataKey="amt" stroke="#06C42B" fill="#06C42B" fillOpacity={0.62} />
        <Tooltip />

      </AreaChart>

      
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Crypto);
