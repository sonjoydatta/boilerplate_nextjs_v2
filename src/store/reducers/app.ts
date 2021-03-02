/* eslint-disable indent */
import { AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { SET_IS_MOBILE } from '@store/actionTypes';

const initialState = {
	isMobile: false,
};

const app = (state = initialState, action: AnyAction): typeof initialState => {
	switch (action.type) {
		case HYDRATE:
			return { ...state, ...action.payload.app };

		case SET_IS_MOBILE:
			return { ...state, isMobile: action.payload };

		default:
			return state;
	}
};

export default app;
