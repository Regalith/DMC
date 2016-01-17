var gulp = require('gulp');
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling etc.
var browserify = require('browserify');
var watchify = require('watchify');
var concat = require('gulp-concat');
var buffer = require('vinyl-buffer');
var babelify = require('babelify');

var path = {
  ENTRY: './js/MainApp.jsx',
  DEST_BUILD: './build/js/',
  BUILD_NAME: 'app.js'
};



function bundleJs(bundler){
    return bundler.bundle()
        .on('error', function(err) {
                console.error('JSX ERROR in ' + err.fileName);
                console.error(err.message);

         })
        .pipe(source(path.BUILD_NAME))
        .pipe(buffer())
        .pipe(gulp.dest(path.DEST_BUILD))
        //.pipe(uglify())
        .pipe(gulp.dest('app/dist'))
}
gulp.task('browserify',function(){
    var bundler = browserify(path.ENTRY, {debug: true}).transform('babelify', {presets: ['es2015', 'react']},{ cache: {}, packageCache: {}, fullPaths: true});

    return bundleJs(bundler);
});

gulp.task('watchify', function () {
  var bundler = watchify(browserify(path.ENTRY, {debug: true}).transform('babelify', {presets: ['es2015', 'react']},{ cache: {}, packageCache: {}, fullPaths: true}));

  bundleJs(bundler);

  bundler.on('update', function () {
      var updateStart = Date.now();
      console.log('Updating!');
      bundleJs(bundler);
      console.log('Updated!', (Date.now() - updateStart) + 'ms');
  });
});

gulp.task('default', ['watchify']);
