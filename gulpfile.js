// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

// -----------------------------------------------------------------------------
// Tasks
// -----------------------------------------------------------------------------

gulp.task('connect', function () {
	connect.server({
		port: 3700,
		livereload: true
	});
});

gulp.task('styles', function () {
	gulp
		.src('style.scss')
		.pipe(sass({ outputStyle: 'compressed' }))
		.pipe(gulp.dest('./'))
		.pipe(connect.reload());
});

gulp.task('watch', function () {
	gulp.watch('*.scss', ['styles']);
});

gulp.task('default', ['styles', 'connect', 'watch']);