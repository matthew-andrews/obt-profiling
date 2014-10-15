var gulp = require('gulp');
var build = require('origami-build-tools/lib/tasks/build');

gulp.task('css', function() {
	build.sass(gulp, {});
});

gulp.task('js', function() {
	build.js(gulp, {});
});

gulp.task('default', function () {
	build(gulp, {});
});
