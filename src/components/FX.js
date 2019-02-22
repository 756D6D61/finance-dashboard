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
  render() {
    this.componentDidMount = () => {
      this.props.getData();
     }
    return (
      <div className="App">
        fx
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FX);
