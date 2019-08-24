import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField'

class TextInput extends Component {
	state = {
		value: ''
	}
  render() {
    return (
			<TextField
				id='outlined-multiline-flexible'
				label='Please add a comment'
				multiline
				rowsMax='4'
				value={this.state.value}
				onChange={event => { this.props.handleChange(event); this.setState({value: event.target.value}) }}
				// className={classes.textField}
				margin='normal'
				helperText='Add comment'
				variant='outlined'
			/>
		);
  }
}

export default TextInput;
