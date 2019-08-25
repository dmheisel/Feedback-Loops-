import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Comment from '@material-ui/icons/Comment';
import Mood from '@material-ui/icons/Mood';
import People from '@material-ui/icons/People';
import WhatsHot from '@material-ui/icons/Whatshot';
import Edit from '@material-ui/icons/Edit';

class DrawerList extends Component {
	render() {
		const pageList = [
			{
				text: 'Feeling',
				url: '/',
				icon: <Mood />,
				disabled: this.props.feedback.feeling === null ? true : false
			},
			{
				text: 'Understanding',
				url: 'understanding',
				icon: <WhatsHot />,
				disabled: this.props.feedback.understanding === null ? true : false
			},
			{
				text: 'Support',
				url: '/support',
				icon: <People />,
				disabled: this.props.feedback.support === null ? true : false
			},
			{
				text: 'Comments',
				url: '/comments',
				icon: <Comment />,
				disabled: this.props.feedback.comments === undefined ? true : false
			}
		];
		if (!Object.values(this.props.feedback).includes(null)) {
			pageList.push({
				text: 'Review',
				url: '/review',
				icon: <Edit />
			});
		}
		//if any value in this.props.feedback is 'null', does not display Review page option
		// !Object.values(this.props.feedback).includes(null) && {
		// 	text: 'Review',
		// 	url: '/review',
		// 	icon: (<Edit />),
		// }
		// const pagesComplete =
		const listHtml = pageList.map((page, index) => {
			return (
				<ListItem
					key={index}
					disabled={page.disabled}
					button
					onClick={() => this.props.history.push(page.url)}>
					<ListItemIcon>{page.icon}</ListItemIcon>
					<ListItemText primary={page.text} />
				</ListItem>
			);
		});

		return <List>{listHtml}</List>;
	}
}
const mapStateToProps = reduxStore => {
	return {
		feedback: reduxStore.feedbackReducer
	};
};
export default withRouter(connect(mapStateToProps)(DrawerList));
