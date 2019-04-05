const env = 'development';
const { series, parallel, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const handlebars = require('gulp-compile-handlebars');

function sassTask(cb) {
	if(env === 'development') {
		src('src/sass/main.scss')
			.pipe(sourcemaps.init())
			.pipe(sass({outputStyle: 'compressed'})
				.on('error', sass.logError))
			.pipe(sourcemaps.write())
			.pipe(dest('./css'));
		cb();
	} else {
		src('assets/scss/main.scss')
			.pipe(sourcemaps.init())
			.pipe(sass({outputStyle: 'compressed'}))
			.pipe(autoprefixer({
				browsers: ['last 10 versions'],
				cascade: false
			}))
			.on('error', sass.logError)
			.pipe(sourcemaps.write())
			.pipe(dest('./css'));
		cb();
	}
}


function renderHtml () {
	let templateData = {
		// firstName: 'Kaanon'
	},
		options = {
			ignorePartials: true,
			batch : ['src/handlebars/partials'],
			helpers : {
				capitals : function(str){
					return str.toUpperCase();
				}
			}
		}

	return src('src/handlebars/index.handlebars')
		.pipe(handlebars(templateData, options))
		.pipe(rename('index.html'))
		.pipe(dest('./'));
}



function watchFiles() {
	watch("./src/**/**/*", parallel('sassTask', 'renderHtml'));
}


module.exports = {
	default: watchFiles,
	sassTask,
	renderHtml,
}
