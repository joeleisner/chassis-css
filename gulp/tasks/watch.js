const build = require('./build'),
    gulp    = require('gulp');

function watch() {
    gulp.watch('src/**/*', build.all);
}

module.exports = watch;