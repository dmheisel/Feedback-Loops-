import React, { Component } from 'react';
// import { connect } from 'react-redux'
import Slider from '@material-ui/core/Slider';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class FeedbackInput extends Component {
	state = {
		value: 0
	};
	render() {
		return (
			<div>
				<Slider
					defaultValue={3}
					// aria-labelledby='discrete-slider'
					valueLabelDisplay='on'
					step={1}
					marks
					min={1}
					max={5}
					onChange={event => this.setState({ value: event.target.value })}
				/>
				<IconButton
					arialabel='Next page'
					onClick={event => {
						this.props.dispatch({
							type: this.props.action,
							payload: this.state.value
						});
						this.props.history.push(this.props.nextLocation);
					}}>
					<NavigateNextIcon />
				</IconButton>
			</div>
		);
	}
}

export default withRouter(connect()(FeedbackInput));
