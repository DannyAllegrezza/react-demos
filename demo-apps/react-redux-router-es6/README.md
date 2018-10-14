# React | Redux | React Router | ES6 

This repository contains a sample application built with `React`, `Redux`, `React Router` and `ES6`. It follows along building an application based on Cory House's Pluralsight course on the mentioned topics. 

**NOTE:**: This code is just a demo application and will probably be filled with comments and anecdotes which _may_ only be useful to me :)

## What we are building

A CRUD web app based around automotive racing events.

## Why Redux?

Do I need it?

`simple < ------------------------------------------------ > complex`

* Complex data flows
* Inter-component communication
* Non-heirarchical data
* Many actions
* Same data used in multiple places

With Redux, we have the centralized `Store`. We can think of the `Store` as a local, client-side database. A component can dispatch an `Action`, which ultimately updates the single `Store`.

## Redux Core Principles

1. All application state is placed in a single, _immatable_ `Store`.
2. `Actions` trigger changes
3. `Reducers` update State. State is changed by pure functions, called `Reducers`. A `Reducer` is a function that accepts the current state in an action and returns a new State.

* Store and change logic are separate
* One store
* Single store with hierarchical reducers
* No dispatcher
* Container components utilize `connect()`


### Reducers
How should state change for a given `Action`.
All state changing logic is handled through Reducers. A
### Containers

### Immutability
The Redux store is immutable. 

## Redux Flow

* `Actions`: Plain objects that contain a description of the event. For example:

```javascript
// a plain ol' object -- the type property is required
{
	type: DRIFT_EVENT_REGISTRATION, // the type is required
	confirmed: true,
	complex_object: {
		key: "value"
	},
	a_number: 10
}
// don't pass around things that won't serialize to JSON, such as functions and Promises
```

### Creating Redux Store

We call `createStore()` in our applications entry point.

`let store = createStore(reducer);`

#### What can the Store do?

1. Dispatch an action
	* `store.dispatch(action)`
2. Subscribe to a listener
	* `store.subscribe(listener)`
3. Return its current state
	* `store.getState()`
4. Replace a reducer
	* `replaceReducer(nextReducer)`

Actions are ultimately handled by Reducers!

#### Immutability

What's mutable in JS?

Immutable already:
* Number
* String
* Boolean
* Undefined
* Null

Mutable:
* Objects
* Arrays
* Functions

### Ways to clone/copy objects in JS

We can use `Object.assign()` (ES6 feature).
mm
`var newObjectWithNewState = Object.assign({}, state, {role: 'admin'})`

In this call, there are 3 params:

1. `{}`: Give me a new empty object. NOTE: Do not forget this empty object!
2. `state`: The object to clone from
3. `{role: 'admin'}`: The attribute we are modifying

Yields a clone of our existing `state` object

Next, we can use the Spread operator with arrays. 

### ES5

* Lodash merge
* Lodash exten
* Object-assign

### Enforcing immutability?

1. Trust
2. `redux-immutable-state-invariant` (only run in development)
3. `Immutable.js` library


### React-Redux `connect`

`connect(mapStateToProps, mapDispatchToProps)`

What actions we want to expose as props. This is all about wrapping actions in a dispatch call so that they are easy to pass down to child components.

```js
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}
```

### A chat with Redux

### TIL
* Using `bind(this)` in the `render()` function, it negativly impacts performance by causing a new function to be created on each render. Instead, place bind calls in the constructor.

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

> "When you notice that some components don't use props they receive but merely forward them down... it's a good time to introduce some container components."
> 
> Dan Abramov
