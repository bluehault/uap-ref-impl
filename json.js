const fs = require('fs');
const join = require('path').join;
const YAML = require('yamlparser');

fs.readFile(join(__dirname, 'node_modules', 'ua-parser', 'regexes.yaml'), (err, regexes_yaml) => {
	if (err) {
		throw new Error(err);
	}
	console.log('regexes.yaml read');
	var regexes = YAML.eval(regexes_yaml.toString());
	fs.writeFile('regexes.js', 'export var rgxs = ' + JSON.stringify(regexes), (err) => {
		if (err) {
			throw new Error(err);
		}
		console.log('regexes.js written');
	});
});
