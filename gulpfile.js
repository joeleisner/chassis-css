const build = require('./gulp/tasks/build'),
    compile = require('./gulp/tasks/compile'),
    gulp    = require('gulp'),
    package = require('./gulp/tasks/package'),
    watch   = require('./gulp/tasks/watch');

gulp.task('build',         build.all);
gulp.task('build:exp',     build.exp);
gulp.task('build:min',     build.min);
gulp.task('compile',     compile.all);
gulp.task('compile:exp', compile.exp);
gulp.task('compile:min', compile.min);
gulp.task('package',         package);
gulp.task('watch',         watch.all);
gulp.task('watch:exp',     watch.exp);
gulp.task('watch:min',     watch.min);