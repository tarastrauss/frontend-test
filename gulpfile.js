var gulp = require('gulp');
var concat = require('gulp-concat');


gulp.task('scripts', function() {
  console.log('running scripts gulp');
    return gulp.src(['src/app.module.js', 'src/app.routes.js', 'src/**/*.js'])
        .pipe(concat('app.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('public/js'));
});



gulp.task('default', ['scripts']);

gulp.watch(['src/**/*.js'], ['default']);

