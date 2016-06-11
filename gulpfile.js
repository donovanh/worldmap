// Generated on 2015-01-15 using generator-jekyllized 0.7.0
'use strict';

var gulp = require('gulp');
// Loads the plugins without having to list all of them, but you need
// to call them as $.pluginname
var $ = require('gulp-load-plugins')();
var gutil = require("gutil");

gulp.task('styles', function () {
  // Looks at the style.scss file for what to include and creates a style.css file
  return gulp.src('./src/sass/**/*.scss')
    .pipe($.sass({outputStyle: 'compressed'}))
    // AutoPrefix your CSS so it works between browsers
    .pipe($.autoprefixer('last 2 versions', { cascade: true }))
    // Directory your CSS file goes to
    .pipe(gulp.dest('stylesheets/'))
    // Outputs the size of the CSS file
    .pipe($.size({title: 'styles'}))
});

gulp.task('styles', function () {
  // Looks at the style.scss file for what to include and creates a style.css file
  return gulp.src('./src/sass/**/*.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass({outputStyle: 'compressed', errLogToConsole: true}))
    .pipe($.autoprefixer('last 2 versions', { cascade: true }))
    .pipe($.cssnano())
    .pipe($.size({title: 'styles'}))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('./stylesheets/'))
    .on('error', gutil.log)
});

// gulp.task('javascripts', function() {
//   return gulp.src('./src/javascript/**/*.js')
//   .pipe($.jshint())
//   .pipe($.jshint.reporter('default'))
//   .pipe($.sourcemaps.init())
//   .on('error', console.log)
//   .pipe($.uglify())
//   .pipe($.sourcemaps.write('./'))
//   .pipe(gulp.dest('./javascripts/'))
//   .pipe($.size({title: 'javascripts'}))
//   .on('error', gutil.log)
// });

gulp.task('watch', function () {
  gulp.watch(['./src/sass/**/*.scss'], gulp.series('styles'));
  //gulp.watch(['./src/javascripts/**/*.js'], gulp.series('javascripts'));
});

gulp.task(
  'default',
  gulp.series(
    gulp.parallel(
      'styles'
      //'javascripts'
    ),
    'watch'
  )
);
