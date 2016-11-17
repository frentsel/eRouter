eRouter = {
	_run: function (pages) {

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
	},
	set: function (path) {
		window.location.hash = '#!/'+path;
	},
	init: function (pages) {

		var _this = this;
		this._run(pages);

		window.addEventListener("hashchange", function () {
			_this._run(pages);
		}, false);
	}
};