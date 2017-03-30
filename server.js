'use strict'

const express = require( 'express' );
let app = express();

app.use( express.static('./app') );

/* ===============================
  ROUTE
 ============================== */
// general route
app.get( '/', ( req, res ) => {
  res.sendFile( __dirname + '/index.html' );
})

var server = app.listen( 8000, _ => {
  console.log( 'server started. listening to 8000' );
})