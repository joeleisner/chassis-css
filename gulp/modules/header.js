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
`/* <%= pkg.name %> <%= pkg.version %> | <%= pkg.license %> | <%= pkg.homepage %> */

`
    };

function method(style) {
    return header(banner[style], { pkg });
}

module.exports = method;
