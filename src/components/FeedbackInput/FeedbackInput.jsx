import React, { Component } from 'react';
import TextInput from './TextInput';
import RadioInput from './RadioInput';

//material-ui imports
import { connect } from 'react-redux';

class FeedbackInput extends Component {
	render() {
		return (
			<div>
				{this.props.current === 'comments' ? (
					<TextInput
						current={this.props.current}
						action={this.props.action}
						nextLocation={this.props.nextLocation}
					/>
				) : (
					<RadioInput
						current={this.props.current}
						action={this.props.action}
						nextLocation={this.props.nextLocation}
					/>
				)}
			</div>
		);
	}
}
const mapStateToProps = reduxStore => ({
	feedback: reduxStore.feedbackReducer
});
export default connect(mapStateToProps)(FeedbackInput);
