import React, { Component } from 'react';
import FeedbackInput from '../FeedbackInput/FeedbackInput';

//material-ui imports
import Typography from '@material-ui/core/Typography';

class Understanding extends Component {
  render() {
    return (
			<>
				<Typography variant='h4'>
					How well do you understand today's content?
				</Typography>
				<FeedbackInput nextLocation='/support' action='ADD_UNDERSTANDING' />
			</>
		);
  }
}

export default Understanding;
