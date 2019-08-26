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
				<FeedbackInput current="support" nextLocation='/comments' action='ADD_SUPPORT' />
			</>
		);
	}
}

export default Support;
