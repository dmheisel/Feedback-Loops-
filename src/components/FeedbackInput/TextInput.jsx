import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	textField: {
		width: '50vw'
	}
});
class TextInput extends Component {
	state = {
		comments: this.props.feedback.comments
	};

	handleChange = event => {
		this.setState({ comments: event.target.value });
	};

	handleClick = () => {
		this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state.comments || '' });
		this.props.history.push(this.props.nextLocation);
	};

	render() {
		const { classes } = this.props;

		return (
			<>
				<TextField
					id='CommentInput'
					className={classes.textField}
					label='Please add a comment'
					multiline
					rowsMax='4'
					value={this.state.comments}
					onChange={this.handleChange}
					margin='normal'
					helperText='Add comment'
					variant='outlined'
				/>
				<div display='block'>
					<IconButton arialabel='Next page' onClick={this.handleClick}>
						<Typography>Next Page</Typography>
						<NavigateNextIcon />
					</IconButton>
				</div>
			</>
		);
	}
}

const mapStateToProps = reduxStore => ({
	feedback: reduxStore.feedbackReducer
});
export default connect(mapStateToProps)(withRouter(withStyles(styles)(TextInput)));
