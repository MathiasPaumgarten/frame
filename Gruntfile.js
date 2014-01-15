module.exports = function( grunt ) {

    grunt.initConfig( {

        jshint: {

            options: {
                camelcase: true,
                curly: false,
                eqeqeq: true,
                forin: true,
                indent: 4,
                latedef: true,
                newcap: true,
                noarg: true,
                undef: true,
                unused: true,
                trailing: true,
                maxlen: 100,
                quotmark: "double"
            },

            source: {
                options: {
                    browser: true,
                    globals: { require: false, define: false }
                },
                files: {
                    src: [ "source/**/*.js" ]
                }
            },

            grunt: {
                options: {
                    node: true
                },
                files: {
                    src: [ "Gruntfile.js" ]
                }
            },

            tests: {
                options: {
                    browser: true,
                    maxlen: 120,
                    globals: {
                        require: false,
                        define: false,
                        expect: false,
                        describe: false,
                        it: false,
                        beforeEach: false,
                        afterEach: false,
                        sinon: false
                    }
                },
                files: {
                    src: [ "tests/**/*.js", "karma.config.js" ]
                }
            }
        },

        karma: {
            test: {
                configFile: "karma.config.js",
                singleRun: true,
                browsers:
                    ( process.env.KARMA_BROWSERS || "Chrome,Firefox" ).split( "," )
            },

            dev: {
                configFile: "karma.config.js",
                autoWatch: false,
                background: true
            }
        },

        watch: {
            source: {
                files: [ "source/**/*.js" ],
                tasks: [ "jshint:source", "karma:dev:run" ]
            },

            grunt: {
                files: [ "Gruntfile.js" ],
                tasks: [ "jshint:grunt" ]
            },

            tests: {
                files: [ "tests/**/*.js", "!tests/runner.js" ],
                tasks: [ "jshint:tests", "karma:dev:run" ]
            }
        }
    } );

    require( "load-grunt-tasks" )( grunt );

    grunt.registerTask( "start", [ "karma:dev", "watch" ] );
    grunt.registerTask( "test", [ "jshint", "karma:test" ] );
};
