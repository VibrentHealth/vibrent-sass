'use strict';
// generated on 2017-03-03 using generator-gulp-bootstrap 0.0.4

var gulp = require('gulp');
var browserSync = require('browser-sync');
var pump = require('pump');
var reload = browserSync.reload;
var gutil = require('gulp-util');
var sassJson = require('gulp-sass-json');

// load plugins
var $ = require('gulp-load-plugins')();

gulp.task('styles', ['sassvars'], function () {
    return gulp.src('app/styles/main.scss')
        .pipe($.sass({ errLogToConsole: true }))
        .pipe($.autoprefixer('last 1 version'))
        .pipe(gulp.dest('app/styles'))
        .pipe(reload({ stream: true }))
        .pipe($.size());
});

gulp.task('sassvars', function () {
    return gulp.src('app/styles/base/_variables.scss')
        .pipe(sassJson())
        .pipe(gulp.dest('app/styles'));
});

gulp.task('scripts', function () {

    gulp.src('app/scripts/main/**/*.html')
        .pipe($.angularTemplatecache('templates.js', {
            module: 'vbr-style-guide'
        }))
        .pipe(gulp.dest('app/scripts/main'));

    return gulp.src(['app/scripts/main/**/*.module.js', 'app/scripts/main/**/*.js'])
        .pipe($.jshint())
        .pipe($.ngAnnotate({
            remove: true,
            add: true,
            single_quotes: true
        }))
        .pipe($.uglify())
        .pipe($.concat('main.js'))
        .pipe(gulp.dest('app/scripts'))
        .pipe($.jshint.reporter(require('jshint-stylish')))
        .pipe($.size());
});

gulp.task('html', ['styles', 'scripts'], function () {
    var jsFilter = $.filter('**/*.js');
    var cssFilter = $.filter('**/*.css');

    return gulp.src('app/*.html')
        .pipe($.useref.assets())
        .pipe(jsFilter)
        .pipe($.uglify())
        .pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe($.csso())
        .pipe(cssFilter.restore())
        .pipe($.useref.restore())
        .pipe($.useref())
        .pipe(gulp.dest('styleguide'))
        .pipe($.size());
});

gulp.task('images', function () {
    return gulp.src('app/images/**/*')
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('styleguide/images'))
        .pipe(reload({ stream: true, once: true }))
        .pipe($.size());
});

gulp.task('fonts', function () {
    var streamqueue = require('streamqueue');
    return streamqueue({ objectMode: true },
        $.bowerFiles(),
        gulp.src('app/fonts/**/*')
    )
        .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
        .pipe($.flatten())
        .pipe(gulp.dest('styleguide/fonts'))
        .pipe($.size());
});

gulp.task('clean', function () {
    return gulp.src(['app/styles/main.css', 'app/styles/variables.json', 'styleguide', 'dist'], { read: false }).pipe($.clean());
});

gulp.task('serve', ['aigis'], function () {
    browserSync.init(null, {
        server: {
            baseDir: 'styleguide',
            directory: true
        },
        debugInfo: false,
        open: false
    }, function (err, bs) {
        require('opn')(bs.options.url);
        console.log('Started connect web server on ' + bs.options.url);
    });
});

// inject bower components
gulp.task('wiredep', function () {
    var wiredep = require('wiredep').stream;
    gulp.src('app/styles/*.scss')
        .pipe(wiredep({
            directory: 'bower_components'
        }))
        .pipe(gulp.dest('app/styles'));
    gulp.src('template_ejs/scripts.ejs')
        .pipe(wiredep({
            directory: 'bower_components',
            fileTypes: {
                html: {
                    replace: {
                        js: '<script src="<%- root%>{{filePath}}"></script>'
                    }
                }
            }
        }))
        .pipe(gulp.dest('template_ejs'));
});

gulp.task('watch', ['serve'], function () {

    // watch for changes
    gulp.watch(['styleguide/*.html'], reload);
    gulp.watch(['aigis_config.yml', 'template_ejs/**/*', 'aigis_assets/**/*'], ['aigis', 'delayed-reload']);
    gulp.watch('app/styles/**/*.scss', ['styles', 'aigis']);
    gulp.watch(['app/scripts/main/**/*.js', 'app/scripts/**/*.html'], ['scripts', 'aigis']);
    gulp.watch('app/images/**/*', ['images']);
    gulp.watch('html/**/*', ['aigis']);
    gulp.watch('bower.json', ['wiredep', 'aigis']);
});

gulp.task("aigis", ['styles', 'scripts'], function () {
    gulp.src("./aigis_config.yml")
        .pipe($.aigis());
});

gulp.task('delayed-reload', function () {
    setTimeout(reload, 5000);
});


gulp.task('buildScripts',function(cb){
    pump([
            gulp.src(['app/scripts/main/*.js','app/scripts/main/components/**/*.js']),
            $.uglify(),
            $.concat('index.min.js'),
            gulp.dest('dist/scripts/')
        ],
        cb
    );
});

gulp.task('buildStyles',function(cb){
    pump([
        gulp.src('app/styles/**/*.scss'),
        $.size(),
        gulp.dest('dist/scss/')
    ],
    cb);
});

gulp.task('build', ['clean','buildScripts','buildStyles'], function () {
    return gulp.src('bower.json').pipe(gulp.dest('dist'));
});

gulp.task('default', ['clean'], function () {
    gulp.start('watch');
});
