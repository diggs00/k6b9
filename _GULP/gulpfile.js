var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
// var cleanCss = require('gulp-clean-css');
var notify = require('gulp-notify');


// Spins up server, loads index.html (baseDir)
// Watches SASS changes and compiles sass to CSS using the sass task
// Watches HTML changes and reloads 
gulp.task('serve', ['sass'], function() {
    browserSync.init({
      server: {
        baseDir: '../'
      }
    })
    // Watches SASS changes and tuns compiles sass to CSS using the sass task
    gulp.watch('../scss/**/*.scss', ['sass']);
    // Watches HTML changes and reloads 
    gulp.watch('../**/*.html').on('change', browserSync.reload);
});


// Compiles SASS files to CSS
// Creates sourcemaps
// Provides SASS error in terminal if there is one
// Minimizes CSS
// Streams CSS changes
// Notify of SASS task complete

gulp.task('sass', function(){
    return gulp.src('../scss/gmoc-styleguide.scss')
    // .pipe(sourcemaps.init())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    // .pipe(cleanCss())
    .pipe(gulp.dest('../dist/css'))
    .pipe(browserSync.reload({stream: true}))
    .pipe(notify({ message: 'SASS task complete' }));
});



gulp.task('default', ['serve']);



