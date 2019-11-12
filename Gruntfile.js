module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        htmlhint: {
            all: ['src/**/*.html']
        },
        csslint: {
            all: ['src/**/*.css']
        },
        jshint: {
            all: ['Gruntfile.js', 'src/**/*.js']
        },
        htmlmin: {
            options: {
                compress: true
            },
            dist: {
                src: 'src/index.html',
                dest: 'dist/index.html'
            }
        },
        sass: {
            options: {
                style: 'expand'
            },
            dist: {
                src: ['src/sass/main.scss'],
                dest: 'src/css/main.css'
            }
        },
        cssmin: {
            options: {
                compress: true
            },
            dist: {
                src: ['src/css/*.css'],
                dest: 'dist/css/main.min.css'
            }
        },
        uglify: {
            options: {
                compress: true
            },
            dist: {
                src: ['src/**/*.js'],
                dest: ['dist/app.js']
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
                path: 'http://localhost:<%= express.all.options.port %>'
            }
        },
        watch: {
            options: {
                livereload: true
            },
            gruntfile: {
                files: ['Gruntfile.js'],
                tasks: ['htmlhint', 'jshint', 'htmlmin', 'sass:dist', 'csslint', 'cssmin:dist', 'uglify:dist']
            },
            html: {
                files: ['src/**/*.html'],
                tasks: ['htmlhint', 'htmlmin']
            },
            sass: {
                files: ['src/**/*.sass'],
                tasks: ['sass:dist', 'csslint', 'cssmin:dist']
            },
            js: {
                files: ['src/**/*.js'],
                tasks: ['jshint', 'uglify:dist']
            }
        }
    });

    grunt.registerTask('serve', [
        'htmlhint',
        'jshint',
        'htmlmin',
        'sass',
        'cssmin',
        'uglify',
        'express',
        'open',
        'watch'
    ]);
};