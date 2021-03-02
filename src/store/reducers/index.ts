import { combineReducers } from 'redux';
import appReducer from '@store/reducers/app';

export default combineReducers({
	app: appReducer,
});
