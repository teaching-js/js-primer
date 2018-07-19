# Async JS, AJAX

JS was created to be the language that allowed for interactive web pages. It would allow developers to define how their page would react to things.

At the core of this came a issue, the things the code would react to would be **asyncronous**, that is to say a user might click on something right now or in 1 second or in 2 hours, we don't know.

As a result JS evolved various constructs to allow users to write code that only ran when triggered by a certain event.

There are two main things we do with js that are async, and that is resource interactions and events.

Lets start by looking at Events

## Events

This is a blanket term for anything that js can react to, a screen resize, a click, a drag, a key smash, a key caress you name it.

Let see how js hanldes them and how you can use them.

### The Event Loop

This is at it's core quite simple, in js is something like the following

```js
while (queue.waitForMessage()) {
  queue.processNextMessage();
}
```

Every time a event is triggered, let it be a click, a key press, or a mouse move, a event is added to the queue.

Unlike a lot of more complex concurrency models, js uses a `Run-to-completion` model. This means that while code is handling one event, another event will not be handled

events can be added to the queue but only processed one at a time.

This has the obvious advantage of not making our brains hurt. If multiple pieces of code can be running at the same time we run into the issue of _race conditions_ where the value of some shared resource like a global variable changes between two lines of code.
This doesn't happen in js, making your code run at a non-deterministic time but once run, it will predictably run sequentially to completion.

The obvious disadvantage is that if one event handler takes too long to react, all other events are queued.

this means while the page is processing, it essentially freezes and no other fired events can be caught and processed.

See example `blocked.js`

### Event Handlers

OK so cool js gives us the ability to write code that gets run on a certain event asynchronously! but how do we actually do that?

Js has a internal event loop that's constantly capturing events but not doing much with the event, all you need to do is let the browser engine know that when a certain event happens, it should run your code.

You can do this directly in html with a variety of tags such as onclick, onhover, onblur etc. read about them on the [mdn event docs](https://developer.mozilla.org/en-US/docs/Web/Events)

These bind directly to a DOM node, that is to say, a event only fires if the click happened on the object on the screen. (more on how this works this further down)

```html
<script>
  function myFunction(){
    alert('i am a hack0r');
  }
</script>

<div onclick="alert('i am a hack0r')"></div>
<div onclick="myFunction()"></div>
```

But you can also register event handlers directly in js code

```js
document.getElementById("mybutton").onclick = function(event) { ... }
```

Here what we have done is _binded_ a inline function to a event so the function is called whenever the event is fired with a event object. A little object the browser engineer creates to give your code some context on how it was triggered.
You could just as easily do this

```js
// have to give it a name now so we can reference is
function myEventHandler(event) { ... }

document.getElementById("mybutton").onclick = myEventHandler;
```

The event object is hard to say anything about because what it contains depends on the event. A key press event object holds information on what key was pressed, a click holds information on where the click happened etc. See the [mdn event docs](https://developer.mozilla.org/en-US/docs/Web/Events) for more info.

There are also some events that don't directly relate to a specific dom node, such as a screen resize or a "loaded" event which fires once the dom tree has been loaded and rendered.

These are declared in the same way but we bind our event handlers to the _window_ which acts as a overarching anchor for our events.

```js
window.addEventListener("load", function(event) {
  console.log("All resources finished loading!");
});
window.addEventListener("resize", function() {
    console.log("Screen was resized");
});
```

Js also lets you make your own custom events and state when you want them to fire but for now that's out of the scope.

feel free to read more about them on the [mdn docs](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events) though.

### Capturing An Event

Take a look at the following piece of code

```html
<div onclick="alert('The handler!')">
  <em>If you click on <code>EM</code>, the handler on <code>DIV</code> runs.</em>
</div>
```

If you click on anything
