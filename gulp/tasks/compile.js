const gulp     = require('gulp'),
    header     = require('../modules/header'),
    minify     = require('../modules/minify'),
    postcss    = require('gulp-postcss'),
    prefix     = require('../modules/prefix'),
    rename     = require('../modules/rename'),
    sass       = require('gulp-sass'),
    processors = {
        exp: [ prefix() ],
        min: [ prefix(), minify() ]
    };

function compile(style) {
    if (!style) return gulp.series(gulp.parallel(compile('exp'), compile('min')));

    const processor = processors[style];

    function method() {
        return gulp.src('src/*.sass')
            .pipe(sass())
            .pipe(postcss(processor))
            .pipe(header(style))
            .pipe(rename(style))
            .pipe(gulp.dest('dist/css'));
    }

    method.displayName = 'compile:' + style;

    return method;
}

module.exports = {
    all: compile(),
    exp: compile('exp'),
    min: compile('min'),
    ref: compile
};