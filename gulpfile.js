var source = require('vinyl-source-stream');
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var browserify = require('browserify');

gulp.task('js', function () {
	browserify('./main.js')
		.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest('./build/'));
});

gulp.task('css', function () {
	return gulp.src('main.scss')
		.pipe(sass())
		.on('error', function (err) { console.log(err.message); })
		.pipe(gulp.dest('build'));
});

gulp.task('default', ['css','js']);
