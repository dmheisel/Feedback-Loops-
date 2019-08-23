import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Router, Link } from 'react-router-dom';

//Components for page
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Comments from '../Comments/Comments'

class App extends Component {
	render() {
		return (
			<Router>
				<div className='App'>
					<header className='App-header'>
						<h1 className='App-title'>Feedback!</h1>
						<h4>
							<i>Don't forget it!</i>
						</h4>
					</header>
					<br />
        </div>
        <Route path='/feeling' component={Feeling} />
        <Route path='/understanding' component={Understanding} />
        <Route path='/support' component={Support} />
        <Route path='/comments' component={Comments} />
        <Route path='/admin' component={Admin} />
			</Router>
		);
	}
}

export default App;
