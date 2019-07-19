require('dotenv').config();

var keys = require('./keys.js');

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var axios = require('axios');

var moemnt = require('moment');

var fs = require('fs');

let writeToFile = false;
let input = process.argv.slice(2).join(' ');

input = 