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

time ./node_modules/.bin/gulp
[17:20:45] Using gulpfile ~/sandboxes/obt-test/gulpfile.js
[17:20:45] Starting 'css'...
[17:20:45] Finished 'css' after 8.56 ms
[17:20:45] Starting 'js'...
[17:20:45] Finished 'js' after 16 ms
[17:20:45] Starting 'default'...
[17:20:45] Finished 'default' after 7.4 μs
        0.80 real         0.69 user         0.10 sys

## `make origami`

time ./node_modules/.bin/gulp --gulpfile origami.js
[17:21:00] Using gulpfile ~/sandboxes/obt-test/origami.js
[17:21:00] Starting 'default'...
Browserifying /Users/mandrews/sandboxes/obt-test/main.js
Compiling /Users/mandrews/sandboxes/obt-test/main.scss
[17:21:01] Finished 'default' after 849 ms
[17:21:01] gulp-ruby-sass: directory
[17:21:01] gulp-ruby-sass: write main.css
        2.62 real         2.42 user         0.32 sys
