var gulp = require('gulp');
require('./build/scripts.js');

gulp.task('watch', function () {
  gulp.watch(['src/**/**/*.js'], ['scripts'])
});

gulp.task('default', ['watch']);
