import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

//material-ui imports
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider'
//material-ui icon imports
import Comment from '@material-ui/icons/Comment';
import Mood from '@material-ui/icons/Mood';
import People from '@material-ui/icons/People';
import WhatsHot from '@material-ui/icons/Whatshot';
import Edit from '@material-ui/icons/Edit';
import FolderShared from '@material-ui/icons/FolderShared'

class DrawerList extends Component {
	render() {
		//pageList to be used in creating items to add to drawer list below
		const pageList = [
			{
				text: 'Feeling',
				url: '/',
				icon: <Mood />,
				disabled: false // first list item never disabled
			},
			{
				text: 'Understanding',
				url: 'understanding',
				icon: <WhatsHot />,
				disabled: !this.props.feedback.understanding ? true : false
				//dynamically enabled once user inputs feedback so user can edit
			},
			{
				text: 'Support',
				url: '/support',
				icon: <People />,
				disabled: !this.props.feedback.support ? true : false
				//dynamically enabled once user inputs feedback so user can edit
			},
			{
				text: 'Comments',
				url: '/comments',
				icon: <Comment />,
				disabled: this.props.feedback.comments === undefined ? true : false
				//dynamically enabled once user inputs feedback so user can edit
				//specifically checks for undefined -- user can input '' and that will
				//still enable this list item once next button is hit.
			}
		];
		//if all fields have been completed, adds "Review" field to drawer list
		//so that user can submit his feedback once edited.
		if (!Object.values(this.props.feedback).includes(undefined)) {
			pageList.push({
				text: 'Review',
				url: '/review',
				icon: <Edit />
			});
		}

		const listHtml = pageList.map((page, index) => {
			return (
				<ListItem
					key={index}
					disabled={page.disabled}
					alignItems='flex-start'
					button
					onClick={() => this.props.history.push(page.url)}>
					<ListItemIcon>{page.icon}</ListItemIcon>
					<ListItemText primary={page.text} />
				</ListItem>
			);
		});

		return (
			<List>
				{listHtml}
				<Divider />
				<ListItem
					button
					onClick={() => this.props.history.push('/admin')}>
					<ListItemIcon>
						<FolderShared />
					</ListItemIcon>
					<ListItemText primary="Admin" />
				</ListItem>
			</List>
		);
	}
}
const mapStateToProps = reduxStore => {
	return {
		feedback: reduxStore.feedbackReducer
	};
};
export default withRouter(connect(mapStateToProps)(DrawerList));
