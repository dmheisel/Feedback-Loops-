import React, { Component } from 'react';
import FeedbackInput from '../FeedbackInput/FeedbackInput';

class Support extends Component {
	render() {
		return (
			<div>
				<h2>How supported do you feel by staff?</h2>
				<FeedbackInput nextLocation='/comment' action='ADD_SUPPORT' />
			</div>
		);
	}
}

export default Support;
