# appear.in API

This is the repository for the appear.in developer API JavaScript source. It's
available on npm and as a standalone (pending). The files in this repository
are used for building the standalone,a s well as contain the soruces for the
npm package.

You can add this library to your browserify/whatever is cool these days package by doing:

`npm install appearin-api`

Alternatively, you can fetch link to the sources directly at the bottom of you body:

`<script src:"{{available soon}}"></script>`

You can read more on the appear.in API at our [developer pages](https://appearin.github.io/).

# Development
The project uses browserify to compile the sources. A test page has been added
as index.html to verify that the core functionality is working. Hopefully this
will be replaced by automated tests soon™.

To start off, run `npm install` to fetch dependencies.

To compile the latest sources do `grunt dev`.

# Building for production
Building for production is done by doing `grunt build`. This will create three files:

````
appearin-api.<version>.js
appearin-api.<version>.min.js
appearin-api.<version>.min.js.map
````

These can be self hosted, and they contain all dependencies necessary.
