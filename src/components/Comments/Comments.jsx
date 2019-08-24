import React, { Component } from 'react';

class Comments extends Component {
	render() {
		return (
			<div>
				<h2>Any additional comments you want to leave?</h2>
				<FeedbackInput nextLocation='/review' action='ADD_COMMENT' />
			</div>
		);
	}
}

export default Comments;
