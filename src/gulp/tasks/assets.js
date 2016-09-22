'use strict';

var gulp    = require('gulp'),
browserSync = require('browser-sync'),
config      = require('../config');

gulp.task('assets', function(){
  return gulp.src(config.copyBase + '**/*')
	.pipe(gulp.dest(config.copyDest))
	.pipe(browserSync.reload({stream:true}));
});

