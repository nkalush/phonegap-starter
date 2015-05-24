module.exports = function(grunt) {

  grunt.initConfig({
    app: {
      name: 'com.example.hello'
    },
    clean: {
      plugins: ['app/plugins'],
      platforms: ['app/platforms'],
      styles: ['global/stylesheets/_skin.scss']
    },
    mkdir: {
      'default': {
        options: {
          create: ['app/plugins', 'app/platforms']
        }
      }
    },
    copy: {
      platform_merges: {
        expand: true,
        dest: './app/platforms/',
        cwd: 'platform-merges',
        src: '**'
      },
      /*resources_ios: {
        files: [
          {src: ['./global/res/ios/icon-57.png'],                        dest: './app/platforms/ios/<%= app.name %>/Resources/icons/icon.png'},
          {src: ['./global/res/ios/icon-57-2x.png'],                     dest: './app/platforms/ios/<%= app.name %>/Resources/icons/icon@2x.png'},
          {src: ['./global/res/ios/icon-72.png'],                        dest: './app/platforms/ios/<%= app.name %>/Resources/icons/icon-72.png'},
          {src: ['./global/res/ios/icon-72-2x.png'],                     dest: './app/platforms/ios/<%= app.name %>/Resources/icons/icon-72@2x.png'},
          {src: ['./global/res/ios/screen-iphone-portrait.png'],         dest: './app/platforms/ios/<%= app.name %>/Resources/splash/Default~iphone.png'},
          {src: ['./global/res/ios/screen-iphone-portrait-2x.png'],      dest: './app/platforms/ios/<%= app.name %>/Resources/splash/Default@2x~iphone.png'},
          {src: ['./global/res/ios/screen-iphone-portrait-568h-2x.png'], dest: './app/platforms/ios/<%= app.name %>/Resources/splash/Default-568h@2x~iphone.png'},
          {src: ['./global/res/ios/screen-ipad-portrait.png'],           dest: './app/platforms/ios/<%= app.name %>/Resources/splash/Default-Portrait~ipad.png'},
          {src: ['./global/res/ios/screen-ipad-portrait-2x.png'],        dest: './app/platforms/ios/<%= app.name %>/Resources/splash/Default-Portrait@2x~ipad.png'},
          {src: ['./global/res/ios/screen-ipad-landscape.png'],          dest: './app/platforms/ios/<%= app.name %>/Resources/splash/Default-Landscape~ipad.png'},
          {src: ['./global/res/ios/screen-ipad-landscape-2x.png'],       dest: './app/platforms/ios/<%= app.name %>/Resources/splash/Default-Landscape@2x~ipad.png'}
        ]
      },*/
      resources_android: {
        files: [
          {src: ['./global/res/android/icon-72-hdpi.png'],      dest: './app/platforms/android/res/drawable-hdpi/icon.png'},
          {src: ['./global/res/android/icon-48-mdpi.png'],      dest: './app/platforms/android/res/drawable-mdpi/icon.png'},
          {src: ['./global/res/android/icon-36-ldpi.png'],      dest: './app/platforms/android/res/drawable-ldpi/icon.png'},
          {src: ['./global/res/android/icon-96-xhdpi.png'],     dest: './app/platforms/android/res/drawable-xhdpi/icon.png'},
          {src: ['./global/res/android/icon-96-xhdpi.png'],     dest: './app/platforms/android/res/drawable/icon.png'},
          {src: ['./global/res/android/screen-land-hdpi.png'],  dest: './app/platforms/android/res/drawable-land-hdpi/screen.png'},
          {src: ['./global/res/android/screen-land-ldpi.png'],  dest: './app/platforms/android/res/drawable-land-ldpi/screen.png'},
          {src: ['./global/res/android/screen-land-mdpi.png'],  dest: './app/platforms/android/res/drawable-land-mdpi/screen.png'},
          {src: ['./global/res/android/screen-land-xhdpi.png'], dest: './app/platforms/android/res/drawable-land-xhdpi/screen.png'},
          {src: ['./global/res/android/screen-port-hdpi.png'],  dest: './app/platforms/android/res/drawable-port-hdpi/screen.png'},
          {src: ['./global/res/android/screen-port-ldpi.png'],  dest: './app/platforms/android/res/drawable-port-ldpi/screen.png'},
          {src: ['./global/res/android/screen-port-mdpi.png'],  dest: './app/platforms/android/res/drawable-port-mdpi/screen.png'},
          {src: ['./global/res/android/screen-port-xhdpi.png'], dest: './app/platforms/android/res/drawable-port-xhdpi/screen.png'},
          {src: ['./global/res/android/values/strings.xml'],    dest: './app/platforms/android/res/values/strings.xml'},
          {src: ['./global/res/android/xml/config.xml'],        dest: './app/platforms/android/res/xml/config.xml'}
        ]
      }
    },
    cordovacli: {
      options: {
        path: './app'
      },
      add_platforms: {
        options: {
          command: 'platform',
          action: 'add',
          platforms: [/*'ios',*/ 'android']
        }
      },
      add_plugins: {
        options: {
          command: 'plugin',
          action: 'add',
          plugins: [
            // 'console',
            // 'device',
            // 'geolocation',
            // 'network-information',
            // 'splashscreen',
            // 'https://github.com/phonegap-build/PushPlugin.git'
          ]
        }
      },
      /*build_ios: {
        options: {
          command: 'build',
          platforms: ['ios']
        }
      },*/
      build_android: {
        options: {
          command: 'build',
          platforms: ['android']
        }
      },
      /*prepare_ios: {
        options: {
          command: 'prepare',
          platforms: ['ios']
        }
      },*/
      prepare_android: {
        options: {
          command: 'prepare',
          platforms: ['android']
        }
      },
      serve: {
        options: {
          command: 'serve',
          port: 7000
        }
      },
      run_android: {
          options: {
              command: 'run',
              platforms: ['android'],
          }
      }
    },
    bower: {
      install: {
        options: {
          targetDir: './global/components'
        }
      }
    },
    concat: {
      js: {
        files: [
          {
            dest:'./app/www/js/main.js',
            src:[
              './global/javascripts/application.js'
            ]
          },
        ]
      }
    },
    jslint: {
      js: {
        src: ['./global/javascripts/*.js'],
      }
    },
    jshint: {
      beforeconcat: ['./global/javascripts/*.js'],
    },
    uglify: {
      options: {
        mangle: false
      },
      js: {
        files: {
          './app/www/js/main.js': './app/www/js/main.js',
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          './app/www/css/main.css': './global/stylesheets/main.scss',
        }
      }
    },
    watch: {
      src: {
        files: ['app/www/**/*.*', 'platform-merges/**/*.*', '!app/www/css/*', '!app/www/js/*'],
        tasks: ['update']
      },
      sass: {
        files: ['global/stylesheets/*.scss'],
        tasks: ['copy:styles','sass:dist', 'clean:styles']
      },
      js: {
        files: ['global/javascripts/*.js'],
        tasks: ['jslint', 'jshint:beforeconcat','concat:js', 'uglify:js']
      }
    },
    connect: {
      server: {
        options: {
          port: 7000,
          hostname: 'localhost',
          base: 'app/www',
          keepalive: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-cordovacli');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jslint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-bower-task');

  grunt.registerTask('init', 'Initialize the development environment.',[
    'clean',
    'mkdir',
    'bower:install',
    'cordovacli:add_platforms',
    'cordovacli:add_plugins',
    'update'
  ]);

  grunt.registerTask('update', 'Update platforms.', [
    // 'cordovacli:prepare_ios',
    'cordovacli:prepare_android',
    'copy'
  ]);

  grunt.registerTask('build', 'Build Platforms.', [
    // 'cordovacli:build_ios',
    'copy',
    'sass:dist',
    'jslint',
    'jshint:beforeconcat',
    'concat:js',
    'uglify:js',
    'cordovacli:build_android',
  ]);

  grunt.registerTask('run_android', 'Run On Device.', [
    'copy',
    'sass:dist',
    'jslint',
    'jshint:beforeconcat',
    'concat:js',
    'uglify:js',
    'cordovacli:run_android',
  ]);

  grunt.registerTask('server', ['connect:server']);
  grunt.registerTask('cordova-serve', "Alias for 'cordova serve'.", ['cordovacli:serve']);

  grunt.registerTask('default', ['watch']);

};