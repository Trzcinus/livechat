#### Run tests and generate reports
* npm run clean:reports ; npm run specific-test $path_to_tests ; npm run posttest
`clean:reports` - clears reports from previous tests
`specific-test $path_to_tests ` - launches defined by user tests
`posttest` - generates report and add screenshots
After job is finished report should be in cypress/reports/mochareports

#### Eslint
* To run Eslint you have run in terminal: `npm run fix-code`.