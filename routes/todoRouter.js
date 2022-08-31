const router = require('express').Router();

const { createTodo, getAllTodos, getSingleTodo, delTodo, updateTodo } = require('../controller/todoController')

router.post('/todo', createTodo);
router.get('/', getAllTodos);

// router.route('/todo').get(createTodo).post(getAllTodos);
// router.route('/todo/:id').get(getSingleTodo).delete(delTodo).patch(updateTodo);

router.get('/todo/:id', getSingleTodo);

router.delete('/todo/:id', delTodo)
router.patch('/todo/:id', updateTodo)


module.exports = router;