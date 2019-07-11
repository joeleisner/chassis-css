# Chassis.css
The minimalistic grid & typography framework by Joel Eisner

Check out the comprehensive guide and example at http://www.joeleisner.com/chassis/

## Changelog

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
    * These classes are now constructable, allowing you to target all/specfic sides, add negative/positive adjustments, and utilize 6 levels of adjustments.

Plus more! There's a lot in this update to get excited about.

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
# npm run * / npx gulp *
# *:exp = expanded, *:min = minified

# Build all (CSS & SASS) assets
npm run build
npm run build:exp
npm run build:min

# Build CSS assets
npm run compile
npm run compile:exp
npm run compile:min

# Build SASS assets
npm run package

# Build all (CSS & SASS) assets while watching for changes
npm run
npm run watch
```

## Author
**Joel Eisner**
* [Twitter (@joeleisner)](https://twitter.com/joeleisner)
* [GitHub (@joeleisner)](https://github.com/joeleisner)
