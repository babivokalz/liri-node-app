require('dotenv').config();

var keys = require('./keys.js');
var Spotify = require("node-spotify-api");

var Spotify = new Spotify(keys.spotify);
var bandsInTown = new bandsInTown()

var axios = require('axios');

var moment = require('moment');

var fs = require('fs');

// let writeToFile = false;
let input = process.argv.slice(2).join(' ');

// input = readFile(input);
// let action = input.slice(0, input.indexOf(' ') == -1 ? input.length : input.indexOf(' '));
// let value = input.indexOf(' ') == -1 ? null : input.slice(input.indexOf(' ') + 1); 

// useLiri (action, value);

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
    if (!searchedSong) {
        songName = "The Sign Ace of Base";
    } else {
        songName = searchedSong;
    }
    spotify.search({type:'track', query: songName}).then(function (response) {
        
        let results = 1;
        let output = "";
       
        if (response.tracks.items.length > 0) {
            
            output = "-----  " + action + "  " + "-".repeat(70 - action.length - 9) + "\n";

            for (let i = 0; i < results; i++) {

                let track = {
                    artist: response.tracks.items[i].artists[0].name,
                    song: response.tracks.items[i].name,
                    preview: response.tracks.items[i].preview_url,
                    album: response.tracks.items[i].album.name
                }

                output += printFormat("Artist", track.artist) + "\n";
                output += printFormat("Song ", track.song) + "\n";
                output += printFormat("Preview ", track.preview == null ? "" : track.preview) + "\n";
                output += printFormat("Album ", track.album) + "\n";
                output += "-".repeat(70) + "\n";
            }
            
            if (writeToFile)
                writeFile("log.txt", output);

            console.log(output);

        } else {
            console.log ("\nNo Results");
        }
        
        
    })
    .catch(function (error) {
        console.log("Error occurred: " + error);
    });

}

function searchedMovie() {
var movieName;
if (!searchedMovie) {
    movieName = "Mr.+Nobody";        
} else {
    movieName = searchedMovie;
}

var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

axios.get(queryURL).then(
    function (response) {
        
        if (response.data.Response == "True") {
            let movie = {
                title: response.data.Title,
                year: response.data.Year,
                imdbRating: response.data.imdbRating,
                rtRating: response.data.Ratings.length > 1 ? response.data.Ratings[1].Value : "Not Available",
                country: response.data.Country,
                language: response.data.Language,
                plot: response.data.Plot,
                actors: response.data.Actors
            }

            let output = "";
            output = "-----  " + action + "  " + "-".repeat(70 - action.length - 9) + "\n";

            output += printFormat("Movie Name", movie.title) + "\n";
            output += printFormat("Release Year", movie.year) + "\n";
            output += printFormat("IMDB Rating", movie.imdbRating) + "\n";
            output += printFormat("Rotten Tomatoes Rating", movie.rtRating) + "\n";
            output += printFormat("Country", movie.country) + "\n";
            output += printFormat("Language(s)", movie.language) + "\n";
            output += printFormat("Plot", movie.plot) + "\n";
            output += printFormat("Actors", movie.actors) + "\n";
            output += "-".repeat(70) + "\n";

            if (writeToFile)
                    writeFile("log.txt", output);

            console.log(output);
        } else {
            console.log ("\nNo Results");
        }

    });
}

function concertSearch() {
var artistName;
if (!concertSearch) {
    artistName = "Rezz";       
} else {
    artistName = concertSearch;
}

var queryURL = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=69d599c4300d32f4daca7da3ac289e13";

axios.get(queryURL).then(
    function (response) {
        
        let results = 1;
        let output = "";

        if (response.data.indexOf("Not found") == -1) {
            output = "-----  " + action + "  " + "-".repeat(70 - action.length - 9) + "\n";
            for (let i = 0; i < results; i++) {

                let venue = {
                    name: response.data[i].venue.name,
                    location: response.data[i].venue.city + ", " +
                        response.data[i].venue.region + ", " +
                        response.data[i].venue.country,
                    
                    date: moment(response.data[i].datetime, "YYYY-MM-DD HH:mm:ss").format("MM/DD/YYYY")
                }

                output += printFormat("Venue Name", venue.name) + "\n";
                output += printFormat("Location", venue.location) + "\n";
                output += printFormat("Date of Event", venue.date) + "\n";
                output += "-".repeat(70) + "\n";
            }
            
            if (writeToFile)
                    writeFile("log.txt", output);

            console.log(output);
        } else {
            console.log ("\nNo Results");
        }
    });
}

// function printFormat(message, data) {
// let format = {
//     columnWidth: 29,
//     breakPoint: 40
// };

// let string = "";

// string += " ".repeat(2);
// string += message + " ".repeat(format.columnWidth - 2 - message.length);

// if (data.length > format.breakPoint) {
//     let words = data.split(" ");
//     let count = 0;
    
//     if (words[0].length > format.breakPoint) {
//         string += data;
//     }

//     for (let i=1; i < words.length; i++ ) {
//         string += words[i-1] + " ";
//         count += words[i-1].length;
//         count++;

//         if (count + words[i].length > format.breakPoint) {
//             string += "\n";
//             count = 0;
//             string += " ".repeat(format.columnWidth);
//         }
        
//         if (i == words.length-1) {
//             if (count + words[i].length > format.breakPoint) {
//                 string += "\n";
//                 string += " ".repeat(format.columnWidth);
//             }
//             string += words[i];
//         }
//     }

// } else {
//     string += data;
// }

// return string;

useLiri(input);