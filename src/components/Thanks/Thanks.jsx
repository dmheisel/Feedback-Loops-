import React, { Component } from 'react';
import { connect } from 'react-redux';

class Thanks extends Component {
	render() {
		return (
			<div>
				<h2>Thanks for your feedback!</h2>
				<button
					onClick={() => {
						this.props.history.push('/');
						this.props.dispatch({ type: 'CLEAR_FEEDBACK' });
					}}>
					Leave New Feedback?
				</button>
			</div>
		);
	}
}

export default connect()(Thanks);
