import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import swal from 'sweetalert2'
//material-ui imports
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	root: {},
	formControl: {
		margin: theme.spacing(2)
	},
	group: {
		display: 'flex',
		flexDirection: 'row',
		margin: theme.spacing(1, 0)
	}
});

class RadioInput extends Component {
	handleChange = event => {
		this.props.dispatch({
			type: this.props.action,
			payload: event.target.value
		});
	};

	handleClick = event => {
		if (this.props.feedback[this.props.current] === undefined) {
			swal.fire({
				type: 'error',
				title: 'Error',
				text: 'You must choose a value to continue.'
			});
		} else {
			this.props.history.push(this.props.nextLocation);
		}
	};

	render() {
		const { classes } = this.props;
		return (
			<>
				<FormControl component='fieldset' className={classes.formControl}>
					<FormLabel component='legend'>Rating</FormLabel>
					<RadioGroup
						aria-label='Rating'
						name='Rating'
						className={classes.group}
						value={this.props.feedback[this.props.current] || '0'}
						onChange={this.handleChange}>
						<FormControlLabel
							value='1'
							control={<Radio />}
							label='1'
							labelPlacement='bottom'
						/>
						<FormControlLabel
							value='2'
							control={<Radio />}
							label='2'
							labelPlacement='bottom'
						/>
						<FormControlLabel
							value='3'
							control={<Radio />}
							label='3'
							labelPlacement='bottom'
						/>
						<FormControlLabel
							value='4'
							control={<Radio />}
							label='4'
							labelPlacement='bottom'
						/>
						<FormControlLabel
							value='5'
							control={<Radio />}
							label='5'
							labelPlacement='bottom'
						/>
					</RadioGroup>
				</FormControl>
				<div display='block'>
					<Button
						arialabel='Next page'
						variant='contained'
						color='primary'
						onClick={this.handleClick}>
						<Typography>Next Page</Typography>
						<NavigateNextIcon />
					</Button>
				</div>
			</>
		);
	}
}
const mapStateToProps = reduxStore => ({
	feedback: reduxStore.feedbackReducer
});
export default connect(mapStateToProps)(
	withRouter(withStyles(styles)(RadioInput))
);
