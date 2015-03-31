/* global module */
module.exports = gruntExports;

var gruntSettings = {

    config: {

        requirejs: {
            std: {
                options: {
                    almond: true,
                    baseUrl: 'node_modules/requirejs',
                    paths: {
                        nerves: '../../src/nerves'
                    },
                    include: ['nerves'],
                    out: 'dist/nerves.js',

                    // make the library available as a global constant in browser
                    wrap: {
                        startFile: 'build-util/wrap/wrap.start',
                        endFile: 'build-util/wrap/wrap.end'
                    },
                    preserveLicenseComments: false
                },
            },
        },

        jshint: {

            options: {
                jshintrc: '.jshintrc'
            },

            files: [
                    'src/nerves/*.js',
                    'src/nerves.js'
                ]
        },

        watch: {
            scripts: {
                files: ['**/*.js'],
                tasks: ['default'],
                options: {
                  spawn: false,
                },
            },
        },

    },


    npmTasks: [

        'grunt-contrib-jshint',
        'grunt-requirejs',
        'grunt-contrib-watch'

    ]
}

function gruntExports(grunt) {

    grunt.initConfig(gruntSettings.config);

    gruntSettings.npmTasks.forEach(grunt.loadNpmTasks);

    grunt.registerTask('build', 'requirejs');

    grunt.registerTask('default', ['jshint', 'build']);

};


