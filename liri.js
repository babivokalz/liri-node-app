require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);
var bandsInTown = keys.bandsInTownKey;
var ombd = keys.omdbKey;

var axios = require("axios");

var moment = require("moment");

var fs = require("fs");

// let writeToFile = false;
var input = process.argv[2];

// input = readFile(input);
// let action = input.slice(0, input.indexOf(' ') == -1 ? input.length : input.indexOf(' '));
// let value = input.indexOf(' ') == -1 ? null : input.slice(input.indexOf(' ') + 1);

// useLiri (action, value);

function useLiri(action) {
  switch (action) {
    case "concert-this":
      concertSearch();
      break;
    case "spotify-this-song":
      searchedSong();
      break;
    case "movie-this":
      searchedMovie();
      break;
    case "do-what-it-says":
      readFile();
      break;
    default:
      console.log("Try Again");
  }
}

function readFile() {
  fs.readFile("random.txt", "utf8", function(error, data) {
    var data = data.split(",");
    (input = data[0]), data[1];
    useLiri(input);
  });
}

function writeToFile(output) {
  fs.appendFile("log.txt", output, function(error) {
    if (error) {
      return console.log(error);
    }
  });
}

function searchedSong() {
  var songName = input;
  if (!songName) {
    songName = searchedSong;
  } else {
    songName = "The Sign Ace of Base";
  }
  spotify.search({ type: "track", query: input, limit: 1 }, function(
    error,
    data
  ) {
    if (error) {
      console.log("Error Occured" + error);
      return;
    }
    var track = data.tracks.items;
    for (var i = 0; i < track.length; i++) {
      console.log("Artist: " + track[i].artists[0].name);
      console.log("Song: " + track[i].name);
      console.log("Preview: " + track[i].preview_url);
      console.log("Album: " + track[i].album.name);
      console.log("*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*");
      writeToFile(
        "Artist: " +
          track[i].artists[0].name +
          "\n" +
          "Song: " +
          track[i].name +
          "\n" +
          "Preview: " +
          track[i].preview_url +
          "\n" +
          "Album: " +
          track[i].album.name +
          "\n"
      );
    }
  });
}

function searchedMovie() {
  var movieName = input;
  if (!searchedMovie) {
    movieName = searchedMovie;
  } else {
    movieName = "Mr.+Nobody";
  }
  var queryURL =
    "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

  axios.get(queryURL).then(function(response) {
    console.log("Title: " + response.data.Title);
    console.log("Year: " + response.data.Year);
    console.log("IMDB Rating: " + response.data.imdbRating);
    console.log(
      "Rotten Tomatoes Rating: " + response.data.Ratings.length > 1
        ? response.data.Ratings[1].value
        : "Not Available"
    );
    console.log("Country: " + response.data.Country);
    console.log("Language: " + response.data.Language);
    console.log("Plot: " + response.data.Plot);
    console.log("Actors: " + response.data.Actors);
    console.log("*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*");
    writeToFile(
      "Country: " +
        response.data.Country +
        "\n" +
        "Language: " +
        response.data.Language +
        "\n" +
        "Plot: " +
        response.data.Plot +
        "\n" +
        "Actors: " +
        response.data.Actors
    );
  });
}

function concertSearch() {
  var artistName = input;
  var queryURL =
    "https://rest.bandsintown.com/artists/" +
    artistName +
    "/events?app_id=${bandsInTownKey}";

  axios.get(queryURL).then(function(response) {
    for (var i = 0; i < response.data.length; i++) {
      console.log("Venue: " + response.data[i].venue.name);
      console.log(
        "Location: " +
          response.data[i].venue.city +
          ", " +
          response.data[i].venue.region +
          ", " +
          response.data[i].venue.country
      );
      console.log(
        "Date: " + moment(response.data[i].datetime).format("MM/DD/YYYY")
      );
      console.log("*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*");
      writeFile(
        "Venue: " +
          response.data[i].venue.name +
          "\n" +
          "Location: " +
          response.data[i].venue.city +
          ", " +
          response.data[i].venue.region +
          ", " +
          response.data[i].venue.country +
          "\n" +
          "Date: " +
          moment(response.data[i].datetime).format("MM/DD/YYYY")
      );
    }
  });
}
useLiri(input);
