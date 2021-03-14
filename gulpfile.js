var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin')
   
var saaspath  = "build/sass/*.scss";    
var csspath   = "assets/css";

gulp.task('watch', function(){
  gulp.watch(saaspath).on('change', function() {
    gulp.src(saaspath)
    .pipe(sass())
    .pipe(cssmin())
    .pipe(gulp.dest(csspath));
  });
});

gulp.task('sass', function () {
  gulp.src(saaspath)
  .pipe(sass())
  .pipe(cssmin())
  .pipe(gulp.dest(csspath));
});

gulp.task('default', gulp.series ('watch', gulp.parallel('sass'),

    function (done) { done(); }    
));