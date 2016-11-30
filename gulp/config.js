var autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano');

module.exports = {
    autoprefixer: [autoprefixer({browsers:['last 2 versions']})],
    cssnano: [cssnano()],
    dest: {
        css: 'dist/css',
        sass: 'dist/sass'
    },
    src: 'src/*.sass',
    watch: 'src/**/*'
};
