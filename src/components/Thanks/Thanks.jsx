import React, { Component } from 'react';
import { connect } from 'react-redux';

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
		margin: 'auto'
	},
	textArea: {
		margin: 'auto'
	},
	button: {
		margin: theme.spacing(1)
	},
	break: {
		margin: theme.spacing(2, 0)
	}
});

class Thanks extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<Paper className={classes.root}>
					<Typography variant='h2'>Thanks for your feedback!</Typography>
					<Divider className={classes.break} />
					<Button className={classes.button} variant="contained" color="primary"
						onClick={() => {
							this.props.history.push('/');
						}}>
						Leave New Feedback?
					</Button>
				</Paper>
			</div>
		);
	}
}

export default withStyles(styles)(connect()(Thanks));
