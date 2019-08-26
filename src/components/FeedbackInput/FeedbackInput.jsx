import React, { Component } from 'react';
import TextInput from './TextInput';
import RadioInput from './RadioInput';

class FeedbackInput extends Component {
	//handler component uses conditional rendering to provide either text input field
	//or radio button field to its parent component.
	//this component should be passed props current(current page), action(for dispatch), and nextLocation(url for next button)
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
export default FeedbackInput;
