'use strict';

var gulp    = require('gulp'),
browserSync = require('browser-sync'),
config      = require('../config');

gulp.task('vendors', function(){
  return gulp.src(config.jsVendorsEntry + '**/*')
	.pipe(gulp.dest(config.jsVendorsDest))
	.pipe(browserSync.reload({stream:true}));
});