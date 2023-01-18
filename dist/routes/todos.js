"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//instead of require
const todos_1 = require("../controllers/todos");
const router = (0, express_1.Router)();
router.post('/', todos_1.createTodo);
router.get('/', todos_1.getTodos);
router.patch('/:id', todos_1.patchTodos);
router.delete('/:id', todos_1.deleteTodo);
exports.default = router;
