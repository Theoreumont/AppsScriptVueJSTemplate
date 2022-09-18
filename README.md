# vueAppsScriptTemplate

This template can be used to create a Vue.js app that can be deployed as a Google Apps Script.

## Usage

This work with clasp so you can code locally and push to the cloud.

Install dependencies:

```bash
npm i
```

Start to code your front code in Vue in the ```src``` folder.
And it will be compiled in the ```dist``` folder as the ```index.html``` .
Your back code in Apps Script will be in the ```dist``` folder like i did with the Code.js file.

You can use the ```npm start``` command line tool to compile into one single file (index.html) at every change you do in the ```src``` folder (extensions that activates the compilation are .vue, .js, .css and .html).

In a splited terminal, you can have on the left side the ```npm start``` command line tool and on the right side the ```clasp push -w``` command line tool to push your code to the cloud so you don't have to touch your terminal and it will at every change push your Vue Code to the cloud.


