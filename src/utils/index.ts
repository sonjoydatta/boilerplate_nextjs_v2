/**
 * Allow input value numbers only
 * @param value - pass value is paramater
 */
export const allowNumberOnly = (value: string): string => {
	const regex = /[^0-9]/;
	return value.replace(regex, '');
};

/**
 * Check if mobile device
 * @param userAgent
 */
export const checkIsMobile = (userAgent: string): boolean => {
	const re = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;

	if (userAgent) {
		return re.test(userAgent);
	} else {
		return false;
	}
};

/**
 * Format number to currency based on country
 * @param price - add price
 * @param countryCode - add country code, it is an option value, while default is `BD`
 * @param digitLimit - add digit limit, it is an option value, while default is 2
 */
export const formatPrice = (price: string | number = 0, countryCode?: string, digitLimit?: number): string => {
	if (countryCode === 'USD') {
		return Number(price).toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: digitLimit ?? 2,
		});
	} else {
		return Number(price).toLocaleString('en-US', {
			style: 'currency',
			currency: 'BDT',
			minimumFractionDigits: digitLimit ?? 2,
		});
	}
};

/**
 * Format number with comma seperated value
 * @param number - add any amount of number
 */
export const formatNumber = (number: string | number = 0): string => {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Check phone number is valid or NOT
 * @param number - pass phone number
 */
export const isValidPhone = (number: string): boolean => {
	const regex = /^((01){1}[3-9]{1}\d{8})$/;
	return regex.test(number);
};

/**
 * Format phone number
 * @param number
 */
export const numberFormatter = (number: string): string => {
	return String(number).replace(/(.)(?=(\d{3})+$)/g, '$1,');
};
