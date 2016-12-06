# Chassis.css
The minimalistic grid & typography framework by Joel Eisner

Check out the comprehensive guide and example at http://www.joeleisner.com/chassis/

## Changelog

### [Version 3.0.1](https://github.com/joeleisner/chassis-css/releases/tag/v3.0.1)
Minor fixes and improvements:
* A more verbose CSS reset within its own SASS partial
* Removed unnecessary offsets class (.offset-12)
* Fixed a misspelling in one of the package.json keywords

### [Version 3.0.0](https://github.com/joeleisner/chassis-css/releases/tag/v3.0.0)
It's been a while, and Chassis.css has had a major overhaul. Here's what's in this release:
* NPM
    * The distribution CSS/SASS can now be installed with Node Package Manager
* Truly mobile-first (for real this time)
    * Styling is now defined at the mobile level first, and builds up to the desktop level with media queries
    * Faster rendering on mobile devices
* CSS reset
    * A minimal CSS reset is once again included
* Font Smoothing
    * Font-smoothing for Mozilla (OSX) and WebKit browsers are now included
* Even more changes!
    * Utilization of GitHub releases
    * Simplified Gulp workflow
    * Simplified project hierarchy and structure
    * Contextual changes to SASS variables, mixins, and partials

Check out the [changelog](changelog.md) for previous release information.

## Installation
```
$ npm install chassis-css
```

## Clone
To customize Chassis.css, cloning the repository might be necessary. Once cloned, make sure to run `$ npm install` to grab all of Chassis.css' dependencies.

### Watch
```
$ gulp
```

### Build
#### Everything
```
$ gulp build
```
#### CSS
```
$ gulp compile-sass
```
#### SASS
```
$ gulp package-sass
```

## Author
**Joel Eisner**
* [Twitter (@joeleisner)](https://twitter.com/joeleisner)
* [GitHub (@joeleisner)](https://github.com/joeleisner)
