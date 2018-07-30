# Ideas

* Instagram!
   - Has lots of potential JavaScript components
   - Infinite scroll
   - Fetch/AJAX
   - Swipe maybe?
   - Ability to like, unlike a post
   - Ability to get push notifications via AJAX polling
* Create React / VDOM
* Fetch Data from a public API and display it
* Create an API which app has to fetch -> render -> refetch -> re-render
* Drag and Drop based game (Mouse or Touch API)
* Infinite scroll blog (async requests, DOM check scroll)
* Basic animations
* WebWorkers?

# Build a SPA

Inspiration:
- https://web.archive.org/web/20140104191223/http://www.cse.unsw.edu.au:80/~cs2041/13s2/assignments/mekong/
- Perhaps Andrew Taylor could provide the assignments from previous years?

Build 2041StaGram. This assignment guides students to build an Instagram-like frontend to wrap a provided API. 

The assignment intends to teach students to build a simple single page application which can fetch dynamic data from a HTTP API.

Some of the skills/concepts this assignment aims to test (and build upon):

- Simple event handling (buttons)
- Advanced Mouse Events
- Fetching data from an API
- URL fragment based routing
- Infinite scroll
- CSS Animations
- Web Workers
  - Push Notifications
  - Offline Support
- Routing

## API

We can build API documentation using [Swagger](https://swagger.io/) or [Api Blueprint](https://apiblueprint.org/). A simple express JS API server can be built that is provided to students to allow them to develop offline. It could also be hosted somewhere to ease development when online? 

**TODO**: Someone will need to build a API server to support all of this client side functionality.

The following specification is a WIP and only includes some endpoints. 

### POST `/login`
```json
{
  username: 'string',
  password: 'string',
}
```

returns:

 - `200 OK` for successful login
 - `403` for invalid credentials

### POST `/signup`
```json
{
  displayName: 'string',
  username: 'string',
  password: 'string',
}
```

returns 

- `200 OK` for successful signup.
- `403` for user already exists

## Milestones

### Level 0

Level 0 focuses on the basic user interface & interaction building of the site. There is no need to implement any integration with the backend for this level.

#### Login (Level 0)
The site presents a login form and a user can log in with pre-defined hard coded credentials. Once logged in, the user can see
the home page.

#### Registration (Level 0)
An option to register for "2041StaGram" is presented allowing the user to sign up to the service.

#### Feed Interface
Your web application must generate nicely formatted convenient-to-use web pages including appropriate navigation facilities and instructions for naive users. Although this is not a graphic design exercise you should produce pages with a common and somewhat distinctive look-and-feel. You may find CSS useful for this. 

The application should present a "feed" of user content.

### Level 1

Level 1 focuses on fetching data from the API.

#### Login (Level 1)
The site presents a login form and verifies the provided credentials with the backend. Once logged in, the user can see
the home page.

#### Registration (Level 1)
An option to register for "2041StaGram" is presented allowing the user to sign up to the service. The user information is `POST`ed to the backend to create the user in the database.

#### Feed Interface (Level 1)
The content shown in the user's feed is sourced from the backend. 

### Level 2

#### _Like_ user generated content
Users can interact with the content displayed in the feed. Users can _like_ images shown in the feed. 

#### "Post" new content
Users can upload and post new content on their profile and have it appear in other users feeds.

#### Pagination
Users can page between sets of results in the feed

#### Update Password
Users can change their password

### Level 3

#### Infinite Scroll
Instead of pagination, users an infinitely scroll through results

#### Comments
Users can write comments on "posts".

#### Update Profile
Users can update their personal profile. E.g:

 - Update email address
 - Change display name
 - Update their profile picture

#### Level 4

#### Push Notifications
Users can receive push notifications when a user they follow posts an image

**TODO:** Determine if it's feasible to write a backend that supports this. Long polling? Websockets? 

#### Offline Access
Users can access the "2041StaGram" at all times by using Web Workers to cache the page (and previous content) locally.

#### Fragment based URL routing
Users can access different pages using URL fragments:

- /#profile=me
- /#feed
- /#profile=janecitizen

