var gulp = require('gulp');
var webserver = require('gulp-webserver');
 var webpack = require('gulp-webpack');

gulp.task('webpack', function() {
	return gulp.src('./src/js/app.js')
	  .pipe(webpack( require('./webpack.config.js') ))
	  .pipe(gulp.dest('./'));
});

gulp.task('webserver', function(){
	return gulp.src("./")
	.pipe(webserver({
		port: "4000",
		livereload: true,
		open: true
	}));
});

gulp.task('default', ['webpack', 'webserver']);