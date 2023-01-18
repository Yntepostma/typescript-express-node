"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.patchTodos = exports.getTodos = exports.createTodo = void 0;
const todos_1 = require("../models/todos");
const TODOS = [];
const createTodo = (req, res) => {
    console.log(req.body);
    const text = req.body.text;
    const newTodo = new todos_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'created todo', createdTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.json({ todos: TODOS });
};
exports.getTodos = getTodos;
const patchTodos = (req, res, next) => {
    const { id } = req.params;
    const { text } = req.body;
    const todoIndex = TODOS.findIndex(todo => todo.id === id);
    if (todoIndex < 0) {
        res.status(400).send('Todo item with ID not found');
    }
    else {
        TODOS[todoIndex] = new todos_1.Todo(TODOS[todoIndex].id, text);
        res.json({ message: "Updated", updatedTodo: TODOS[todoIndex] });
    }
};
exports.patchTodos = patchTodos;
const deleteTodo = (req, res, next) => {
    const { id } = req.params;
    const todoIndex = TODOS.findIndex(todo => todo.id === id);
    if (todoIndex < 0) {
        res.status(400).send('Todo item not found');
    }
    else {
        TODOS.splice(todoIndex, 1);
        res.send('To do Deleted');
    }
};
exports.deleteTodo = deleteTodo;
