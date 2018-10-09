eRouter = function(routes) {

	const run = function(routes) {

		let uri = window.location.hash;
		let params;

		if (uri.indexOf('#!/') === -1) return window.location.hash = '#!/';

		uri = uri.split('#!/').pop();

		if (!uri.length) return routes.index();

		if (uri.indexOf('/') > -1) {
			params = uri.split('/');
			uri = params.shift();
		}

		if (!routes[uri]) return routes.notFound(uri);

		routes[uri].apply(this, params);
	}

	this.set = (path) => window.location.hash = '#!/' + path;

	run(routes);

	window.addEventListener(
		'hashchange',
		run.bind(this, routes),
		false
	);
};