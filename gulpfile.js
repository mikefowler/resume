// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

var gulp = require('gulp');
var sass = require('gulp-sass');

// -----------------------------------------------------------------------------
// Tasks
// -----------------------------------------------------------------------------

gulp.task('styles', function () {
	gulp
		.src('style.scss')
		.pipe(sass({ outputStyle: 'compressed' }))
		.pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
	gulp.watch('*.scss', ['styles']);
});

gulp.task('default', ['styles', 'watch']);