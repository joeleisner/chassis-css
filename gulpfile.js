'use strict';

// Require
var gulp = require('gulp'),
    config = require('./gulpconfig.js'),
    postcss = require('gulp-postcss'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass');

// Default Task
gulp.task('default', ['watch']);

// Watch Task
gulp.task('watch', function() {
    gulp.watch(config.build.watch, ['build']);
});

// Build Task
gulp.task('build', ['build-css', 'build-sass']);

// Build-CSS Task
gulp.task('build-css', ['build-css-exp', 'build-css-min']);

// Build-CSS Expanded Task
gulp.task('build-css-exp', function() {
    return gulp.src(config.build.input)
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(config.postcss.processors.exp))
        .pipe(rename(config.build.output.exp))
        .pipe(gulp.dest(config.build.dest.css));
});

// Build-CSS Minified Task
gulp.task('build-css-min', function() {
    return gulp.src(config.build.input)
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(config.postcss.processors.min))
        .pipe(rename(config.build.output.min))
        .pipe(gulp.dest(config.build.dest.css));
});

// Build-SASS Task
gulp.task('build-sass', ['copy-sass-dir'], function() {
    return gulp.src(config.build.input)
        .pipe(rename(config.build.output.sass))
        .pipe(gulp.dest(config.build.dest.sass));
});

// Copy SASS Directories Task
gulp.task('copy-sass-dir', ['copy-sass-mixins', 'copy-sass-partials', 'copy-sass-variables']);

// Copy SASS Mixins Task
gulp.task('copy-sass-mixins', function() {
    return gulp.src(config.build.sass.mixins.input, {base: 'src/sass/mixins'})
        .pipe(gulp.dest(config.build.sass.mixins.output));
});

// Copy SASS Partials Task
gulp.task('copy-sass-partials', function() {
    return gulp.src(config.build.sass.partials.input, {base: 'src/sass/partials'})
        .pipe(gulp.dest(config.build.sass.partials.output));
});

// Copy SASS Variables Task
gulp.task('copy-sass-variables', function() {
    return gulp.src(config.build.sass.variables.input, {base: 'src/sass/variables'})
        .pipe(gulp.dest(config.build.sass.variables.output));
});
