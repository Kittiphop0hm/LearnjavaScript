class Spotify {
    constructor() {
        this.spotifys = []
    }

    addSong(song) {
        return this.spotifys.push(song)
    }

    findSong(id) {
        return this.spotifys.find((song) => song.id === id)
    }

    findIndex(id) {
        return this.spotifys.findIndex((song) => song.id === id)
    }

    removeSong(id) {
        const songIndex = this.findIndex(id)
        return this.spotifys.splice(songIndex, 1)
    }

    getSong = () => this.spotifys

    getSongByName(name) {
        return this.spotifys.find((song) => song.name.toLowerCase() === name.toLowerCase())
    }
}

module.exports = Spotify