exports.config = {
    runner: 'local',
    specs: ['./tests/**/*.test.js'], // Path to your test files
  
    capabilities: [
      {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: ['--headless', '--disable-gpu', '--no-sandbox', '--disable-dev-shm-usage'],
        },
      },
      {
        browserName: 'firefox',
        'moz:firefoxOptions': {
          args: ['-headless'],
        },
      },
    ],
  
    logLevel: 'info',
    baseUrl: 'http://localhost', // Base URL for your application
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: [
      'spec', // Default reporter
      ['allure', {
        outputDir: 'allure-results',  // Make sure this folder exists and is correctly referenced
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false
      }],
      ['junit', {
        outputDir: 'junit-results',  // Ensure this output folder exists
        outputFileFormat: function(opts) {  // Optional file name configuration
          return `junit-results.xml`;
        }
      }]
    ],
    mochaOpts: {
      ui: 'bdd',
      timeout: 60000,
    },
  
    // Remove the selenium-standalone-service since it's deprecated
    // services: ['selenium-standalone'],
  };
  
