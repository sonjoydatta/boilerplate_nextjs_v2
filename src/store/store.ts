import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '@store/reducers';

const bindMiddleware = (middleware) => {
	if (process.env.nodeEnv !== 'production') {
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		const { composeWithDevTools } = require('redux-devtools-extension');
		return composeWithDevTools(applyMiddleware(...middleware));
	}

	return applyMiddleware(...middleware);
};

const store = createStore(rootReducer, bindMiddleware([thunkMiddleware]));

export default store;
