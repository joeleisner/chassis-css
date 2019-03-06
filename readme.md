# Chassis.css
The minimalistic grid & typography framework by Joel Eisner

Check out the comprehensive guide and example at http://www.joeleisner.com/chassis/

## Changelog

## [Version 3.0.2](https://github.com/joeleisner/chassis-css/releases/tag/v3.0.2)
Even more minor fixes and improvements:
* Proper styling for nested columns!
    * Nested rows now remove left/right padding, keeping your content aligned and visually cohesive
* All build-system javascript has been upgraded to ES2015 (ES6)
* The following packages were upgraded: `autoprefixer`, `cssnano`, and `gulp-postcss`

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
```shell
# NPM Package
npm i chassis-css

# Repo
git clone git@github.com:joeleisner/chassis-css.git
cd chassis-css
npm i
```

## Development
```shell
# *:exp = expanded, *:min = minified

# Build all (CSS & SASS) assets
gulp build
gulp build:exp
gulp build:min

# Build CSS assets
gulp compile
gulp compile:exp
gulp compile:min

# Build SASS assets
gulp package

# Build all (CSS & SASS) assets while watching for changes
gulp
gulp watch
```

## Author
**Joel Eisner**
* [Twitter (@joeleisner)](https://twitter.com/joeleisner)
* [GitHub (@joeleisner)](https://github.com/joeleisner)
