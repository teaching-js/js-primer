# The Basics

## The Language

JavaScript is an **interpreted**, just-in-time compilation language that supports
many programming styles and paradigms and can run in many different environments.

In practice, JavaScript needs to be parsed by a runtime JS engine\*,
compiled to byte-code before it's finally executed.

Common JavaScript engines include:
* Rhino (Mozilla)
* V8 (Chrome, Opera, Node.js)
* JavaScriptCore (Safari)
* Chakra (Edge)
* Many others..

\*All of these engines implement JavaScript
functionality in slightly different ways, because of
the generality of the JavaScript standard specification set out by the ECMAScript
foundation. For the basics however, these differences aren't really worth dwelling on.

## Usage

Most commonly we use JavaScript in web browsers for client-side script execution,
but it's become increasingly popular as a server side language through `node.js`.
JavaScript is even used to develop and build native applications for desktop and
mobile.

This course will focus on JavaScript in the browser.

## Modern web development

Way back when before most of you were born (the early 90s), web pages were simple.

The requirements were simply to serve basic information, there was little or no
interactivity, and updates to the page state required a browser refresh.

By contrast, modern web apps are heavily reliant on JavaScript for 'native-like' performance and interactivity.

Things like:

* Gmail
* Facebook
* Twitter
* But to name a few...

... Would not be possible without JavaScript.

## Why Use JS?

JavaScript is the *only*\* language that allows client side code-execution in the browser
which makes it the only tool web developers have available to create more complex web applications.

Without JavaScript we can only update a page's state by re-requesting the page from the
server.
JavaScript allows us to have features that are common-place in native applications in the browser.

\*Not strictly true.

## In the browser

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
   <head>
      <meta charset="utf-8">
      <title>My first JavaScript</title>
   </head>
   <body>
      <!-- Note the placement of the script here -->
      <script>
         alert('Hello World!')
      </script>
      <!-- This also would work
      <script src="filename.js"></script>
      -->
   </body>
</html>
```

## Grammar



### Variables


### Operators


### Control Flow


### Loops and Iteration

Let's assume we have an Object and Array as below:
```js

const array = [ "Teddy", "Clock"]

const item = {
   name: "Box",
   weight: 10,
   contents: array
}

```

The `while` or `do-while` loop:
```js
// same as c
let index = 0

while (index < array.length) {
   let value = array[index]
   index++
}

do {
   let value = array[index]
} while (index < array.length);

```

The `c-style` loop:
```js
// Iteration over an array
for (let index = 0; index < array.length; index++) {
   // do something with item
   // very similar to c
   let value = array[property]
}
```

The `for ... in` loop:
```js
// Iteration over an object/array
for (let property in items) {
   // do something with item
   // very similar to python
   let value = items[property]
}
```

The `for ... of` loop:
```js
// requires implementation of 'Iterator'
for (const item of items) {
   // the value of item for each iteration
   item => "Box", 10, ["Teddy", "Clock"]
}
```


## Types

### Primitives

### Objects
