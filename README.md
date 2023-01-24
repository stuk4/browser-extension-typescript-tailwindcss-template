# Template extension with TailwindCSS and Typescript

This project is a template for developing a web extension quickly using TypeScript and tailwindcss.

## Built With
- [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript that adds optional static typing
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework for quickly building custom user interfaces
- [Webpack](https://webpack.js.org/) - A module bundler for JavaScript applications
- [PostCSS](https://postcss.org/) - A tool for transforming CSS with JavaScript

## Scripts

- `yarn watch:tailwind`: Watches for changes in the tailwind.css file and compiles it to dist/tailwind.css
- `yarn build:tailwind`: Compiles the tailwind.css file to dist/tailwind.css
- `yarn start`: Runs the `watch:tailwind` script and starts webpack in development mode with hot module replacement
- `yarn build`: Runs webpack in production mode and creates a minified build in the dist folder

## Dependencies

- `@types/chrome`: TypeScript definitions for the Chrome browser API
- `clean-webpack-plugin`: A Webpack plugin for removing the dist folder before building
- `concurrently`: A tool for running multiple scripts concurrently
- `copy-webpack-plugin`: A Webpack plugin for copying files to the dist folder
- `html-loader`: A loader for webpack that allows importing of HTML files
- `html-webpack-plugin`: A Webpack plugin that simplifies the creation of HTML files to serve your bundles
- `postcss`: A tool for transforming CSS with JavaScript
- `postcss-cli`: A command line interface for postcss
- `postcss-loader`: A loader for webpack that allows using postcss plugins
- `postcss-preset-env`: A set of postcss plugins for transforming CSS for compatibility with modern browsers
- `tailwindcss`: A utility-first CSS framework for quickly building custom user interfaces
- `ts-loader`: A loader for webpack that allows using TypeScript
- `typescript`: A superset of JavaScript that adds optional static typing
- `webpack`: A module bundler for JavaScript applications
- `webpack-cli`: A command line interface for webpack




## Built With
- [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript that adds optional static typing
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework for quickly building custom user interfaces
- [Webpack](https://webpack.js.org/) - A module bundler for JavaScript applications
- [PostCSS](https://postcss.org/) - A tool for transforming CSS with JavaScript

## Scripts

- `yarn watch:tailwind`: Watches for changes in the tailwind.css file and compiles it to dist/tailwind.css
- `yarn build:tailwind`: Compiles the tailwind.css file to dist/tailwind.css
- `yarn start`: Runs the `watch:tailwind` script and starts webpack in development mode with hot module replacement
- `yarn build`: Runs webpack in production mode and creates a minified build in the dist folder

## Dependencies

- `@types/chrome`: TypeScript definitions for the Chrome browser API
- `clean-webpack-plugin`: A Webpack plugin for removing the dist folder before building
- `concurrently`: A tool for running multiple scripts concurrently
- `copy-webpack-plugin`: A Webpack plugin for copying files to the dist folder
- `html-loader`: A loader for webpack that allows importing of HTML files
- `html-webpack-plugin`: A Webpack plugin that simplifies the creation of HTML files to serve your bundles
- `postcss`: A tool for transforming CSS with JavaScript
- `postcss-cli`: A command line interface for postcss
- `postcss-loader`: A loader for webpack that allows using postcss plugins
- `postcss-preset-env`: A set of postcss plugins for transforming CSS for compatibility with modern browsers
- `tailwindcss`: A utility-first CSS framework for quickly building custom user interfaces
- `ts-loader`: A loader for webpack that allows using TypeScript
- `typescript`: A superset of JavaScript that adds optional static typing
- `webpack`: A module bundler for JavaScript applications
- `webpack-cli`: A command line interface for webpack

## Getting Started
Environment:
```
node v16.17.0
yarn 1.22.19
npm 8.15.0
```
To use this template, clone the repository and install the dependencies:

```bash
git clone https://github.com/[your_username]/template-extension-tailwind-typescript.git
cd template-extension-tailwind-typescript
yarn install
```
Then, start the development server:
```bash
yarn start
```
