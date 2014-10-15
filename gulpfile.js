var source = require('vinyl-source-stream');
var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var browserify = require('browserify');

gulp.task('js', function () {
	browserify('./main.js')
		.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest('./build/'));
});

gulp.task('css', function () {
	gulp.src('./main.scss')
		.pipe(gulpSass())
		.pipe(gulp.dest('./build'));
});

gulp.task('default', ['css','js']);
