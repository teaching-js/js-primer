# What the DOM?

The Document Object Model or colloquially (DOM) provides the interface that allows
JavaScript to interact with XML, SVG and HTML through the browser.

## The DOM APIs

We call the webpage a Document, and the DOM allows the Document to be broken up into
a manipulatable tree-like structure that allows more complex usage of an otherwise
static page. JavaScript, aided by the DOM brings a webpage to life.

With reference to [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).

## Key Methods
The DOM APIs are quite extensive but mostly you'll be doing some variation of the
following methods.

```js
// document is global
document.getElementById(id)
document.getElementsByTagName(name)
document.createElement(name)

// node and element interactions
parentNode.appendChild(node)
parentNode.removeChild(node)
node.nodeData or node.data
element.innerHTML
element.style.left
element.setAttribute()
element.getAttribute()
element.addEventListener()

// window is also global (in fact the window encloses the document)
window.content
window.onload = () => init()
window.dump()
window.scrollTo()
window.innerHeight
window.innerWidth
```

## DataTypes

## Events
