import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//redux imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbackReducer = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_FEELING':
			return {...state, feeling: action.payload}
		case 'ADD_UNDERSTANDING':
			return { ...state, understanding: action.payload };
		case 'ADD_SUPPORT':
			return { ...state, support: action.payload };
		case 'ADD_COMMENTS':
      return { ...state, comments: action.payload };
    case 'CLEAR_FEEDBACK':
      return {}
		default:
			return state;
	}
};
const store = createStore(
	combineReducers({feedbackReducer}),
	applyMiddleware(logger)
);
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
