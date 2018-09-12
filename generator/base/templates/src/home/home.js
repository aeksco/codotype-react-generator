import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 text-center my-4 py-4'>
            <h1 className='display-1' style={{'font-family': 'monospace'}}>codotype</h1>
            <p className='lead'>Built with <a target='_blank' rel='noopener noreferrer' href='http://codotype.io'>codotype.io</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;

