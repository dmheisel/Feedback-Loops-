import React, { Component } from 'react';

//material-ui imports
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
	root: {},
	formControl: {
		margin: theme.spacing(2)
	},
	group: {
		display: 'flex',
		flexDirection: 'row',
		margin: theme.spacing(1, 0)
	}
});

class RadioInput extends Component {


	render() {
		const { classes } = this.props;
		return (
			<FormControl component='fieldset' className={classes.formControl}>
				<FormLabel component='legend'>Rating</FormLabel>
				<RadioGroup
					aria-label='Rating'
					name='Rating'
					className={classes.group}
					value={this.props.value}
					onChange={event => {
						this.props.handleChange(event);
						this.setState({ value: event.target.value });
					}}>
					<FormControlLabel
						value='1'
						control={<Radio />}
						label='1'
						labelPlacement='bottom'
					/>
					<FormControlLabel
						value='2'
						control={<Radio />}
						label='2'
						labelPlacement='bottom'
					/>
					<FormControlLabel
						value='3'
						control={<Radio />}
						label='3'
						labelPlacement='bottom'
					/>
					<FormControlLabel
						value='4'
						control={<Radio />}
						label='4'
						labelPlacement='bottom'
					/>
					<FormControlLabel
						value='5'
						control={<Radio />}
						label='5'
						labelPlacement='bottom'
					/>
				</RadioGroup>
			</FormControl>
		);
	}
}

export default withStyles(styles)(RadioInput);
