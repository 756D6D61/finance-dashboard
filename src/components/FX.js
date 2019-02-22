import React, { Component } from 'react';
import { getData } from '../actions/fx';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  ...state
 })

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData())
})

class FX extends Component {
  componentDidMount = () => {
    this.props.getData();
   }
  render() {
     console.log(this.props.FxReducer)
    return (
      <div className="App">
        fx
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FX);
