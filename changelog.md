# Changelog

## Current releases

### [Version 4.0.2](https://github.com/joeleisner/chassis-css/releases/tag/v4.0.2)
This patch no longer explicitly sets the root font-size to 16px, leaving it up to the browser's default and respecting the user's preference if set. It also updates some packages to their latest version.

### [Version 4.0.1](https://github.com/joeleisner/chassis-css/releases/tag/v4.0.1)
This patch brings some much needed stability to the framework after its big release. Here's what to expect:

* Rows no longer change their `flex-direction` between `column` on extra small viewports and `row` on small viewports and above.
    * Rows now wrap columns to vertically stack them.
    * Vertical and horizontal alignment modifier classes no longer flip-flop functionality between extra small and small viewports.
    * The reverse row modifier class, `.row.rev`, has been changed.
    * The way columns fill the row's width on extra small viewports has been changed.
* New align content modifier classes, `.ac-*`, have been added to provide more vertical alignment options.

### [Version 4.0.0](https://github.com/joeleisner/chassis-css/releases/tag/v4.0.0)
Chassis.css has been overhauled from the ground up to support some killer new features. Here's what you can look forward to:

* The grid system now uses Flexbox!
    * You can simply use the `.col` class to automatically take up remaining space in a row.
    * `.row.rev` allows you to quickly reverse the order of a row.
    * Gone are the days of push/pull - You can now order/space your columns with `.or-*` (order), `.or-r*` (order reset on mobile), and `.os-*` (offset) classes.
    * You can now vertically/horizontally align columns with `.ai-*` (align-items), `.as-*` (align-self), and `.jc-*` (justify-content) classes.
* The reset and typography defaults have been ironed out.
    * The reset only overrides necessary things and avoids practices that can compromise accessibility.
    * Overall sizes and spacing between typography elements have been simplified dramatically.
    * New heading `.h*` classes allow you to make any typography element look like a heading.
* Utility classes, particularly for margins/padding, have become way more concise/versatile.
    * These classes are now constructable, allowing you to target all/specific sides, add negative/positive adjustments, and utilize 6 levels of adjustments.

Plus more! There's a lot in this update to get excited about.

## Previous releases

### [Version 3.0.2](https://github.com/joeleisner/chassis-css/releases/tag/v3.0.2)
Even more minor fixes and improvements:
* Proper styling for nested columns!
    * Nested rows now remove left/right padding, keeping your content aligned and visually cohesive
* All build-system javascript has been upgraded to ES2015 (ES6)
* Gulp task names have been simplified
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

### Version 2.1.1
Just a quick fix to the iPhone orientation font-size bug
* Added a `-webkit-text-size-adjust: 100%` to the global partial to fix the font-size enlarging when switching to landscape mode on iPhone

### Version 2.1.0
After the last upgrade, it felt about time to move away from Grunt and begin using Gulp. With this new, fresh build, compiling the framework has become not only more modularized, but more accurate with a cleaner, predictable output. To learn how to compile the framework with Gulp, look in the "How to Build..." section.

### Version 2.0.0
It's been awhile, but Chassis.css is back and better than ever.
* Chassis.css is now based off of SASS. Not only will this change allow the project to be more easily maintained, it gives users even more customization options through editable variables
* A CSS reset will no longer be shipped with Chassis.css. This change was to help allow Chassis.css become more like a SASS plugin. To do this properly, I must give creators the freedom to choose their own resets without interfering with aspects of their project
* NPM and Grunt.js are used as the compilation tools to build out the CSS

### Version 1.0.0
No version details available.
