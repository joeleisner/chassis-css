const compile = require('./compile'),
    gulp      = require('gulp'),
    package   = require('./package');

function build(style) {
    const index = style || 'all';
    return gulp.series(gulp.parallel(compile[index], package));
}

module.exports = {
    all: build(),
    exp: build('exp'),
    min: build('min'),
    ref: build
};