/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

module.exports = {
	env: {
		publicURL: process.env.PUBLIC_URL,
		nodeEnv: process.env.NODE_ENV,
	},
};
