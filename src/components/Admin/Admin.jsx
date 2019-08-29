import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import AdminTableItem from './AdminTableItem';

//material-ui imports
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
	root: {
		width: '80%'
	},
	paper: {
		marginTop: theme.spacing(3),
		width: '100%',
		overflowX: 'auto',
		marginBottom: theme.spacing(2)
	},
	table: {
		minWidth: 650,
		backgroundColor: theme.palette.secondary
	}
});

class Admin extends Component {

	componentDidMount = () => {
		this.getFeedback()
	}
	getFeedback = () => {
		axios
			.get('/feedback')
			.then(response => {
				console.log('successful GET route from server');
				this.props.dispatch({type: "SET_HISTORY", payload: response.data})
			})
			.catch(err => {
				console.log(`error on GET route from server: ${err}`);
			});
	};

	deleteFeedback = id => {
		axios
			.delete(`/feedback/${id}`)
			.then(response => {
				console.log(`successful DELETE from server: ${response.data}`);
				this.getFeedback();
			})
			.catch(err => console.log(`error on DELETE route from server: ${err}`));
	};

	toggleFeedbackFlag = id => {
		axios
			//does not need to send data -- sql query for /feedback/flag/id toggles flagged status
			.put(`/feedback/flag/${id}`)
			.then(response => {
				console.log(`successful PUT route from server: ${response.data}`);
				this.getFeedback();
			})
			.catch(err => console.log(`error on PUT route from server: ${err}`));
	};

	render() {
		const { classes } = this.props;
		const tableHtml = this.props.feedbackList.map(feedback => (
			//passes each feedback object to AdminTableItem component
			//gets from state -- runs getFeedback on mount and sets it to local state
			<AdminTableItem
				key={feedback.id}
				feedback={feedback}
				toggleFeedbackFlag={this.toggleFeedbackFlag}
				deleteFeedback={this.deleteFeedback}
			/>
		));

		return (
			<div className={classes.root}>
				<Paper className={classes.paper}>
					<Table className={classes.table} size='small'>
						<TableHead>
							<TableRow>
								<TableCell>Feeling</TableCell>
								<TableCell>Understanding</TableCell>
								<TableCell>Support</TableCell>
								<TableCell align='right'>Comments</TableCell>
								<TableCell align='right'>Flag</TableCell>
								<TableCell align='right'>Delete</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>{tableHtml}</TableBody>
					</Table>
				</Paper>
			</div>
		);
	}
}
const mapStateToProps = reduxStore => ({
	feedbackList: reduxStore.historyReducer
})

export default withStyles(styles)(connect(mapStateToProps)(Admin));
