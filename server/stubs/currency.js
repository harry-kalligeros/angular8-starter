const f = require('faker');
const apiPath = require('../api');

const days = [
	'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'
];
let counter = 0;

const currency = {
    path: '/currency',
    template: {
		day: () => days[counter++],
		price: () => f.finance.amount()
	}
};

const currencyStats = {
    path: '/currency-stats',
    collection: true,
	template: currency.template,
	size: 6
};

const currencyEndpoints = [currencyStats].map(endPoint => {
	endPoint.path = apiPath + endPoint.path;
	return endPoint;
});

module.exports = currencyEndpoints;
