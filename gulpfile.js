/* File: gulpfile.js */

require('es6-promise').polyfill();

var gulp  = require('gulp');
var path = require('path');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer'); 
var minify = require('gulp-minify-css'); 

gulp.task('default', function () {

	return gulp.src('./less/**/*.less')
	.pipe(less())
	.pipe(minify())
	.pipe(autoprefixer({ browsers: ['last 10 versions'] }))
	.pipe(gulp.dest('./css'));

});

gulp.watch('less/**/*.less', ['default']);