import React, { Component } from 'react';
import axios from 'axios';

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
		width: '80%',
		margin: 'auto'
	},
	paper: {
		marginTop: theme.spacing(3),
		width: '100%',
		overflowX: 'auto',
		marginBottom: theme.spacing(2)
	},
	table: {
		minWidth: 650
	}
});

class Admin extends Component {
	state = {
		feedbackList: []
	};

	getFeedback = () => {
		axios
			.get('/feedback')
			.then(response => {
				console.log('successful GET route from server');
				this.setState({ feedbackList: response.data });
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

  editFeedback = (id, newFeedback) => {
    axios
      .put(`/feedback/${id}`, newFeedback)
      .then(response => {
        console.log(`successful PUT route from server: ${response.data}`)
      })
      .catch(err => console.log(`error on PUT route from server: ${err}`))
  }

	componentDidMount = () => {
		this.getFeedback();
	};
	render() {
		const { classes } = this.props;

		const tableHtml = this.state.feedbackList.map(feedback => (
			<TableRow key={feedback.id}>
				<TableCell>{feedback.feeling}</TableCell>
				<TableCell>{feedback.understanding}</TableCell>
				<TableCell>{feedback.support}</TableCell>
				<TableCell align='right'>{feedback.comments}</TableCell>
			</TableRow>
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
							</TableRow>
						</TableHead>
						<TableBody>{tableHtml}</TableBody>
					</Table>
				</Paper>
			</div>
		);
	}
}

export default withStyles(styles)(Admin);
