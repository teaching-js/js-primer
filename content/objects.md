# Objects in JavaScript

Because objects are ubiquitous in JavaScript, this section provides
an overview of some of the more common ones and how you can use them.

## Array or []

### Push `.push(item)`
Add to the end of the Array (append). Will affect underlying array.

### Pop `.pop(item)`
Grab the last item. Will affect underlying array.

### Filter `.filter(fn)`
Filters the array and returns a new array filtered by the
function passed in. Function should return true or false.

```js

const array = [1, 2, 3, 4]

function odd(num) {
   return num % 2
}

const odd_only = array.filter(odd) // [ 1, 3 ]

// or with arrow func
const odd_only = array.filter(curr => curr % 2) // [ 1, 3 ]
```

### Map `.map(fn)`
Maps a passed in fn on the array's values and returns a new array.
The function passed in should return the mapped value

```js

const array = [1, 2, 3, 4]

function double(num) {
   return num % 2
}

const double = array.map(double) // [ 2, 4, 6, 8 ]

// or with arrow func
const double = array.map(curr => curr * 2) // [ 2, 4, 6, 8 ]
```

### Reduce `.reduce(fn)`
Look up docs. Very versatile.

```js
const array = [1, 2, 3, 4]

const sum = array.reduce((sum, current) => sum + current, 0) // 1+2+3+4
```

### Join `.join(delimiter)`
As advertised. Returns a String.

## String

### Split `.split(delimiter)`
Splits the string into an Array.

### Trim `.trim()`
Trims whitespace from beginning and end of string.

### index `.charAt()`
Returns the char inside the string. NB. Strings can't be accessed with indexing
directly, as you can in other languages.

## Function
AS of ES6 there are two different ways to declare a function,
each with subtly different behaviour.

```js
// can be declared with or without a name
function normalFunction() { }

// anonymous function
const normalFunction = function() {}

// anonymous function in line.
array.map(function(item) { return item + 1 })

// for all of these types of functions, the value of 'this'
// is bound to the enclosing object.
```

However... (as of ES6)

```js
// we now have arrow functions.
// The arrow is shorthand for return.
const returns10 = () => 10
const greet = name => "Hello " + name

// But arrow functions also have one special property!
// they bind not to the enclosing object, but the surrounding context.
// This is important in areas where you may normally have had to 'bind' a fn.
addEventListener('click', handler.fn.bind(handler))
// vs.
addEventListener('click', () => handler.fn()) // yay!
```
