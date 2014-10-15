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
[17:21:00] Using gulpfile ~/sandboxes/obt-test/origami.js
[17:21:00] Starting 'default'...
Browserifying /Users/mandrews/sandboxes/obt-test/main.js
Compiling /Users/mandrews/sandboxes/obt-test/main.scss
[17:21:01] Finished 'default' after 849 ms
[17:21:01] gulp-ruby-sass: directory
[17:21:01] gulp-ruby-sass: write main.css
        2.62 real         2.42 user         0.32 sys
```
