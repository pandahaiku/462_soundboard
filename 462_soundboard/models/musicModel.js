var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var musicSchema = new Schema({
    username: String,
    bandName: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

var Musics = mongoose.model('Musics', musicSchema);

module.exports = Musics;

//reusable model create todos, delete, update, and find using todos object being exported.
//provides all methods to create records in files in mongoDB database.
//need to connect to DB