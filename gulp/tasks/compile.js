const gulp  = require('gulp'),
    header  = require('../modules/header'),
    minify  = require('../modules/minify'),
    postcss = require('gulp-postcss'),
    prefix  = require('../modules/prefix'),
    rename  = require('../modules/rename'),
    sass    = require('gulp-sass');

let processors = [ prefix() ];

function compile(style) {
    if (!style) return gulp.series(gulp.parallel(compile('exp'), compile('min')));

    if (style === 'min') processors.push(minify());

    function method() {
        return gulp.src('src/*.sass')
            .pipe(sass())
            .pipe(postcss(processors))
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