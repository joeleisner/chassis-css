var header = require('gulp-header'),
    pkg = require('../package.json');

module.exports = function() {
    var banner = [
        '/**',
        ' * <%= pkg.name %> - <%= pkg.description %>',
        ' * @version <%= pkg.version %>',
        ' * @author <%= pkg.author %>',
        ' * @link <%= pkg.homepage %>',
        ' * @license <%= pkg.license %>',
        ' */',
        '',
        ''
    ].join('\n');
    return header(banner, {pkg:pkg});
};
