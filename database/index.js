const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // enables you to use ES6 mongoose promises

// connect to mongoDB (not actually created until something is posted)
mongoose.connect('mongodb://localhost/review', { useMongoClient: true })
    .then(() => console.log('Connected to mongoDB'));

// create a Schema
const todoSchema = mongoose.Schema({  // same as new mongoose.Schema
    name: { type: String, required: true, unique: true },
    priority: { type: Number, required: true }
});

// use the schema to create a model
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;