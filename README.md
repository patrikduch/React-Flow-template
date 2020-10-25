<h1>Custom ReactJS setup that uses Flow type system </h1>

## Packages

babel-cli (Command line interface for Babel)

babel-core (Core functionality for Babel)

babel-loader (Webpack babel loader.)

babel-polyfill (polyfills for simulating functionality for IE browser)

@babel/runtime (support of generators that are created via transcompilation process)

clean-webpack-plugin (A webpack plugin to remove/clean your build folders.)

npm-run-all (To run multiple scripts at once.)

webpack, webpack-cli (Build process tools.)

html-loader (Parser of possible html files.)

extract-loader (Extract additional information into separate file.)

file-loader (Creation of new file.)

url (Required dependency for client build.)

## Babel presets

@babel/preset-flow (Flow type anotation support.)

@babel/preset-react (Babel preset for transcompilation React syntax sugar.)

babel-plugin-transform-class-properties

babel-plugin-transform-object-rest-spread

## Webpack

<p>Version 4 its still the most stable version for production. (October, 2020)</p>

https://github.com/webpack/webpack/releases/tag/v4.44.2

## Development

### Scripts

dev:build-client (Compilation of client side.)

dev:build-server (Compilation of NodeJS server.)

dev:serve (Startup of development server.)

### Debugging

npm i nodemon@2.0.4 -g

### Server build

node externals
https://www.npmjs.com/package/webpack-node-externals

html-webpack-plugin
https://github.com/jantimon/html-webpack-plugin
