import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
//redux imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
//material-ui imports
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import 'typeface-roboto';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#5adccf',
			main: '#07aa9e',
			dark: '#007a70'
		}
	}
});

const historyReducer = (state = [], action) => {
	switch (action.type) {
		case 'SET_HISTORY':
			return action.payload;
		default:
			return state;
	}
}
//feedback reducer handles each element of feedback provided
//adds it to an object with keys for each feedback
const initialFeedbackState = {
	feeling: undefined,
	understanding: undefined,
	support: undefined,
	comments: undefined
};
const feedbackReducer = (state = initialFeedbackState, action) => {
	switch (action.type) {
		case 'ADD_FEELING':
			return { ...state, feeling: action.payload };
		case 'ADD_UNDERSTANDING':
			return { ...state, understanding: action.payload };
		case 'ADD_SUPPORT':
			return { ...state, support: action.payload };
		case 'ADD_COMMENTS':
			return { ...state, comments: action.payload };
		case 'CLEAR_FEEDBACK':
			return initialFeedbackState;
		default:
			return state;
	}
};
const store = createStore(
	combineReducers({ feedbackReducer, historyReducer }),
	applyMiddleware(logger)
);
ReactDOM.render(
	<ThemeProvider theme={theme}>
		<Provider store={store}>
			<App />
		</Provider>
	</ThemeProvider>,
	document.getElementById('root')
);
registerServiceWorker();
