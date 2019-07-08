var g = require('dyson-generators');
var f = require('faker');

var user = {
    path: '/user',
    template: {
        id: g.id,
        user: g.name,
        city: g.address.city
    }
};

var users = {
    path: '/users',
    collection: true,
	template: user.template,
	size: 10
};

var userWithParam = {
	path: '/user/:userId',
	template: {
        id: params => params.userId,
		username: f.internet.userName(),
		email: f.internet.email(),
		firstName: f.name.firstName,
		lastName: f.name.lastName,
		jobTitle: f.name.jobTitle,
        city: f.address.city,
		phone: f.phone.phoneNumber()
    }
}

module.exports = [user, users, userWithParam];
