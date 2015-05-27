var gulp  = require('gulp'),
    babel = require('gulp-babel');

gulp.task('scripts', compileScripts);

function compileScripts() {
  return gulp.src(['src/**/**/*.js', 'src/**/**/*.jsx'])
             .pipe(babel())
             .pipe(gulp.dest('dist'));
}
