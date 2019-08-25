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
			{ text: 'Feeling', url: '/', icon: <Mood /> },
      { text: 'Understanding', url: 'understanding', icon: <WhatsHot />},
      { text: 'Support', url: '/support', icon: <People /> },
			{ text: 'Comments', url: '/comments', icon: <Comment />},
			{ text: 'Review', url: '/review', icon: <Edit /> }
    ];
    // const pagesComplete =
		const listHtml = pageList.map(page => {
      let url = page.url;
			return (
        <ListItem button onClick={() => this.props.history.push(url)}>
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
