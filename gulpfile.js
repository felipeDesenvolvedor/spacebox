var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    uglify = require('gulp-uglify'),
    babel = require("gulp-babel");

var saaspath  = "build/sass/*.scss";    
var csspath   = "assets/css";
var jspathEs6 = "build/js/*.js";
var jspath    = "assets/js";


gulp.task('watch', function(){
  gulp.watch(saaspath).on('change', function() {
    gulp.src(saaspath)
    .pipe(sass())
    .pipe(cssmin())
    .pipe(gulp.dest(csspath));
  });
  
  gulp.watch(jspathEs6).on('change', function() {
    gulp.src(jspathEs6)
      .pipe(babel())
      .pipe(uglify())
      .pipe(uglify().on('error', function(e){
              console.log(e);
        }))
      .pipe(gulp.dest(jspath));
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