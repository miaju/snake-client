# SNAKE-CLIENT

This is an implementation of a client side of a multiplayer version of the game snake. This is a modified version of the single player [Snek](https://github.com/taniarascia/snek) by Tania Rasica.

This project was created by me as part of my learnings at Lighthouse Labs.

## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js` command.

## The Server

The server code was pre-written, and can be found [here](https://github.com/lighthouse-labs/snek-multiplayer).

## The Client

- The client code uses the standard js package 'net' to connect to the server.

- The Player inputs a name to be used for their snake - in this the name is hardcoded in constants to be my name.

- The Player can move using key inputs.

- The Player can display pre-written messages using key inputs.

| event | key binding |
| -------| ------ |
| Move: up | _w_ |
| Move: left | _a_ |
| Move: down | _s_ |
| Move: right| _d_ |
| Say: hey | _h_ |
| Say: NO | _n_ |
| Say: B) | _g_ |
