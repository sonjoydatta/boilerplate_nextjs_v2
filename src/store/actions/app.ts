import { NextPageContext } from 'next';
import { SET_IS_MOBILE } from '@store/actionTypes';
import { checkIsMobile } from '@utils/index';

export const updateUserIsMobile = (ctx: NextPageContext): void => {
	const userAgent = ctx?.req?.headers['user-agent'] ?? window?.navigator?.userAgent;
	const isMobile = checkIsMobile(userAgent);
	ctx.store.dispatch({ type: SET_IS_MOBILE, payload: isMobile });
};
