module.exports = function (grunt) {
  'use strict';
  grunt.initConfig({
    meta: {},
    githubPages: {
      target: {
        options: {
          // The default commit message for the gh-pages branch
          commitMessage: 'push' ,
          pushBranch : 'master'
        },
        // The folder where your gh-pages repo is
        src: 'public',
        dest: '_site'
      }
    }
  });

  grunt.loadNpmTasks('grunt-github-pages');

  grunt.registerTask('deploy', ['githubPages:target']);
}
