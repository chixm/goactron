# Goactron

This project is folked from electron-quick-start and added React and Go to the project.

## To Use
requirements
[Git](https://git-scm.com)]
[Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) 
[Go](https://golang.org/)

must be installed on your computer. 

From your command line:

```bash
# Install dependencies
npm install
# Run the app
npm start
```

# Build Go binary
npm run mkdll
command makes goactron.dll in dist directory.
The "mkdll" command is alias for go build command
"go build -buildmode=c-shared -o dist/goactron.dll ./..."
I made it to make build command shorter.

if you fail with error message
exec: "gcc": executable file not found in %PATH%

install gcc to your computer. For Windows PC I install tdm-gcc (https://jmeubank.github.io/tdm-gcc/) to compile go to dll.

# use cpx for file copy
To use the npm command in both Windows and macOS, package.json's script uses cpx command.
https://www.npmjs.com/package/cpx