# What the DOM?

The Document Object Model or colloquially (DOM) provides the interface that allows
JavaScript to interact with XML, SVG and HTML through the browser.

## The DOM APIs

We call the webpage a Document, and the DOM allows the Document to be broken up into
a manipulatable tree-like structure that allows more complex usage and editing
 of an otherwise static page. In this sense, JavaScript, aided by the DOM brings a webpage to life.

## DataTypes

There is nothing special about the way these `DOM Objects` work, they are, at their
heart `Objects` in a JavaScript sense and observe all the same conventions. Still,
as with the vanilla `Array`, `Function`, `String` ... it's worth getting a handle
on the API of the DOM Objects if you're ever likely to do any sort of real web development.

The following with reference to: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).

Element | Description
-----|----
`document` |	The DOM document Reference chapter describes the document object.
`element`	|  `element` refers to an element or a node of type element returned by a member of the `DOM API`. Rather than saying, for example, that the `document.createElement()` method returns an object reference to a node, we just say that this method returns the element that has just been created in the DOM. `element` objects implement the `DOM Element` interface and also the more basic `Node` interface, both of which are included together in this reference.
`nodeList`	| A `nodeList` is an array of elements, like the kind that is returned by the method `document.getElementsByTagName()`.
`namedNodeMap` |	A `namedNodeMap` is like an array, but the items are accessed by name or index, though this latter case is merely a convenience for enumeration, as they are in no particular order in the list.

You'll be interacting with all of these (or some variation of all of these),
so get some familiarity with how they work and when you might use 'em.

## Key Methods
The DOM APIs are quite extensive but mostly you'll be doing some variation of the
following methods.

```js
// document is global, returns an html element
// with the specific id.
document.getElementById(id)

// returns a DOM HTMLCollection
document.getElementsByTagName(name)

// returns an html element
document.createElement(name)

// returns a list
document.getElementsByClassName(className)

// node and element interactions
parentNode.appendChild(node)
parentNode.removeChild(node)

// access what's in a node
node.nodeData or node.data

// access what's in an element
element.innerHTML
element.textContent // not always what u want, read docs.

// change the style.
element.style.left

// as advertised
element.setAttribute(attr, value)
element.getAttribute(attr)
element.addEventListener(eventType, handler)

// window is also global (in fact the window encloses the document)
window.onload = () => init()
window.dump()
window.scrollTo()
window.innerHeight
window.innerWidth
window.addEventListener(eventType, handler)
```

## Events and the Event Loop

An `Event` is a blanket term for anything that JavaScript can react to, a screen resize, a click, a drag, a key smash, touch,
network requests, you name it.

Events are managed and processed by a single-threaded loop,
which will run in your browser.. forever. We call this the
Event Loop.

### The Event Loop

This is at its core quite simple, in JavaScript is something like the following.

```js
while (queue.waitForMessage()) {
  queue.processNextMessage()
}
```

Every time a event is triggered, let it be a click, a key press, or a mouse move, a event is added to the queue.

Unlike a lot of more complex concurrency models, JavaScript uses a `Run-to-completion` model. This means that while code is handling one event, another event will not be handled.

Again this is a result of its single-threaded nature. Events can be added to the queue but only processed one at a time.

The advantage of this is its simple to reason about; the obvious disadvantage is that if one event handler takes too long to process, all other events are queued.

This means while the page is processing, it essentially freezes and no other fired events can be caught and processed.

See example `blocked.js`.

Not that I/O, including keyboard, touch and mouse events
can take different lengths of time to be processed by the OS,
before they reach the browser -- and in this time; JavaScript
will simply move on to its next task. It will not wait for,
for example a long network request to complete before it
continues with other jobs. This helps performance but
can create some confusion about the way in which our
code is being executed. More on this when we properly
discuss `async`.

### More on Events

#### Intro

OK so cool JavaScript gives us the ability to write code that gets run on a certain event asynchronously! but how do we actually do that?

The internal JavaScript event loop is constantly capturing events but it needs to know what to do with an event firing,
or even whether to ignore it completely.

In the DOM, we manage this with `listeners`.

#### DOM based

You can do this directly in `HTML` with a variety of tags such as `onclick`, `onhover`, `onblur` etc. read about them on the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/Events).

These bind directly to a `DOM Node`, that is to say, a event only fires if the click happened on the object on the screen. (more on how this works this further down)

```html
<script>
  function myFunction(){
    alert('i am a hack0r')
  }
</script>

<div onclick="alert('i am a hack0r')"></div>
<div onclick="myFunction()"></div>
```

But you can also register event handlers directly in JavaScript code.

```js
document.getElementById("mybutton").onclick = function(event) { ... }
```

Here what we have done is _binded_ an inline listener function to a event which is called whenever the particular event is fired. When the relevant is fired, in this case a `click`,
our button (presumably an html element of some kind)
will provide an `ClickEvent` object to the EventLoop,
which will dealt with by our shiny new event handler.

```js
// have to give it a name now so we can reference is
// AND note the event parameter 'event'
function myEventHandler(event) { ... }

document.getElementById("mybutton").onclick = myEventHandler

// generally preferred style
document
   .getElementById("mybutton")
   .addEventListener('click', myEventHandler)
```
The event object is hard to say anything about because what it contains depends on the event. A key press event object holds information on what key was pressed, a click holds information on where the click happened etc. See the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/Events) for more info.

#### Other

There are also some events that don't directly relate to a specific DOM node, such as a screen resize or a "loaded" event which fires once the document has been fully loaded.

These are declared in the same way but we bind our event handlers to the `window` which acts as an overarching anchor for our events.

```js
window.addEventListener("load", function(event) {
  console.log("All resources finished loading!")
})
window.addEventListener("resize", function() {
    console.log("Screen was resized")
})
```

A very common event used is a timeout event where a certain function is run after a certain amount of time

```js
// print out hello after 3000ms (3 seconds)
setTimeout(function(){ alert("Hello") }, 3000)
```

JavaScript also lets you make your own custom events and state when you want them to fire but for now that's out of the scope.

Feel free to read more about them on the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events) though.

#### `this` binding

Usually the keyword `this` refers to the object which owns the current function being run. By default this is the window object. Outside of a function `this` still refers to the window object.

When the function is in a object, this refers to the object itself. This is similar to how python implements `self` and java implements `this`

```js
console.log(this) // window
function f(){
  console.log(this) // still window
}

let person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
        return this.firstName + " " + this.lastName
    }
}
```

This is all dandy but what's cool is that when a event is triggered, `this` is bound to the node on which the listener is attached.

The following piece of code:

```html
<div onclick="console.log(this)"></div>
```
Would output the div element itself in the console if
clicked.

### Capturing An Event

#### Bubbling

Take a look at the following piece of code

```html
<div onclick="alert('The handler!')">
  <em>If you click on <code>EM</code>, the handler on <code>DIV</code> runs.</em>
</div>
```

If you click on the EM the event still happens. This makes sense, if you say that a event should fire on a div, then any click inside the div should fire a event.

But consider the below

```html
<div onclick="alert('The handler!')">
  <em>If you click on <code onclick="alert('The EM Handler!')">EM</code>, the handler on <code>DIV</code> runs.</em>
</div>
```

What should happen? should the first event trigger, the outer one, both?

If you try it out you'll see that both fire, inside out.

This is because of how js by default does **event capturing and bubbling**

By default js _almost_ always bubbles events from the most nested element to the outermost element, firing each event inside out.

There are some cases where the default action is different, for example on a focus event the event doesn't bubble. But almost always the event will bubble.

Now of course this is default but like a lot of things in JavaScript we can override.

```html
<body onclick="alert(`the bubbling doesn't reach here`)">
  <button onclick="event.stopPropagation()">Click me</button>
</body>

```

We can stop specific event chains from bubbling by stopping it in it's tracks.

Or we can be very specific in how we react to an event, `event.target` holds the innermost DOM node that triggered the event so in your event handler you can reject to handle any events that are triggered by nested elements

```js
function myHandler(event) {
  // i don't care about nested events
  if (event.target != this) {
    return
  }

  /* there are better ways to do this */
  ...
}
```

#### Capturing

This is less useful but good to know. The event mechanisms actually unfolds in 2 steps.

In the **capture** phase a event cascades from the window down until it hits the relevant node, triggers the target in the **target phase** and then in the **bubble** phase is goes back up triggering event handlers along the way.

![bubble and capture](https://javascript.info/article/bubbling-and-capturing/eventflow@2x.png)
_image from [bubbling and capturing](moodle.telt.unsw.edu.au/course/view.php?id=31318)_

Usually the capturing phase is invisible, because it's so rarely used. But it can be used.

there is a third argument to the function `addEventListener` which when set to true allows a event listened to be trigged during the capture phase rather then the bubble event.
false causes the default behaviour of only reacting to a bubbling event.

```js
elem.addEventListener("click", function(){
  console.log("I GET TRIGGERED FIRST DURING CAPTURE!")
}), true)
elem.addEventListener("click",function(){
  console.log("I GET TRIGGERED AFTER DURING BUBBLE!")
}))
```
