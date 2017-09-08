var reporter = require('cucumber-html-reporter');
 
var options = {
        theme: 'bootstrap',
        jsonFile: 'reports/cucumber_report.json',
        output: 'reports/cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
		brandTitle: 'SMOKE Sbis.ru',
		screenshotsDirectory: 'screenshots/',
		storeScreenshots: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
 
    reporter.generate(options);


// var reporter = require('cucumber-html-reporter');

// var options = {
      // theme: 'bootstrap',
      // jsonFile: 'cucumber_report.json',
      // dest: '.',
      // output: 'index.html',
      // title: 'Open Integrity - End to End Tests',
      // reportSuiteAsScenarios: true,
      // launchReport: process.env.OPEN_REPORTS,
      // metadata: {
          // "App Version":"process.env.CONTAINER_TAG",
          // "Test Environment": process.env.DEPLOY_STAGE,
          // "Browser": process.env.SELENIUM_BROWSER,
          // "Platform": "OSX",
          // "Parallel": "Scenarios",
          // "Executed": "Remote"
      // }
  // };

// console.log('Generating report.')

// reporter.generate(options);
      // - - - - CUCUMBER REPORT - - - -
        // htmlReport: {
            // enable: true,
            // jsonFile: '.output.json',
            // output: './cucumber.html',
            // reportSuiteAsScenarios: true,
            // launchReport: true
        // },