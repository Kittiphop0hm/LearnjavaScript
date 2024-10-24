const {addSongInSpotify, findSongInSpotifyByName, findSongInSpotifyByid, removeSong, getSongs} = require('./lib/service/spotifyManagement')

console.log(addSongInSpotify('Rainy', 'Ohm'));
console.log(getSongs());
console.log(removeSong(1));
console.log(getSongs());

console.log(addSongInSpotify('Day One', 'PUN'));
console.log(addSongInSpotify('Proud', 'fellow fellow'));
console.log(getSongs());

console.log(findSongInSpotifyByName('day one'));
console.log(findSongInSpotifyByid(3));










