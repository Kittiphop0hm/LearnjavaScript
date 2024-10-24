const {Song, Spotify} = require('../song')

function SpotifyManagement() {

    const spotify = new Spotify()
    function addSongInSpotify(name, author) {
        const song = new Song(name, author)
        return spotify.addSong(song)
    }    

    function findSongInSpotifyByName(name) {
        return spotify.getSongByName(name)
    }

    function findSongInSpotifyByid(id) {
        return spotify.findSong(id)
    }

    function removeSong(id) {
        return spotify.removeSong(id)
    }

    function getSongs() {
        return spotify.getSong()
    }
    return {addSongInSpotify, findSongInSpotifyByName, findSongInSpotifyByid, removeSong, getSongs}
}

const {addSongInSpotify, findSongInSpotifyByName, findSongInSpotifyByid, removeSong, getSongs} = SpotifyManagement()

module.exports = {addSongInSpotify, findSongInSpotifyByName, findSongInSpotifyByid, removeSong, getSongs}

