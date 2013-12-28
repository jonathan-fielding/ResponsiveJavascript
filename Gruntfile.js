module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
          main: {
            files: [
              // includes files within path
              {expand: true, flatten: true, src: ["bower_components/sass-bootstrap/js/affix.js","bower_components/sass-bootstrap/js/alert.js","bower_components/sass-bootstrap/js/dropdown.js","bower_components/sass-bootstrap/js/tooltip.js","bower_components/sass-bootstrap/js/modal.js","bower_components/sass-bootstrap/js/transition.js","bower_components/sass-bootstrap/js/button.js","bower_components/sass-bootstrap/js/popover.js","bower_components/sass-bootstrap/js/carousel.js","bower_components/sass-bootstrap/js/scrollspy.js","bower_components/sass-bootstrap/js/collapse.js","bower_components/sass-bootstrap/js/tab.js","bower_components/jquery/jquery.min.js","bower_components/modernizr/modernizr.js"], dest: 'scripts/vendor', filter: 'isFile'},
            ]
          }
        },

        compass: {
            dev: {
                options: {
                    sassDir: 'styles',
                    cssDir: 'styles',
                    imagesDir: 'images',
                    environment: 'development',
                    httpGeneratedImagesPath: 'images'
                }
            }
        },

        watch: {
            compass: {
                files: ['styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:dev']
            },
        }
    });


    // Required task(s)
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s)
    grunt.registerTask('default', ['uglify', 'copy']);

    // Travis CI tests
    grunt.registerTask('travis', ['qunit','jshint']);
};