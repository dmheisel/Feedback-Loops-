import React, { Component } from 'react';
import DrawerList from './DrawerList';
//material-ui imports
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden'
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const drawerWidth = 240
const styles = theme => ({
	root: {
		display: 'flex'
	},
	appBar: {
		width: `calc(100% - {drawerWidth}px)`,
		marginLeft: drawerWidth,
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`
		}
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0
		}
	},
	drawerPaper: {
		width: drawerWidth
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

		const drawer = (
			<Drawer
					className={classes.drawer}
					variant='permanent'
					classes={{
						paper: classes.drawerPaper
					}}
					anchor='left'>
					<div className={classes.toolbar} />
					<Divider />
					<DrawerList />
					</Drawer>
		)

		return (
			<div className={classes.root}>
				<CssBaseline />
				{/* Removes any margins, padding, etc */}
				<AppBar position='fixed' className={classes.appBar}>
					<ToolBar>
						<Typography variant='h6' noWrap>
							FeedBack Loop
						</Typography>
					</ToolBar>
				</AppBar>
				<Hidden xsDown implementation="css">
				{drawer}
					</Hidden>
				<main className={classes.content}>
					<div className={classes.toolbar} />
					{this.props.children}
					{/* children to this app will be placed here(wrap them in <AppDrawer></AppDrawer>) */}
				</main>
			</div>
		);
	}
}

export default withStyles(styles)(AppDrawer);
