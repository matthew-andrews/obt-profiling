obt-profiling
=============

## `make cli`

```
time ./node_modules/.bin/browserify main.js -o build/main.js && sass main.scss > build/main.css

real	0m0.435s
user	0m0.366s
sys	0m0.069s
```

## `make gulp`

```
time ./node_modules/.bin/gulp
[18:05:32] Using gulpfile ~/sandboxes/obt-test/gulpfile.js
[18:05:32] Starting 'css'...
[18:05:32] Starting 'js'...
[18:05:32] Finished 'js' after 19 ms
[18:05:33] gulp-ruby-sass: directory
[18:05:33] gulp-ruby-sass: write main.css
[18:05:33] Finished 'css' after 375 ms
[18:05:33] Starting 'default'...
[18:05:33] Finished 'default' after 11 μs
        1.14 real         0.99 user         0.18 sys
```

## `make origami`

```
time ./node_modules/.bin/gulp --gulpfile origami.js
[18:10:13] Using gulpfile ~/sandboxes/obt-test/origami.js
[18:10:13] Starting 'default'...
Browserifying /Users/mandrews/sandboxes/obt-test/main.js
Compiling /Users/mandrews/sandboxes/obt-test/main.scss
[18:10:14] Finished 'default' after 939 ms
[18:10:14] gulp-ruby-sass: directory
[18:10:14] gulp-ruby-sass: write main.css
        2.89 real         2.68 user         0.35 sys
```

## `make origami-parallel`

```
time make _origami-parallel -j2
./node_modules/.bin/gulp --gulpfile origami.js js
./node_modules/.bin/gulp --gulpfile origami.js css
[18:16:56] Using gulpfile ~/sandboxes/obt-test/origami.js
[18:16:56] Using gulpfile ~/sandboxes/obt-test/origami.js
[18:16:56] Starting 'js'...
Browserifying /Users/mandrews/sandboxes/obt-test/main.js
[18:16:56] Starting 'css'...
Compiling /Users/mandrews/sandboxes/obt-test/main.scss
[18:16:56] Finished 'css' after 11 ms
[18:16:56] gulp-ruby-sass: directory
[18:16:56] gulp-ruby-sass: write main.css
[18:16:57] Finished 'js' after 1.03 s
        3.08 real         4.83 user         0.60 sys
```
