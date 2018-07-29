# slackr

A messaging app!

API is given. Students Build front end.

#### api endpoints
<br>

> `POST` `/api/login`

Takes in a `auth` object and returns a new token that can be used to validate identity to future calls to the api.
Will also set the token in the cookie.

Returns a error object on unsuccessful login

> `GET` `/api/status`

Takes in a url parameter `t` which specifies a user token and returns a status object
If t is not specified, reads token from cookie

> `GET` `/api/user`

Takes in a url parameter `t` which specifies a user token and returns a user object
If t is not specified, reads token from cookie.

> `GET` `/api/chats`

Takes in a url parameter `t` which specifies a user token and returns a list of chat descriptor objects
If t is not specified, reads token from cookie.

> `GET` `/api/messages`

Takes in a url parameter `t` which specifies a user token, a parameter `cid` which is the id of the chat and `l` which specifies the maximum number of messages to grab. Returns a list of message objects.

If t is not specified, reads token from cookie.

...more to be done

#### objects

<br>

> `auth`

```
{
  username: text,
  password: text
}
```

> `status`

```
{
  loggedIn: boolean
}
```

...more to be done

## Task

#### Subset 1

Create the page `/login` and `/profile`

Using `/login` Log in a user with a username/password and get a token
if the username or password is incorrect display a helpful error message.

Use the token to get the users details via `/user` and create a profile page that displays user information.

Let users make a new account via `/register`

#### Subset 2

Create the dashboard page which displays all chats a user is in via `/chats`

Should be in order of most recently active and unread chats Should be highlighted somehow.

Let users open a chat and see all previous messages in the chat via `/messages` and lazy loading.

Let users send messages via `/send/message`

Update site to check for new messages on a set timer of every second or so

#### Subset 3

Have site automatically update with new messages with a web worker. (web socket api TBA)

Have site send push notifications on new message.

Let users make a new chat with 1 or more people

Let users search through chats or through people to send a message.

Have the site show when a user is typing.

#### Subset 4

Let users search through chats for a specific message

Let users block other users

Let users set chat nick names

Let users have chat specific nick names they can update

Let users change chat colors.

> Note the above set of features don't have to be explicity supported in the api

We can have a system where each student gets a client key and can ask the api to attach certain variables like "chat color" to a chat object which gets put in and stored per client key.

Each student can thus ask the api db to keep track of a couple of things for them, it also gives them the freedom to do more interesting and complex stuff.
