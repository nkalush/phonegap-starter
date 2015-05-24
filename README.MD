Phonegap project starter
========================

For android you need the android SDK installed and in your path. Easiest method to get it is with [android studio](http://developer.android.com/sdk/index.html).

Setting up directory structure from git clone
---------------------------------------------
* Set the app name at the top of the gruntfile and app/config.xml in reverse domain format
* Run `npm install` - Gets the files grunt needs to do stuff
* Run `grunt init` - The generated files and third party libraries aren't included in version control, this will create a packages, plugins and global/components directory and set things up.


Grunt Commands
--------------
* `grunt init` - Cleans and downloads the cordova generated files
* `grunt update` - prepares and copies files around
* `grunt build` - copies files then generates an apk
* `grunt run_android` - Runs the app on a plugged in device (device must have *USB debugging* on)
* `grunt server` - runs web version of app on port 7000
* `grunt cordova-serve` - Alias for 'cordova serve'
* `grunt watch` - updates things when files are changed

Structure Notes
---------------
The global css and js files that should be changed in updates are located in `global/stylesheets` and `global/javascripts` respectively. These files, when changed are compressed and copied to the `app/www/css` and `app/www/js` folders via `grunt watch`. Changing files in the app/www/css or app/www/js folders will just be overwritten.

The icons and background in are in the global directory and copied so that they can stay be in version control and the other stuff doesn't have to be.

The global html is in the `app/www` folder.

If plugins need to be added to cordova, add them to `gruntfile.js` and run `grunt cordovacli:add_plugins`.