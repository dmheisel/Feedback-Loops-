import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
//Components for page
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Admin from '../Admin/Admin';
import AppDrawer from '../AppDrawer/AppDrawer';
import Thanks from '../Thanks/Thanks';

class App extends Component {


	render() {
		return (
			<Router>
				{/* app drawer is sidebar and top bar, route components are passed as its
				children, taking advantage of styling created within AppDrawer component */}
				<AppDrawer>
					<Route path='/' exact component={Feeling} />
					<Route path='/understanding' component={Understanding} />
					<Route path='/support' component={Support} />
					<Route path='/comments' component={Comments} />
					<Route path='/review' component={Review} />
					<Route path='/thanks' component={Thanks} />
					<Route path='/admin' component={Admin} />
				</AppDrawer>
			</Router>
		);
	}
}

export default App;
