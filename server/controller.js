const Todo = require('../database/index.js');

const controller = {
    get: (req, res) => {
        Todo.find({})
        .sort({ priority: 1 })
        // .exec() 
        .then(docs => {
            res.send(docs);
        })
        .catch(err => console.error(err))
    },
    post: (req, res) => {
        Todo.create(req.body)
        .then(() => {
            res.status(201).send('added a todo');
        })
        .catch(err => {
            console.error(err)
        })
    },
    delete: (req, res) => {
        const _id = req.params;
        Todo.deleteOne(_id)
            .then(() => {
                res.status(202).send('deleted a todo')
            })
            .catch(err => console.error(err))
    },
    put: (req, res) => {
        const _id = req.params;
        Todo.findByIdAndUpdate(_id, req.body) // ({ _id: id}, {name: "clean"})
            .then(() => {
                res.status(201).send('updated todo')
            })
            .catch(err => console.error(err))
    }
};

module.exports = controller;