var express = require('express')

var router = express.Router();

var Todo = require('../../models/todo'),
TodoController = require('../../controllers/api/todo.controller');

/**List todos */
router.get('/',TodoController.getIndex);
router.post('/',TodoController.createTodo);


module.exports = router;
