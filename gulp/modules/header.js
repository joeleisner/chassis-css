const header = require('gulp-header'),
    pkg      = require('../../package.json');

module.exports = style => {
    let banner = '/*! <%= pkg.name %> <%= pkg.version %> | <%= pkg.license %> License | <%= pkg.homepage %> */';

    if (style === 'exp') banner += '\n\n';

    return header(banner, { pkg });
};
