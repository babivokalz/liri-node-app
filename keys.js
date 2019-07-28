require("dotenv").config();
var Spotify = require("node-spotify-api");

console.log("this is loaded");

(exports.bandsInTownKey = process.env.BANDSINTOWN_KEY),
  (exports.omdbKey = process.env.OMDB_KEY),
  (exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
  });
