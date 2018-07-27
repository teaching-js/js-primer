# Functions and Declarative programming

First a little bit of preamble to give a quick overview on syntax and styles.

## Syntax
Functions are, like Objects, _everywhere_ in JavaScript.
As of ES6 there are two different ways to declare a function,
each with subtly different behaviour.

```js
// can be declared with or without a name
function normalFunction() { }

// anonymous function
const normalFunction = function () {};

// anonymous function in line.
array.map(function (item) { return item + 1 });

// for all of these types of functions, the value of 'this'
// is bound to the enclosing object.
```

However... (as of ES6)

```js
// we now have arrow functions.
// The arrow is shorthand for return.
// it's good practice to include parenthesis around args,
// but for single arguments, you don't need to.
const returns10 = () => 10;
const greet = name => `Hello ${name}`;

// for the example above we get the much nicer
array.map(item => item + 1);

// But arrow functions also have one special property!
// they bind not to the enclosing object, but the surrounding context.
// This is important in areas where you may normally have had to 'bind' a fn.
element.addEventListener('click', handler.fn.bind(handler));
// vs. (FIXME This example could probs be better)
element.addEventListener('click', () => handler.fn()); // yay!
```

In some cases you may need to explicitly alter the value of `this`
that you're trying to manipulate. In such cases, one form of the below methods
will be appropriate.

### Bind `.bind(thisArg, ...args)`
Bind explicitly nominates a function's `this` value and
returns this new function. Common use with event handlers as above.

```js
// now objects methods will be bound to object (as it should be)
// rather than element (which is the enclosing object)
element.addEventListener('click', object.method.bind(object));
```

### Call `.call(thisArg, ...args)`
Call is very similar to `.bind`, except that rather than returning a function,
it also makes the function call.

```js
const returnVal = object.method.call(object, arg1, arg2...);
```

### Apply `.apply()`
Apply does exactly the same thing as `.call`, except that it takes an Array,
rather than an arguments list. IE.

```js
const returnVal = object.method.apply(object, [arg1, arg2]);
```

## Thinking Functionally
