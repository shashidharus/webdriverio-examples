'use strict'

exports.config = {
  capabilities: [
    { browserName: 'phantomjs' }
    // If you want to use other browsers,
    // you may need local Selenium standalone server.
  ],
  services: ['phantomjs', new ZfService(
    { // Service Options
      refreshToken: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwicGFzc3dvcmQiOiJFREJyZDE4bEV2c2lKa3l3NXJIbmY2KzJwNU5kTWd0YiIsInRlbmFudCI6InphZmlyYSIsImV4cCI6MTMwMzk5NjEzODE4fQ.5v3Pxww8nFsfmtz5O3_0cJ_42MotufX77dZiktVMR7tmx4-F7ksLoZ_whzYizctTkmAo9G1EIeqhHXjy5PuUcA',
      username: 'admin',
      testSuite: {
        fileName: 'test.xml',
        name: 'example_test',
      },
      job: { // Jenkins Settings
        "jenkinsHost": process.env.HOST || 'demo.qaprosoft.com',
        "jobURL": process.env.BUILD_URL || 'http://demo.qaprosoft.com/jenkins/job/sharmademo/6/', //  // Jenkins Build URL
        "name": process.env.JOB_NAME || 'example',
      },
      run: {
        buildNumber: process.env.BUILD_NUMBER || 6,
        startedBy: process.env.BUILD_CAUSE_MANUALTRIGGER ? 'HUMAN' : 'SCHEDULER' // One of  "SCHEDULER", "UPSTREAM_JOB", "HUMAN"
      }
    }
  )],
  specs: [
    './test/e2e/*.js'
  ],
  exclude: [],
  maxInstances: 2,
  sync: true,
  logLevel: 'error',
  coloredLogs: true,
  waitforTimeout: 20000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 30000
  }
}
