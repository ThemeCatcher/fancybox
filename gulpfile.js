var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    cssnano = require('gulp-cssnano');

gulp.task('js', function () {
    return gulp.src('jquery.fancybox.js')
               .pipe(rename({suffix: '.min'}))
               .pipe(uglify({preserveComments: 'some'}))
               .pipe(gulp.dest('.'));
});

gulp.task('css', function () {
    return gulp.src('jquery.fancybox.css')
               .pipe(rename({suffix: '.min'}))
               .pipe(cssnano())
               .pipe(gulp.dest('.'));
});

gulp.task('default', ['js', 'css']);

gulp.task('watch', ['default'], function () {
    gulp.watch('jquery.fancybox.js', ['js']);
    gulp.watch('jquery.fancybox.css', ['css']);
});