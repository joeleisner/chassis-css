let config =  require('./gulp/config.js'),
    filter =  require('gulp-filter'),
    gulp =    require('gulp'),
    header =  require('./gulp/header.js'),
    postcss = require('gulp-postcss'),
    rename =  require('gulp-rename'),
    sass =    require('gulp-sass');

// Default
gulp.task('default', ['watch']);

// Watch
gulp.task('watch', () => {
    gulp.watch(config.watch, ['build']);
});

// Build
gulp.task('build', ['compile', 'package']);

// Compile
gulp.task('compile', () => {
    return gulp.src(config.src)
        .pipe(sass().on('error', sass.logError))         // Input
        .pipe(postcss(config.autoprefixer))              // Autoprefixer
        .pipe(header())                                  // Header
        .pipe(gulp.dest(config.dest.css))                // Expanded Output
        .pipe(postcss(config.cssnano))                   // Minify
        .pipe(header(true))                              // Header
        .pipe(rename({suffix:'.min'}))                   // Rename
        .pipe(gulp.dest(config.dest.css));               // Minified Ouput
});

// Package
gulp.task('package', () => {
    let f = filter(['src/chassis.sass'],{restore:true}); // Filter Parameters
    return gulp.src(config.watch)                        // Input
        .pipe(f)                                         // Filter
        .pipe(rename({prefix:'_'}))                      // Rename
        .pipe(f.restore)                                 // Unfilter
        .pipe(gulp.dest(config.dest.sass));              // Output
});
