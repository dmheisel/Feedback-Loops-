import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

//material-ui imports
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
	root: {
    padding: theme.spacing(3, 3),
    width: '80%',
	},
	textArea: {
		margin: 'auto'
	},
	button: {
		margin: theme.spacing(1)
	},
	break: {
		margin: theme.spacing(2,0)
	}
});
class Review extends Component {
	handleSubmit = () => {
		//feedback isn't sent to db until it's submitted from review page
		axios
			.post('/feedback/add', this.props.feedback)
			.then(response => {
        console.log(`successful POST route to server: ${response}`);
        this.props.dispatch({type: 'CLEAR_FEEDBACK' })
				this.props.history.push('/thanks');
			})
			.catch(err => {
				console.log(`error on POST route to server: ${err}`);
			});
	};

	render() {
		const { classes } = this.props;
		return (
			<div>
				<Paper className={classes.root}>
					<Typography variant='h4'>Review your feedback:</Typography>
					<Divider className={classes.break} />
					<div className={classes.textArea}>
					<Typography variant='h6'>
						Feeling: {this.props.feedback.feeling}
					</Typography>
					<Typography variant='h6'>
						Understanding: {this.props.feedback.understanding}
					</Typography>
					<Typography variant='h6'>
						Support: {this.props.feedback.support}
					</Typography>
					<Typography variant='h6'>
						Comments: {this.props.feedback.comments}
						</Typography>
						</div>
					<Divider className={classes.break} />
					<Button
						variant='contained'
						color='primary'
            className={classes.button}
            onClick={this.handleSubmit}
          >
						Submit
					</Button>
				</Paper>
			</div>
		);
	}
}
//adds redux state to props of this component to access in render
const mapStateToProps = reduxStore => ({
	feedback: reduxStore.feedbackReducer
});
export default connect(mapStateToProps)(withStyles(styles)(Review));
