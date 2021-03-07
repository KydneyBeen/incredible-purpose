/*
*  I use grunt babel to transpile my React code to plain js that the browser can read
*/
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    "babel": {
      options: {
        sourceMap: true,
        presets: ['@babel/preset-env', '@babel/preset-react']
      },
      dist: {
        files: {
          "app/public/app.js": "app/src/app.js"
        }
      }
    }
  });

  // Load the plugin
  grunt.loadNpmTasks('grunt-babel');

  // Default task(s).
  grunt.registerTask('default', ['babel']);

};
