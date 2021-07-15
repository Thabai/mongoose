const {Movie} = require('../Movie/movie.model');
const {closeConnection} = require('../db/connection');

exports.add = async (entryObj) => {
    try {
        const movie = new Movie(entryObj);
        const savedMovie = await movie.save();
        console.log(`${savedMovie} Added Successfully`);
    } catch (error) {
        console.log(error);
    }
    closeConnection();
};

exports.list = async () => {
    try {
        const records = await Movie.find().exec();
        console.log(records);
    } catch (error) {
        console.log(error);
    }
    closeConnection();
};


exports.update = async (entryObj, newObj) => {
    try {
        const updateMovie = await Movie.findOneAndUpdate(entryObj, newObj, { new: true });
        if (updateMovie !== null) {
        console.log(`${updateMovie} updated successfully`);
        } else {
            console.log('Nothing to update');
        }
    } catch (error) {
        console.log(error);
    }
    closeConnection();
};


exports.del = async (entryObj) => {
    try {
        const delMovie = await Movie.findOne(entryObj).deleteOne();
        if (delMovie.deletedCount !== 0) {
        console.log(delMovie);
        } else {
            console.log('Nothing to delete');
        }
    } catch (error) {
        console.log(error);
    }
    closeConnection();
};