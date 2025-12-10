class ServiceplanController {
	static renderServiceplans(req, res) {
		const buttons = [
			{ text: 'Admin', link: '/dashboard' },
			{ text: 'RengUser', link: '/serviceplan' },
		];
		res.render('users/serviceplan', { title: 'Serviceplan side', buttons });
	}
}

module.exports = ServiceplanController;