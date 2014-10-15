var gulp = require('gulp');
var obt = require('origami-build-tools');

gulp.task('css', function() {
	obt.build.sass(gulp, {});	
});

gulp.task('js', function() {
	obt.build.js(gulp, {});	
});

gulp.task('default', function () {
	obt.build(gulp, {});
});
