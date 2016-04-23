'use strict';

// Require
var autoprefixer = require('autoprefixer'),
    mqpacker = require('css-mqpacker'),
    cssnano = require('cssnano');

module.exports = {
    build: {
        dest: {
            css: 'dist/chassis-css',
            sass: 'dist/chassis-sass'
        },
        input: 'src/sass/chassis.sass',
        output: {
            exp: 'chassis.css',
            min: 'chassis.min.css',
            sass: '_chassis.sass'
        },
        sass: {
            mixins: {
                input: 'src/sass/mixins/**/*.*',
                output: 'dist/chassis-sass/mixins'
            },
            partials: {
                input: 'src/sass/partials/**/*.*',
                output: 'dist/chassis-sass/partials'
            },
            variables: {
                input: 'src/sass/variables/**/*.*',
                output: 'dist/chassis-sass/variables'
            }
        },
        watch: ['src/sass/*.sass', 'src/sass/**/*.sass']
    },
    postcss: {
        processors: {
            exp: [
                autoprefixer({browsers: ['last 2 versions']}),
                mqpacker()
            ],
            min: [
                cssnano(),
                autoprefixer({browsers: ['last 2 versions']}),
                mqpacker()
            ]
        }
    }
};
