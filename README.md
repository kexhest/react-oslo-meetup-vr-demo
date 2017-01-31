# React Oslo Meetup - WebVR Demo

> Just a simple demo site built with react and redux. With a simple node auth app using JSON web tokens.
> The app is not hooked up against any database. Users and secret are defined in the .env file. (use the .env.dist as template)

[![Build Status](https://travis-ci.org/magnus-bergman/react-oslo-meetup-vr-demo.svg?branch=master)](https://travis-ci.org/magnus-bergman/react-oslo-meetup-vr-demo)
[![codecov](https://codecov.io/gh/magnus-bergman/react-oslo-meetup-vr-demo/branch/master/graph/badge.svg)](https://codecov.io/gh/magnus-bergman/react-oslo-meetup-vr-demo)
[![dependencies](https://david-dm.org/magnus-bergman/react-oslo-meetup-vr-demo.svg)](https://david-dm.org/magnus-bergman/react-oslo-meetup-vr-demo)
[![eslint](https://img.shields.io/badge/code%20style-airbnb-brightgreen.svg)](https://github.com/airbnb/javascript)

## Installation
If you've never used Node or yarn before, you'll need to install them.
If you use homebrew, just run:

```
brew install node
brew install yarn
```

Otherwise, you can download and install from [here](http://nodejs.org/download/) and [here](https://yarnpkg.com/en/docs/install).

### Install dependencies
```
yarn install
```

This runs through all dependencies listed in `package.json` and installs them locally within the project.

### Running build scripts
```
npm run dev
```

This will compile your assets and start a express server with [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) and [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware).

### Preview production environment
```
npm run prod
npm start
```
This will minify and hash all assets etc.

### Testing with AVA
This repo includes a test suite running [AVA](https://github.com/avajs/ava) and [Sinon](http://sinonjs.org/).

To run the tests simply run:
```
npm t
```

### Code style
This repo follows the [airbnb](https://github.com/airbnb/javascript) javascript coding style guide. It also includes some default editor settings using [editor config](https://github.com/sindresorhus/editorconfig-sublime).

## License
React Redux Starter is licensed under [The MIT License (MIT)](LICENSE).
