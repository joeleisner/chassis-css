const build = require('./build'),
    gulp    = require('gulp');

function watch(style) {
    const index = style || 'all';

    function method() {
        gulp.watch('src/**/*', build[index]);
    }

    if (style) method.displayName = `watch:${ style }`;

    return method;
}

module.exports = {
    all: watch(),
    exp: watch('exp'),
    min: watch('min'),
    ref: watch
};