# Objects in JavaScript

Because objects are ubiquitous in JavaScript, this section provides
an overview of some of the more common ones and how you can use them.

## Array or []

### Push `.push(item)`
Add to the end of the Array (append). Will affect underlying array.

### Pop `.pop(item)`
Grab the last item. Will affect underlying array.

### Shift `.shift(item)`
Remove from the front of the Array. Will affect underlying array.

### Unshift `.unshift(item)`
Add to the front of the Array (append). Will affect underlying array.

### Filter `.filter(fn)`
Filters the array and returns a new array filtered by the
callback function passed in. Callback should return true or false.

```js

const array = [1, 2, 3, 4];

function odd(num) {
   return num % 2;
}

const odd_only = array.filter(odd); // [ 1, 3 ]

// or with arrow func
const odd_only = array.filter(curr => curr % 2); // [ 1, 3 ]
```

### Map `.map(fn)`
Maps a passed in fn on the array's values and returns a new array.
The function passed in should return the mapped value

```js

const array = [1, 2, 3, 4];

function double(num) {
   return num % 2;
}

const double = array.map(double); // [ 2, 4, 6, 8 ]

// or with arrow func
const double = array.map(curr => curr * 2); // [ 2, 4, 6, 8 ]
```

### Reduce `.reduce(fn)`
Look up docs. Very versatile.

```js
const array = [1, 2, 3, 4];

const sum = array.reduce((sum, current) => sum + current, 0); // 1+2+3+4
```

### Join `.join(delimiter)`
As advertised. Returns a String.

### Tips

Most (many) Array methods allow for chaining, because they return
an Array. This is something you should take advantage of to write
more 'declarative' functional code.

Some more advanced syntax to keep in mind includes the spread
`...` syntax which implicitly turns an array into its component parts,
and the destructing syntax (very similar to Objects) which allows
you to quickly and easily select elements in an array. eg.

```js
// spread
const list = [10, 12, 13];
const [ ..., a, b ] = list;
// a == 12, b == 13

// alternatively in a function.
function spread(a, b, c) {}
spread(...list) {
   // a, b, c now set appropately
}
```

## String

### Split `.split(delimiter)`
Splits the string into an Array.

### Trim `.trim()`
Trims whitespace from beginning and end of string.

### index `.charAt()`
Returns the char inside the string. NB. Strings can't be accessed with indexing
directly, as you can in other languages.
