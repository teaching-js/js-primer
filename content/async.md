# Async JS, AJAX

JS was created to be the language that allowed for interactive web pages. It would allow developers to define how their page would react to things.

At the core of this came a issue, the things the code would react to would be **asyncronous**, that is to say a user might click on something right now or in 1 second or in 2 hours, we don't know.

As a result JS evolved various constructs to allow users to write code that only ran when triggered by a certain event.

There are two main things we do with js that are async, resource interactions and events.

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

#### Intro

OK so cool js gives us the ability to write code that gets run on a certain event asynchronously! but how do we actually do that?

Js has a internal event loop that's constantly capturing events but not doing much with the event, all you need to do is let the browser engine know that when a certain event happens, it should run your code.

#### Dom based

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

#### Other

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

A very common event used is a timeout event where a certain function is run after a certain amount of time

```js
// print out hello after 3000ms (3 seconds)
setTimeout(function(){ alert("Hello"); }, 3000);
```

Js also lets you make your own custom events and state when you want them to fire but for now that's out of the scope.

feel free to read more about them on the [mdn docs](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events) though.

#### `this` binding

Usually the keyword `this` refers to the object which owns the current function being run. By default this is the window object. Outside of a function `this` still refers to the window object.

When the function is in a object, this refers to the object itself. This is similar to how python implements `self` and java implements `this`

```js
console.log(this); // window
function f(){
  console.log(this); // still window
}

let person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};
```

This is all dandy but what's cool is that when a event is triggered, `this` is binded to the dom node on which the function is being triggered.

the following piece of code

```html
<div onclick="console.log(this)"></div>
```
Would output the div dom node itself.

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

Now of course this is default but like a lot of things in js we can override.

```js
<body onclick="alert(`the bubbling doesn't reach here`)">
  <button onclick="event.stopPropagation()">Click me</button>
</body>
```

we can stop specific event chains from bubbling by stopping it in it's tracks.

Or we can be very specific in how we react to an event, `event.target` holds the inner most dom node that triggered the event so in your event handler you can reject to handle any events that are triggered by nested elements

```js
function myHandler(event) {
  // i don't care about nested events
  if (event.target != this) {
    return
  }
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
  console.log("I GET TRIGGERED FIRST DURING CAPTURE!");
}), true);
elem.addEventListener("click",function(){
  console.log("I GET TRIGGERED AFTER DURING BUBBLE!");
}));
```

## Resource interactions

Back when we had Ye Oldè Internets every time you needed more data from a server you would have to reload the entire page or redirect to a new page.

Each bit of info you wanted required a GET/POST request.

This was difficult for our old pilgrim developers. You couldn't have a page update live like fb messenger or twitter does because you'd have to refresh the page. furthermore even if all you wanted was to grab 3 more posts from your newfeed you'd have to reload the entire page.
The entire concept of more things loading as you scroll didn't exist. you'd have to download all or split your feed into pages.

So naturally our brave new world explorers allowed us to make requests in js. We could fetch little bits of relevant data and update our current view appropriately.

Here is the issue, IO is slow, really slow, sometimes a request can take up to a couple of seconds to complete and if you throw yourself back to when we were discussing the event loop, this is a issue.

You can't wait for a server to get back to you after a request because while you are waiting, no other js can run, and your page stops reacting to events.

So with I/O we developed a toolset

### Basic XHR

Lets start with ye olde way, callback functions.

We can send a request to a server and speficy a function to run when the server responds.

Once the server responds a event is put onto the event queue and when it is its turn, the callback function is triggered.

```js
// this get's called at a later time whenever
// the server responds

function callback(data){
  // use the data
}


var oReq = new XMLHttpRequest();
oReq.addEventListener("load",callback);

// these lines return super quickly even though
// the server hasn't responded. They don't wait.
oReq.open("GET","http://www.example.org/example.txt");
oReq.send();
```

if we were to wait for the server we would get something like this where for 7 seconds the js can't do anything else

```
    [request sent] [server responds]
           v             v
           |-------------|
seconds  0 1 2 3 4 5 6 7 8 9
```

whereas with a callback we get This

```
    [request sent] [server responds]
           v             v
           |-|          |-|
seconds  0 1 2 3 4 5 6 7 8 9
```

While we wait we can do anything else.

### Promises

The above worked but got unweidly once websites relied more and more on these types of resource calls.
Thus js evolved and gave us Promises


## AJAX
