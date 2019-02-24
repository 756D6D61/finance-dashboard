import React, { Component } from 'react';
import { getData } from '../actions/fx';
import { connect } from 'react-redux';
import { Chart } from 'react-google-charts';

const mapStateToProps = state => ({
  ...state
 })

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData())
})

const data = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700]
];

class FX extends Component {
  componentDidMount = () => {
    this.props.getData();
   }
  render() {
     console.log(this.props.FxReducer)
    return (
      <div>
        fx
        <Chart
          chartEvents={[
            {
              eventName: "select",
              callback: ({ chartWrapper }) => {
                const chart = chartWrapper.getChart();
                const selection = chart.getSelection();
                if (selection.length === 0) return;
                const region = data[selection[0].row + 1];
                console.log("Selected : " + region);
              }
            }
          ]}
          chartType="GeoChart"
          width="100%"
          height="400px"
          data={data}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FX);
