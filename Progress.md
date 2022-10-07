# Steps:

## Day 1:

### Section 2:

- Install node 8 or higher from nodejs.org
- Use `node -v` to check installed version
- Use `npm -v` to check version of Node Package Manager
- Run `npm install -g yarn` -> to install yarn globally on your machine
- Use `yarn --version` to check version of yarn package - yarnpkg.com
- Restart your machine if it is Windows.

### Section 3: Hello React - 3.2

~~- `yarn global add live-server` to install live server~~

~~- `live-server -v` to check installed version~~

- If the above 2 commands fail, then do the following.
- `npm install -g live-server` to install live-server
- `live-server -v` to check if installed correctly. Should show version.
- `live-server public` to run the contents on live server
- File runs in browser after running above command.

## Day 2: - 3.8

- `<script src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>`
- `<script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>`
- babeljs.io - Install babel locally
  - `npm install -g babel-cli@6.24.1` -> last global installation
  - `babel --help` to check if installed properly
- `yarn init` - to outline dependencies
- `yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2` - To install babel presets
- `babel src/app.js --out-file=public/scripts/app.js --presets=env,react` - To compile code from src/app.js to public/scripts/app.js
- `babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch`
- If you delete node_modules - `yarn install`
- Installed Babel ES6/ES7 extension for VSCode.

## Day 4: 3.10

- Arrow functions, this, arguments, let and const
- `babel src/playground/es6-arrow-functions.js --out-file=public/scripts/app.js --presets=env,react --watch`

## Day 5: 3.11

- Counter
