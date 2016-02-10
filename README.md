# Chassis.css

*The minimalistic grid & typography framework by Joel Eisner*

Check out the guide at http://www.joeleisner.com/chassis/

## Version 2.0
It's been awhile, but Chassis.css is back and better than ever.
- Chassis.css is now based off of SASS. Not only will this change allow the project to be more easily maintained, it gives users even more customization options through editable variables
- A CSS reset will no longer be shipped with Chassis.css. This change was to help allow Chassis.css become more like a SASS plugin. To do this properly, I must give creators the freedom to choose their own resets without interfering with aspects of their project
- NPM and Grunt.js are used as the compilation tools to build out the CSS

# How to Use
Just include the css file (minified or not) in your project. These files can be found in `dist/css`

## How to Build the CSS
1. Open your terminal and `cd` into the Chassis.css directory
2. Run `npm i` to install the required Node.js modules
3. Once 2. is complete, run `grunt build-css`
4. You're done! The newly generated CSS files will be found in `dist/css/`

## How to Customize the CSS
All customizable variables can be found in the seperate files located in `src/sass/variables/`. The filenames of each correspond to what they affect in the final build. If you'd like to compile the CSS while editing these files, run `grunt` in your terminal.
