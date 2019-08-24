import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

//material-ui imports
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Comment from '@material-ui/icons/Comment'
import Mood from '@material-ui/icons/Mood'
import People from '@material-ui/icons/People'
import WhatsHot from '@material-ui/icons/Whatshot'
import Send from '@material-ui/icons/Send'
import Edit from '@material-ui/icons/Edit'


const styles = theme => ({
	root: {
		display: 'flex'
	},
	appBar: {
		width: `calc(100% - 240px)`,
		marginLeft: 240
	},
	drawer: {
		width: 240,
		flexShrink: 0
	},
	drawerPaper: {
		width: 240
	},
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(3)
	}
});

class AppDrawer extends Component {
	render() {
		const { classes } = this.props;

		const pageList = ['Feeling', 'Understanding', 'Support', 'Comments'];

		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar position='fixed' className={classes.appBar}>
					<ToolBar>
						<Typography variant='h6' noWrap>
							FeedBack Loops
						</Typography>
					</ToolBar>
				</AppBar>
				<Drawer
					className={classes.drawer}
					variant='permanent'
					classes={{
						paper: classes.drawerPaper
					}}
					anchor='left'>
					<div className={classes.toolbar} />
					<Divider />
					<List>
						<ListItem
							button
							onClick={() => this.props.history.push('/feeling')}>
							<ListItemIcon>
								<Mood />
							</ListItemIcon>
							<ListItemText primary='Feeling'></ListItemText>
						</ListItem>
						<ListItem
							button
							onClick={() => this.props.history.push('/understanding')}>
							<ListItemIcon>
								<WhatsHot />
							</ListItemIcon>
							<ListItemText primary='Understanding'></ListItemText>
						</ListItem>
						<ListItem
							button
							onClick={() => this.props.history.push('/support')}>
							<ListItemIcon>
								<People />
							</ListItemIcon>
							<ListItemText primary='Support'></ListItemText>
						</ListItem>
						<ListItem
							button
							onClick={() => this.props.history.push('/comments')}>
							<ListItemIcon>
								<Comment />
							</ListItemIcon>
							<ListItemText primary='Comments'></ListItemText>
						</ListItem>
						<ListItem button onClick={() => this.props.history.push('/review')}>
							<ListItemIcon>
								<Edit />
							</ListItemIcon>
							<ListItemText primary='Review'></ListItemText>
						</ListItem>
						<ListItem button onClick={() => this.props.history.push('/thanks')}>
							<ListItemIcon>
								<Send />
							</ListItemIcon>
							<ListItemText primary='Submit'></ListItemText>
						</ListItem>
					</List>
				</Drawer>
				<main className={classes.content}>
					<div className={classes.toolbar} />
					{this.props.children}
					{/* children to this app will be placed here(wrap them in <AppDrawer></AppDrawer>) */}
				</main>
			</div>
		);
	}
}

export default withRouter(withStyles(styles)(AppDrawer));
