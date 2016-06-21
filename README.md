# Chassis.css

*The minimalistic grid & typography framework by Joel Eisner*

Check out the comprehensive guide and example at http://www.joeleisner.com/chassis/

## Version 2.1
After the last upgrade, it felt about time to move away from Grunt and begin using Gulp. With this new, fresh build, compiling the framework has become not only more modularized, but more accurate with a cleaner, predictable output. To learn how to compile the framework with Gulp, look in the "How to Build..." section.
### 2.1.1 iPhone Orientation Font-Size Fix
Added a `-webkit-text-size-adjust: 100%` to the global partial to fix the font-size enlarging when switching to landscape mode on iPhone

### Using the CSS
Just include the css file (minified or not) in your project. These files can be found in `dist/chassis-css`

### Using the SASS Plugin
Just include the directory `dist/chassis-sass` in your SASS project. This contains everything from the `src/sass` directory, but renamed for easier identification and with a root `_chassis.sass` to be used as a partial for your project.

### How to Build...
Before building either the CSS or the SASS plugin, follow the following instructions:
1. Open your terminal and `cd` into the Chassis.css directory
2. Run `npm i` to install the required Node.js modules
Once `npm` is done, move on to the next steps.

#### ... everything!
```
$ gulp build
```

#### ... the CSS
```
$ gulp build-css
```
Or, if you'd like to only build the expanded/minified versions independently
```
$ gulp build-css-exp
$ gulp build-css-min
```

#### ... the SASS Plugin
```
$ gulp build-sass
```
This has a sub-task called `copy-sass-dir`, which calls upon `copy-sass-mixins`, `copy-sass-partials`, and `copy-sass-variables`, which moves the directories within `src/sass` to the distribution sass-plugin directory.

### How to Customize the SASS/CSS
All customizable variables can be found in the seperate files located in `src/sass/variables/`. The filenames of each correspond to what they affect in the final build. If you'd like to compile the SASS and CSS while editing these files, run `$ gulp` or `$ gulp watch` in your terminal and code away!
