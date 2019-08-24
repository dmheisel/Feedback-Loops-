import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeedbackInput from '../FeedbackInput/FeedbackInput';

class Feeling extends Component {
	state = {
		feeling: ''
	};

	render() {
		return (
			<div>
        <h2>How are you feeling today?</h2>
        <FeedbackInput nextLocation="/understanding" action="ADD_FEELING"/>
			</div>
		);
	}
}

export default connect()(Feeling);
