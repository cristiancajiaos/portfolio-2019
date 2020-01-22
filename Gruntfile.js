var loadGruntTasks = require('load-grunt-tasks');

module.exports = function (grunt) {
    loadGruntTasks(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        htmlhint: {
            all: ['src/**/*.html']
        },
        stylelint: {
            options: {
                configFile: 'etc/.stylelintrc'
            },
            sass: [
                'src/sass/*.scss'
            ],
            css: [
                'src/css/*.css'
            ]
        },
        jshint: {
            files: [
                'Gruntfile.js',
                'src/app.js',
                'src/**/*.js'
            ]
        },
        htmlmin: {
            dist: {
                options: {
                    compress: true,
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true
                },
                src: 'src/index.html',
                dest: 'dist/index.html'
            }
        },
        ngtemplates: {
            app: {
                cwd: 'src/app',
                src: ['views/**/*.html'],
                dest: 'src/app.templates.js',
                options: {
                    module: 'app',
                    htmlmin: '<%= htmlmin.options %>'
                }
            }
        },
        copy: {
            data: {
                expand: true,
                flatten: true,
                filter: 'isFile',
                src: 'src/app/data/**',
                dest: 'dist/data'
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/sass',
                    src: ['**/*.scss'],
                    dest: 'src/css',
                    ext: '.css'
                }]
            }
        },
        cssmin: {
            options: {
                compress: true,
                removeComments: true
            },
            libs: {
                src: [
                    'node_modules/bootstrap/dist/css/bootstrap.css',
                    'node_modules/ui-bootstrap4/dist/ui-bootstrap-csp.css'
                ],
                dest: 'dist/css/libs.css'
            },
            dist: {
                src: [
                    'src/**/*.css'
                ],
                dest: 'dist/css/main.min.css'
            }
        },
        uglify: {
            options: {
                compress: true,
                removeComments: true,
                mangle: {
                    reserved: ['$stateProvider', '$urlRouterProvider', 'navOptionsService']
                }
            },
            libs: {
                src: [
                    'node_modules/jquery/dist/jquery.js',
                    'node_modules/popper.js/dist/umd/popper.js',
                    'node_modules/bootstrap/dist/js/bootstrap.js',
                    'node_modules/angular/angular.js',
                    'node_modules/angular-animate/angular-animate.js',
                    'node_modules/angular-touch/angular-touch.js',
                    'node_modules/@uirouter/angularjs/release/angular-ui-router.js',
                    'node_modules/ui-bootstrap4/dist/ui-bootstrap-tpls.js',
                    'node_modules/@fortawesome/fontawesome-free/js/all.js',
                    'node_modules/medium-zoom/dist/medium-zoom-js'
                ],
                dest: 'dist/js/libs.js'
            },
            dist: {
                src: ['src/app.js', 'src/app.templates.js', 'src/app/**/*.js'],
                dest: 'dist/app.js'
            }
        },
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 3,
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/img',
                    src: ['**/*.{png,jpg,gif}'],
                    dest:'dist/img'
                }]
            }
        },
        express: {
            all: {
                options: {
                    port: 9001,
                    hostname: '0.0.0.0',
                    bases: ['dist'],
                    livereload: true
                }
            }
        },
        open: {
            all: {
                path: 'http:/localhost:<%= express.all.options.port %>'
            }
        },
        watch: {
            options: {
                livereload: true
            },
            gruntfile: {
                files: ['Gruntfile.js'],
                tasks: ['htmlhint', 'jshint', 'htmlmin:dist', 'ngtemplates', 'copy', 'sass:dist', 'cssmin:dist', 'uglify:dist']
            },
            json: {
                files: ['src/**/*.json'],
                tasks: ['htmlhint', 'jshint', 'htmlmin:dist', 'ngtemplates', 'copy', 'sass:dist', 'cssmin:dist', 'uglify:dist']
            },
            html: {
                files: ['src/index.html', 'src/**/*.html'],
                tasks: ['htmlhint', 'htmlmin:dist', 'ngtemplates', 'jshint', 'uglify:dist']
            },
            css: {
                files: ['src/sass/**/*.scss'],
                tasks: ['stylelint:sass', 'sass:dist', 'stylelint:css', 'cssmin:dist']
            },
            js: {
                files: ['src/app.js', 'src/app/**/*.js'],
                tasks: ['jshint', 'uglify:dist']
            }
        }
    });

    grunt.registerTask('serve', [
        'htmlhint',
        'jshint',
        'htmlmin:dist',
        'ngtemplates',
        'copy',
        'stylelint:sass',
        'sass:dist',
        'stylelint:css',
        'cssmin',
        'uglify',
        'express',
        'open',
        'watch'
    ]);

    grunt.registerTask('servewithimg', [
        'htmlhint',
        'jshint',
        'htmlmin:dist',
        'ngtemplates',
        'copy',
        'stylelint:sass',
        'sass:dist',
        'stylelint:css',
        'cssmin',
        'uglify',
        'imagemin',
        'express',
        'open',
        'watch'
    ]);
};