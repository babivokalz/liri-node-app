require('dotenv').config();

var keys = require('./keys.js');

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var axios = require('axios');

var moment = require('moment');

var fs = require('fs');

let writeToFile = false;
let input = process.argv.slice(2).join(' ');

// input = commandInput(input);
// let action = input.slice(0, input.indexOf(' ') == -1 ? input.length : input.indexOf(' '));
// let value = input.indexOf(' ') == -1 ? null : input.slice(input.indexOf(' ') + 1); 

useLiri (action, value);

function useLiri (action, value) {
    switch (action) {
        case "concert-this":
            queryBandsInTown(value);
            break;
        case "spotify-this-song":
            querySpotify(value);
            break;
        case "movie-this":
            queryOMDB(value);
            break;
        case "do-what-it-says":
            readFile('random.txt');
            break;
    }
};

function readFile(filename) {
    fs.readFile(filename, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.split(',');
        useLiri(data[0], data[1]);
    });
};

function writeToFile(filename, output) {
    fs.appendFile(filename, output, function(err) {
        if (err) {
            return console.log(err);
        }
    });
};

function searchedSong() {
    var songName;
    if (string === undefined || string === null || string === '') {
        songName = "The Sign Ace of Base";
    } else {
        songName = string;
    }
    spotify.search
}

// function commandInput(input) {
//     if (input.indexOf('-') != -1 && input.indexOf('-') == 0) {
//         let flag = input.slice(0,2);

//     }
// }