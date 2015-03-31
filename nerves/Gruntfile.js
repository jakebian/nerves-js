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
                        nerves: '../../nerves'
                    },
                    include: ['nerves'],
                    out: 'dist/nerves.js',

                    // make the library available as a global constant in browser
                    wrap: {
                        startFile: 'wrap/wrap.start',
                        endFile: 'wrap/wrap.end'
                    }
                },
                preserveLicenseComments: false
            },
        },

        jshint: {

            options: {
                jshintrc: '.jshintrc'
            },

            files: [
                    'nerves/*.js',
                    'nerves.js'
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


