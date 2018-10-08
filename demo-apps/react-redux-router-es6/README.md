# React | Redux | React Router | ES6 

This repository contains a sample application built with `React`, `Redux`, `React Router` and `ES6`. It follows along building an application based on Cory House's Pluralsight course on the mentioned topics. 

**NOTE:**: This code is just a demo application and will probably be filled with comments and anecdotes which _may_ only be useful to me :)

## What we are building

A CRUD web app based around automotive racing events.

## Why Redux?

## Development Environment Goals

* Automated testing
* Linting
* Minification
* Bundling
* JSX Compilation
* ES6 transpilation (Babel)

All of this in one command.

### Babel

We will use Babel to transpile the ES6 syntax down to currently supported Javascript functionality. Babel-polyfill will give you everything, but it is around ~`50kb` so we probably only want to pull in the functionality we need.

### Webpack

Webpack will be used to bundle everything.

### Testing 

Mocha will be used.

### Linting 

ESLint

## React Component Approaches

How many ways are there to create React components?!

#### 1. ES5 Create Class Component

```javascript
var HelloWorld = React.createClass({
	render: function () {
		return (
			<h1>Hello world!</h1>
		)
	}
});
```

#### 2. ES6 Create Class Component

* No autobind! Most people bind `this` in the constructor
* PropTypes are declared separately
* Default props declared separately 
* Set initial state in the constructor

#### 3. ES5 Stateless Functional Component

```javascript
var HelloWorld = function(props) {
	return ( //  this is the render function
		<h1>Hello World</h1>
	);
};
```
#### 4. ES6 Stateless Component

```javascript
const HelloWorld = (props) => {
	return (
		<h1>Hello World!</h1>
	);
});
```

## `Container` vs `Presentation` components

#### `Container` components

* Little to no markup
* Used primarily to pass data and actions down to other components
* Knows about Redux
* Often stateful (would need to use a React class component)

#### `Presentation` components

* This is nearly all markup
* Used primarily to receive data and actions which are passed through `props`
* Doesn't know about Redux
* Typically funtional components (smaller, light weight, does not need any state so no need to use a React class component)



