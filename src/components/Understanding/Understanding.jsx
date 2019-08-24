import React, { Component } from 'react';
import FeedbackInput from '../FeedbackInput/FeedbackInput';

class Understanding extends Component {
  render() {
    return (
			<div>
				<h2>How well are you understanding the content??</h2>
				<FeedbackInput nextLocation='/support' action='ADD_UNDERSTANDING' />
			</div>
		);
  }
}

export default Understanding;
