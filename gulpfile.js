var gulp = require('gulp');
require('./build/scripts.js');

gulp.task('watch', function () {
  gulp.watch(['src/**/**/*.js', 'src/**/**/*.jsx'], ['scripts'])
});

gulp.task('default', ['watch']);
