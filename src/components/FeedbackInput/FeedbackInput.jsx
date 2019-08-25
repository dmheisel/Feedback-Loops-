import React, { Component } from 'react';
import TextInput from './TextInput';
import RadioInput from './RadioInput';

//material-ui imports
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Typography from '@material-ui/core/Typography'

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class FeedbackInput extends Component {
	state = {
		value: this.props.feedback[this.props.current] || null
		//value defaults to null if not already filled in on redux sture.
		//this allows field to remain filled on page if user returns to it.
	};

	handleChange = event => {
		this.setState({ value: event.target.value });
	};

	render() {
		return (
			<div>
				{this.props.action === 'ADD_COMMENTS' ? (
					<TextInput
						handleChange={this.handleChange}
						value={this.state.value}
					/>
				) : (
					<RadioInput
						handleChange={this.handleChange}
						value={this.state.value}
					/>
				)}
				<div display='block'>
					<IconButton
						arialabel='Next page'
						onClick={event => {
							this.props.dispatch({
								type: this.props.action,
								payload: this.state.value
							});
							this.props.history.push(this.props.nextLocation);
						}}>
						<Typography>Next Page</Typography>
						<NavigateNextIcon />
					</IconButton>
				</div>
			</div>
		);
	}
}
const mapStateToProps = reduxStore => ({
	feedback: reduxStore.feedbackReducer
});
export default withRouter(connect(mapStateToProps)(FeedbackInput));
