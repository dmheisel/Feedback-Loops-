import React, { Component } from 'react';
import FeedbackInput from '../FeedbackInput/FeedbackInput';

class Comments extends Component {
	render() {
		return (
			<div>
				<h2>Any additional comments you want to leave?</h2>
				<FeedbackInput nextLocation='/review' action='ADD_COMMENTS' />
			</div>
		);
	}
}

export default Comments;
