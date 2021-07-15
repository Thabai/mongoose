const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    movie: {
        type: String,
        required: true
    }, 
    year: {
        type: String
    },
    watched: {
        type: Boolean,
        required: true,
        default: false
    }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = {
    Movie
}