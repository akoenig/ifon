module.exports = function (grunt) {

    "use strict";

    grunt.initConfig({
        jshint: {
            files: [
                'Gruntfile.js',
                'index.js',
                'lib/**/*.js',
                'package.json',
                '.jshintrc'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('build', ['jshint']);
};