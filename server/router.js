const router = require('express').Router();
const controller = require('./controller.js')

router
    .route('/todos')
    .get(controller.get)
    .post(controller.post)

router
    .route('/todos/:_id') // req.params.id 
    .delete(controller.delete)
    .put(controller.put);

module.exports = router;