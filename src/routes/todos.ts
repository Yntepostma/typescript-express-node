import {Router} from 'express'
//instead of require

import {createTodo, getTodos, patchTodos, deleteTodo} from '../controllers/todos'

const router = Router()

router.post('/', createTodo);

router.get('/', getTodos)

router.patch('/:id', patchTodos)

router.delete('/:id', deleteTodo)

export default router