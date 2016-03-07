'use strict';

const gulp = require('gulp');
const jscs = require('gulp-jscs');

gulp.task('default', () => {
  gulp.src('test/*.js')
    .pipe(jscs({ configPath: './jscs.json' }))
    .pipe(jscs.reporter());
});
