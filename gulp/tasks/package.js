const filter = require('gulp-filter'),
    gulp     = require('gulp'),
    rename   = require('gulp-rename');

function method() {
    const mainFile = filter([ 'src/chassis.sass' ], { restore: true });
    return gulp.src('src/**/*')
        .pipe(mainFile)
        .pipe(rename({ prefix: '_' }))
        .pipe(mainFile.restore)
        .pipe(gulp.dest('dist/sass'));
}

method.displayName = 'package';

module.exports = method;