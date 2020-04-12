<p align="center"><img alt="Chassis.css icon" src="images/icon.png?raw=true" width="60" /></p>
<h1 align="center">Chassis.css</h1>

A minimalistic grid & typography CSS framework. Check out the comprehensive guide at https://chassis.joeleisner.com.

## Changelog

### [Version 4.0.4](https://github.com/joeleisner/chassis-css/releases/tag/v4.0.4)
This patch updates `autoprefixer` to its latest version, fixes security vulnerabilities with the development dependencies, and simplifies the header used within the output files.

### [Version 4.0.3](https://github.com/joeleisner/chassis-css/releases/tag/v4.0.3)
This patch explicitly sets the font-size of code elements (`pre`, `code`, `kbd`, and `samp`) to 1rem. It also updates autoprefixer and its sub-dependency of caniuse-lite to their latest versions.

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
npm run watch
npm run watch:exp
npm run watch:min
```

## Author
**Joel Eisner**
* [Twitter (@joeleisner)](https://twitter.com/joeleisner)
* [GitHub (@joeleisner)](https://github.com/joeleisner)
