## Modules
Introduction: Modules for smaller files
##### Module Basics:
- Brief overview of IIFE and the Module pattern
- Advantages of scope isolation and encapsulation
- Using modules in the browser: `<script type=""module"" src=""..."">`
- Connecting files: The `import` and `export` keywords
##### Imports and Exports:
- Default exports vs. named exports: 
  `export default`, `export {<var1>, <var2> [, ...]}`
- Namespacing imports: 
  `import <namespace> from <path>`, `import * as <namespace> from <path>`
- Destructuring imports: `import { <var1>, <var2 [, ...]} from `<path>`
##### Transpiling & Bundling:
- Browser compatibility and modules: Transpiling ES with Babel
- Bundling tools overview: 
  Packaging our processed code with Webpack 
  (intro ONLY, no need to start writing configs)"
##### Npm workflow;
- Adding modules to our project: `npm install <module name>`
- Dependency List: 
  reading `package.json`, `dependencies` vs. `devDependencies`
- Using 3rd party modules: `import <namespace> from <dependency name>`

### Create a webpack project

  1. create a directory for project           `mkdir project`
  2. initiate the directory as npm project    `npm init -y`
  3. install webpack-cli                      `npm i -D webpack-cli`
  4. create config files                      `npx webpack-cli init`
  5. if package @webpack-cli/generators doesn't exist on your computer install it.      `npm install -D @webpack-cli/generators`
  6. answer the questions for config files.
  7. `npm run build`:                            to build the project
  8. `npm run serve`:                            to start the project on server