import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField'
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
	root: {
		width: '50vw'
	}
})
class TextInput extends Component {

	render() {
		const {classes} = this.props

    return (
			<TextField
				id='CommentInput'
				className={classes.root}
				label='Please add a comment'
				multiline
				rowsMax='4'
				value={this.props.value}
				onChange={event => { this.props.handleChange(event); this.setState({value: event.target.value}) }}
				// className={classes.textField}
				margin='normal'
				helperText='Add comment'
				variant='outlined'
			/>
		);
  }
}

export default withStyles(styles)(TextInput);
