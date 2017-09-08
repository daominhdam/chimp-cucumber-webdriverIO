# chimp-cucumber-webdriverIO

# Hi there! It is my test task.
This test was used:
  - Chimp
  - Cucumber
  - WebdriverIO
### Initialization
!!! install chimp global !!!
```sh
$ npm i
```
### Run test
```sh
$ chimp
```
### Run test with a teg "watch"
```sh
$ chimp --watch
```
### Run test with a another config
For example edit base-page or browser in config file and edit step "Given I visit "https://sbis.ru" on Given I visit "/" in .feature file
```sh
$ chimp config/chimp-config-pre.js
```
### HTML cucumber-report
After test:
```sh
node report
```
and launch in browser
