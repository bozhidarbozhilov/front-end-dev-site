"use strict";

const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const size = require("gulp-size");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const cp = require("child_process");

gulp.task("sass", function(){
    return gulp.src("_scss/**/*.scss")
        .pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(size())
        //.pipe(csso())
        .pipe(gulp.dest('./_site/css/'))
        .pipe(browserSync.stream({match: '**/*.css'}));
});

// Jekyll
gulp.task("jekyll", function() {
	return cp.spawn("bundle", ["exec", "jekyll", "build"], { stdio: "inherit", shell: true });
});

gulp.task("watch", function() {

	browserSync.init({
		server: {
            baseDir: "./_site/"
		}
	});

	gulp.watch( '_scss/**/*.scss', gulp.series('sass') );

	gulp.watch(
		[
			"./*.html",
			"./*.yml",
			"./_includes/*.html",
			"./_layouts/*.html",
			"./_posts/**/*.*"
		]
	).on('change', gulp.series('jekyll', 'sass') );

	gulp.watch( '_site/**/*.html' ).on('change', browserSync.reload );
	gulp.watch( '_site/**/*.js' ).on('change', browserSync.reload );

});

gulp.task("default", gulp.series('jekyll', 'sass', 'watch'));