var config = {
    standalone: "AppearIn"
};

module.exports = function(grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                jshintrc: true,
                force: false,
            },
            all: [
                'lib/*.js',
                'index*.js'
            ]
        },
        browserify: {
            dev: {
                options: {
                    browserifyOptions: {
                        standalone: config.standalone
                    }
                },
                src: "<%= pkg.browser %>",
                dest: "bin/<%= pkg.name %>.bundle.js"
            },
            build: {
                options: {
                    browserifyOptions: {
                        standalone: config.standalone
                    }
                },
                src: "<%= pkg.browser %>",
                dest: "bin/<%= pkg.name %>.<%= pkg.version %>.js"
            }
        },
        uglify: {
            options: {
                sourceMap: true,
                report: true
            },
            prod: {
                src: "bin/<%= pkg.name %>.<%= pkg.version %>.js",
                dest: "bin/<%= pkg.name %>.<%= pkg.version %>.min.js"
            }
        }
    });

    // Default task(s).
    grunt.registerTask('dev', [
        'jshint',
        'browserify:dev'
    ]);

    // Build task
    grunt.registerTask('build', [
        'browserify:build',
        'uglify:prod'
    ]);

};
