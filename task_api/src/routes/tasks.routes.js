const express = require('express');
const router = express.Router(); 
const taskController = require('../controllers/tasks.controller');

router
    .get('/', taskController.get )
    .get('/:id', taskController.getById )
    .post('/', taskController.create )
    .put('/:id', taskController.update )
    .delete('/:id', taskController._delete );

module.exports = router;