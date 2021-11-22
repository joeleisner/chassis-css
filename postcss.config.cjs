const { NODE_ENV = 'development' } = process.env;

let plugins = [require('autoprefixer')];

if (NODE_ENV === 'production') plugins.push(require('cssnano'));

module.exports = {
    plugins
};