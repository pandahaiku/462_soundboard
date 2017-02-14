var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var loginSchema = new Schema({
    username: String,
    password: String,
    email: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

var Logins = mongoose.model('Logins', loginSchema);

module.exports = Logins;

//reusable model create todos, delete, update, and find using todos object being exported.
//provides all methods to create records in files in mongoDB database.
//need to connect to DB