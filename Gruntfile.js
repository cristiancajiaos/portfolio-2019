var loadGruntTasks = require('load-grunt-tasks');

module.exports = function (grunt) {
    loadGruntTasks(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            dist: [
                'dist', 'src/css'
            ],
            release: [
                'release', 'src/css'
            ]
        },
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
            dist: {
                src: 'src/index.html',
                dest: 'dist/index.html'
            },
            release: {
                src: 'src/index.html',
                dest: 'release/index.html'
            }
        },
        ngtemplates: {
            dist: {
                cwd: 'src/app',
                src: [
                    'views/**/*.html',
                    'layout/**/*.html'
                ],
                dest: 'src/app.templates.js',
                options: {
                    module: 'app',
                    htmlmin: '<%= htmlmin.options %>'
                }
            },
            release: {
                cwd: 'src/app',
                src: [
                    'views/**/*.html',
                    'layout/**/*.html'
                ],
                dest: 'release/app.templates.js',
                options: {
                    module: 'app',
                    htmlmin: '<%= htmlmin.options %>'
                }
            }
        },
        copy: {
            dist: {
                expand: true,
                flatten: true,
                filter: 'isFile',
                src: 'src/app/data/**',
                dest: 'dist/data'
            },
            release: {
                expand: true,
                flatten: true,
                filter: 'isFile',
                src: 'src/app/data/**',
                dest: 'release/data'
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
            libsdist: {
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
            },
            libsrelease: {
                src: [
                    'node_modules/bootstrap/dist/css/bootstrap.css',
                    'node_modules/ui-bootstrap4/dist/ui-bootstrap-csp.css'
                ],
                dest: 'release/css/libs.css'
            },
            release: {
                src: [
                    'src/**/*.css'
                ],
                dest: 'release/css/main.min.css'
            }
        },
        uglify: {
            options: {
                compress: true,
                removeComments: true,
                mangle: {
                    reserved: [
                        '$stateProvider',
                        '$urlRouterProvider',
                        'navOptionsService'
                    ]
                }
            },
            libsdist: {
                src: [
                    'node_modules/jquery/dist/jquery.js',
                    'node_modules/popper.js/dist/umd/popper.js',
                    'node_modules/bootstrap/dist/js/bootstrap.js',
                    'node_modules/angular/angular.js',
                    'node_modules/angular-animate/angular-animate.js',
                    'node_modules/angular-touch/angular-touch.js',
                    'node_modules/@uirouter/angularjs/release/angular-ui-router.js',
                    'node_modules/ui-bootstrap4/dist/ui-bootstrap-tpls.js',
                    'node_modules/@fortawesome/fontawesome-free/js/all.js'
                ],
                dest: 'dist/js/libs.js'
            },
            dist: {
                src: [
                    'src/app.js',
                    'src/app.templates.js',
                    'src/app/**/*.js'
                ],
                dest: 'dist/app.js'
            },
            libsrelease: {
                src: [
                    'node_modules/jquery/dist/jquery.js',
                    'node_modules/popper.js/dist/umd/popper.js',
                    'node_modules/bootstrap/dist/js/bootstrap.js',
                    'node_modules/angular/angular.js',
                    'node_modules/angular-animate/angular-animate.js',
                    'node_modules/angular-touch/angular-touch.js',
                    'node_modules/@uirouter/angularjs/release/angular-ui-router.js',
                    'node_modules/ui-bootstrap4/dist/ui-bootstrap-tpls.js',
                    'node_modules/@fortawesome/fontawesome-free/js/all.js'
                ],
                dest: 'release/js/libs.js'
            },
            release: {
                src: [
                    'src/app.js',
                    'src/app.templates.js',
                    'src/app/**/*.js'
                ],
                dest: 'release/app.js'
            }
        },
        imagemin: {
            options: {
                optimizationLevel: 3,
                progressive: true
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/img',
                    src: ['**/*.{png,jpg,gif}'],
                    dest:'dist/img'
                }]
            },
            release: {
                files: [{
                    expand: true,
                    cwd: 'src/img',
                    src: ['**/*.{png,jpg,gif}'],
                    dest:'release/img'
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
                files: [
                    'Gruntfile.js'
                ],
                tasks: [
                    'htmlhint',
                    'jshint',
                    'htmlmin:dist',
                    'ngtemplates:dist',
                    'copy:dist',
                    'sass:dist',
                    'cssmin:dist',
                    'uglify:dist'
                ]
            },
            json: {
                files: [
                    'src/**/*.json'
                ],
                tasks: [
                    'htmlhint',
                    'jshint',
                    'htmlmin:dist',
                    'ngtemplates:dist',
                    'copy:dist',
                    'sass:dist',
                    'cssmin:dist',
                    'uglify:dist'
                ]
            },
            html: {
                files: [
                    'src/index.html',
                    'src/**/*.html'
                ],
                tasks: [
                    'htmlhint',
                    'htmlmin:dist',
                    'ngtemplates:dist',
                    'jshint',
                    'uglify:dist'
                ]
            },
            css: {
                files: [
                    'src/sass/**/*.scss'
                ],
                tasks: [
                    'stylelint:sass',
                    'sass:dist',
                    'stylelint:css',
                    'cssmin:dist'
                ]
            },
            js: {
                files: [
                    'src/app.js',
                    'src/app/**/*.js'
                ],
                tasks: [
                    'jshint',
                    'uglify:dist'
                ]
            }
        }
    });

    grunt.registerTask('serve', [
        'htmlhint',
        'jshint',
        'htmlmin:dist',
        'ngtemplates:dist',
        'copy:dist',
        'stylelint:sass',
        'sass:dist',
        'stylelint:css',
        'cssmin:libsdist',
        'cssmin:dist',
        'uglify:libsdist',
        'uglify:dist',
        'express',
        'open',
        'watch'
    ]);

    grunt.registerTask('servewithimg', [
        'clean:dist',
        'htmlhint',
        'jshint',
        'htmlmin:dist',
        'ngtemplates:dist',
        'copy:dist',
        'stylelint:sass',
        'sass:dist',
        'stylelint:css',
        'cssmin:libsdist',
        'cssmin:dist',
        'uglify:libsdist',
        'uglify:dist',
        'imagemin:dist',
        'express',
        'open',
        'watch'
    ]);

    grunt.registerTask('release', [
        'clean:release',
        'htmlhint',
        'jshint',
        'htmlmin:release',
        'ngtemplates:release',
        'copy:release',
        'stylelint:sass',
        'sass:dist',
        'stylelint:css',
        'cssmin:libsrelease',
        'cssmin:release',
        'uglify:libsrelease',
        'uglify:release',
        'imagemin:release'
    ]);
};