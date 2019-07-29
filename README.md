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
> ![alt text][logo1]

[logo1]: https://github.com/babivokalz/liri-node-app/blob/master/screenshots/Spotify%20-%20No%20Song%20Name.png "No Song Searched"

## OMDB Usage:

> node liri.js movie-this

Using the OMDB API, when the user gives the command "movie-this" in addition to their desired searched movie title, the data that returns includes the Movie Name, the Release Year, the Country of Origin, available Languages, the Cast of Actors, and a short summary of the movie plot. Here you can see what data returns when the movie "The Hangover" is searched.

> ![alt text][logo2]

[logo2]: https://github.com/babivokalz/liri-node-app/blob/master/screenshots/OMDB%20-%20Movie%20Search.png "The Hangover"

Movie-this also works when the user does not input a searched movie title, in this case it will default to "Mr. Nobody". 

> ![alt text][logo3]

[logo3]: https://github.com/babivokalz/liri-node-app/blob/master/screenshots/OMDB%20-%20No%20Movie%20Name.png "No Movie Name"

## BandsInTown Usage:

> node liri.js concert-this

Using the BandsInTown API, the user is able to search for upcoming concerts by giving the command "concert-this" in addition to their desired searched Artist. The data that returns includes the Venue Name, Venue Location, and the Date of the Concert. Here you can see what data returns when the artist "Rezz" is searched.

> ![alt text][logo4]

[logo4]: https://github.com/babivokalz/liri-node-app/blob/master/screenshots/Bands%20In%20Town.png "Bands In Town Search"

## Read Instructions from File:

> node liri.js do-what-it-says

The command "do-what-it-says" displays the message that is written in the random.txt file. 

> ![alt text][logo5]

[logo5]:https://github.com/babivokalz/liri-node-app/blob/master/screenshots/Do%20What%20it%20Says.png "Random.txt file"

## Error Message: 

When a user enters in an invalid command, they will receive a nice "Try Again" message. Here you can see what is displayed when "concert-this" is misspelled. 

> ![alt text][logo6]

[logo6]: https://github.com/babivokalz/liri-node-app/blob/master/screenshots/Error%20Message.png "Error Message"