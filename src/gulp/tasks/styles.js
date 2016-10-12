'use strict';

var gulp 		 = require('gulp'),
	browserSync  = require('browser-sync'),
	autoprefixer = require('gulp-autoprefixer'),
	sass         = require('gulp-sass'),
	config 		 = require('../config'),
	plumber = require('gulp-plumber');

gulp.task('styles', function(){
  gulp.src([config.cssEntry + '**/*.scss'])
  	.pipe(plumber())
	.pipe(sass())
	.pipe(autoprefixer('last 2 versions'))
	.pipe(gulp.dest(config.cssDest))
	.pipe(browserSync.reload({stream:true}))
});