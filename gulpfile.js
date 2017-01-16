/* File: gulpfile.js */

require('es6-promise').polyfill();

var gulp  = require('gulp');
var path = require('path');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer'); 
var minify = require('gulp-minify-css'); 
var mocha = require('gulp-mocha');
var util = require('gulp-util');

gulp.task('default', function () {

	return gulp.src('./less/**/*.less')
	.pipe(less())
	.pipe(minify())
	.pipe(autoprefixer({ browsers: ['last 10 versions'] }))
	.pipe(gulp.dest('./css'));

});
 
gulp.task('test', function () {
    return gulp.src(['tests/tests/**/*.js'], { read: false })
        .pipe(mocha({ reporter: 'spec' }))
        .on('error', util.log);
});

//gulp.watch('less/**/*.less', ['default']);
