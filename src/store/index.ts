import { MakeStore, createWrapper } from 'next-redux-wrapper';
import store from '@store/store';

// create a makeStore function
const makeStore: MakeStore = () => {
	return store;
};

// export an assembled wrapper
export const wrapper = createWrapper(makeStore);
