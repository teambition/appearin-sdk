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
                'src/*.js',
                'index*.js'
            ]
        },
        uglify: {
            options: {
                report: true
            },
            prod: {
                src: "src/appearin.js",
                dest: "dist/appearin.js"
            }
        }
    });

    // Default task(s).
    grunt.registerTask('dev', [
        'jshint',
    ]);

    // Build task
    grunt.registerTask('build', [
        'uglify:prod'
    ]);

};
