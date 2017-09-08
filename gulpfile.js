/*
var gulp = require('gulp');
var chimp = require('gulp-chimp');

gulp.task('chimp1', () => {
	let Chimp = require('chimp');
	let options = require('./chimp.js');
	let chimp = new Chimp(options);
	chimp.run(function (err, res) {
		console.log('CHIMP RES:',res);
		console.log('CHIMP ERR:',err);
		//next action after chimp finish
	});
});
*/
var gulp = require('gulp');

/* Chimp.js - Automated/e2e Testing with a config file */
gulp.task('chimp', function () {
    return 'chimp.js'
});