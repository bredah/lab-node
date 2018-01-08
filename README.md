
## Index
1. [About](#about)
2. [Run](#run)
    1. [Unit Test](#unit-test)
    2. [Unit Test - JUnit Report](#unit-test---junit)
    3. [Coverage](#coverage)
3. [Debug a code](#debug-a-code)
4. [Debug via Chrome Tools](#debug-via-chrome-tools)
5. [Project Structure](#project-structure)
    1. [Line endings fix](#line-endings-fix)
    

## About
Node.JS laboratory. This project contains the following examples:
- Unit Test
- Code Coverage

## Run

### Unit Test

For unit test, use the frameworks:
- mocha - [link](https://www.npmjs.com/package/mocha) 
- chai - [link](https://www.npmjs.com/package/chai)

**mocha** is used to run the test and generate an execution report.

**chai** is used to expected condition in the unit test.

For run the test, use the commands bellow:
```
npm run test
```
```
npm run test-fun
```

### Unit Test - JUnit

For run unit test and generate JUnit Report, use the frameworks:
- mocha - [link](https://www.npmjs.com/package/mocha) 

**mocha** is used to run the test and generate an execution report.

For run the test, use the commands bellow:
```
npm run test-junit
```

### Coverage
For code coverage, use the frameworks:
- mocha - [link](https://www.npmjs.com/package/mocha) 
- nyc - [link](https://www.npmjs.com/package/nyc) 

**mocha** is used to run the test.

**nyc** is used to generate the code coverage report.

For run the code coverage, use the command bellow:
```
npm run coverage
```

After execution, a new directory be created **./coverage**, inside the directory have the HTML Report. 

## Debug a code
When you need to validate the flow or behavior of the code, for that we use the command:
```
npm inspect <script.js>
```

To add a break line during the execution, add the command on script:
```javascript
debugger;
```

Mavigations command:
| Type | Description                                   |
| ---- | --------------------------------------------- |
| n    | Next line                                     |
| c    | Continue execution                            |
| repl | Manipulate the variables during the execution |

Common commands:
| Type    | Description       |
| ------- | ----------------- |
| list(n) | List next N lines |

## Debug via Chrome Tools
To debugging a code via Chrome Tools, execure the command:
```
node --inspect-brk <script.js>
```
Next, open the Chrome Browser and access the url **chrome://inspect**.



## Project Structure
To generate a file with the folders structure of current project, you must install the MDDIR library.

Execute the command for install the library:
```bash
npm install mddir -g
```
Execute this command for generate the file .MD with the project structure folder:
```bash
mddir <PROJECT_ABSOLUTE_PATH>
```
After a new file be generated **./directoryList.MD**.

### Line endings fix

Execute this command to converts line endings to Unix instead of Dos:
```bash
npm config get prefix
```