'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.initConfig({

    clean: {
      dev: {
        src: ['build/']
      },
      pub: {
        src: ['app/js/**/*.js'],
        dest: 'build/bundle.js'
     }
    },

    browserify: {
      dev: {
        src: ['app/js/**/*.js'],
        dest: 'build/bundle.js'
      },
      pub: {
        src: ['app/js/**/*_test.js'],
        dest: 'public/bundle.js'
      }
    },

    copy: {
      dev: {
        expand: true,
        cwd: 'app/',
        src: ['**/*.html', '**/*.png', '**/*.jpg', '**/*.css'],
        dest: 'build/',
        flatten: false,
        filter: 'isFile'
      },
      pub: {
        expand: true,
        cwd: 'app/',
        src: ['**/*.html', '**/*.png', '**/*.jpg', '**./*.css'],
        dest: 'public/',
        flatten: false,
        filter: 'isfile'
      }
    }
  });
  

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['clean:dev', 'browserify:dev', 'copy:dev']);
  grunt.registerTask('production', ['clean:pub', 'browserify:pub', 'copy:pub']);
};

