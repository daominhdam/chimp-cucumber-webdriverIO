
// const path = require("path");
// const isCI = require("../lib/ci");
// import {isCI} from '../lib/ci';

module.exports = {
	
	
  // - - - - CHIMP - - - -
  watch: false,
  watchTags: '@watch',
  offline: false,
  // domainSteps       : null,
  // e2eSteps          : null,
  // fullDomain        : false,
  // domainOnly        : false,
  // e2eTags           : '@e2e',
  // watchWithPolling  : false,
  // server            : false,
  // serverPort        : 8060,
  // serverHost        : 'localhost',
   sync              : true,
  // showXolvioMessages: false,

  
  // - - - - CUCUMBER - - - -
  
  cucumberOpts: {
        require: [
            './src/steps/given.js',
  ]},
  
  path: './features',
  browser: 'chrome',
  jsonOutput: 'reports/cucumber_report.json',
  recommendedFilenameSeparator: '_',
  //screenshotsOnError: isCI(),
  // screenshotsPath: '.screenshots',
  // saveScreenshotsToReport: false,
  // saveScreenshotsToDisk: true,
  // format                      : 'pretty',
  // tags                        : '~@ignore',
  // singleSnippetPerFile        : true,
  // recommendedFilenameSeparator: '_',
   chai                        : true,
    //screenshotsOnError          : true,
    //screenshotsPath             : './screenshots',
    // captureAllStepScreenshots   : false,
    // saveScreenshotsToDisk       : true,
  // // Note: With a large viewport size and captureAllStepScreenshots enabled,
  // // you may run out of memory. Use browser.setViewportSize to make the
  // // viewport size smaller.
   //saveScreenshotsToReport     : true,
  // compiler                    : 'js:' + path.resolve(__dirname, '../lib/babel-register.js'),
  // conditionOutput             : true,
  
  
      // - - - - CUCUMBER REPORT - - - -
        // htmlReport: {
            // enable: true,
            // jsonFile: '.output.json',
            // output: './cucumber.html',
            // reportSuiteAsScenarios: true,
            // launchReport: true
        // },
	
  
  // - - - - WEBDRIVER-IO  - - - -
  webdriverio: {
	 baseUrl             : 'https://sbis.ru/',
    // desiredCapabilities : {},
    //logLevel            : 'command',
    // // logOutput: null,
    // host                : '127.0.0.1',
    // port                : 4444,
    // path                : '/wd/hub',
    coloredLogs         : true,
	//screenshotOnReject: true,
    //screenshotPath      : './errorShots/',
    //waitforTimeout      : 15000,
    //waitforInterval     : 250,
    //connectionRetryCount: 3,
  },
  
  
    // - - - - SELENIUM  - - - -
   browser : 'chrome',
  // platform: 'ANY',
  // name    : '',
  // user    : '',
  // key     : '',
  // port    : null,
  // host    : null,
  // deviceName: null,
  
  
    // - - - - SELENIUM-STANDALONE
  seleniumStandaloneOptions: {
    // check for more recent versions of selenium here:
    // http://selenium-release.storage.googleapis.com/index.html
    version: '3.0.1',
    baseURL: 'https://selenium-release.storage.googleapis.com',
    drivers: {
      chrome: {
        // check for more recent versions of chrome driver here:
        // http://chromedriver.storage.googleapis.com/index.html
        version: '2.25',
        arch: process.arch,
        baseURL: 'https://chromedriver.storage.googleapis.com'
      },
      ie: {
        // check for more recent versions of internet explorer driver here:
        // http://selenium-release.storage.googleapis.com/index.html
        version: '2.50.0',
        arch: 'ia32',
        baseURL: 'https://selenium-release.storage.googleapis.com'
      },
      firefox: {
        // check for more recent versions of gecko  driver here:
        // https://github.com/mozilla/geckodriver/releases
        version: '0.11.1',
        arch: process.arch,
        baseURL: 'https://github.com/mozilla/geckodriver/releases/download'
      }
    }
  },
  
  
    // // - - - - SESSION-MANAGER  - - - -
  // noSessionReuse: false,

  // // - - - - SIMIAN  - - - -
  // simianResultEndPoint: 'api.simian.io/v1.0/result',
  // simianAccessToken: false,
  // simianResultBranch: null,
  // simianRepositoryId: null,

  // // - - - - MOCHA  - - - -
  // mocha: false,
  // mochaCommandLineOptions: {bail: true},
  // mochaConfig: {
    // // tags and grep only work when watch mode is false
    // tags: '',
    // grep: null,
    // timeout: 60000,
    // reporter: 'spec',
    // slow: 10000,
    // useColors: true
  // },

  // // - - - - JASMINE  - - - -
  // jasmine: false,
  // jasmineConfig: {
    // specDir: '.',
    // specFiles: [
      // '**/*@(_spec|-spec|Spec).@(js|jsx)',
    // ],
    // helpers: [
      // 'support/**/*.@(js|jsx)',
    // ],
    // stopSpecOnExpectationFailure: false,
    // random: false,
  // },
  // jasmineReporterConfig: {
    // // This options are passed to jasmine.configureDefaultReporter(...)
    // // See: http://jasmine.github.io/2.4/node.html#section-Reporters
  // },

  // // - - - - METEOR  - - - -
  // ddp: false,
  // serverExecuteTimeout: 10000,

  // // - - - - PHANTOM  - - - -
  // phantom_w: 1280,
  // phantom_h: 1024,
  // phantom_ignoreSSLErrors: false,
  
  
  // '- - - - DEBUGGING  - - - -
  log: 'info',
  debug: false,
  seleniumDebug: false,
  webdriverLogLevel: false,
  // debugBrkCucumber: 5858,
  // debugCucumber: null,
  // debugMocha: null,
  // debugBrkMocha: null,
};
