let gulp = require('gulp');
let concat = require('gulp-concat');
let htmlmin = require('gulp-htmlmin');
let imagemin = require('gulp-imagemin');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify');
let cssnano = require('gulp-cssnano');
let babel = require('gulp-babel');
let sass = require('gulp-sass');

//发布任务
function fnJs(){
    return gulp.src('./src/js/*.js')
        .pipe(babel({
            presets : ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest('./dist/js'));
}

function fnImg(){
    return gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'))
}
function fnWatch(){
    gulp.watch('./src/js/*.js',fnJs)
    gulp.watch('./src/Sass/*.scss',fnSass)
    gulp.watch('./src/index.html',fnCopy)
    gulp.watch('./src/subpage/*.html',fnCopys)
}

function fnCopy(){
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist/'))
}

function fnSass(){
    return gulp.src('./src/Sass/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(cssnano())
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest('./dist/css'))
}
function fnCopys(){
    return gulp.src('./src/subpage/*.html')
    .pipe(gulp.dest('./dist/subpage'))
}
//导出任务
exports.js = fnJs;
exports.img = fnImg;
exports.default = fnWatch;
exports.copy = fnCopy;
exports.sass = fnSass;
exports.copys = fnCopys;