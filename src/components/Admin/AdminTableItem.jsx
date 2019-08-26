import React, { Component } from 'react';
//material-ui imports
import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
//material-ui icon imports
import IconButton from '@material-ui/core/IconButton';
import Flag from '@material-ui/icons/Flag';
import FlagOutlined from '@material-ui/icons/FlagOutlined';
import DeleteSweep from '@material-ui/icons/DeleteSweep';

const styles = theme => ({
	button: {
		margin: theme.spacing(1),
		padding: theme.spacing(1)
	}
});

class AdminTableItem extends Component {
	render() {
		let feedback = this.props.feedback;
		const { classes } = this.props;
		return (
			<TableRow key={feedback.id}>
				<TableCell>{feedback.feeling}</TableCell>
				<TableCell>{feedback.understanding}</TableCell>
				<TableCell>{feedback.support}</TableCell>
				<TableCell align='right'>{feedback.comments}</TableCell>
				<TableCell align='right'>
					<IconButton
						className={classes.button}
						onClick={() => this.props.toggleFeedbackFlag(feedback.id)}>
						{feedback.flagged ? <Flag /> : <FlagOutlined />}
					</IconButton>
				</TableCell>
				<TableCell align='right'>
					<IconButton
						className={classes.button}
						onClick={() => this.props.deleteFeedback(feedback.id)}>
						<DeleteSweep />
					</IconButton>
				</TableCell>
			</TableRow>
		);
	}
}

export default withStyles(styles)(AdminTableItem);
