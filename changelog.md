# Changelog

## [Version 3.0.0](https://github.com/joeleisner/chassis-css/releases/tag/v3.0.0)
It's been a while, and Chassis.css has had a major overhaul. Here's what's in this release:
* NPM
    * The distribution CSS/SASS can now be installed with Node Package Manager
* Truly mobile-first (for real this time)
    * Styling is now defined at the mobile level first, and builds up to the desktop level with media queries
    * Faster rendering on mobile devices
* CSS reset
    * A minimal CSS is once again included
* Font Smoothing
    * Font-smoothing for Mozilla (OSX) and WebKit browsers are now included
* Even more changes!
    * Utilization of GitHub releases
    * Simplified Gulp workflow
    * Simplified project hierarchy and structure
    * Contextual changes to SASS variables, mixins, and partials

## Version 2.1.1
Just a quick fix to the iPhone orientation font-size bug
* Added a `-webkit-text-size-adjust: 100%` to the global partial to fix the font-size enlarging when switching to landscape mode on iPhone

## Version 2.1.0
After the last upgrade, it felt about time to move away from Grunt and begin using Gulp. With this new, fresh build, compiling the framework has become not only more modularized, but more accurate with a cleaner, predictable output. To learn how to compile the framework with Gulp, look in the "How to Build..." section.

## Version 2.0.0
It's been awhile, but Chassis.css is back and better than ever.
* Chassis.css is now based off of SASS. Not only will this change allow the project to be more easily maintained, it gives users even more customization options through editable variables
* A CSS reset will no longer be shipped with Chassis.css. This change was to help allow Chassis.css become more like a SASS plugin. To do this properly, I must give creators the freedom to choose their own resets without interfering with aspects of their project
* NPM and Grunt.js are used as the compilation tools to build out the CSS

## Version 1.0.0
