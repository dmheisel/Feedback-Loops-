import React, { Component } from 'react';

//material-ui imports
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import DrawerList from './DrawerList';



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
					<DrawerList />
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

export default withStyles(styles)(AppDrawer);
