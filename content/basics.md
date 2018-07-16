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


## Types

### Primitives

### Objects
