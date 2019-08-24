import React, { Component } from 'react';
import FeedbackInput from '../FeedbackInput/FeedbackInput';

//material-ui imports
import Typography from '@material-ui/core/Typography';

class Comments extends Component {
	render() {
		return (
			<>
				<Typography variant='h4'>
					Any additional comments you'd like to add?
				</Typography>
				<FeedbackInput nextLocation='/review' action='ADD_COMMENTS' />
			</>
		);
	}
}

export default Comments;
