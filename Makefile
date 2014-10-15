origami:
	time ./node_modules/.bin/gulp --gulpfile origami.js

cli:
	time ./node_modules/.bin/browserify main.js -o build/main.js && sass main.scss > build/main.css

gulp:
	time ./node_modules/.bin/gulp


origami-parallel:
	time make _origami-parallel -j2


_origami-parallel: origami-js origami-css

origami-js:
	./node_modules/.bin/gulp --gulpfile origami.js js

origami-css:
	./node_modules/.bin/gulp --gulpfile origami.js css
