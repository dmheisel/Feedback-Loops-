import React, { Component } from 'react';


class Thanks extends Component {
  render() {
    return (
      <div>
        <h2>Thanks for your feedback!</h2>
        <button onClick={() => this.props.history.push('/feeling')}>Leave New Feedback?</button>
      </div>
    );
  }
}

export default Thanks;
