import {
	rgxs,
} from '../regexes';

import makeParser from './makeParser';

import {
	makeParser as uaMakeParser,
	makeDefault as uaMakeDefault,
} from './ua';

import {
	makeParser as osMakeParser,
	makeDefault as osMakeDefault,
} from './os';

import {
	makeParser as deviceMakeParser,
	makeDefault as deviceMakeDefault,
} from './device';

var parser = (function(exp) {
	function Results(ua_str, ua_obj, os_obj, device_obj) {
		this.userAgent = ua_str;
		this.ua = ua_obj;
		this.os = os_obj;
		this.device = device_obj;
		delete ua_obj.userAgent;
		delete os_obj.userAgent;
		delete device_obj.userAgent;
	}

	function uaParser(regexes) {
		var parseUA = makeParser(regexes.user_agent_parsers, uaMakeParser, uaMakeDefault);
		var parseOS = makeParser(regexes.os_parsers, osMakeParser, osMakeDefault);
		var parseDevice = makeParser(regexes.device_parsers, deviceMakeParser, deviceMakeDefault);

		function parse(str) {
			var ua = parseUA(str),
				os = parseOS(str),
				device = parseDevice(str);
			return new Results(str, ua, os, device);
		}

		return {
			parse: parse,
			parseUA: parseUA,
			parseOS: parseOS,
			parseDevice: parseDevice
		};
	};

	var parser = exp.uaParser = uaParser(rgxs);
	return parser;
})(typeof window !== 'undefined' ? window : {});

if (typeof module !== 'undefined') {
	module.exports = parser;
}
