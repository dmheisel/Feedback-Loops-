import React, { Component } from 'react';
import TextInput from './TextInput'
import RadioInput from './RadioInput'

//material-ui imports
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class FeedbackInput extends Component {
	state = {
		value: ''
	}

	handleChange = (event) => {
		this.setState({value: event.target.value})
	}

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
						<NavigateNextIcon />
					</IconButton>
				</div>
			</div>
		);
	}
}

export default withRouter(connect()(FeedbackInput));
