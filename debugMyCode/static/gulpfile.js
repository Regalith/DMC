var gulp = require('gulp');
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling etc.
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var concat = require('gulp-concat');
var buffer = require('vinyl-buffer');

var path = {
  ENTRY: './js/MainApp.jsx',
  DEST_BUILD: './build/js/',
  BUILD_NAME: 'app.js'
};


gulp.task('browserify', function() {
    var bundler = browserify({
        entries: [path.ENTRY], // Only need initial file, browserify finds the deps
        transform: [reactify], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
    });
    var watcher  = watchify(bundler);

    return watcher
    .on('update', function () { // When any files update
        var updateStart = Date.now();
        console.log('Updating!');
        watcher.bundle() // Create new bundle that uses the cache for high performance
        .pipe(source(path.BUILD_NAME))

        //.pipe(buffer())
        //.pipe(uglify())
        .pipe(gulp.dest(path.DEST_BUILD));
        console.log('Updated!', (Date.now() - updateStart) + 'ms');
    })
    .bundle() // Create the initial bundle when starting the task
         .on('error', function(err) {
                console.error('JSX ERROR in ' + err.fileName);
                console.error(err.message);

         })
    .pipe(source(path.BUILD_NAME))
    .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('default', ['browserify']);