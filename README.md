# liri-node-app

## Overview:

For this assignment we were to create a command line node application called LIRI, which stands for Language Interpretation and Recognition Interface. Using Node, LIRI can run certain commands from the command line and will return search results pertaining to movies, songs, and concerts to the user. All results will be printed to the console and saved to the log.txt file.

## Technologies Used:

- Node.JS
- fs
- OMDb API
- Node-Spotify-API
- BandsInTown API
- Moment
- Axios
- DotEnv

## Spotify Usage:

> node liri.js spotify-this-song

Using the Spotify API, when the user gives the command "spotify-this-song" in addition to their desired searched song title, the data that returns includes the Name of the Artist/Artists, the Song Title, the Preview Link (if it's available), and the Album Name. Here you can see what data returns when the song "Bye Bye Bye" is searched.

> ![alt text][logo]

[logo]: https://github.com/babivokalz/liri-node-app/blob/master/screenshots/Spotify%20-%20Song%20Search.png "Searched Song"

If the user does not enter in a song title, then the default song "Ace of Base - The Sign" will be shown.
> ![alt text][logo]

[logo]: https://github.com/babivokalz/liri-node-app/blob/master/screenshots/Spotify%20-%20No%20Song%20Name.png "No Song Searched"

## OMDB Usage:

> node liri.js movie-this

Using the OMDB API, when the user gives the command "movie-this" in addition to their desired searched movie title, the data that returns includes the Movie Name, the Release Year, the Country of Origin, available Languages, the Cast of Actors, and a short summary of the movie plot. Here you can see what data returns when the movie "The Hangover" is searched.

> ![alt text][logo]

[logo]: https://github.com/babivokalz/liri-node-app/blob/master/screenshots/OMDB%20-%20Movie%20Search.png "The Hangover"

Movie-this also works when the user does not input a searched movie title, in this case it will default to "Mr. Nobody". 

> ![alt text][logo]

[logo]: https://github.com/babivokalz/liri-node-app/blob/master/screenshots/OMDB%20-%20No%20Movie%20Name.png "No Movie Name"

## BandsInTown Usage:

> node liri.js concert-this

## Read Instructions from File:

> node liri.js do-what-it-says
