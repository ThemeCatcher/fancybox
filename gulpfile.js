const { src, dest, series, parallel, watch } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const uglifySaveLicense = require('uglify-save-license');
const rename = require('gulp-rename');

const css = () => {
    return src('jquery.fancybox.css')
          .pipe(rename({ suffix: '.min' }))
          .pipe(cleanCSS({ compatibility: 'ie8' }))
          .pipe(dest('.'));
};

const js = () => {
    return src('jquery.fancybox.js')
           .pipe(rename({ suffix: '.min' }))
           .pipe(uglify({ ie8: true, output: { comments: uglifySaveLicense } }))
           .pipe(dest('.'));
};

const watcher = done => {
    watch('jquery.fancybox.css', css);
    watch('jquery.fancybox.js', js);
    done();
};

exports.css = css;
exports.js = js;
exports.watch = watcher;
exports.all = parallel(exports.css, exports.js);
exports.default = series(exports.all, exports.watch)
