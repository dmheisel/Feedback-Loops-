import React, { Component } from 'react';
import FeedbackInput from '../FeedbackInput/FeedbackInput';

//material-ui imports
import Typography from '@material-ui/core/Typography';

class Support extends Component {
	render() {
		return (
			<>
				<Typography variant='h4'>
					How well do you feel supported by staff?
				</Typography>
				<FeedbackInput nextLocation='/comments' action='ADD_SUPPORT' />
			</>
		);
	}
}

export default Support;
