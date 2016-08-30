# Usage

Pre-compiled files with regexes inline are available in the dist folder.

## In Browser

Include ```parser.min.js``` in the ```<head>``` section or right before the closing ```</body>``` tag. 

``` javascript
var result = uaParser.parse('Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko');
if (result.ua.family === 'IE') {
	// will run
}
```

## In Node

``` javascript
var parser = require('uap-ref-impl');
var result = parser.parse('Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko');
if (result.ua.family === 'IE') {
	// will run
}
```

# Dev

Install dependencies, run build script to extract regexes, compile files with rollup, minify with uglify and cleanup.

```
$ npm i
$ npm run build
```
