const {src, dest, watch}=require('gulp');
const sass= require('gulp-sass')(require('sass'))


function css(done){
    src('src/scss/app.scss')//identificar el archivo  .SCSS a compilar
        .pipe( sass())// compilarlo
        .pipe(dest('build/css'))// almacenarlo
        
    done();
}

function dev(done){
    watch('src/scss/app.scss', css);
    done();
}

exports.css=css;
exports.dev=dev;