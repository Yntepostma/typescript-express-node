import {RequestHandler} from 'express'
import { Todo } from '../models/todos';


const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res) => {
console.log(req.body)
const text = (req.body as {text:string}).text

    const newTodo = new Todo(Math.random().toString(), text);
    TODOS.push(newTodo)
    
    res.status(201).json({message: 'created todo', createdTodo: newTodo})
}

export const getTodos: RequestHandler = (req, res, next) => {
    res.json({todos: TODOS})
}

export const patchTodos: RequestHandler<{id: string}> = (req, res, next) => {
    const {id} = req.params
    const {text} = req.body as {text:string}
    const todoIndex = TODOS.findIndex(todo=> todo.id === id)
    
    if (todoIndex <0 ) {
        res.status(400).send('Todo item with ID not found')
    } else {
        TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, text)
        res.json({message: "Updated", updatedTodo: TODOS[todoIndex]})
    }
}

export const deleteTodo: RequestHandler = (req, res, next) => {
    const {id} = req.params
    const todoIndex = TODOS.findIndex(todo=> todo.id ===id)
    if (todoIndex <0) {
        res.status(400).send('Todo item not found')
    } else {
        TODOS.splice(todoIndex,1)
        res.send('To do Deleted')
    }
}