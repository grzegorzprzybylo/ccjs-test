const {setHeadlessWhen} = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: false,
      windowSize: '1920x1080',
      "chrome": {
        "ignoreHTTPSErrors": true,
        "args": ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage", '--window-size=1920,1080']
      },
    },
    CustomHelper: {
      require: './customhelper_helper.js',
    },
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'ccjs-test',
  plugins: {
    retryFailedStep: {
      enabled: false
    },
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true
    },
  }
};
