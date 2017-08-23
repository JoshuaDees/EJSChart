module.exports = function(grunt) {
    // Read in some build files
    var files = grunt.file.readJSON('build/grunt/files.json');
    var banner = grunt.file.read('build/grunt/banner.txt');

    // Update the files list with the source directory
    for(var i=0; i<files.length; i++) {
        files[i] = 'src/' + files[i];
    }

    // Configure Grunt
    grunt.initConfig({
        // Package Variable
        pkg: grunt.file.readJSON('package.json'),

        // Define template variables
        year: (new Date()).getFullYear(),

        // grunt-contrib-concat
        concat: {
            // Concatinate all of the source files into a dev file
            src: {
                src: files,
                dest: 'dist/ejschart.dev.js',
                options: {
                    banner: banner + '(function() {\n',
                    footer: '})();'
                }
            }
        },

        // grunt-contrib-copy
        copy: {
            // Copies the hooks into the .git folder
            hooks: {
                src: 'build/git/hooks/**/*',
                dest: '.git/hooks/',
                expand: true,
                flatten: true,
                options: {
                    mode: '0755'
                }
            }
        },

        // grunt-eslint
        eslint: {
            // Runs the linter on the project
            src: {
                //src: ['src/**/*.js'],
                src: files,
                options: {
                    config: '.eslintrc',
                    globals: ['window', 'document', 'EJSC']
                }
            }
        },

        // grunt-replace
        replace: {
            ejschart: {
                options: {
                    patterns: [{
                        match: '[\'.sparkline\']',
                        replacement: ''
                    }],
                    usePrefix: false
                },
                files: [{
                    src: ['dist/ejschart.js'],
                    dest: './'
                }]
            },
            sparkline: {
                options: {
                    patterns: [{
                        match: '[\'.sparkline\']',
                        replacement: '.sparkline'
                    }],
                    usePrefix: false
                },
                files: [{
                    src: ['dist/ejschart-sparkline.js'],
                    dest: './'
                }]
            }
        },

        // grunt-remove
        remove: {
            // Removes unneded development files
            dev: {
                fileList: ['dist/ejschart.dev.js']
            }
        },

        // grunt-strip-code
        // Strip the unnneeded parts to create each dist file
        strip_code: {
            ejschart: {
                options: {
                    blocks: [
                        {
                            start_block: '/* {{ remove-if-not-sparkline }} */',
                            end_block: '/* {{ /remove-if-not-sparkline }} */'
                        },
                        {
                            start_block: '// {{ remove-if-not-sparkline }} //',
                            end_block: '// {{ /remove-if-not-sparkline }} //'
                        },
                        {
                            start_block: '/* {{',
                            end_block: '}} */'
                        },
                        {
                            start_block: '// {{',
                            end_block: '}} //'
                        }
                    ],
                    parityCheck: true
                },
                files: [{
                    src: 'dist/ejschart.dev.js',
                    dest: 'dist/ejschart.js'
                }]
            },
            sparkline: {
                options: {
                    blocks: [
                        {
                            start_block: '/* {{ remove-if-sparkline }} */',
                            end_block: '/* {{ /remove-if-sparkline }} */'
                        },
                        {
                            start_block: '// {{ remove-if-sparkline }} //',
                            end_block: '// {{ /remove-if-sparkline }} //'
                        },
                        {
                            start_block: '/* {{',
                            end_block: '}} */'
                        },
                        {
                            start_block: '// {{',
                            end_block: '}} //'
                        }
                    ],
                    parityCheck: true
                },
                files: [{
                    src: 'dist/ejschart.dev.js',
                    dest: 'dist/ejschart-sparkline.js'
                }]
            }
        },

        // grunt-contrib-uglify
        uglify: {
            // Compress each dist file
            dist: {
                files: {
                    'dist/ejschart.min.js': 'dist/ejschart.js',
                    'dist/ejschart-sparkline.min.js': 'dist/ejschart-sparkline.js'
                },
                options: {
                    banner: banner
                }
            }
        },

        // grunt-contrib-watch
        watch: {
            // Watch for changes to source files
            src: {
                files: files,
                tasks: ['build']
            }
        }
    });

    // Load the NPM tasks
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-remove');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-strip-code');

    // Grunt tasks
    grunt.registerTask('setup', ['copy:hooks']);
    grunt.registerTask('default', ['build', 'watch:src']);
    grunt.registerTask('build', ['concat:src', 'strip_code', 'replace', 'remove:dev', 'uglify:dist']);
    grunt.registerTask('dev', ['eslint:src', 'build'])

    // Git tasks
    grunt.registerTask('pre-commit', ['eslint:src']);
};
