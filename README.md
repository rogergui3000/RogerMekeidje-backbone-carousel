# Backbone carousel 
Backbone, carousel, without using existing plugins.

Requirements:

- build a carousel.
- by default display 4 elements.
- navigation is made with next and previous buttons.
- Next button should be disabled, if user is at the very end of the carousel.
- Previous button should be disabled, if user is at the very beginning of carousel.
- Clicking on next/previous buttons shows next/prev 4 carousel blocks accordingly.
- The source of carousel block is endpoint on server that return following JSON:

[{
title: "First Block",
images: [url1, url2, url3]
},
{
title: "Second Block",
images: [url7, url8]
}
,...]

-  Display a random image for each block from the set of images.

## Technologies(requirement):
- NodeJs , Express
- Jquery
- boostrapJs
- BackboneJs
- Underscore
- RequireJs
- chai

## Compatibility
The application and test samples should work for the following browser /
version combinations:

* Chrome: 7+
* Safari: 5+
* Firefox: 4+
* Internet Explorer: 9+

## Server App
The server requires [Node.js](http://nodejs.org/download/) .
Once you have these installed, you can change into the root of this repository
and install all of the project libraries:

    $ npm install

To run the sample server application to server start where , you will need two terminal windows.
. start up the Express server:

    $ npm start

And from there you can navigate a browser to:

* [http://127.0.0.1:8000/](http://127.0.0.1:8000/):
  Use the web application.
  
## Note: update Soon test using karma, sinonjs, mocha


