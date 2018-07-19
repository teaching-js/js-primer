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


## Events

DOM event model.
