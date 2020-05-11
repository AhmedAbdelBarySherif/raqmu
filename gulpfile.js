// Importing Modules from node_modules
const gulp = require('gulp');
const concat = require('gulp-concat');

// Css Tasks
gulp.task('cssTask', function(done) {
    gulp.src('css/*.css') 
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist'))
    done()
});