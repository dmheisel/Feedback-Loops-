import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

//Components for page
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review'
import Admin from '../Admin/Admin';
import Header from '../Header/Header';

class App extends Component {
	render() {
		return (
			<Router>
				<Route path='/' component={Header} />
				<Route path='/feeling' component={Feeling} />
				<Route path='/understanding' component={Understanding} />
				<Route path='/support' component={Support} />
				<Route path='/comments' component={Comments} />
				<Route path='/review' component={Review} />
				
				<Route path='/admin' component={Admin} />
			</Router>
		);
	}
}

export default App;
