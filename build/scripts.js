var gulp  = require('gulp'),
    babel = require('gulp-babel');

gulp.task('scripts', compileScripts);

function compileScripts() {
  return gulp.src(['src/**/**/*.js'])
             .pipe(babel())
             .pipe(gulp.dest('dist'));
}
