eRouter = new function () {

	var run = function (pages) {

		var key,
			keys,
			hash = window.location.hash;

		if(hash.indexOf('#!/') === -1) {
			window.location.hash = '#!/';
			return false;
		}

		key = hash.split('#!/').pop();

		if(key.length === 0) {
			pages.index();
			return false;
		}

		if(key.indexOf('/') !== -1) {
			keys = key.split('/');
			key = keys.shift();
		}

		if(pages[key] === undefined) {
			pages.notFound(key);
			return false;
		}

		pages[key].apply(null, keys);
	};

	this.set = function (path) {
		window.location.hash = '#!/'+path;
	};

	this.init = function (pages) {

		run(pages);
		window.addEventListener(
			"hashchange",
			run.bind(this, pages),
			false
		);
	};

	return this;
};