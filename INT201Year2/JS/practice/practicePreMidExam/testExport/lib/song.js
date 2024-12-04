const Spotify = require('./spotify')

class Song {
    static id = 1

    constructor(name, author) {
        this.id = Song.id++
        this.name = name
        this.author = author 
    }

    reName = (newName) => this.name = name 
    getSong() {
        return this
    }
}

module.exports = {Song, Spotify}