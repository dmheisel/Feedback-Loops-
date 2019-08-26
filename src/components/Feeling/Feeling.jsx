import React, { Component } from 'react';
import FeedbackInput from '../FeedbackInput/FeedbackInput';
//material-ui imports
import Typography from '@material-ui/core/Typography'

class Feeling extends Component {

	render() {
		return (
			<>
				<Typography variant="h4">
					How are you feeling?
				</Typography>
        <FeedbackInput current="feeling" nextLocation="/understanding" action="ADD_FEELING"/>
			</>
		);
	}
}

export default Feeling;
