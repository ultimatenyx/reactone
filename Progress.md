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
- `yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2` - To install babel presets locally for the app
- `babel src/app.js --out-file=public/scripts/app.js --presets=env,react` - To compile code from src/app.js to public/scripts/app.js
- `babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch`
- If you delete node_modules - `yarn install`
- Installed Babel ES6/ES7 extension for VSCode.

## Day 4: 3.10

- Arrow functions, this, arguments, let and const
- `babel src/playground/es6-arrow-functions.js --out-file=public/scripts/app.js --presets=env,react --watch`

## Day 5: 3.11

- Counter

## Day 6: 3.14

- Synthetic Events

## Day 7: 3.15

## Day 8: 4.2

- Visibility Toggle
- `babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch`

## Day 9: 4.3

- es6 classes
- `babel src/playground/es6-classes-1.js --out-file=public/scripts/app.js --presets=env,react --watch`
- Blueprint. backticks. template strings

## Day 10: 4.4

- es6 classes part 2

## Day 11: 4.6

- jsx-indecision.js
- `babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch`
- Replaced jsx with React Components

## Day 12: 4.7

- Component Props

## Day 13: 4.10

- `babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch`
- Events & Methods
- Method Binding

## Day 14: 4.13

- Counter Example
- `babel src/playground/counter-example.js --out-file=public/scripts/app.js --presets=env,react --watch`

---

## New Start

- Day 1 - 3.7
- Day 2 - 4.2
- Day 3 - 4.4
- Day 4 - 4.17
- Day 5 - 5.8

## Day 5:

- `babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch`
- DefaultProps
- Counter example with Default Props
- Arrow Function Shorthand
- Interesting function calls
- Lifecycle Methods:
  - componentDidMount - only available in class based components
  - componentDidUpdate - when the components props or state change
  - componentWillUnmount
  - More here : https://legacy.reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class
  - https://react.dev/reference/react/Component#adding-lifecycle-methods-to-a-class-component
