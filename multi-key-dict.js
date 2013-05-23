var mkDict = function() {
	this.items = {};
};

var _args_parse = function(args) {
	var items = Array.prototype.slice.call(args);
	var result;
	if (items[0] instanceof Array) {
		result = items[0];
		if (items[1]) {
			result.push(items[1]);
		}
	} else {
		result = items;
	}

	return result;
};

var _args_dichotomizer = function(args) {

	var keys = args.splice(0, args.length - 1);
	var value = args[0];

	return {
		keys: keys,
		value: value
	};
};

var _add = function() {
	var args = _args_parse(arguments);
	var item = _args_dichotomizer(args);
	var curr = this.items;

	for (var i = 0; i < item.keys.length; i++) {

		var key = item.keys[i];

		if (i == item.keys.length - 1) {
			curr[key] = item.value;
		} else if (curr[key] === undefined) {
			curr[key] = {};
		}
		curr = curr[key];
	}
};

var _get = function() {
	var keys = _args_parse(arguments);
	var val = this.items;
	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		val = val[key];

	}

	return val;
};
var _remove = function() {
	var keys = _args_parse(arguments);
	var val = this.items;
	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		if (i == keys.length - 1) {
			delete val[key];
		}
		val = val[key];

	}
}
mkDict.prototype.add = _add;
mkDict.prototype.get = _get;
mkDict.prototype.remove = _remove;

module.exports = mkDict;