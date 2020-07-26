module.exports = function(grunt) {
  // Configure Grunt
  grunt.initConfig({
    // Package Variable
    pkg: grunt.file.readJSON('package.json'),

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
        src: ['src/**/*.es6']
      }
    },

    // grunt-contrib-watch
    watch: {
      src: {
        files: ['src/**/*.es6'],
        tasks: ['build']
      }
    },

    // grunt-webkit
    webpack: {
      // Runs the webpack builder for production
      dist: require('./webpack.config')
    },

    yuidoc: {
      doc: {
        name: 'EJSCharts',
        description: '<%= pkg.description %>',
        version: '<%= pkg.version %>',
        url: '<%= pkg.homepage %>',
        options: {
          extension: '.es6',
          paths: ['src/'],
          outdir: 'doc/',
          themedir: 'build/yuidoc/theme',
          helpers: ['build/yuidoc/theme/helpers/helpers.js']
        }
      }
    }
  });

  // Load the NPM tasks
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-yuidoc');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-webpack');

  // Grunt tasks
  grunt.registerTask('setup', ['copy:hooks']);
  grunt.registerTask('build', ['webpack:dist', 'yuidoc:doc'])
  grunt.registerTask('lint', ['eslint:src']);

  // Git tasks
  grunt.registerTask('pre-commit', ['eslint:src']);
};
