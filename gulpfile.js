import filter from 'gulp-filter';
import fs from 'fs';
import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import header from 'gulp-header';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';
import sassCompiler from 'sass';

// Set the SASS compiler
const transpile = gulpSass(sassCompiler);

// Grab the Node environment variable
const { NODE_ENV = 'development' } = process.env;

// Generates a banner to attach to the top of a file
export function banner() {
    // Grab the package information
    const pkg = JSON.parse(fs.readFileSync('./package.json'));

    // Define the banner template...
    let template = '/*! <%= pkg.name %> <%= pkg.version %> | <%= pkg.license %> License | <%= pkg.homepage %> */';
    // ... and if in development, add extra space to the bottom of it
    if (NODE_ENV === 'development') template += '\n\n';

    // Finally, generate the banner
    return header(template, { pkg });
}

// Compile the SASS to CSS
export function css() {
    // Initialize rename options...
    let renameOptions = {};
    // ... and if in production, add a `.min` suffix to it
    if (NODE_ENV === 'production') renameOptions.suffix = '.min';

    return gulp.src('src/*.sass')
        .pipe(transpile().on('error', transpile.logError)) // Transpile the SASS to CSS
        .pipe(postcss()) // Process the CSS with PostCSS
        .pipe(banner()) // Add a header to the CSS
        .pipe(rename(renameOptions)) // Rename the CSS file
        .pipe(gulp.dest('dist/css')); // Move the CSS to the correct location
};

// Package the SASS to be reusable
export function sass() {
    // Store the name of the main file
    const mainFile = filter([ 'src/chassis.sass' ], { restore: true });

    // For each file in the source directory...
    return gulp.src('src/**/*')
        .pipe(mainFile) // If currently processing the main file,...
        .pipe(rename({ prefix: '_' })) // ... prefix its file name with "_"
        .pipe(mainFile.restore)
        .pipe(gulp.dest('dist/sass')); // Copy the files to the correct location
};

// Build all assets (CSS and SASS)
export const build = gulp.parallel(css, sass);

// Watch for changes and build CSS
export function watch() {
    gulp.watch('src/**/*', css);
}

// Build all development assets (CSS)
export const develop = gulp.series(css, watch);