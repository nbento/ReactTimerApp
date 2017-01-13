//FORMA DE ESTABELECER A LIGAÇÃO COM WEBPACK;
var webpackConfig = require('./webpack.config.js');

module.exports = function(config)
{
	config.set({
		browsers: ['Chrome'],
		singleRun: true,
		frameworks: ['mocha'], 					//test framework	
		files: ['app/tests/**/*.tests.jsx'],	//which test filw
		preprocessors: {
			'app/tests/**/*.tests.jsx': ['webpack', 'sourcemap']
		},
		reporters: ['mocha'],  //'Tells which tests passed and which fails'
		//Forma de estabelecer um limite, caso o teste não execute;
		//Como num website, se não loada ao fim de 20 sec. provavel/ já não loada;
		client: {
			mocha: {
				timeout: '5000'  //milisec.
			}
		},
		webpack: webpackConfig,
		webpackServer: {
			noInfo: true
		}
	});
}