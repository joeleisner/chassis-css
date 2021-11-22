import filter from 'gulp-filter';
import fs from 'fs';
import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import header from 'gulp-header';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';
import sassCompiler from 'sass';

const transpile = gulpSass(sassCompiler);

const { NODE_ENV = 'development' } = process.env;

// Compile the SASS to CSS
export function css() {
    // Grab the package information
    const pkg = JSON.parse(fs.readFileSync('./package.json'));

    // Initialize the banner...
    let banner = '/*! <%= pkg.name %> <%= pkg.version %> | <%= pkg.license %> License | <%= pkg.homepage %> */';
    // ... and rename options
    let options = {};

    // Depending on what type of assets are being built, change the initial variables
    switch (NODE_ENV) {
        case 'development':
            banner += '\n\n'; // Provide additional spacing below the banner on development CSS
            break;
        case 'production':
            options.suffix = '.min';  // Add the ".min" suffix to the production CSS file name
    }

    return gulp.src('src/*.sass')
        .pipe(transpile())             // Transpile the SASS to CSS
        .pipe(postcss())               // Process the CSS with PostCSS
        .pipe(header(banner, { pkg })) // Add a header to the CSS
        .pipe(rename(options))         // Rename the CSS file
        .pipe(gulp.dest('dist/css'));  // Move the CSS to the correct location
};

// Package the SASS to be reusable
export function sass() {
    // Store the name of the main file
    const mainFile = filter([ 'src/chassis.sass' ], { restore: true });

    // For each file in the source directory...
    return gulp.src('src/**/*')
        .pipe(mainFile)                // If currently processing the main file,...
        .pipe(rename({ prefix: '_' })) // ... prefix its file name with "_"
        .pipe(mainFile.restore)
        .pipe(gulp.dest('dist/sass')); // Copy the files to the correct location
};

// Build all assets (CSS and SASS)
export const build = gulp.series(gulp.parallel(css, sass));

// Watch for changes and build CSS
export const develop = () => gulp.watch('src/**/*', css);