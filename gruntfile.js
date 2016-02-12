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
                    'dist/chassis-css/chassis.css': 'src/sass/chassis.sass'
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'dist/chassis-css/chassis.min.css': 'dist/chassis-css/chassis.css'
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
                src: 'dist/chassis-css/*.css'
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: 'src/sass',
                src: '**/*.sass',
                dest: 'dist/chassis-sass/'
            }
        },
        rename: {
            main: {
                files: [
                    {src: ['dist/chassis-sass/chassis.sass'], dest: 'dist/chassis-sass/_chassis.sass'}
                ]
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-rename');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');
    // Default task
    grunt.registerTask('default', ['watch']);
    // Build CSS task
    grunt.registerTask('build-css', ['sass', 'cssmin', 'postcss']);
    // Build SASS plugin directory
    grunt.registerTask('build-sass-plugin', ['copy', 'rename']);
};
