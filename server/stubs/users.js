const g = require('dyson-generators');
const f = require('faker');
const apiPath = require('../api');

const user = {
	path: '/user',
	template: userTemplate(g.id)
};

const users = {
	path: '/users',
	collection: true,
	template: user.template,
	size: 10
};

const userWithParam = {
	path: '/user/:userId',
	template: userTemplate(),
	status: (req, res, next) => {
		if (req.params.userId === '111') {
			res.status(404);
		}
		next();
	}
};

function userTemplate(id) {
	const fkr = f;
	const tId = id;
	return () => {
		const tmpl = {
			username: () => fkr.internet.userName(),
			email: () => fkr.internet.email(),
			firstName: fkr.name.firstName,
			lastName: fkr.name.lastName,
			jobTitle: fkr.name.jobTitle,
			city: fkr.address.city,
			phone: fkr.phone.phoneNumber
		};
		tmpl.id = tId ? tId : params => params.userId;
		return tmpl;
	};
}

const userEndpoints = [user, users, userWithParam].map(endPoint => {
	endPoint.path = apiPath + endPoint.path;
	return endPoint;
});

module.exports = userEndpoints;
