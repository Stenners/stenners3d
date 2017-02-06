var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect');

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('webserver', function() {
  connect.server();
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('sass/*.scss',['styles']);
});

gulp.task('default',['watch', 'webserver']);
