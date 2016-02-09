'use strict';

module.exports = function(grunt) {
    // configure tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: ['src/sass/*.sass', 'src/sass/**/*.sass'],
                tasks: ['sass', 'cssmin', 'postcss']
            }
        },
        sass: {
            options: {
                sourcemap: 'none'
            },
            dist: {
                files: {
                    'dist/css/chassis.css': 'src/sass/chassis.sass'
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'dist/css/chassis.min.css': 'dist/css/chassis.css'
                }
            }
        },
        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions']
                    }),
                    require('css-mqpacker')()
                ]
            },
            dist: {
                src: 'dist/css/*.css'
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');
    // Default task
    grunt.registerTask('default', ['watch']);
    // Build SASS task
    grunt.registerTask('build-css', ['sass', 'cssmin', 'postcss']);
};
