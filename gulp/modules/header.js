const header = require('gulp-header'),
    pkg      = require('../../package.json'),
    banner   = {
        exp:
`/**
 * <%= pkg.name %> - <%= pkg.description %>
 * @version <%= pkg.version %>
 * @author <%= pkg.author %>
 * @link <%= pkg.homepage %>
 * @license <%= pkg.license %>
 */

`,
        min:
`/*! <%= pkg.name %> <%= pkg.version %> | <%= pkg.license %> License | <%= pkg.homepage %> */
`
    };

module.exports = style => header(banner[style], { pkg });
