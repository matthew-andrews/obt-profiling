origami:
	time ./node_modules/.bin/gulp --gulpfile origami.js

cli:
	time ./node_modules/.bin/browserify main.js -o build/main.js && sass main.scss > build/main.css

gulp:
	time ./node_modules/.bin/gulp
