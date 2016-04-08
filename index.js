'use strict';
module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	var escapedStr = escape(str);

	var len = 0;
	for (var i = 0; i < escapedStr.length; i++, len++) {
		if (escapedStr.charAt(i) === '%') {
			if (escapedStr.charAt(++i) === 'u') {
				i += 3;
				len++;
			}
			i++;
		}
	}

	return len;
};
