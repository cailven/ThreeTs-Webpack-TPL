var gulp = require('gulp');
var gutil = require("gulp-util");


gulp.task("webpackbuild", function (callback) {
    gutil.log(gutil.colors.magenta('webpack!!!'));
    var webpackConfig = require("./webpack.config");
    // run webpack
    var webpack = require("webpack");
    webpack(webpackConfig,
        function (err, stats) {
            if (err) throw new gutil.PluginError("webpack", err);
            gutil.log("[webpack]", stats.toString({
                colors: true
            }));
            callback();
        });
});

// 合并、压缩lib文件
var jshint = require('gulp-jshint'),//js检测
    uglify = require('gulp-uglify'),//js压缩
    concat = require('gulp-concat'),//文件合并
    rename = require('gulp-rename'),//文件更名
    notify = require('gulp-notify');//提示信息

gulp.task('contactJs', function () {
    return gulp.src('./dist/public/js/lib/*.js')
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('./dist/public/js/libt'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/public/js/libt'))
        .pipe(notify({message: 'js task ok'}));
});


gulp.task("clean", function (callback) {
    var clean = require('gulp-clean');
    gulp.src("./dist/public/js/app").pipe(clean());
})

gulp.task('default', ['clean', 'webpackbuild']);