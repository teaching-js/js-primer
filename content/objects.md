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

###
