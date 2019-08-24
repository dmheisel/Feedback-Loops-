import React, { Component } from 'react';
// import { connect } from 'react-redux'
import Slider from '@material-ui/core/Slider';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class FeedbackInput extends Component {
	state = {
		value: ''
	};
	render() {
		return (
			<div>
				{this.props.action === 'ADD_COMMENTS' ? (
					<TextField
						id='outlined-multiline-flexible'
						label='Please add a comment'
						multiline
						rowsMax='4'
						value={this.state.value}
						onChange={event => this.setState({ value: event.target.value })}
						// className={classes.textField}
						margin='normal'
						helperText='Add comment'
						variant='outlined'
					/>
				) : (
					<input
						type='number'
						value={this.state.value}
						onChange={event => this.setState({ value: event.target.value })}
					/>
				)}
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
		);
	}
}

export default withRouter(connect()(FeedbackInput));
