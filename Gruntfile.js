module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-file-creator');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        manifest: grunt.file.readJSON('extension/manifest.json'),
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'extension/', src: ['**'], dest: 'build/temp/'}
                ]
            }
        },
        clean: {
            all: [
                'build/temp/',
            ]
        },
        compress: {
            main: {
                options: {
                    archive: 'build/extension.zip'
                },
                files: [{
                    expand: true,
                    cwd: 'build/temp/',
                    src: ['**'],
                    dest: ''
                }]
            }
        },
        jshint: {
            files: ['extension/manifest.json', 'extension/js/*.js', 'test/*.js'],
            options: {
                globals: {
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        karma: {
            unit: {
                configFile: 'config/karma.conf.js',
                autoWatch: true
            }
        },
        "file-creator": {
            main: {
                files: {
                    "build/temp/manifest.json": function(fs, fd, done) {
                        var manifest = grunt.config().manifest;
                        var pkg = grunt.config().pkg;
                        manifest.version = pkg.version;
                        fs.writeSync(fd, JSON.stringify(manifest));
                        done();
                    }
                }
            }
        }
    });

    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('build', ['jshint', 'copy', 'file-creator', 'compress', 'clean']);

};