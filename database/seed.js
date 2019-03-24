const mongoose = require('mongoose');
const Todo = require('./index.js');

const seedData = [
    {
        name: "Clean room",
        priority: 3
    },
    {
        name: "Make lunch",
        priority: 2
    },
    {
        name: "Study for test",
        priority: 1
    }
]

const seedFunction = () => {
    Todo.create(seedData)
        .then(() => {
            console.log('database seeded');
            mongoose.connection.close(); // same as ctrl+c in node
        })
        .catch(error => console.log(error))
}

seedFunction()