import React, { Component } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, } from 'recharts';
class SectorPerf extends Component {
  render() {
    const data = [
      {
        "name": "Page A",
        "uv": 4000,
        "pv": 2400,
        "amt": 2400,
        "amt2": 4400
      },
      {
        "name": "Page B",
        "uv": 3000,
        "pv": 1398,
        "amt": 2210,
        "amt2": 8400
      },
      {
        "name": "Page C",
        "uv": 2000,
        "pv": 9800,
        "amt": 2290,
        "amt2": 6390
      },
      {
        "name": "Page D",
        "uv": 2780,
        "pv": 3908,
        "amt": 2000,
        "amt2": 1950
      },
      {
        "name": "Page E",
        "uv": 1890,
        "pv": 4800,
        "amt": 2181,
        "amt2": 5400
      },
      {
        "name": "Page F",
        "uv": 2390,
        "pv": 3800,
        "amt": 2500,
        "amt2": 3020
      },
      {
        "name": "Page G",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100,
        "amt2": 9820
      }
    ]
      
    return (
      <div>
        Sector Performance 
      <AreaChart width={550} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
   <XAxis dataKey="name" />
        
        <Area type="monotone" dataKey="amt2" stroke="#B1FF00" fill="#B1FF00" fillOpacity={0.60}  />
        <Area type="monotone" dataKey="amt" stroke="#FF00EB" fill="#FF00EB" fillOpacity={0.42} />
        <Area type="monotone" dataKey="pv" stroke="#06C42B" fill="#00F4E1" fillOpacity={0.76} />
        <Area type="monotone" dataKey="uv" stroke="#8900FF" fill="#8900FF" fillOpacity={0.64} />
        <Tooltip />
</AreaChart>
</div>

    );
  }
}

export default SectorPerf;
